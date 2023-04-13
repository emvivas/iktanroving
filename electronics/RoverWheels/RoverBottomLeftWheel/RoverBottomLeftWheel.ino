#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <NTPClient.h>
#include <WiFiUdp.h>
#include <SocketIoClient.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>

#define webSocketMessageInterval 1000
#define RPMSensorPin A0
#define ultrasonicSensorEchoPin D3
#define ultrasonicSensorTriggerPin D4
#define RPMBladeWidth 0.012F
#define RPMBladeRadius 0.045F
#define LEDIndicator D0
#define buzzerIndicator D5
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
Adafruit_MPU6050 MPU6050;
bool isConnected = false;
int melody[] = {NOTE_D4,8, NOTE_E4,8, NOTE_F4,8, NOTE_G4,8, NOTE_E4,4, NOTE_C4,8, NOTE_D4,1};
int notes = sizeof(melody) / sizeof(melody[0]) / 2, wholenote = (60000 * 4) / tempo, divider = 0, noteDuration = 0;
unsigned long int webSocketLastUpdate = millis();
float RPMFistTime, RPMSecondTime, RPMRotationVelocity, RPMTimeDifference, RPMTnet, RPM, ultrasonicSensorTime, ultrasonicSensorDistance;
const char* user = "BottomLeftWheel";
const char* password = "p*f4dt4uTC5C3gcmZ6uN";

void webSocketAuthenticationEvent(const char * payload, size_t length);
void webSocketErrorConnectionEvent(const char * payload, size_t length);

void setup(){
  Serial.begin(115200);
  Serial.setDebugOutput(true);
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
      Serial.printf("WHEEL CLIENT STATUS.\tBoot wait %d...\n", t);
      Serial.flush();
      delay(1000);
  }
  //wiFiMulti.addAP("00_NETWEY_0272056", "31194693");
  //wiFiMulti.addAP("Totalplay-2.4G-ef58", "Nith12701");
  //wiFiMulti.addAP("ATT_Internet_En_Casa_8034", "3MY3N79236Y");
  wiFiMulti.addAP("vivas", "12345678");
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
  Serial.println("WHEEL CLIENT STATUS.\tIKTAN Roving's Top Right Wheel Client working on IP direction: " + WiFi.gatewayIP().toString());
  delay(5000);
  Serial.println("WHEEL CLIENT STATUS.\tMPU6050 test.");
  if(!MPU6050.begin()) {
    Serial.println("WHEEL CLIENT STATUS.\tFailed to find MPU6050 chip.");
    while(1)
      delay(10);
  }
  Serial.println("WHEEL CLIENT STATUS.\tMPU6050 found.");
  MPU6050.setAccelerometerRange(MPU6050_RANGE_8_G);
  Serial.print("WHEEL CLIENT STATUS.\tAccelerometer range set to: ");
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
  Serial.print("WHEEL CLIENT STATUS.\tGyroscope range set to: ");
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
  Serial.print("WHEEL CLIENT STATUS.\tFilter bandRPMBladeWidthth set to: ");
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
  pinMode(RPMSensorPin,INPUT);
  pinMode(ultrasonicSensorEchoPin, INPUT);
  pinMode(ultrasonicSensorTriggerPin, OUTPUT);
  digitalWrite(ultrasonicSensorTriggerPin, LOW);
  timeClient.begin();
  timeClient.setTimeOffset(-21600); //GMT -6
  webSocket.begin("https://www.iktanroving.org", 5000, "/wheel/socket.io/?transport=websocket");
  webSocket.on("sendingDataServerRequest", webSocketAuthenticationEvent);
  webSocket.on("connect_error", webSocketErrorConnectionEvent);
  webSocket.on("disconnect", webSocketErrorConnectionEvent);
  webSocket.setAuthorization(user, password);
}

void loop(){
  webSocket.loop();
  if (isConnected && webSocketLastUpdate+webSocketMessageInterval<millis()){
    sensors_event_t MPU6050Accelerometer, MPU6050Gyroscope, MPU6050Temperature;
    MPU6050.getEvent(&MPU6050Accelerometer, &MPU6050Gyroscope, &MPU6050Temperature);
    if(analogRead(RPMSensorPin)<950){
      RPMFistTime = millis();
      delay(30);
    }
    if(analogRead(RPMSensorPin)>950){
      RPMSecondTime = millis();
      RPMTimeDifference = (RPMSecondTime-RPMFistTime);         
      RPMRotationVelocity = RPMBladeWidth/RPMTimeDifference;
      RPMTnet = (2*3.14159*RPMBladeRadius)/RPMRotationVelocity;
      RPM = (60000)/RPMTnet;
    }
    digitalWrite(ultrasonicSensorTriggerPin, LOW);
    delayMicroseconds(2);
    digitalWrite(ultrasonicSensorTriggerPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(ultrasonicSensorTriggerPin, LOW);
    ultrasonicSensorTime = pulseIn(ultrasonicSensorEchoPin, HIGH);
    ultrasonicSensorDistance = ultrasonicSensorTime/5800;
    timeClient.update();
    time_t epochTime = timeClient.getEpochTime();
    struct tm *ptm = gmtime ((time_t *)&epochTime);
    String JSONDataMessage = "{\"PCB\": \""+ String(user) +"\", \"acceleration\": {\"x\": "+ String(MPU6050Accelerometer.acceleration.x)+", \"y\": "+ String(MPU6050Accelerometer.acceleration.y)+", \"z\": "+ String(MPU6050Accelerometer.acceleration.z)+"}, \"rotation\": {\"x\": "+ String(MPU6050Gyroscope.gyro.x)+", \"y\": "+ String(MPU6050Gyroscope.gyro.y)+", \"z\": "+ String(MPU6050Gyroscope.gyro.z)+"}, \"rotationVelocity\": "+ String(RPMRotationVelocity)+", \"RPM\": "+ String(RPM)+", \"surfaceDistance\": "+ String(ultrasonicSensorDistance)+", \"internalTemperature\": "+ String(MPU6050Temperature.temperature)+", \"register\": \""+ String(ptm->tm_year+1900) + "-" + String(ptm->tm_mon+1) + "-" + String(ptm->tm_mday) + " " + timeClient.getFormattedTime() + "\"}";
    webSocket.emit("sendingDataClientAction", JSONDataMessage.c_str());
    webSocketLastUpdate = millis();
  }
}

void webSocketAuthenticationEvent(const char * payload, size_t length){
  digitalWrite(LEDIndicator, HIGH);
  Serial.printf("WHEEL CLIENT STATUS.\tReceived server message: %s\n", payload);
  isConnected = true;
  webSocket.emit("sendingDataClientAction", "{\"status\":\"OK\"}");
}

void webSocketErrorConnectionEvent(const char * payload, size_t length){
  digitalWrite(LEDIndicator, LOW);
  Serial.printf("WHEEL CLIENT STATUS.\tError server connection: %s\n", payload);
  webSocket.disconnect();
  isConnected = false;
}
