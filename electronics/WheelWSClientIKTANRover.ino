#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <SocketIoClient.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>

#define webSocketMessageInterval 500
#define RPMSensorPin A0
#define ultrasonicSensorEchoPin D3
#define ultrasonicSensorTriggerPin D4
#define RPMBladeWidth 0.012F
#define RPMBladeRadius 0.045F

ESP8266WiFiMulti wiFiMulti;
SocketIoClient webSocket;
Adafruit_MPU6050 MPU6050;
bool isConnected = false;
unsigned long int webSocketLastUpdate = millis();
float RPMFistTime, RPMSecondTime, RPMRotationVelocity, RPMTimeDifference, RPMTnet, RPM, ultrasonicSensorTime, ultrasonicSensorDistance;
const char* user = "TopRightWheel";
const char* password = "trr!SCcE@Xe2xT35JlJ3";

void webSocketAuthenticationEvent(const char * payload, size_t length);
void webSocketErrorConnectionEvent(const char * payload, size_t length);

void setup(){
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Serial.println("\n\n\nIKTAN Roving 2023.\nNASA HERC Team.\nInstituto Tecnológico y de Estudios Superiores de Monterrey campus Cuernavaca.\n\n\n");
  for(uint8_t t = 4; t > 0; t--) {
      Serial.printf("WHEEL CLIENT STATUS.\tBoot wait %d...\n", t);
      Serial.flush();
      delay(1000);
  }
  wiFiMulti.addAP("00_NETWEY_0272056", "31194693");
  while(wiFiMulti.run() != WL_CONNECTED)
    delay(100);
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
  webSocket.begin("192.168.1.120", 5000, "/wheel/socket.io/?transport=websocket");
  webSocket.on("sendingDataServerRequest", webSocketAuthenticationEvent);
  webSocket.on("connect_error", webSocketErrorConnectionEvent);
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
    String JSONDataMessage = "{\"PCB\": \""+ String(user) +"\", \"acceleration\": {\"x\": "+ String(MPU6050Accelerometer.acceleration.x)+", \"y\": "+ String(MPU6050Accelerometer.acceleration.y)+", \"z\": "+ String(MPU6050Accelerometer.acceleration.z)+"}, \"rotation\": {\"x\": "+ String(MPU6050Gyroscope.gyro.x)+", \"y\": "+ String(MPU6050Gyroscope.gyro.y)+", \"z\": "+ String(MPU6050Gyroscope.gyro.z)+"}, \"rotationVelocity\": "+ String(RPMRotationVelocity)+", \"RPM\": "+ String(RPM)+", \"surfaceDistance\": "+ String(ultrasonicSensorDistance)+", \"internalTemperature\": "+ String(MPU6050Temperature.temperature)+"}";
    webSocket.emit("sendingDataClientAction", JSONDataMessage.c_str());
    webSocketLastUpdate = millis();
  }
}

void webSocketAuthenticationEvent(const char * payload, size_t length){
  Serial.printf("WHEEL CLIENT STATUS.\tReceived server message: %s\n", payload);
  isConnected = true;
  webSocket.emit("sendingDataClientAction", "{\"status\":\"okesp\"}");
}

void webSocketErrorConnectionEvent(const char * payload, size_t length){
  Serial.printf("WHEEL CLIENT STATUS.\tError server connection: %s\n", payload);
  webSocket.disconnect();
  isConnected = false;
  ESP.restart();
}
