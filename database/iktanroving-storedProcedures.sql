USE iktanroving;

DELIMITER //
CREATE PROCEDURE validateString(INOUT string VARCHAR(150))
BEGIN
	SET string = TRIM(string);
    IF LENGTH(string) = 0 THEN
		SET string = NULL;
    END IF;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerMeasurement(OUT _identificator SMALLINT UNSIGNED, _variable VARCHAR(50), _units VARCHAR(50))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_variable);
    CALL validateString(_units);
    INSERT INTO Measurement(variable, units) VALUE (_variable, _units);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerModuleProfile(OUT _identificator SMALLINT UNSIGNED, IN _Measurement_identificator TINYINT UNSIGNED, IN _Module_identificator TINYINT UNSIGNED, IN _value DOUBLE, IN _notes VARCHAR(50))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_notes);
    INSERT INTO ModuleProfile(Measurement_identificator, Module_identificator, value, notes) VALUE (_Measurement_identificator, _Module_identificator, _value, _notes);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerRoverProfile(OUT _identificator SMALLINT UNSIGNED, IN _Measurement_identificator TINYINT UNSIGNED, IN _Rover_identificator TINYINT UNSIGNED, IN _value DOUBLE, IN _notes VARCHAR(50))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_notes);
    INSERT INTO RoverProfile(Measurement_identificator, _Rover_identificator, value, notes) VALUE (_Measurement_identificator, _Rover_identificator, _value, _notes);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerRover(OUT _identificator TINYINT UNSIGNED, IN _denomination VARCHAR(30), IN _competitionYear SMALLINT UNSIGNED, IN _properties VARCHAR(150), IN _description TINYTEXT)
BEGIN
	SET _identificator = NULL;
    CALL validateString(_denomination);
    CALL validateString(_properties);
    CALL validateString(_description);
    INSERT INTO Rover(denomination, competitionYear, properties, description) VALUE (_denomination, _competitionYear, _properties, _description);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerModule(OUT _identificator TINYINT UNSIGNED, IN _code VARCHAR(30), IN _denomination VARCHAR(30), IN _properties VARCHAR(150), IN _description TINYTEXT, IN _brand VARCHAR(30), IN _model VARCHAR(30), IN _version VARCHAR(15), IN _webpage VARCHAR(320))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_code);
    CALL validateString(_denomination);
    CALL validateString(_properties);
    CALL validateString(_description);
    CALL validateString(_brand);
    CALL validateString(_model);
    CALL validateString(_version);
    CALL validateString(_webpage);
    INSERT INTO Module(code, denomination, properties, description, brand, model, version, webpage) VALUE (_code, _denomination, _properties, _description, _brand, _model, _version, _webpage);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerArea(OUT _identificator TINYINT UNSIGNED, IN _denomination VARCHAR(30), IN _description TINYTEXT)
BEGIN
	SET _identificator = NULL;
    CALL validateString(_denomination);
    CALL validateString(_description);
    INSERT INTO Area(denomination, description) VALUE (_denomination, _description);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerCrewmate(OUT _identificator TINYINT UNSIGNED, IN _TeamMember_identificator SMALLINT UNSIGNED, IN _description VARCHAR(150))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_description);
    INSERT INTO Crewmate(TeamMember_identificator, description) VALUE (_TeamMember_identificator, _description);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerParticipant(OUT _identificator TINYINT UNSIGNED, IN _code VARCHAR(25), IN _email VARCHAR(320), _telephone VARCHAR(25), _name VARCHAR(50), _firstLastname VARCHAR(50), _secondLastname VARCHAR(50), _sex CHAR, _birthday DATE, _password VARCHAR(100), _countryNumber SMALLINT UNSIGNED, _state VARCHAR(30), _city VARCHAR(30), _zip VARCHAR(15), _location VARCHAR(150))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_code);
    CALL validateString(_email);
    CALL validateString(_telephone);
    CALL validateString(_name);
    CALL validateString(_firstLastname);
    CALL validateString(_secondLastname);
    CALL validateString(_sex);
    CALL validateString(_password);
    CALL validateString(_state);
    CALL validateString(_city);
    CALL validateString(_zip);
    CALL validateString(_location);
    INSERT INTO Participant(code, email, telephone, name, firstLastname, secondLastname, sex, birthday, password, countryNumber, state, city, zip, location) VALUE (_code, _email, _telephone, _name, _firstLastname, _secondLastname, _sex, _birthday, _password, _countryNumber, _state, _city, _zip, _location);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerGadget(OUT _identificator TINYINT UNSIGNED, IN _Rover_identificator TINYINT UNSIGNED, IN _denomination VARCHAR(30), IN _properties VARCHAR(150), IN _description TINYTEXT, IN _brand VARCHAR(30), IN _model VARCHAR(30), IN _version VARCHAR(15), IN _operatingSystem VARCHAR(30), IN _webpage VARCHAR(320), IN _material VARCHAR(25))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_denomination);
    CALL validateString(_properties);
    CALL validateString(_description);
    CALL validateString(_brand);
    CALL validateString(_model);
    CALL validateString(_version);
    CALL validateString(_operatingSystem);
    CALL validateString(_webpage);
    CALL validateString(_material);
    INSERT INTO Gadget(Rover_identificator, denomination, properties, description, brand, model, version, operatingSystem, webpage, material) VALUE (_Rover_identificator, _denomination, _properties, _description, _brand, _model, _version, _operatingSystem, _webpage, _material);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerRoverMonitoring(OUT _identificator SMALLINT UNSIGNED, IN _Measurement_identificator TINYINT UNSIGNED, IN _RoverImplementation_identificator SMALLINT UNSIGNED, IN _notes VARCHAR(150))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_notes);
    INSERT INTO RoverMonitoring(Measurement_identificator, RoverImplementation_identificator, notes) VALUE (_Measurement_identificator, _RoverImplementation_identificator, _notes);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerRoverObservation(OUT _identificator SMALLINT UNSIGNED, IN _RoverMonitoring_identificator SMALLINT UNSIGNED, IN _value DOUBLE, IN _notes VARCHAR(50), IN _register DATETIME)
BEGIN
	SET _identificator = NULL;
    CALL validateString(_notes);
    INSERT INTO RoverObservation(RoverMonitoring_identificator, value, notes, register) VALUE (_RoverMonitoring_identificator, _value, _notes, _register);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerRoverImplementation(OUT _identificator SMALLINT UNSIGNED, IN _printedCircuitBoard VARCHAR(30), IN _Rover_identificator TINYINT UNSIGNED, IN _Module_identificator TINYINT UNSIGNED, IN _properties VARCHAR(150))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_printedCircuitBoard);
    CALL validateString(_properties);
    INSERT INTO RoverImplementation(printedCircuitBoard, Rover_identificator, Module_identificator, properties) VALUE (_printedCircuitBoard, _Rover_identificator, _Module_identificator, _properties);
	SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerToolObservation(OUT _identificator BIGINT UNSIGNED, IN _ToolMonitoring_identificator SMALLINT, IN _value DOUBLE , IN _notes VARCHAR(50), IN _register DATETIME)
BEGIN
	SET _identificator = NULL;
    CALL validateString(_notes);
    INSERT INTO ToolObservation(ToolMonitoring_identificator, value, notes, register) VALUE (_ToolMonitoring_identificator, _value, _notes, _register);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerToolMonitoring(OUT _identificator SMALLINT UNSIGNED, IN _Measurement_identificator TINYINT, IN _ToolImplementation_identificator SMALLINT, IN _notes VARCHAR(150))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_notes);
    INSERT INTO ToolMonitoring(Measurement_identificator, ToolImplementation_identificator, notes) VALUE (_Measurement_identificator, _ToolImplementation_identificator, _notes);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerToolImplementation(OUT _identificator SMALLINT UNSIGNED, IN _Tool_identificator TINYINT, IN _Module_identificator TINYINT, IN _properties VARCHAR(150))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_properties);
    INSERT INTO ToolImplementation(Tool_identificator, Module_identificator, properties) VALUE (_Tool_identificator, _Module_identificator, _properties);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerCrewmateObservation(OUT _identificator BIGINT UNSIGNED, IN _CrewmateMonitoring_identificator SMALLINT, IN _value DOUBLE, IN _notes VARCHAR(50), IN _register DATETIME)
BEGIN
	SET _identificator = NULL;
    CALL validateString(_notes);
    INSERT INTO CrewmateObservation(CrewmateMonitoring_identificator, value, notes, register) VALUE (_CrewmateMonitoring_identificator, _value, _notes, _register);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerCrewmateProfile(OUT _identificator SMALLINT UNSIGNED, IN _Measurement_identificator TINYINT,  IN _Crewmate_identificator TINYINT, IN _value DOUBLE, IN _notes VARCHAR(50))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_notes);
    INSERT INTO CrewmateProfile(CrewmateMonitoring_identificator, value, notes) VALUE (_CrewmateMonitoring_identificator, _value, _notes);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerCrewmateMonitoring(OUT _identificator SMALLINT UNSIGNED, IN _Measurement_identificator TINYINT,  IN _CrewmateImplementation_identificator TINYINT, IN _notes VARCHAR(50))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_notes);
    INSERT INTO CrewmateMonitoring(CrewmateMonitoring_identificator, value, notes) VALUE (_CrewmateMonitoring_identificator, _value, _notes);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerTool(OUT _identificator TINYINT UNSIGNED, IN _Rover_identificator TINYINT UNSIGNED, IN _denomination VARCHAR(30), IN _properties VARCHAR(150), IN _description TINYTEXT, IN _material VARCHAR(25))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_denomination);
    CALL validateString(_properties);
    CALL validateString(_description);
    CALL validateString(_material);
    INSERT INTO Tool(Rover_identificator, denomination, properties, description, material) VALUE (_Rover_identificator, _denomination, _properties, _description, _material);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerTeamMember(OUT _identificator SMALLINT UNSIGNED, IN _Rover_identificator TINYINT UNSIGNED, IN _Participant_identificator SMALLINT UNSIGNED, IN _TeamMember_identificator SMALLINT UNSIGNED, IN _description VARCHAR(150), IN _campusNumber TINYINT UNSIGNED, IN _tshirtSize VARCHAR(3))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_description);
    CALL validateString(_tshirtSize);
    INSERT INTO TeamMember(Rover_identificator, Participant_identificator, TeamMember_identificator, description, campusNumber, tshirtSize) VALUE (_Rover_identificator, _Participant_identificator, _TeamMember_identificator, 
		_description, _campusNumber, _tshirtSize);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerToolProfile(OUT _identificator SMALLINT UNSIGNED, IN _Measurement_identificator TINYINT UNSIGNED, IN _Tool_identificator TINYINT UNSIGNED, IN _value DOUBLE, IN _notes VARCHAR(50))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_notes);
    INSERT INTO ToolProfile(Measurement_identificator , Tool_identificator , value , notes) VALUE 
    (_Measurement_identificator , _Tool_identificator , _value , _notes);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerGadgetProfile(OUT _identificator SMALLINT UNSIGNED, IN _Measurement_identificator TINYINT UNSIGNED, IN _Gadget_identificator TINYINT UNSIGNED , IN _value DOUBLE, IN _notes VARCHAR(50))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_notes);
    INSERT INTO GadgetProfile(Measurement_identificator , Gadget_identificator , value , notes) VALUE 
    (_Measurement_identificator , _Gadget_identificator , _value , _notes);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerCrewmateImplemetation(OUT _identificator TINYINT UNSIGNED, IN _Gadget_identificator TINYINT UNSIGNED, IN _Crewmate_identificator TINYINT UNSIGNED, IN _Module_identificator TINYINT UNSIGNED, IN _properties VARCHAR(150))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_properties);
    INSERT INTO CrewmateImplemetation(Gadget_identificator , Crewmate_identificator , Module_identificator , properties) VALUE 
    (_Gadget_identificator , _Crewmate_identificator , _Module_identificator , _properties);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerAreaMember(OUT _identificator SMALLINT UNSIGNED, IN _TeamMember_identificator SMALLINT UNSIGNED, IN _Area_identificator TINYINT UNSIGNED, IN _activities VARCHAR(150))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_activities);
    INSERT INTO AreaMember(TeamMember_identificator , Area_identificator ,activities) VALUE 
    (_TeamMember_identificator , _Area_identificator ,_activities);
    SET _identificator = @@identity;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerWheelRoverStatus(IN PCB VARCHAR(30), IN accelerationX DOUBLE, IN accelerationY DOUBLE, IN accelerationZ DOUBLE, IN rotationX DOUBLE, IN rotationY DOUBLE, IN rotationZ DOUBLE, IN rotationVelocity DOUBLE, IN RPM DOUBLE, IN surfaceDistance DOUBLE, IN internalTemperature DOUBLE, IN register DATETIME)
BEGIN
	DECLARE RoverMonitoringIdentificatorControl TINYINT SIGNED;
    CASE PCB
		WHEN "TopRightWheel" THEN
			SET RoverMonitoringIdentificatorControl = 0;
        WHEN "TopLeftWheel" THEN
			SET RoverMonitoringIdentificatorControl = 10;
        WHEN "BottomRightWheel" THEN
			SET RoverMonitoringIdentificatorControl = 20;
        WHEN "BottomLeftWheel" THEN
			SET RoverMonitoringIdentificatorControl = 30;
		ELSE
			SET RoverMonitoringIdentificatorControl = -1;
	END CASE;
	CALL registerRoverObservation(@id, 1 + RoverMonitoringIdentificatorControl, accelerationX, NULL, register);
	CALL registerRoverObservation(@id, 2 + RoverMonitoringIdentificatorControl, accelerationY, NULL, register);
	CALL registerRoverObservation(@id, 3 + RoverMonitoringIdentificatorControl, accelerationZ, NULL, register);
	CALL registerRoverObservation(@id, 4 + RoverMonitoringIdentificatorControl, rotationX, NULL, register);
	CALL registerRoverObservation(@id, 5 + RoverMonitoringIdentificatorControl, rotationY, NULL, register);
	CALL registerRoverObservation(@id, 6 + RoverMonitoringIdentificatorControl, rotationZ, NULL, register);
	CALL registerRoverObservation(@id, 7 + RoverMonitoringIdentificatorControl, internalTemperature, NULL, register);
	CALL registerRoverObservation(@id, 8 + RoverMonitoringIdentificatorControl, rotationVelocity, NULL, register);
	CALL registerRoverObservation(@id, 9 + RoverMonitoringIdentificatorControl, RPM, NULL, register);
	CALL registerRoverObservation(@id, 10 + RoverMonitoringIdentificatorControl, surfaceDistance, NULL, register);
    /*
    CASE PCB
		WHEN "TopRightWheel" THEN
			CALL registerRoverObservation(@id, 1, accelerationX, NULL, register);
            CALL registerRoverObservation(@id, 2, accelerationY, NULL, register);
            CALL registerRoverObservation(@id, 3, accelerationZ, NULL, register);
            CALL registerRoverObservation(@id, 4, rotationX, NULL, register);
            CALL registerRoverObservation(@id, 5, rotationY, NULL, register);
            CALL registerRoverObservation(@id, 6, rotationZ, NULL, register);
            CALL registerRoverObservation(@id, 7, internalTemperature, NULL, register);
            CALL registerRoverObservation(@id, 8, rotationVelocity, NULL, register);
            CALL registerRoverObservation(@id, 9, RPM, NULL, register);
            CALL registerRoverObservation(@id, 10, surfaceDistance, NULL, register);
		WHEN "TopLeftWheel" THEN
			CALL registerRoverObservation(@id, 11, accelerationX, NULL, register);
            CALL registerRoverObservation(@id, 12, accelerationY, NULL, register);
            CALL registerRoverObservation(@id, 13, accelerationZ, NULL, register);
            CALL registerRoverObservation(@id, 14, rotationX, NULL, register);
            CALL registerRoverObservation(@id, 15, rotationY, NULL, register);
            CALL registerRoverObservation(@id, 16, rotationZ, NULL, register);
            CALL registerRoverObservation(@id, 17, internalTemperature, NULL, register);
            CALL registerRoverObservation(@id, 18, rotationVelocity, NULL, register);
            CALL registerRoverObservation(@id, 19, RPM, NULL, register);
            CALL registerRoverObservation(@id, 20, surfaceDistance, NULL, register);
		WHEN "BottomRightWheel" THEN
			CALL registerRoverObservation(@id, 21, accelerationX, NULL, register);
            CALL registerRoverObservation(@id, 22, accelerationY, NULL, register);
            CALL registerRoverObservation(@id, 23, accelerationZ, NULL, register);
            CALL registerRoverObservation(@id, 24, rotationX, NULL, register);
            CALL registerRoverObservation(@id, 25, rotationY, NULL, register);
            CALL registerRoverObservation(@id, 26, rotationZ, NULL, register);
            CALL registerRoverObservation(@id, 27, internalTemperature, NULL, register);
            CALL registerRoverObservation(@id, 28, rotationVelocity, NULL, register);
            CALL registerRoverObservation(@id, 29, RPM, NULL, register);
            CALL registerRoverObservation(@id, 30, surfaceDistance, NULL, register);
		WHEN "BottomLeftWheel" THEN
			CALL registerRoverObservation(@id, 31, accelerationX, NULL, register);
            CALL registerRoverObservation(@id, 32, accelerationY, NULL, register);
            CALL registerRoverObservation(@id, 33, accelerationZ, NULL, register);
            CALL registerRoverObservation(@id, 34, rotationX, NULL, register);
            CALL registerRoverObservation(@id, 35, rotationY, NULL, register);
            CALL registerRoverObservation(@id, 36, rotationZ, NULL, register);
            CALL registerRoverObservation(@id, 37, internalTemperature, NULL, register);
            CALL registerRoverObservation(@id, 38, rotationVelocity, NULL, register);
            CALL registerRoverObservation(@id, 39, RPM, NULL, register);
            CALL registerRoverObservation(@id, 40, surfaceDistance, NULL, register);
	END CASE;
    */
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE registerSeatRoverStatus(IN PCB VARCHAR(30), IN accelerationX DOUBLE, IN accelerationY DOUBLE, IN accelerationZ DOUBLE, IN rotationX DOUBLE, IN rotationY DOUBLE, IN rotationZ DOUBLE, IN surfaceDistance DOUBLE, IN firstInternalTemperature DOUBLE, IN secondInternalTemperature DOUBLE, IN externalTemperature DOUBLE, IN externalHumidity DOUBLE, IN measuredRZero DOUBLE, IN calculatedRZero DOUBLE, IN airQualityResistance DOUBLE, IN measuredPPM DOUBLE, IN calculatedPPM DOUBLE, IN measuredAtmosphericPressure DOUBLE, IN calculatedAtmosphericPressure DOUBLE, IN altitude DOUBLE, IN firstMeasuredLuxRadiation DOUBLE, IN firstVoltageLuxRadiation DOUBLE, IN secondMeasuredLuxRadiation DOUBLE, IN secondVoltageLuxRadiation DOUBLE, IN measuredMagnetism DOUBLE, IN voltageMagnetism DOUBLE, IN measuredUVRadiation DOUBLE, IN voltageUVRadiation DOUBLE, IN GPSDateTime VARCHAR(50), IN GPSMeasuredFix DOUBLE, IN GPSQualityFix DOUBLE, IN GPSLatitudeCoordinate VARCHAR(50), IN GPSLongitudeCoordinate VARCHAR(50), IN GPSAltitudeCoordinate DOUBLE, IN GPSSatelliteAvailability DOUBLE, IN GPSAngle DOUBLE, IN GPSAntennaStatus DOUBLE, IN GPSKnotsSpeed DOUBLE, IN register DATETIME)
BEGIN
	DECLARE RoverMonitoringIdentificatorControl TINYINT SIGNED;
    CASE PCB
		WHEN "PilotSeat" THEN
			SET RoverMonitoringIdentificatorControl = 40;
        WHEN "CopilotSeat" THEN
			SET RoverMonitoringIdentificatorControl = 77;
		ELSE
			SET RoverMonitoringIdentificatorControl = -1;
	END CASE;
    CALL registerRoverObservation(@id, 1 + RoverMonitoringIdentificatorControl, accelerationX, NULL, register);
	CALL registerRoverObservation(@id, 2 + RoverMonitoringIdentificatorControl, accelerationY, NULL, register);
	CALL registerRoverObservation(@id, 3 + RoverMonitoringIdentificatorControl, accelerationZ, NULL, register);
	CALL registerRoverObservation(@id, 4 + RoverMonitoringIdentificatorControl, rotationX, NULL, register);
	CALL registerRoverObservation(@id, 5 + RoverMonitoringIdentificatorControl, rotationY, NULL, register);
	CALL registerRoverObservation(@id, 6 + RoverMonitoringIdentificatorControl, rotationZ, NULL, register);
	CALL registerRoverObservation(@id, 7 + RoverMonitoringIdentificatorControl, firstInternalTemperature, NULL, register);
	CALL registerRoverObservation(@id, 8 + RoverMonitoringIdentificatorControl, surfaceDistance, NULL, register);
	CALL registerRoverObservation(@id, 9 + RoverMonitoringIdentificatorControl, externalTemperature, NULL, register);
	CALL registerRoverObservation(@id, 10 + RoverMonitoringIdentificatorControl, externalHumidity, NULL, register);
	CALL registerRoverObservation(@id, 11 + RoverMonitoringIdentificatorControl, secondInternalTemperature, NULL, register);
	CALL registerRoverObservation(@id, 12 + RoverMonitoringIdentificatorControl, measuredAtmosphericPressure, NULL, register);
	CALL registerRoverObservation(@id, 13 + RoverMonitoringIdentificatorControl, calculatedAtmosphericPressure, NULL, register);
	CALL registerRoverObservation(@id, 14 + RoverMonitoringIdentificatorControl, altitude, NULL, register);
	CALL registerRoverObservation(@id, 15 + RoverMonitoringIdentificatorControl, measuredRZero, NULL, register);
	CALL registerRoverObservation(@id, 16 + RoverMonitoringIdentificatorControl, calculatedRZero, NULL, register);
	CALL registerRoverObservation(@id, 17 + RoverMonitoringIdentificatorControl, airQualityResistance, NULL, register);
	CALL registerRoverObservation(@id, 18 + RoverMonitoringIdentificatorControl, measuredPPM, NULL, register);
	CALL registerRoverObservation(@id, 19 + RoverMonitoringIdentificatorControl, calculatedPPM, NULL, register);
	CALL registerRoverObservation(@id, 20 + RoverMonitoringIdentificatorControl, NULL, GPSDateTime, register);
	CALL registerRoverObservation(@id, 21 + RoverMonitoringIdentificatorControl, GPSMeasuredFix, NULL, register);
	CALL registerRoverObservation(@id, 22 + RoverMonitoringIdentificatorControl, GPSQualityFix, NULL, register);
	CALL registerRoverObservation(@id, 23 + RoverMonitoringIdentificatorControl, NULL, GPSLatitudeCoordinate, register);
	CALL registerRoverObservation(@id, 24 + RoverMonitoringIdentificatorControl, NULL, GPSLongitudeCoordinate, register);
	CALL registerRoverObservation(@id, 25 + RoverMonitoringIdentificatorControl, GPSAltitudeCoordinate, NULL, register);
	CALL registerRoverObservation(@id, 26 + RoverMonitoringIdentificatorControl, GPSSatelliteAvailability, NULL, register);
	CALL registerRoverObservation(@id, 27 + RoverMonitoringIdentificatorControl, GPSAngle, NULL, register);
	CALL registerRoverObservation(@id, 28 + RoverMonitoringIdentificatorControl, GPSAntennaStatus, NULL, register);
	CALL registerRoverObservation(@id, 29 + RoverMonitoringIdentificatorControl, GPSKnotsSpeed, NULL, register);
	CALL registerRoverObservation(@id, 30 + RoverMonitoringIdentificatorControl, measuredMagnetism, NULL, register);
	CALL registerRoverObservation(@id, 31 + RoverMonitoringIdentificatorControl, voltageMagnetism, NULL, register);
	CALL registerRoverObservation(@id, 32 + RoverMonitoringIdentificatorControl, measuredUVRadiation, NULL, register);
	CALL registerRoverObservation(@id, 33 + RoverMonitoringIdentificatorControl, voltageUVRadiation, NULL, register);
	CALL registerRoverObservation(@id, 34 + RoverMonitoringIdentificatorControl, firstMeasuredLuxRadiation, NULL, register);
	CALL registerRoverObservation(@id, 35 + RoverMonitoringIdentificatorControl, firstVoltageLuxRadiation, NULL, register);
	CALL registerRoverObservation(@id, 36 + RoverMonitoringIdentificatorControl, secondMeasuredLuxRadiation, NULL, register);
	CALL registerRoverObservation(@id, 37 + RoverMonitoringIdentificatorControl, secondVoltageLuxRadiation, NULL, register);
    /*
    CASE PCB
		WHEN "PilotSeat" THEN
			CALL registerRoverObservation(@id, 41, accelerationX, NULL, register);
            CALL registerRoverObservation(@id, 42, accelerationY, NULL, register);
            CALL registerRoverObservation(@id, 43, accelerationZ, NULL, register);
            CALL registerRoverObservation(@id, 44, rotationX, NULL, register);
            CALL registerRoverObservation(@id, 45, rotationY, NULL, register);
            CALL registerRoverObservation(@id, 46, rotationZ, NULL, register);
            CALL registerRoverObservation(@id, 47, firstInternalTemperature, NULL, register);
            CALL registerRoverObservation(@id, 48, surfaceDistance, NULL, register);
            CALL registerRoverObservation(@id, 49, externalTemperature, NULL, register);
            CALL registerRoverObservation(@id, 50, externalHumidity, NULL, register);
            CALL registerRoverObservation(@id, 51, secondInternalTemperature, NULL, register);
            CALL registerRoverObservation(@id, 52, measuredAtmosphericPressure, NULL, register);
            CALL registerRoverObservation(@id, 53, calculatedAtmosphericPressure, NULL, register);
            CALL registerRoverObservation(@id, 54, altitude, NULL, register);
            CALL registerRoverObservation(@id, 55, measuredRZero, NULL, register);
            CALL registerRoverObservation(@id, 56, calculatedRZero, NULL, register);
            CALL registerRoverObservation(@id, 57, airQualityResistance, NULL, register);
            CALL registerRoverObservation(@id, 58, measuredPPM, NULL, register);
            CALL registerRoverObservation(@id, 59, calculatedPPM, NULL, register);
            CALL registerRoverObservation(@id, 60, NULL, GPSDateTime, register);
            CALL registerRoverObservation(@id, 61, GPSMeasuredFix, NULL, register);
            CALL registerRoverObservation(@id, 62, GPSQualityFix, NULL, register);
            CALL registerRoverObservation(@id, 63, NULL, GPSLatitudeCoordinate, register);
            CALL registerRoverObservation(@id, 64, NULL, GPSLongitudeCoordinate, register);
            CALL registerRoverObservation(@id, 65, GPSAltitudeCoordinate, NULL, register);
            CALL registerRoverObservation(@id, 66, GPSSatelliteAvailability, NULL, register);
            CALL registerRoverObservation(@id, 67, GPSAngle, NULL, register);
            CALL registerRoverObservation(@id, 68, GPSAntennaStatus, NULL, register);
            CALL registerRoverObservation(@id, 69, GPSKnotsSpeed, NULL, register);
            CALL registerRoverObservation(@id, 70, measuredMagnetism, NULL, register);
            CALL registerRoverObservation(@id, 71, voltageMagnetism, NULL, register);
            CALL registerRoverObservation(@id, 72, measuredUVRadiation, NULL, register);
            CALL registerRoverObservation(@id, 73, voltageUVRadiation, NULL, register);
            CALL registerRoverObservation(@id, 74, firstMeasuredLuxRadiation, NULL, register);
            CALL registerRoverObservation(@id, 75, firstVoltageLuxRadiation, NULL, register);
            CALL registerRoverObservation(@id, 76, secondMeasuredLuxRadiation, NULL, register);
            CALL registerRoverObservation(@id, 77, secondVoltageLuxRadiation, NULL, register);
		WHEN "CopilotSeat" THEN
			CALL registerRoverObservation(@id, 78, accelerationX, NULL, register);
            CALL registerRoverObservation(@id, 79, accelerationY, NULL, register);
            CALL registerRoverObservation(@id, 80, accelerationZ, NULL, register);
            CALL registerRoverObservation(@id, 81, rotationX, NULL, register);
            CALL registerRoverObservation(@id, 82, rotationY, NULL, register);
            CALL registerRoverObservation(@id, 83, rotationZ, NULL, register);
            CALL registerRoverObservation(@id, 84, firstInternalTemperature, NULL, register);
            CALL registerRoverObservation(@id, 85, surfaceDistance, NULL, register);
            CALL registerRoverObservation(@id, 86, externalTemperature, NULL, register);
            CALL registerRoverObservation(@id, 87, externalHumidity, NULL, register);
            CALL registerRoverObservation(@id, 88, secondInternalTemperature, NULL, register);
            CALL registerRoverObservation(@id, 89, measuredAtmosphericPressure, NULL, register);
            CALL registerRoverObservation(@id, 90, calculatedAtmosphericPressure, NULL, register);
            CALL registerRoverObservation(@id, 91, altitude, NULL, register);
            CALL registerRoverObservation(@id, 92, measuredRZero, NULL, register);
            CALL registerRoverObservation(@id, 93, calculatedRZero, NULL, register);
            CALL registerRoverObservation(@id, 94, airQualityResistance, NULL, register);
            CALL registerRoverObservation(@id, 95, measuredPPM, NULL, register);
            CALL registerRoverObservation(@id, 96, calculatedPPM, NULL, register);
            CALL registerRoverObservation(@id, 97, NULL, GPSDateTime, register);
            CALL registerRoverObservation(@id, 98, GPSMeasuredFix, NULL, register);
            CALL registerRoverObservation(@id, 99, GPSQualityFix, NULL, register);
            CALL registerRoverObservation(@id, 100, NULL, GPSLatitudeCoordinate, register);
            CALL registerRoverObservation(@id, 101, NULL, GPSLongitudeCoordinate, register);
            CALL registerRoverObservation(@id, 102, GPSAltitudeCoordinate, NULL, register);
            CALL registerRoverObservation(@id, 103, GPSSatelliteAvailability, NULL, register);
            CALL registerRoverObservation(@id, 104, GPSAngle, NULL, register);
            CALL registerRoverObservation(@id, 105, GPSAntennaStatus, NULL, register);
            CALL registerRoverObservation(@id, 106, GPSKnotsSpeed, NULL, register);
            CALL registerRoverObservation(@id, 107, measuredMagnetism, NULL, register);
            CALL registerRoverObservation(@id, 108, voltageMagnetism, NULL, register);
            CALL registerRoverObservation(@id, 109, measuredUVRadiation, NULL, register);
            CALL registerRoverObservation(@id, 110, voltageUVRadiation, NULL, register);
            CALL registerRoverObservation(@id, 111, firstMeasuredLuxRadiation, NULL, register);
            CALL registerRoverObservation(@id, 112, firstVoltageLuxRadiation, NULL, register);
            CALL registerRoverObservation(@id, 113, secondMeasuredLuxRadiation, NULL, register);
            CALL registerRoverObservation(@id, 114, secondVoltageLuxRadiation, NULL, register);
	END CASE;
    */
END//
DELIMITER ;

-- Views

DELIMITER //
CREATE PROCEDURE getRoverAccelerationTimeSerie(IN PCB VARCHAR(30), IN competitionYear SMALLINT UNSIGNED, IN units VARCHAR(10))
BEGIN
    SELECT X.x, Y.y, Z.z, X.Time FROM (
		SELECT RoverObs.value AS "x", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "X Acceleration" AND (Measurement.units IS NULL OR Measurement.units = units)
	) AS X INNER JOIN (
		SELECT RoverObs.value AS "y", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "Y Acceleration" AND (Measurement.units IS NULL OR Measurement.units = units)
	) AS Y ON X.Time = Y.Time INNER JOIN (
		SELECT RoverObs.value AS "z", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "Z Acceleration" AND (Measurement.units IS NULL OR Measurement.units = units)
	) AS Z ON X.Time = Z.Time;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getRoverRotationTimeSerie(IN PCB VARCHAR(30), IN competitionYear SMALLINT UNSIGNED, IN units VARCHAR(10))
BEGIN
	SELECT X.x, Y.y, Z.z, X.Time FROM (
		SELECT RoverObs.value AS "x", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "X Rotation" AND (Measurement.units IS NULL OR Measurement.units = units)
	) AS X INNER JOIN (
		SELECT RoverObs.value AS "y", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "Y Rotation" AND (Measurement.units IS NULL OR Measurement.units = units)
	) AS Y ON X.Time = Y.Time INNER JOIN (
		SELECT RoverObs.value AS "z", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "Z Rotation" AND (Measurement.units IS NULL OR Measurement.units = units)
	) AS Z ON X.Time = Z.Time;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getRoverMeasurementTimeSerie(IN PCB VARCHAR(30), IN competitionYear SMALLINT UNSIGNED, IN variable VARCHAR(30), IN units VARCHAR(10), IN displayOrder BOOL)
BEGIN
    IF displayOrder THEN
		SELECT RoverObs.value AS "Value", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register DESC;
	ELSE
		SELECT RoverObs.value AS "Value", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register ASC;
    END IF;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getRoverMeasurement(IN PCB VARCHAR(30), IN competitionYear SMALLINT UNSIGNED, IN variable VARCHAR(30), IN units VARCHAR(10), IN displayOrder BOOL)
BEGIN
    IF displayOrder THEN
		SELECT RoverObs.value AS "Value" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register DESC;
	ELSE
		SELECT RoverObs.value AS "Value" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register ASC;
    END IF;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getRoverRecentMeasurement(IN PCB VARCHAR(30), IN competitionYear SMALLINT UNSIGNED, IN variable VARCHAR(30), IN units VARCHAR(10))
BEGIN
	SELECT RoverObs.value AS "Value" FROM RoverObservation AS RoverObs 
	INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
	INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
	INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
	INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
	WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
	ORDER BY RoverObs.register DESC LIMIT 1;
END//
DELIMITER ;

-- Wheels

DELIMITER //
CREATE PROCEDURE getRoverWheelsMeasurementTimeSerie(IN competitionYear SMALLINT UNSIGNED, IN variable VARCHAR(30), IN units VARCHAR(10), IN displayOrder BOOL)
BEGIN
    IF displayOrder THEN
		SELECT TopRightWheel.TopRightWheel, TopLeftWheel.TopLeftWheel, BottomRightWheel.BottomRightWheel, BottomLeftWheel.BottomLeftWheel, TopRightWheel.Time FROM (
		SELECT RoverObs.value AS "TopRightWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "TopRightWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register DESC
	) AS TopRightWheel LEFT JOIN (
		SELECT RoverObs.value AS "TopLeftWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "TopLeftWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register DESC
	) AS TopLeftWheel ON TopRightWheel.Time = TopLeftWheel.Time LEFT JOIN (
		SELECT RoverObs.value AS "BottomRightWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "BottomRightWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register DESC
	) AS BottomRightWheel ON TopRightWheel.Time = BottomRightWheel.Time LEFT JOIN (
		SELECT RoverObs.value AS "BottomLeftWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "BottomLeftWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register DESC
	) AS BottomLeftWheel ON TopRightWheel.Time = BottomLeftWheel.Time ORDER BY TopRightWheel.Time DESC;
	ELSE
		SELECT TopRightWheel.TopRightWheel, TopLeftWheel.TopLeftWheel, BottomRightWheel.BottomRightWheel, BottomLeftWheel.BottomLeftWheel, TopRightWheel.Time FROM (
		SELECT RoverObs.value AS "TopRightWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "TopRightWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register ASC
	) AS TopRightWheel LEFT JOIN (
		SELECT RoverObs.value AS "TopLeftWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "TopLeftWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register ASC
	) AS TopLeftWheel ON TopRightWheel.Time = TopLeftWheel.Time LEFT JOIN (
		SELECT RoverObs.value AS "BottomRightWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "BottomRightWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register ASC
	) AS BottomRightWheel ON TopRightWheel.Time = BottomRightWheel.Time LEFT JOIN (
		SELECT RoverObs.value AS "BottomLeftWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "BottomLeftWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register ASC
	) AS BottomLeftWheel ON TopRightWheel.Time = BottomLeftWheel.Time ORDER BY TopRightWheel.Time ASC;
    END IF;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getRoverWheelsMeasurement(IN competitionYear SMALLINT UNSIGNED, IN variable VARCHAR(30), IN units VARCHAR(10), IN displayOrder BOOL)
BEGIN
    IF displayOrder THEN
		SELECT TopRightWheel.TopRightWheel, TopLeftWheel.TopLeftWheel, BottomRightWheel.BottomRightWheel, BottomLeftWheel.BottomLeftWheel FROM (
		SELECT RoverObs.value AS "TopRightWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "TopRightWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register DESC
	) AS TopRightWheel LEFT JOIN (
		SELECT RoverObs.value AS "TopLeftWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "TopLeftWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register DESC
	) AS TopLeftWheel ON TopRightWheel.Time = TopLeftWheel.Time LEFT JOIN (
		SELECT RoverObs.value AS "BottomRightWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "BottomRightWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register DESC
	) AS BottomRightWheel ON TopRightWheel.Time = BottomRightWheel.Time LEFT JOIN (
		SELECT RoverObs.value AS "BottomLeftWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "BottomLeftWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register DESC
	) AS BottomLeftWheel ON TopRightWheel.Time = BottomLeftWheel.Time ORDER BY TopRightWheel.Time DESC;
	ELSE
		SELECT TopRightWheel.TopRightWheel, TopLeftWheel.TopLeftWheel, BottomRightWheel.BottomRightWheel, BottomLeftWheel.BottomLeftWheel FROM (
		SELECT RoverObs.value AS "TopRightWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "TopRightWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register ASC
	) AS TopRightWheel LEFT JOIN (
		SELECT RoverObs.value AS "TopLeftWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "TopLeftWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register ASC
	) AS TopLeftWheel ON TopRightWheel.Time = TopLeftWheel.Time LEFT JOIN (
		SELECT RoverObs.value AS "BottomRightWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "BottomRightWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register ASC
	) AS BottomRightWheel ON TopRightWheel.Time = BottomRightWheel.Time LEFT JOIN (
		SELECT RoverObs.value AS "BottomLeftWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "BottomLeftWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register ASC
	) AS BottomLeftWheel ON TopRightWheel.Time = BottomLeftWheel.Time ORDER BY TopRightWheel.Time ASC;
    END IF;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getRoverWheelsRecentMeasurement(IN competitionYear SMALLINT UNSIGNED, IN variable VARCHAR(30), IN units VARCHAR(10))
BEGIN
		SELECT TopRightWheel.TopRightWheel, TopLeftWheel.TopLeftWheel, BottomRightWheel.BottomRightWheel, BottomLeftWheel.BottomLeftWheel FROM (
		SELECT RoverObs.value AS "TopRightWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "TopRightWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register DESC
	) AS TopRightWheel LEFT JOIN (
		SELECT RoverObs.value AS "TopLeftWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "TopLeftWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register DESC
	) AS TopLeftWheel ON TopRightWheel.Time = TopLeftWheel.Time LEFT JOIN (
		SELECT RoverObs.value AS "BottomRightWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "BottomRightWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register DESC
	) AS BottomRightWheel ON TopRightWheel.Time = BottomRightWheel.Time LEFT JOIN (
		SELECT RoverObs.value AS "BottomLeftWheel", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "BottomLeftWheel" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) 
		ORDER BY RoverObs.register DESC
	) AS BottomLeftWheel ON TopRightWheel.Time = BottomLeftWheel.Time ORDER BY TopRightWheel.Time DESC LIMIT 1;
END//
DELIMITER ;

-- Seats

DELIMITER //
CREATE PROCEDURE getRoverSeatsMeasurementTimeSerie(IN competitionYear SMALLINT UNSIGNED, IN variable VARCHAR(30), IN units VARCHAR(10), IN displayOrder BOOL, IN denomination VARCHAR(30))
BEGIN
    IF displayOrder THEN
		SELECT PilotSeat.PilotSeat, CopilotSeat.CopilotSeat, PilotSeat.Time FROM (
		SELECT RoverObs.value AS "PilotSeat", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "PilotSeat" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) AND (Module.denomination = denomination OR Module.code = denomination)
		ORDER BY RoverObs.register DESC
	) AS PilotSeat LEFT JOIN (
		SELECT RoverObs.value AS "CopilotSeat", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "CopilotSeat" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) AND (Module.denomination = denomination OR Module.code = denomination)
		ORDER BY RoverObs.register DESC
	) AS CopilotSeat ON PilotSeat.Time = CopilotSeat.Time ORDER BY PilotSeat.Time DESC;
    ELSE
    SELECT PilotSeat.PilotSeat, CopilotSeat.CopilotSeat, PilotSeat.Time FROM (
		SELECT RoverObs.value AS "PilotSeat", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "PilotSeat" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) AND (Module.denomination = denomination OR Module.code = denomination)
		ORDER BY RoverObs.register ASC
	) AS PilotSeat LEFT JOIN (
		SELECT RoverObs.value AS "CopilotSeat", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "CopilotSeat" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) AND (Module.denomination = denomination OR Module.code = denomination)
		ORDER BY RoverObs.register ASC
	) AS CopilotSeat ON PilotSeat.Time = CopilotSeat.Time ORDER BY PilotSeat.Time ASC;
    END IF;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getRoverSeatsMeasurement(IN competitionYear SMALLINT UNSIGNED, IN variable VARCHAR(30), IN units VARCHAR(10), IN displayOrder BOOL, IN denomination VARCHAR(30))
BEGIN
    IF displayOrder THEN
		SELECT PilotSeat.PilotSeat, CopilotSeat.CopilotSeat FROM (
		SELECT RoverObs.value AS "PilotSeat", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "PilotSeat" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) AND (Module.denomination = denomination OR Module.code = denomination)
		ORDER BY RoverObs.register DESC
	) AS PilotSeat LEFT JOIN (
		SELECT RoverObs.value AS "CopilotSeat", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "CopilotSeat" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) AND (Module.denomination = denomination OR Module.code = denomination)
		ORDER BY RoverObs.register DESC
	) AS CopilotSeat ON PilotSeat.Time = CopilotSeat.Time ORDER BY PilotSeat.Time DESC;
    ELSE
    SELECT PilotSeat.PilotSeat, CopilotSeat.CopilotSeat FROM (
		SELECT RoverObs.value AS "PilotSeat", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "PilotSeat" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) AND (Module.denomination = denomination OR Module.code = denomination)
		ORDER BY RoverObs.register ASC
	) AS PilotSeat LEFT JOIN (
		SELECT RoverObs.value AS "CopilotSeat", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "CopilotSeat" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) AND (Module.denomination = denomination OR Module.code = denomination)
		ORDER BY RoverObs.register ASC
	) AS CopilotSeat ON PilotSeat.Time = CopilotSeat.Time ORDER BY PilotSeat.Time ASC;
    END IF;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getRoverSeatsRecentMeasurement(IN competitionYear SMALLINT UNSIGNED, IN variable VARCHAR(30), IN units VARCHAR(10), IN denomination VARCHAR(30))
BEGIN
		SELECT PilotSeat.PilotSeat, CopilotSeat.CopilotSeat FROM (
		SELECT RoverObs.value AS "PilotSeat", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "PilotSeat" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) AND (Module.denomination = denomination OR Module.code = denomination)
		ORDER BY RoverObs.register DESC
	) AS PilotSeat LEFT JOIN (
		SELECT RoverObs.value AS "CopilotSeat", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = "CopilotSeat" AND Measurement.variable = variable AND (Measurement.units IS NULL OR Measurement.units = units) AND (Module.denomination = denomination OR Module.code = denomination)
		ORDER BY RoverObs.register DESC
	) AS CopilotSeat ON PilotSeat.Time = CopilotSeat.Time ORDER BY PilotSeat.Time DESC LIMIT 1;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getRoverSeatsTemperaturePressureRelationship(IN PCB VARCHAR(30), IN competitionYear SMALLINT UNSIGNED, IN TemperatureUnits VARCHAR(10), IN TemperatureDenomination VARCHAR(30), IN PressureUnits VARCHAR(10), IN PressureDenomination VARCHAR(30))
BEGIN
	SELECT Temperature.Temperature, Pressure.Pressure, Temperature.Time FROM (
		SELECT RoverObs.value AS "Temperature", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "Temperature" AND Measurement.units = TemperatureUnits AND (Module.denomination = TemperatureDenomination OR Module.code = TemperatureDenomination)
	) AS Temperature INNER JOIN (
		SELECT RoverObs.value AS "Pressure", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "Atmos. Pressure measured" AND Measurement.units = PressureUnits AND (Module.denomination = PressureDenomination OR Module.code = PressureDenomination)
	) AS Pressure ON Temperature.Time = Pressure.Time;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getRoverSeatsLocationServiceStatus(IN PCB VARCHAR(30), IN competitionYear SMALLINT UNSIGNED, IN displayOrder BOOL)
BEGIN
	IF displayOrder THEN
	SELECT Latitude.Latitude, Longitude.Longitude, Altitude.Altitude, GPSDateTime.GPSDateTime, SignalQuality.SignalQuality, SatelliteAvailability.SatelliteAvailability, Angle.Angle, AntennaStatus.AntennaStatus, KnotsSpeed.KnotsSpeed, Latitude.Time FROM (
		SELECT CAST(SUBSTRING(RoverObs.notes, 1, LENGTH(RoverObs.notes)-1) AS DOUBLE)/100 AS "Latitude", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS Latitude Coordinate" 
        ORDER BY RoverObs.register DESC
	) AS Latitude INNER JOIN (
		SELECT CAST(SUBSTRING(RoverObs.notes, 1, LENGTH(RoverObs.notes)-1) AS DOUBLE)/-100 AS "Longitude", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS Longitude Coordinate" 
        ORDER BY RoverObs.register DESC
	) AS Longitude ON Latitude.Time = Longitude.Time INNER JOIN (
		SELECT RoverObs.value AS "Altitude", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "Altitude" AND Measurement.units = "m" AND (Module.denomination = "BMP180" OR Module.code = "BMP180") 
        ORDER BY RoverObs.register DESC
	) AS Altitude ON Latitude.Time = Altitude.Time INNER JOIN (
		SELECT RoverObs.notes AS "GPSDateTime", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS DateTime" 
        ORDER BY RoverObs.register DESC
	) AS GPSDateTime ON Latitude.Time = GPSDateTime.Time INNER JOIN (
		SELECT RoverObs.value AS "SignalQuality", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS Fix quality" 
        ORDER BY RoverObs.register DESC
	) AS SignalQuality ON Latitude.Time = SignalQuality.Time INNER JOIN (
		SELECT RoverObs.value AS "SatelliteAvailability", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS Satellite Availability" 
        ORDER BY RoverObs.register DESC
	) AS SatelliteAvailability ON Latitude.Time = SatelliteAvailability.Time INNER JOIN (
		SELECT RoverObs.value AS "Angle", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS Angle" 
        ORDER BY RoverObs.register DESC
	) AS Angle ON Latitude.Time = Angle.Time INNER JOIN (
		SELECT RoverObs.value AS "AntennaStatus", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS Antenna Status" 
        ORDER BY RoverObs.register DESC
	) AS AntennaStatus ON Latitude.Time = AntennaStatus.Time INNER JOIN (
		SELECT RoverObs.value AS "KnotsSpeed", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS Knots Speed" 
        ORDER BY RoverObs.register DESC
	) AS KnotsSpeed ON Latitude.Time = KnotsSpeed.Time ORDER BY Latitude.Time DESC;
    ELSE
		SELECT Latitude.Latitude, Longitude.Longitude, Altitude.Altitude, GPSDateTime.GPSDateTime, SignalQuality.SignalQuality, SatelliteAvailability.SatelliteAvailability, Angle.Angle, AntennaStatus.AntennaStatus, KnotsSpeed.KnotsSpeed, Latitude.Time FROM (
		SELECT CAST(SUBSTRING(RoverObs.notes, 1, LENGTH(RoverObs.notes)-1) AS DOUBLE)/100 AS "Latitude", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS Latitude Coordinate" 
        ORDER BY RoverObs.register ASC
	) AS Latitude INNER JOIN (
		SELECT CAST(SUBSTRING(RoverObs.notes, 1, LENGTH(RoverObs.notes)-1) AS DOUBLE)/-100 AS "Longitude", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS Longitude Coordinate" 
        ORDER BY RoverObs.register ASC
	) AS Longitude ON Latitude.Time = Longitude.Time INNER JOIN (
		SELECT RoverObs.value AS "Altitude", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "Altitude" AND Measurement.units = "m" AND (Module.denomination = "BMP180" OR Module.code = "BMP180") 
        ORDER BY RoverObs.register ASC
	) AS Altitude ON Latitude.Time = Altitude.Time INNER JOIN (
		SELECT RoverObs.notes AS "GPSDateTime", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS DateTime" 
        ORDER BY RoverObs.register ASC
	) AS GPSDateTime ON Latitude.Time = GPSDateTime.Time INNER JOIN (
		SELECT RoverObs.value AS "SignalQuality", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS Fix quality" 
        ORDER BY RoverObs.register ASC
	) AS SignalQuality ON Latitude.Time = SignalQuality.Time INNER JOIN (
		SELECT RoverObs.value AS "SatelliteAvailability", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS Satellite Availability" 
        ORDER BY RoverObs.register ASC
	) AS SatelliteAvailability ON Latitude.Time = SatelliteAvailability.Time INNER JOIN (
		SELECT RoverObs.value AS "Angle", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS Angle" 
        ORDER BY RoverObs.register ASC
	) AS Angle ON Latitude.Time = Angle.Time INNER JOIN (
		SELECT RoverObs.value AS "AntennaStatus", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS Antenna Status" 
        ORDER BY RoverObs.register ASC
	) AS AntennaStatus ON Latitude.Time = AntennaStatus.Time INNER JOIN (
		SELECT RoverObs.value AS "KnotsSpeed", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
        INNER JOIN Module AS Module ON RoverImp.Module_identificator = Module.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "GPS Knots Speed" 
        ORDER BY RoverObs.register ASC
	) AS KnotsSpeed ON Latitude.Time = KnotsSpeed.Time ORDER BY Latitude.Time ASC;
    END IF;
END//
DELIMITER ;