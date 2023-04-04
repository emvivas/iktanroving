USE iktanroving;

-- registerRover(OUT _identificator TINYINT UNSIGNED, IN _denomination VARCHAR(30), IN _competitionYear SMALLINT UNSIGNED, IN _properties VARCHAR(150), IN _description TINYTEXT)
CALL registerRover(@id, "IKTAN Roving 2023", 2023, NULL, NULL);

-- registerModule(OUT _identificator TINYINT UNSIGNED, IN _code VARCHAR(30), IN _denomination VARCHAR(30), IN _properties VARCHAR(150), IN _description TINYTEXT, IN _brand VARCHAR(30), IN _model VARCHAR(30), IN _version VARCHAR(15), IN _webpage VARCHAR(320))
-- Wheel IKTAN Rover modules
CALL registerModule(@id, "ESP8266MOD", "ESP8266", NULL, "Development board", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "GY-521", "MPU6050", NULL, "Accelerometer, gyroscope and thermometer", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "MH-Sensor-Series", "LM393", NULL, "Optical encoder", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "HC-SR04", "HC-SR04", NULL, "Ultrasonic sensor", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "LED", "LED", NULL, "LED indicator", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "Buzzer", "Buzzer", NULL, "Buzzer indicator", NULL, NULL, NULL, NULL);
-- Seat IKTAN Rover modules
CALL registerModule(@id, "LCD1602", "LCD1602", NULL, "Blue display LCD screen", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "PCF8574T", "PCF8574 IIC I2C", NULL, "I2C interface module", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "DHT22", "DHT22", NULL, "Humidity and temperature sensor", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "BMP180", "BMP180", NULL, "Atmospheric pressure and temperature sensor", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "MQ-135", "MQ-135", NULL, "Air quality sensor", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "NEO-6M", "NEO-6M GPS", NULL, "Global Positioning System module", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "RadioFrequencyAntenna", "RadioFrequencyAntenna", NULL, "Radio frequency antenna", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "ADS1115", "ADS1115", NULL, "Analog extender module", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "KY-024", "KY-024", NULL, "Magnetic sensor", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "GY-ML8511", "GY-ML8511", NULL, "Ultraviolet UV radiation sensor", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "LDR", "LDR Photoresist", NULL, "Lux radiation sensor", NULL, NULL, NULL, NULL);

-- registerMeasurement(OUT _identificator SMALLINT UNSIGNED, _variable VARCHAR(50), _units VARCHAR(50))
CALL  registerMeasurement(@id, "Distance", "m");
CALL  registerMeasurement(@id, "Velocity", "m/s");
CALL  registerMeasurement(@id, "X Velocity", "m/s");
CALL  registerMeasurement(@id, "Y Velocity", "m/s");
CALL  registerMeasurement(@id, "Z Velocity", "m/s");
CALL  registerMeasurement(@id, "Acceleration", "m/s^2");
CALL  registerMeasurement(@id, "X Acceleration", "m/s^2");
CALL  registerMeasurement(@id, "Y Acceleration", "m/s^2");
CALL  registerMeasurement(@id, "Z Acceleration", "m/s^2");
CALL  registerMeasurement(@id, "Rotation", "rad/s");
CALL  registerMeasurement(@id, "X Rotation", "rad/s");
CALL  registerMeasurement(@id, "Y Rotation", "rad/s");
CALL  registerMeasurement(@id, "Z Rotation", "rad/s");
CALL  registerMeasurement(@id, "RPM", "RPM");
CALL  registerMeasurement(@id, "Temperature", "°C");
CALL  registerMeasurement(@id, "Humidity", "%");
CALL  registerMeasurement(@id, "RZero measured", NULL);
CALL  registerMeasurement(@id, "RZero calculated", NULL);
CALL  registerMeasurement(@id, "Air quality resistance", NULL);
CALL  registerMeasurement(@id, "PPM measured", "PPM");
CALL  registerMeasurement(@id, "PPM calculated", "PPM");
CALL  registerMeasurement(@id, "Atmos. Pressure measured", "Pa");
CALL  registerMeasurement(@id, "Atmos. Pressure calculated", "Pa");
CALL  registerMeasurement(@id, "Altitude", "m");
CALL  registerMeasurement(@id, "Lux radiation measured", "lx");
CALL  registerMeasurement(@id, "Lux radiation voltage", "dBm");
CALL  registerMeasurement(@id, "Magnetic field measured", "G");
CALL  registerMeasurement(@id, "Magnetic field voltage", "dBm");
CALL  registerMeasurement(@id, "UV radiation measured", "UV index");
CALL  registerMeasurement(@id, "UV radiation voltage", "dBm");
CALL  registerMeasurement(@id, "GPS DateTime", NULL);
CALL  registerMeasurement(@id, "GPS Fix measured", "Level");
CALL  registerMeasurement(@id, "GPS Fix quality", "Level");
CALL  registerMeasurement(@id, "GPS Latitude Coordinate", NULL);
CALL  registerMeasurement(@id, "GPS Longitude Coordinate", NULL);
CALL  registerMeasurement(@id, "GPS Altitude Coordinate", "m");
CALL  registerMeasurement(@id, "GPS Satellite Availability", NULL);
CALL  registerMeasurement(@id, "GPS Angle", "°");
CALL  registerMeasurement(@id, "GPS Antenna Status", NULL);
CALL  registerMeasurement(@id, "GPS Knots Speed", NULL);

-- registerRoverImplementation(OUT _identificator SMALLINT UNSIGNED, IN _printedCircuitBoard VARCHAR(30), IN _Rover_identificator TINYINT UNSIGNED, IN _Module_identificator TINYINT UNSIGNED, IN _properties VARCHAR(150))
CALL registerRoverImplementation(@id, "TopRightWheel", 1, 1, NULL);
CALL registerRoverImplementation(@id, "TopRightWheel", 1, 2, NULL);
CALL registerRoverImplementation(@id, "TopRightWheel", 1, 3, NULL);
CALL registerRoverImplementation(@id, "TopRightWheel", 1, 4, NULL);
CALL registerRoverImplementation(@id, "TopRightWheel", 1, 5, NULL);
CALL registerRoverImplementation(@id, "TopRightWheel", 1, 6, NULL);

CALL registerRoverImplementation(@id, "TopLeftWheel", 1, 1, NULL);
CALL registerRoverImplementation(@id, "TopLeftWheel", 1, 2, NULL);
CALL registerRoverImplementation(@id, "TopLeftWheel", 1, 3, NULL);
CALL registerRoverImplementation(@id, "TopLeftWheel", 1, 4, NULL);
CALL registerRoverImplementation(@id, "TopLeftWheel", 1, 5, NULL);
CALL registerRoverImplementation(@id, "TopLeftWheel", 1, 6, NULL);

CALL registerRoverImplementation(@id, "BottomRightWheel", 1, 1, NULL);
CALL registerRoverImplementation(@id, "BottomRightWheel", 1, 2, NULL);
CALL registerRoverImplementation(@id, "BottomRightWheel", 1, 3, NULL);
CALL registerRoverImplementation(@id, "BottomRightWheel", 1, 4, NULL);
CALL registerRoverImplementation(@id, "BottomRightWheel", 1, 5, NULL);
CALL registerRoverImplementation(@id, "BottomRightWheel", 1, 6, NULL);

CALL registerRoverImplementation(@id, "BottomLeftWheel", 1, 1, NULL);
CALL registerRoverImplementation(@id, "BottomLeftWheel", 1, 2, NULL);
CALL registerRoverImplementation(@id, "BottomLeftWheel", 1, 3, NULL);
CALL registerRoverImplementation(@id, "BottomLeftWheel", 1, 4, NULL);
CALL registerRoverImplementation(@id, "BottomLeftWheel", 1, 5, NULL);
CALL registerRoverImplementation(@id, "BottomLeftWheel", 1, 6, NULL);

CALL registerRoverImplementation(@id, "PilotSeat", 1, 1, NULL); -- 25
CALL registerRoverImplementation(@id, "PilotSeat", 1, 2, NULL); -- 26
CALL registerRoverImplementation(@id, "PilotSeat", 1, 4, NULL); -- 27
CALL registerRoverImplementation(@id, "PilotSeat", 1, 5, NULL); -- 28
CALL registerRoverImplementation(@id, "PilotSeat", 1, 6, NULL); -- 29
CALL registerRoverImplementation(@id, "PilotSeat", 1, 7, NULL); -- 30
CALL registerRoverImplementation(@id, "PilotSeat", 1, 8, NULL); -- 31
CALL registerRoverImplementation(@id, "PilotSeat", 1, 9, NULL); -- 32
CALL registerRoverImplementation(@id, "PilotSeat", 1, 10, NULL); -- 33
CALL registerRoverImplementation(@id, "PilotSeat", 1, 11, NULL); -- 34
CALL registerRoverImplementation(@id, "PilotSeat", 1, 12, NULL); -- 35 GPS
CALL registerRoverImplementation(@id, "PilotSeat", 1, 13, NULL); -- 36
CALL registerRoverImplementation(@id, "PilotSeat", 1, 14, NULL); -- 37
CALL registerRoverImplementation(@id, "PilotSeat", 1, 15, NULL); -- 38
CALL registerRoverImplementation(@id, "PilotSeat", 1, 16, NULL); -- 39 UV
CALL registerRoverImplementation(@id, "PilotSeat", 1, 17, NULL); -- 40 LDR
CALL registerRoverImplementation(@id, "PilotSeat", 1, 17, NULL); -- 41 LDR

CALL registerRoverImplementation(@id, "CopilotSeat", 1, 1, NULL); -- 42
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 2, NULL); -- 43
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 4, NULL); -- 44
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 5, NULL); -- 45
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 6, NULL); -- 46
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 7, NULL); -- 47
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 8, NULL); -- 48
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 9, NULL); -- 49
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 10, NULL); -- 50
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 11, NULL); -- 51
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 12, NULL); -- 52 GPS
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 13, NULL); -- 53
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 14, NULL); -- 54
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 15, NULL); -- 55
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 16, NULL); -- 56 UV
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 17, NULL); -- 57 LDR
CALL registerRoverImplementation(@id, "CopilotSeat", 1, 17, NULL); -- 58 LDR

-- registerRoverMonitoring(OUT _identificator SMALLINT UNSIGNED, IN _Measurement_identificator TINYINT UNSIGNED, IN _RoverImplementation_identificator SMALLINT UNSIGNED, IN _notes VARCHAR(150))
-- TopRightWheel
CALL registerRoverMonitoring(@id, 7, 2, NULL); -- MPU6050 a.x
CALL registerRoverMonitoring(@id, 8, 2, NULL); -- MPU6050 a.y
CALL registerRoverMonitoring(@id, 9, 2, NULL); -- MPU6050 a.z
CALL registerRoverMonitoring(@id, 11, 2, NULL); -- MPU6050 g.x
CALL registerRoverMonitoring(@id, 12, 2, NULL); -- MPU6050 g.y
CALL registerRoverMonitoring(@id, 13, 2, NULL); -- MPU6050 g.z
CALL registerRoverMonitoring(@id, 15, 2, NULL); -- MPU6050 temp
CALL registerRoverMonitoring(@id, 2, 3, NULL); -- Optical encoder vel
CALL registerRoverMonitoring(@id, 14, 3, NULL); -- Optical encoder rpm
CALL registerRoverMonitoring(@id, 1, 4, NULL); -- Ultrasonic dist ID

-- TopLeftWheel
CALL registerRoverMonitoring(@id, 7, 8, NULL); -- MPU6050 a.x
CALL registerRoverMonitoring(@id, 8, 8, NULL); -- MPU6050 a.y
CALL registerRoverMonitoring(@id, 9, 8, NULL); -- MPU6050 a.z
CALL registerRoverMonitoring(@id, 11, 8, NULL); -- MPU6050 g.x
CALL registerRoverMonitoring(@id, 12, 8, NULL); -- MPU6050 g.y
CALL registerRoverMonitoring(@id, 13, 8, NULL); -- MPU6050 g.z
CALL registerRoverMonitoring(@id, 15, 8, NULL); -- MPU6050 temp
CALL registerRoverMonitoring(@id, 2, 9, NULL); -- Optical encoder vel
CALL registerRoverMonitoring(@id, 14, 9, NULL); -- Optical encoder rpm
CALL registerRoverMonitoring(@id, 1, 10, NULL); -- Ultrasonic dist ID

-- BottomRightWheel
CALL registerRoverMonitoring(@id, 7, 14, NULL); -- MPU6050 a.x
CALL registerRoverMonitoring(@id, 8, 14, NULL); -- MPU6050 a.y
CALL registerRoverMonitoring(@id, 9, 14, NULL); -- MPU6050 a.z
CALL registerRoverMonitoring(@id, 11, 14, NULL); -- MPU6050 g.x
CALL registerRoverMonitoring(@id, 12, 14, NULL); -- MPU6050 g.y
CALL registerRoverMonitoring(@id, 13, 14, NULL); -- MPU6050 g.z
CALL registerRoverMonitoring(@id, 15, 14, NULL); -- MPU6050 temp
CALL registerRoverMonitoring(@id, 2, 15, NULL); -- Optical encoder vel
CALL registerRoverMonitoring(@id, 14, 15, NULL); -- Optical encoder rpm
CALL registerRoverMonitoring(@id, 1, 16, NULL); -- Ultrasonic dist ID

-- BottomLeftWheel
CALL registerRoverMonitoring(@id, 7, 20, NULL); -- MPU6050 a.x
CALL registerRoverMonitoring(@id, 8, 20, NULL); -- MPU6050 a.y
CALL registerRoverMonitoring(@id, 9, 20, NULL); -- MPU6050 a.z
CALL registerRoverMonitoring(@id, 11, 20, NULL); -- MPU6050 g.x
CALL registerRoverMonitoring(@id, 12, 20, NULL); -- MPU6050 g.y
CALL registerRoverMonitoring(@id, 13, 20, NULL); -- MPU6050 g.z
CALL registerRoverMonitoring(@id, 15, 20, NULL); -- MPU6050 temp
CALL registerRoverMonitoring(@id, 2, 21, NULL); -- Optical encoder vel
CALL registerRoverMonitoring(@id, 14, 21, NULL); -- Optical encoder rpm
CALL registerRoverMonitoring(@id, 1, 22, NULL); -- Ultrasonic dist ID

-- PilotSeat
CALL registerRoverMonitoring(@id, 7, 26, NULL); -- MPU6050 a.x 41
CALL registerRoverMonitoring(@id, 8, 26, NULL); -- MPU6050 a.y 42
CALL registerRoverMonitoring(@id, 9, 26, NULL); -- MPU6050 a.z 43
CALL registerRoverMonitoring(@id, 11, 26, NULL); -- MPU6050 g.x 44
CALL registerRoverMonitoring(@id, 12, 26, NULL); -- MPU6050 g.y 45
CALL registerRoverMonitoring(@id, 13, 26, NULL); -- MPU6050 g.z 46
CALL registerRoverMonitoring(@id, 15, 26, NULL); -- MPU6050 temp 47
CALL registerRoverMonitoring(@id, 1, 27, NULL); -- Ultrasonic dist ID 48
CALL registerRoverMonitoring(@id, 15, 32, NULL); -- DHT22 temp 49
CALL registerRoverMonitoring(@id, 16, 32, NULL); -- DHT22 humi 50
CALL registerRoverMonitoring(@id, 15, 33, NULL); -- BMP180 temp 51
CALL registerRoverMonitoring(@id, 22, 33, NULL); -- BMP180 press meas 52
CALL registerRoverMonitoring(@id, 23, 33, NULL); -- BMP180 press cal 53
CALL registerRoverMonitoring(@id, 24, 33, NULL); -- BMP180 press altit 54
CALL registerRoverMonitoring(@id, 17, 34, NULL); -- MQ135 RZeroMeas 55
CALL registerRoverMonitoring(@id, 18, 34, NULL); -- MQ135 RZeroCal 56
CALL registerRoverMonitoring(@id, 19, 34, NULL); -- MQ135 Resistance 57
CALL registerRoverMonitoring(@id, 20, 34, NULL); -- MQ135 PPM meas 58
CALL registerRoverMonitoring(@id, 21, 34, NULL); -- MQ135 PPM calc 59
CALL registerRoverMonitoring(@id, 31, 35, NULL); -- GPS DateTime 60
CALL registerRoverMonitoring(@id, 32, 35, NULL); -- GPS Fix Meas 61
CALL registerRoverMonitoring(@id, 33, 35, NULL); -- GPS Fix Qua 62
CALL registerRoverMonitoring(@id, 34, 35, NULL); -- GPS Latitude 63
CALL registerRoverMonitoring(@id, 35, 35, NULL); -- GPS Longitude 64
CALL registerRoverMonitoring(@id, 36, 35, NULL); -- GPS Altitude 65
CALL registerRoverMonitoring(@id, 37, 35, NULL); -- GPS Satellite aval 66
CALL registerRoverMonitoring(@id, 38, 35, NULL); -- GPS angle 67
CALL registerRoverMonitoring(@id, 39, 35, NULL); -- GPS antenna 68
CALL registerRoverMonitoring(@id, 40, 35, NULL); -- GPS knots speed 69
CALL registerRoverMonitoring(@id, 27, 38, NULL); -- Magnetic measured 70
CALL registerRoverMonitoring(@id, 28, 38, NULL); -- Magnetic voltage 71
CALL registerRoverMonitoring(@id, 29, 39, NULL); -- UV measured 72
CALL registerRoverMonitoring(@id, 30, 39, NULL); -- UV voltage 73
CALL registerRoverMonitoring(@id, 25, 40, NULL); -- LDR measured 74
CALL registerRoverMonitoring(@id, 26, 40, NULL); -- LDR voltage 75
CALL registerRoverMonitoring(@id, 25, 41, NULL); -- LDR measured 76
CALL registerRoverMonitoring(@id, 26, 41, NULL); -- LDR voltage 77


-- CopilotSeat
CALL registerRoverMonitoring(@id, 7, 43, NULL); -- MPU6050 a.x 78
CALL registerRoverMonitoring(@id, 8, 43, NULL); -- MPU6050 a.y
CALL registerRoverMonitoring(@id, 9, 43, NULL); -- MPU6050 a.z
CALL registerRoverMonitoring(@id, 11, 43, NULL); -- MPU6050 g.x
CALL registerRoverMonitoring(@id, 12, 43, NULL); -- MPU6050 g.y
CALL registerRoverMonitoring(@id, 13, 43, NULL); -- MPU6050 g.z
CALL registerRoverMonitoring(@id, 15, 43, NULL); -- MPU6050 temp
CALL registerRoverMonitoring(@id, 1, 44, NULL); -- Ultrasonic dist ID
CALL registerRoverMonitoring(@id, 15, 49, NULL); -- DHT22 temp
CALL registerRoverMonitoring(@id, 16, 49, NULL); -- DHT22 humi
CALL registerRoverMonitoring(@id, 15, 50, NULL); -- BMP180 temp
CALL registerRoverMonitoring(@id, 22, 50, NULL); -- BMP180 press meas
CALL registerRoverMonitoring(@id, 23, 50, NULL); -- BMP180 press cal
CALL registerRoverMonitoring(@id, 24, 50, NULL); -- BMP180 press altit
CALL registerRoverMonitoring(@id, 17, 51, NULL); -- MQ135 RZeroMeas
CALL registerRoverMonitoring(@id, 18, 51, NULL); -- MQ135 RZeroCal
CALL registerRoverMonitoring(@id, 19, 51, NULL); -- MQ135 Resistance
CALL registerRoverMonitoring(@id, 20, 51, NULL); -- MQ135 PPM meas
CALL registerRoverMonitoring(@id, 21, 51, NULL); -- MQ135 PPM calc
CALL registerRoverMonitoring(@id, 31, 52, NULL); -- GPS DateTime
CALL registerRoverMonitoring(@id, 32, 52, NULL); -- GPS Fix Meas
CALL registerRoverMonitoring(@id, 33, 52, NULL); -- GPS Fix Qua
CALL registerRoverMonitoring(@id, 34, 52, NULL); -- GPS Latitude
CALL registerRoverMonitoring(@id, 35, 52, NULL); -- GPS Longitude
CALL registerRoverMonitoring(@id, 36, 52, NULL); -- GPS Altitude
CALL registerRoverMonitoring(@id, 37, 52, NULL); -- GPS Satellite aval
CALL registerRoverMonitoring(@id, 38, 52, NULL); -- GPS angle
CALL registerRoverMonitoring(@id, 39, 52, NULL); -- GPS antenna
CALL registerRoverMonitoring(@id, 40, 52, NULL); -- GPS knots speed
CALL registerRoverMonitoring(@id, 27, 55, NULL); -- Magnetic measured
CALL registerRoverMonitoring(@id, 28, 55, NULL); -- Magnetic voltage
CALL registerRoverMonitoring(@id, 29, 56, NULL); -- UV measured
CALL registerRoverMonitoring(@id, 30, 56, NULL); -- UV voltage
CALL registerRoverMonitoring(@id, 25, 57, NULL); -- LDR measured
CALL registerRoverMonitoring(@id, 26, 57, NULL); -- LDR voltage
CALL registerRoverMonitoring(@id, 25, 58, NULL); -- LDR measured
CALL registerRoverMonitoring(@id, 26, 58, NULL); -- LDR voltage

-- drop database iktanroving;

-- registerRoverObservation(OUT _identificator SMALLINT UNSIGNED, IN _RoverMonitoring_identificator SMALLINT UNSIGNED, IN _value double, IN _notes VARCHAR(50))
/*
CALL registerRoverObservation(@id, 10, 0.5, NULL);
CALL registerRoverObservation(@id, 10, 0.7, "NULL");
CALL registerRoverObservation(@id, 10, 1, NULL);
CALL registerRoverObservation(@id, 10, 0.85, NULL);
CALL registerRoverObservation(@id, 10, 1, NULL);
CALL registerRoverObservation(@id, 10, 1.3, NULL);

CALL registerRoverObservation(@id, 7, 36, NULL);
CALL registerRoverObservation(@id, 7, 35.5, NULL);
CALL registerRoverObservation(@id, 7, 36, NULL);
CALL registerRoverObservation(@id, 7, 35.85, NULL);
CALL registerRoverObservation(@id, 7, 38, NULL);
CALL registerRoverObservation(@id, 7, 0.6, NULL);
CALL registerRoverObservation(@id, 7, 1.4, NULL);
CALL registerRoverObservation(@id, 7, 3, NULL);*/

-- SELECT * FROM RoverObservation where rovermonitoring_identificator = 48 order by register desc;

-- delete from RoverObservation where register > "2023-03-02 02:00:55";
-- SELECT COUNT(*) FROM RoverObservation;
-- CALL getRoverAccelerationTimeSerie("TopRightWheel", 2023, "m/s^2");
-- CALL getRoverRotationTimeSerie("TopRightWheel", 2023, "rad/s");
-- select * from RoverObservation where rovermonitoring_identificator = 1;
-- delete from roverobservation where identificator > 0;
-- describe RoverObservation;

-- select * from roverobservation where value > 10;


CALL getRoverWheelsMeasurementTimeSerie(2023, "RPM", "RPM", TRUE);
CALL getRoverWheelsMeasurement(2023, "Temperature", "°C", FALSE);
CALL getRoverWheelsRecentMeasurement(2023, "Temperature", "°C");

CALL getRoverSeatsMeasurementTimeSerie(2023, "Distance", "m", TRUE, "HC-SR04");
CALL getRoverSeatsMeasurement(2023, "Distance", "m", TRUE, "HC-SR04");
CALL getRoverSeatsRecentMeasurement(2023, "Distance", "m", "HC-SR04");

SELECT RoverObs.value AS "Temperature", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = 2023 AND RoverImp.printedCircuitBoard = "PilotSeat" AND Measurement.variable = "Temperature" AND Measurement.units = "°C" AND (Module.denomination = "DHT22" OR Module.code = "DHT22")
		ORDER BY RoverObs.register DESC;
        
        
CALL getRoverSeatsTemperaturePressureRelationship("PilotSeat", 2023, "°C", "DHT22", "Pa", "BMP180");

drop procedure getRoverSeatsLocationServiceStatus;

CALL getRoverSeatsMeasurementTimeSerie(2023, "UV radiation measured", NULL, TRUE, "GY-ML8511");

	CALL registerRoverObservation(@id, 60, NULL, "20/3/2023 16:39:15:000", "2023-04-02 10:00:00");
	CALL registerRoverObservation(@id, 61, 1, NULL, "2023-04-02 10:00:00");
	CALL registerRoverObservation(@id, 62, 1, NULL, "2023-04-02 10:00:00");
	CALL registerRoverObservation(@id, 63, NULL, "1851.01N", "2023-04-02 10:00:00");
	CALL registerRoverObservation(@id, 64, NULL, "9910.58W", "2023-04-02 10:00:00");
	CALL registerRoverObservation(@id, 65, 159, NULL, "2023-04-02 10:00:00");
	CALL registerRoverObservation(@id, 66, 3, NULL, "2023-04-02 10:00:00");
	CALL registerRoverObservation(@id, 67, 185.87, NULL, "2023-04-02 10:00:00");
	CALL registerRoverObservation(@id, 68, 2, NULL, "2023-04-02 10:00:00");
	CALL registerRoverObservation(@id, 69, 0.81, NULL, "2023-04-02 10:00:00");
    CALL registerRoverObservation(@id, 54, 1179.42, NULL, "2023-04-02 10:00:00");
    
CALL getRoverSeatsLocationServiceStatus("PilotSeat", 2023, TRUE);
SELECT CAST(SUBSTRING("192684", 1, LENGTH("192684")-1) AS DOUBLE) AS ExtractString;

-- drop database iktanroving;