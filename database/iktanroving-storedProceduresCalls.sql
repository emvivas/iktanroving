USE iktanroving;

-- registerRover(OUT _identificator TINYINT UNSIGNED, IN _denomination VARCHAR(30), IN _competitionYear SMALLINT UNSIGNED, IN _properties VARCHAR(150), IN _description TINYTEXT)
CALL registerRover(@id, "IKTAN Roving 2023", 2023, NULL, NULL);

-- registerModule(OUT _identificator TINYINT UNSIGNED, IN _code VARCHAR(30), IN _denomination VARCHAR(30), IN _properties VARCHAR(150), IN _description TINYTEXT, IN _brand VARCHAR(30), IN _model VARCHAR(30), IN _version VARCHAR(15), IN _webpage VARCHAR(320))
CALL registerModule(@id, "ESP8266MOD", "ESP8266", NULL, "Development board", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "GY-521", "MPU6050", NULL, "Accelerometer and gyroscope", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "MH-Sensor-Series", "LM393", NULL, "Optical encoder", NULL, NULL, NULL, NULL);
CALL registerModule(@id, "HC-SR04", "HC-SR04", NULL, "Ultrasonic sensor", NULL, NULL, NULL, NULL);

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

-- registerRoverImplementation(OUT _identificator SMALLINT UNSIGNED, IN _printedCircuitBoard VARCHAR(30), IN _Rover_identificator TINYINT UNSIGNED, IN _Module_identificator TINYINT UNSIGNED, IN _properties VARCHAR(150))
CALL registerRoverImplementation(@id, "TopRightWheel", 1, 1, NULL);
CALL registerRoverImplementation(@id, "TopRightWheel", 1, 2, NULL);
CALL registerRoverImplementation(@id, "TopRightWheel", 1, 3, NULL);
CALL registerRoverImplementation(@id, "TopRightWheel", 1, 4, NULL);


-- registerRoverMonitoring(OUT _identificator SMALLINT UNSIGNED, IN _Measurement_identificator TINYINT UNSIGNED, IN _RoverImplementation_identificator SMALLINT UNSIGNED, IN _notes VARCHAR(150))
CALL registerRoverMonitoring(@id, 7, 2, NULL); -- MPU6050 a.x
CALL registerRoverMonitoring(@id, 8, 2, NULL); -- MPU6050 a.y
CALL registerRoverMonitoring(@id, 9, 2, NULL); -- MPU6050 a.z
CALL registerRoverMonitoring(@id, 11, 2, NULL); -- MPU6050 g.x
CALL registerRoverMonitoring(@id, 12, 2, NULL); -- MPU6050 g.y
CALL registerRoverMonitoring(@id, 13, 2, NULL); -- MPU6050 g.z
CALL registerRoverMonitoring(@id, 15, 2, NULL); -- MPU6050 temp
CALL registerRoverMonitoring(@id, 2, 3, NULL); -- Optical encoder vel
CALL registerRoverMonitoring(@id, 14, 3, NULL); -- Optical encoder rpm
CALL registerRoverMonitoring(@id, 1, 4, NULL); -- Ultrasonic dist ID 10

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

-- SELECT * FROM RoverObservation ORDER BY register DESC;
SELECT COUNT(*) FROM RoverObservation;
CALL getRoverAccelerationTimeSerie("TopRightWheel", 2023, "m/s^2");
-- delete from roverobservation where identificator > 0;
-- describe RoverObservation;