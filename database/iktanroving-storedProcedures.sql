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
CREATE PROCEDURE registerRoverObservation(OUT _identificator SMALLINT UNSIGNED, IN _RoverMonitoring_identificator SMALLINT UNSIGNED, IN _value DOUBLE, IN _notes VARCHAR(50))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_notes);
    INSERT INTO RoverObservation(RoverMonitoring_identificator, value, notes) VALUE (_RoverMonitoring_identificator, _value, _notes);
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
CREATE PROCEDURE registerToolObservation(OUT _identificator BIGINT UNSIGNED, IN _ToolMonitoring_identificator SMALLINT, IN _value DOUBLE , IN _notes VARCHAR(50))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_notes);
    INSERT INTO ToolObservation(ToolMonitoring_identificator, value, notes) VALUE (_ToolMonitoring_identificator, _value, _notes);
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
CREATE PROCEDURE registerCrewmateObservation(OUT _identificator BIGINT UNSIGNED, IN _CrewmateMonitoring_identificator SMALLINT, IN _value DOUBLE, IN _notes VARCHAR(50))
BEGIN
	SET _identificator = NULL;
    CALL validateString(_notes);
    INSERT INTO CrewmateObservation(CrewmateMonitoring_identificator, value, notes) VALUE (_CrewmateMonitoring_identificator, _value, _notes);
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
CREATE PROCEDURE registerWheelRoverStatus(IN PCB VARCHAR(30), IN accelerationX DOUBLE, IN accelerationY DOUBLE, IN accelerationZ DOUBLE, IN rotationX DOUBLE, IN rotationY DOUBLE, IN rotationZ DOUBLE, IN rotationVelocity DOUBLE, IN RPM DOUBLE, IN surfaceDistance DOUBLE, IN internalTemperature DOUBLE)
BEGIN
    CASE PCB
		WHEN "TopRightWheel" THEN
			CALL registerRoverObservation(@id, 1, accelerationX, NULL);
            CALL registerRoverObservation(@id, 2, accelerationY, NULL);
            CALL registerRoverObservation(@id, 3, accelerationZ, NULL);
            CALL registerRoverObservation(@id, 4, rotationX, NULL);
            CALL registerRoverObservation(@id, 5, rotationY, NULL);
            CALL registerRoverObservation(@id, 6, rotationZ, NULL);
            CALL registerRoverObservation(@id, 8, rotationVelocity, NULL);
            CALL registerRoverObservation(@id, 9, RPM, NULL);
            CALL registerRoverObservation(@id, 10, surfaceDistance, NULL);
            CALL registerRoverObservation(@id, 7, internalTemperature, NULL);
		WHEN "TopLeftWheel" THEN
			SET @id = NULL;
		WHEN "BottomRightWheel" THEN
			SET @id = NULL;
		WHEN "BottomLeftWheel" THEN
			SET @id = NULL;
    END CASE;
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
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "X Acceleration" AND Measurement.units = units
	) AS X INNER JOIN (
		SELECT RoverObs.value AS "y", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "Y Acceleration" AND Measurement.units = units
	) AS Y ON X.Time = Y.Time INNER JOIN (
		SELECT RoverObs.value AS "z", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "Z Acceleration" AND Measurement.units = units
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
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "X Rotation" AND Measurement.units = units
	) AS X INNER JOIN (
		SELECT RoverObs.value AS "y", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "Y Rotation" AND Measurement.units = units
	) AS Y ON X.Time = Y.Time INNER JOIN (
		SELECT RoverObs.value AS "z", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = "Z Rotation" AND Measurement.units = units
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
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = variable AND Measurement.units = units 
		ORDER BY RoverObs.register DESC;
	ELSE
		SELECT RoverObs.value AS "Value", RoverObs.register AS "Time" FROM RoverObservation AS RoverObs 
		INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
		INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
		INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
		INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
		WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = variable AND Measurement.units = units 
		ORDER BY RoverObs.register ASC;
    END IF;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getRoverMeasurement(IN PCB VARCHAR(30), IN competitionYear SMALLINT UNSIGNED, IN variable VARCHAR(30), IN units VARCHAR(10))
BEGIN
	SELECT RoverObs.value AS "Value" FROM RoverObservation AS RoverObs 
	INNER JOIN RoverMonitoring AS RoverMon ON RoverObs.RoverMonitoring_identificator = RoverMon.identificator 
	INNER JOIN Measurement AS Measurement ON RoverMon.Measurement_identificator = Measurement.identificator 
	INNER JOIN RoverImplementation AS RoverImp ON RoverMon.RoverImplementation_identificator = RoverImp.identificator 
	INNER JOIN Rover AS Rover ON RoverImp.Rover_identificator = Rover.identificator 
	WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = variable AND Measurement.units = units 
	ORDER BY RoverObs.register ASC;
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
	WHERE Rover.competitionYear = competitionYear AND RoverImp.printedCircuitBoard = PCB AND Measurement.variable = variable AND Measurement.units = units 
	ORDER BY RoverObs.register DESC LIMIT 1;
END//
DELIMITER ;
