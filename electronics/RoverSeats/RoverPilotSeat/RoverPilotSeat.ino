#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <NTPClient.h>
#include <WiFiUdp.h>
#include <SocketIoClient.h>
#include <Adafruit_ADS1015.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP085.h>
#include <Adafruit_GPS.h>
#include <SoftwareSerial.h>
#include <Wire.h>
#include <DHT.h>
#include <MQ135.h>
#include <LiquidCrystal_I2C.h>

#define lcdColumns 16
#define lcdRows 2
#define webSocketMessageInterval 1000
#define ultrasonicSensorEchoPin D3
#define ultrasonicSensorTriggerPin D4
#define DHTPin D5
#define DHTType DHT22
#define MQ135Pin A0
#define LEDIndicator D0
#define buzzerIndicator D6
#define GPSECHO  true
#define tempo 200
#define NOTE_B0  31
#define NOTE_C1  33
#define NOTE_CS1 35
#define NOTE_D1  37
#define NOTE_DS1 39
#define NOTE_E1  41
#define NOTE_F1  44
#define NOTE_FS1 46
#define NOTE_G1  49
#define NOTE_GS1 52
#define NOTE_A1  55
#define NOTE_AS1 58
#define NOTE_B1  62
#define NOTE_C2  65
#define NOTE_CS2 69
#define NOTE_D2  73
#define NOTE_DS2 78
#define NOTE_E2  82
#define NOTE_F2  87
#define NOTE_FS2 93
#define NOTE_G2  98
#define NOTE_GS2 104
#define NOTE_A2  110
#define NOTE_AS2 117
#define NOTE_B2  123
#define NOTE_C3  131
#define NOTE_CS3 139
#define NOTE_D3  147
#define NOTE_DS3 156
#define NOTE_E3  165
#define NOTE_F3  175
#define NOTE_FS3 185
#define NOTE_G3  196
#define NOTE_GS3 208
#define NOTE_A3  220
#define NOTE_AS3 233
#define NOTE_B3  247
#define NOTE_C4  262
#define NOTE_CS4 277
#define NOTE_D4  294
#define NOTE_DS4 311
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_FS4 370
#define NOTE_G4  392
#define NOTE_GS4 415
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_B4  494
#define NOTE_C5  523
#define NOTE_CS5 554
#define NOTE_D5  587
#define NOTE_DS5 622
#define NOTE_E5  659
#define NOTE_F5  698
#define NOTE_FS5 740
#define NOTE_G5  784
#define NOTE_GS5 831
#define NOTE_A5  880
#define NOTE_AS5 932
#define NOTE_B5  988
#define NOTE_C6  1047
#define NOTE_CS6 1109
#define NOTE_D6  1175
#define NOTE_DS6 1245
#define NOTE_E6  1319
#define NOTE_F6  1397
#define NOTE_FS6 1480
#define NOTE_G6  1568
#define NOTE_GS6 1661
#define NOTE_A6  1760
#define NOTE_AS6 1865
#define NOTE_B6  1976
#define NOTE_C7  2093
#define NOTE_CS7 2217
#define NOTE_D7  2349
#define NOTE_DS7 2489
#define NOTE_E7  2637
#define NOTE_F7  2794
#define NOTE_FS7 2960
#define NOTE_G7  3136
#define NOTE_GS7 3322
#define NOTE_A7  3520
#define NOTE_AS7 3729
#define NOTE_B7  3951
#define NOTE_C8  4186
#define NOTE_CS8 4435
#define NOTE_D8  4699
#define NOTE_DS8 4978
#define REST      0

ESP8266WiFiMulti wiFiMulti;
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "0.us.pool.ntp.org");
SocketIoClient webSocket;
SoftwareSerial mySerial(D8, D7);
LiquidCrystal_I2C lcd(0x27, lcdColumns, lcdRows);
Adafruit_GPS GPS(&mySerial);
Adafruit_MPU6050 MPU6050;
Adafruit_ADS1115 ads;
Adafruit_BMP085 bmp;
DHT dht(DHTPin, DHTType);
MQ135 mq135(MQ135Pin);
bool isConnected = false;
uint32_t timer = millis();
int melody[] = {NOTE_D4,8, NOTE_E4,8, NOTE_F4,8, NOTE_G4,8, NOTE_E4,4, NOTE_C4,8, NOTE_D4,1};
int luxSensor[2], ultravioletSensor, magneticSensor;
int notes = sizeof(melody) / sizeof(melody[0]) / 2, wholenote = (60000 * 4) / tempo, divider = 0, noteDuration = 0;
unsigned long int webSocketLastUpdate = millis();
float luxVoltage[2], ultravioletVoltage, magneticVoltage;
float ultrasonicSensorTime, ultrasonicSensorDistance, temperature, humidity, seaLevelAtmosphericPressure;
String GPSStatus = "", GPSFixStatus = "", GPSDate, GPSTime;

const char* user = "PilotSeat";
const char* password = "1apML^FRN2B@$v7434uQ";

void webSocketAuthenticationEvent(const char * payload, size_t length);
void webSocketErrorConnectionEvent(const char * payload, size_t length);

void setup(){
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  lcd.init();                    
  lcd.backlight();
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("IKTAN Roving");
  lcd.setCursor(0,1);
  lcd.print("NASA HERC Team");
  delay(3000);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("IKTAN Roving");
  lcd.setCursor(0,1);
  lcd.print("Rover Telemetry System");
  delay(3000);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("IKTAN Roving");
  lcd.setCursor(0,1);
  lcd.print("Pilot Seat MOD");
  delay(3000);
  pinMode(LEDIndicator, OUTPUT);
  pinMode(buzzerIndicator, OUTPUT);
  digitalWrite(LEDIndicator, HIGH);
  digitalWrite(buzzerIndicator, LOW);
  for (int thisNote = 0; thisNote < notes * 2; thisNote += 2) {
    divider = melody[thisNote + 1];
    if (divider > 0) 
      noteDuration = (wholenote) / divider;
    else if (divider < 0) {
      noteDuration = (wholenote) / abs(divider);
      noteDuration *= 1.5;
    }
    tone(buzzerIndicator, melody[thisNote], noteDuration*0.9);
    delay(noteDuration);
    noTone(buzzerIndicator);
  }
  digitalWrite(LEDIndicator, LOW);
  Serial.println("\n\n\nIKTAN Roving 2023.\nNASA HERC Team.\nInstituto Tecnológico y de Estudios Superiores de Monterrey campus Cuernavaca.\n\n\n");
  for(uint8_t t = 4; t > 0; t--) {
      Serial.printf("SEAT CLIENT STATUS.\tBoot wait %d...\n", t);
      Serial.flush();
      delay(1000);
  }
  //wiFiMulti.addAP("00_NETWEY_0272056", "31194693");
  wiFiMulti.addAP("Totalplay-2.4G-ef58", "Nith12701");
  //wiFiMulti.addAP("ATT_Internet_En_Casa_8034", "3MY3N79236Y");
  //wiFiMulti.addAP("vivas", "12345678");
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("IKTAN Roving");
  lcd.setCursor(0,1);
  lcd.print("Connecting...");
  while(wiFiMulti.run() != WL_CONNECTED){
    digitalWrite(LEDIndicator, HIGH);
    digitalWrite(buzzerIndicator, HIGH);
    delay(1000);
    digitalWrite(LEDIndicator, LOW);
    digitalWrite(buzzerIndicator, LOW);
    delay(10);
  }
  digitalWrite(LEDIndicator, LOW);
  digitalWrite(buzzerIndicator, LOW);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("IKTAN Roving");
  lcd.setCursor(0,1);
  lcd.print("Connected!");
  delay(3000);
  Serial.println("SEAT CLIENT STATUS.\tIKTAN Roving's Pilot Seat Client working on IP direction: " + WiFi.gatewayIP().toString());
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("IKTAN Roving");
  lcd.setCursor(0,1);
  lcd.print(WiFi.gatewayIP().toString());
  delay(3000);
  timeClient.begin();
  timeClient.setTimeOffset(-21600); //GMT -6
  webSocket.begin("https://www.iktanroving.org", 5000, "/seat/socket.io/?transport=websocket");
  webSocket.on("sendingDataServerRequest", webSocketAuthenticationEvent);
  webSocket.on("connect_error", webSocketErrorConnectionEvent);
  webSocket.on("disconnect", webSocketErrorConnectionEvent);
  webSocket.setAuthorization(user, password);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("IKTAN Roving");
  lcd.setCursor(0,1);
  lcd.print("Starting...");
  Serial.println("SEAT CLIENT STATUS.\tMPU6050 test.");
  if(!MPU6050.begin()) {
    Serial.println("SEAT CLIENT STATUS.\tFailed to find MPU6050 chip.");
    while(1)
      delay(10);
  }
  Serial.println("SEAT CLIENT STATUS.\tMPU6050 found.");
  MPU6050.setAccelerometerRange(MPU6050_RANGE_8_G);
  Serial.print("SEAT CLIENT STATUS.\tAccelerometer range set to: ");
  switch (MPU6050.getAccelerometerRange()) {
    case MPU6050_RANGE_2_G:
      Serial.println("+-2G");
      break;
    case MPU6050_RANGE_4_G:
      Serial.println("+-4G");
      break;
    case MPU6050_RANGE_8_G:
      Serial.println("+-8G");
      break;
    case MPU6050_RANGE_16_G:
      Serial.println("+-16G");
      break;
  }
  MPU6050.setGyroRange(MPU6050_RANGE_500_DEG);
  Serial.print("SEAT CLIENT STATUS.\tGyroscope range set to: ");
  switch (MPU6050.getGyroRange()) {
    case MPU6050_RANGE_250_DEG:
      Serial.println("+- 250 deg/s");
      break;
    case MPU6050_RANGE_500_DEG:
      Serial.println("+- 500 deg/s");
      break;
    case MPU6050_RANGE_1000_DEG:
      Serial.println("+- 1000 deg/s");
      break;
    case MPU6050_RANGE_2000_DEG:
      Serial.println("+- 2000 deg/s");
      break;
  }
  MPU6050.setFilterBandwidth(MPU6050_BAND_5_HZ);
  Serial.print("SEAT CLIENT STATUS.\tFilter bandRPMBladeWidthth set to: ");
  switch (MPU6050.getFilterBandwidth()) {
    case MPU6050_BAND_260_HZ:
      Serial.println("260 Hz");
      break;
    case MPU6050_BAND_184_HZ:
      Serial.println("184 Hz");
      break;
    case MPU6050_BAND_94_HZ:
      Serial.println("94 Hz");
      break;
    case MPU6050_BAND_44_HZ:
      Serial.println("44 Hz");
      break;
    case MPU6050_BAND_21_HZ:
      Serial.println("21 Hz");
      break;
    case MPU6050_BAND_10_HZ:
      Serial.println("10 Hz");
      break;
    case MPU6050_BAND_5_HZ:
      Serial.println("5 Hz");
      break;
  }
  if (!bmp.begin()) {
  Serial.println("Could not find a valid BMP085 sensor, check wiring!");
  while (1) {}
  }
  pinMode(ultrasonicSensorEchoPin, INPUT);
  pinMode(ultrasonicSensorTriggerPin, OUTPUT);
  digitalWrite(ultrasonicSensorTriggerPin, LOW);
  dht.begin();
  ads.begin();
  ads.setGain(GAIN_TWO);
  delay(5000);
  Serial.println("Adafruit GPS library basic parsing test!");
  GPS.begin(9600);
  GPS.sendCommand(PMTK_SET_NMEA_OUTPUT_RMCGGA);
  GPS.sendCommand(PMTK_SET_NMEA_UPDATE_1HZ);
  GPS.sendCommand(PGCMD_ANTENNA);
  mySerial.println(PMTK_Q_RELEASE);
  delay(1000);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("IKTAN Roving");
  lcd.setCursor(0,1);
  lcd.print("Running!");
  delay(3000);
}

void loop(){
   char c = GPS.read();
  if ((c) && (GPSECHO))
    Serial.write(c);
  if (GPS.newNMEAreceived()) {
    if (!GPS.parse(GPS.lastNMEA()))
      return;
  }
  if (millis() - timer > 2000) {
    GPSDate = "";
    GPSTime = "";
    timer = millis();
    if (GPS.hour < 10) {
      GPSTime += "0";
    }
    GPSTime += String(GPS.hour) + ":";
    if (GPS.minute < 10) {
      GPSTime += "0";
    }
    GPSTime += String(GPS.minute) + ":";
    if (GPS.seconds < 10) {
      GPSTime += "0";
    }
    GPSTime += String(GPS.seconds) + ":";
    if (GPS.milliseconds < 10) {
      GPSTime += "00";
    } else if (GPS.milliseconds > 9 && GPS.milliseconds < 100) {
      GPSTime += "0";
    }
    GPSTime += String(GPS.milliseconds);
    GPSDate += String(GPS.day) + "/";
    GPSDate += String(GPS.month) + "/20";
    GPSDate += String(GPS.year);
    GPSStatus = "\"locationService\": {\"GPSDateTime\": \""+ GPSDate + " " + GPSTime+"\", \"GPSFix\": {\"measured\":" + String((int)GPS.fix)+", \"quality\": "+ String((int)GPS.fixquality)+"}";
    if (GPS.fix) {
      GPSFixStatus = ", \"geographicalCoordinates\": {\"latitude\": \""+ String(GPS.latitude) + String(GPS.lat) +"\", \"longitude\": \""+ String(GPS.longitude) + String(GPS.lon) +"\", \"altitude\": "+ String(GPS.altitude) +"}, \"satelliteAvailability\": "+ String((int)GPS.satellites) +", \"GPSAngle\": "+ String(GPS.angle) +", \"antennaStatus\": "+ String((int)GPS.antenna) +", \"knotsSpeed\": "+ String(GPS.speed);
    }
    GPSStatus += GPSFixStatus + "}, ";
  }
  webSocket.loop();
  if (isConnected && webSocketLastUpdate+webSocketMessageInterval<millis()){
    sensors_event_t MPU6050Accelerometer, MPU6050Gyroscope, MPU6050Temperature;
    MPU6050.getEvent(&MPU6050Accelerometer, &MPU6050Gyroscope, &MPU6050Temperature);
    digitalWrite(ultrasonicSensorTriggerPin, LOW);
    delayMicroseconds(2);
    digitalWrite(ultrasonicSensorTriggerPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(ultrasonicSensorTriggerPin, LOW);
    ultrasonicSensorTime = pulseIn(ultrasonicSensorEchoPin, HIGH);
    ultrasonicSensorDistance = ultrasonicSensorTime/5800;
    temperature = dht.readTemperature();
    humidity = dht.readHumidity();
    seaLevelAtmosphericPressure = bmp.readSealevelPressure();
    luxSensor[0] = ads.readADC_SingleEnded(0);
    luxSensor[1] = ads.readADC_SingleEnded(1);
    magneticSensor = ads.readADC_SingleEnded(2);
    ultravioletSensor = ads.readADC_SingleEnded(3);
    luxVoltage[0] = luxSensor[0] * (5.0 / 1023.0);
    luxVoltage[1] = luxSensor[1] * (5.0 / 1023.0);
    magneticVoltage = magneticSensor * (5.0 / 1023.0);
    ultravioletVoltage = ultravioletSensor * (5.0 / 1023.0);
    timeClient.update();
    time_t epochTime = timeClient.getEpochTime();
    struct tm *ptm = gmtime ((time_t *)&epochTime);
    webSocket.emit("sendingDataClientAction", ("{\"PCB\": \""+ String(user) +"\", \"acceleration\": {\"x\": "+ String(MPU6050Accelerometer.acceleration.x)+", \"y\": "+ String(MPU6050Accelerometer.acceleration.y)+", \"z\": "+ String(MPU6050Accelerometer.acceleration.z)+"}, \"rotation\": {\"x\": "+ String(MPU6050Gyroscope.gyro.x)+", \"y\": "+ String(MPU6050Gyroscope.gyro.y)+", \"z\": "+ String(MPU6050Gyroscope.gyro.z)+"}, \"surfaceDistance\": "+ String(ultrasonicSensorDistance)+", \"temperature\": {\"internal\": ["+ String(MPU6050Temperature.temperature)+", "+ String(bmp.readTemperature())+"], \"external\": "+ String(temperature)+"}, \"humidity\": {\"external\": "+ String(humidity)+"}, \"RZero\": {\"measured\": "+ String(mq135.getRZero())+", \"calculated\": "+ String(mq135.getCorrectedRZero(temperature, humidity))+"}, \"airQualityResistance\": "+ String(mq135.getResistance())+", \"PPM\": {\"measured\": "+ String(mq135.getPPM())+", \"calculated\": "+ String(mq135.getCorrectedPPM(temperature, humidity))+"}, \"atmosphericPressure\": {\"measured\": "+ String(bmp.readPressure())+", \"calculated\": "+ String(seaLevelAtmosphericPressure)+"}, \"altitude\": "+ String(bmp.readAltitude())+", \"luxRadiation\": [{\"measured\": "+ String(luxSensor[0])+", \"voltage\": "+ String(luxVoltage[0])+"}, {\"measured\": "+ String(luxSensor[1])+", \"voltage\": "+ String(luxVoltage[1])+"}], \"magnetism\": {\"measured\": "+ String(magneticSensor)+", \"voltage\": "+ String(magneticVoltage)+"}, \"UVRadiation\": {\"measured\": "+ String(ultravioletSensor)+", \"voltage\": "+ String(ultravioletVoltage)+"}, "+ GPSStatus +"\"register\": \""+ String(ptm->tm_year+1900) + "-" + String(ptm->tm_mon+1) + "-" + String(ptm->tm_mday) + " " + timeClient.getFormattedTime() + "\"}").c_str());
    webSocketLastUpdate = millis();
  }
}

void webSocketAuthenticationEvent(const char * payload, size_t length){
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("IKTAN Roving");
  lcd.setCursor(0,1);
  lcd.print("Monitoring...");
  digitalWrite(LEDIndicator, HIGH);
  Serial.printf("SEAT CLIENT STATUS.\tReceived server message: %s\n", payload);
  delay(3000);
  isConnected = true;
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("IKTAN Roving");
  lcd.setCursor(0,1);
  lcd.print("Sharing data...");
  webSocket.emit("sendingDataClientAction", "{\"status\":\"okesp\"}");
}

void webSocketErrorConnectionEvent(const char * payload, size_t length){
  digitalWrite(LEDIndicator, LOW);
  Serial.printf("SEAT CLIENT STATUS.\tError server connection: %s\n", payload);
  webSocket.disconnect();
  isConnected = false;
}
