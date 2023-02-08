-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema iktanroving
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema iktanroving
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `iktanroving` DEFAULT CHARACTER SET utf8mb4 ;
USE `iktanroving` ;

-- -----------------------------------------------------
-- Table `iktanroving`.`Rover`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`Rover` (
  `identificator` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `denomination` VARCHAR(30) NOT NULL,
  `competitionYear` SMALLINT UNSIGNED NOT NULL,
  `properties` VARCHAR(150) NULL,
  `description` TINYTEXT NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  UNIQUE INDEX `denomination_UNIQUE` (`denomination` ASC) VISIBLE,
  UNIQUE INDEX `competition_UNIQUE` (`competitionYear` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`Participant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`Participant` (
  `identificator` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(25) NOT NULL,
  `email` VARCHAR(320) NOT NULL,
  `telephone` VARCHAR(25) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `firstLastname` VARCHAR(50) NOT NULL,
  `secondLastname` VARCHAR(50) NULL,
  `sex` CHAR(1) NOT NULL DEFAULT 'W',
  `birthday` DATE NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `countryNumber` SMALLINT UNSIGNED NOT NULL,
  `state` VARCHAR(30) NULL,
  `city` VARCHAR(30) NULL,
  `zip` VARCHAR(15) NULL,
  `location` VARCHAR(150) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `studentEnrollment_UNIQUE` (`code` ASC) VISIBLE,
  UNIQUE INDEX `phoneNumber_UNIQUE` (`telephone` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`TeamMember`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`TeamMember` (
  `identificator` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Rover_identificator` TINYINT UNSIGNED NOT NULL,
  `Participant_identificator` SMALLINT UNSIGNED NOT NULL,
  `TeamMember_identificator` SMALLINT UNSIGNED NULL,
  `description` VARCHAR(150) NULL,
  `campusNumber` TINYINT UNSIGNED NOT NULL,
  `tshirtSize` VARCHAR(3) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  `status` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_TeamMember_Rover_idx` (`Rover_identificator` ASC) VISIBLE,
  INDEX `fk_TeamMember_Participant1_idx` (`Participant_identificator` ASC) VISIBLE,
  INDEX `fk_TeamMember_TeamMember1_idx` (`TeamMember_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_TeamMember_Rover`
    FOREIGN KEY (`Rover_identificator`)
    REFERENCES `iktanroving`.`Rover` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_TeamMember_Participant1`
    FOREIGN KEY (`Participant_identificator`)
    REFERENCES `iktanroving`.`Participant` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_TeamMember_TeamMember1`
    FOREIGN KEY (`TeamMember_identificator`)
    REFERENCES `iktanroving`.`TeamMember` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`Area`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`Area` (
  `identificator` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `denomination` VARCHAR(30) NOT NULL,
  `description` TINYTEXT NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  `status` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  UNIQUE INDEX `denomination_UNIQUE` (`denomination` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`AreaMember`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`AreaMember` (
  `identificator` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `TeamMember_identificator` SMALLINT UNSIGNED NOT NULL,
  `Area_identificator` TINYINT UNSIGNED NOT NULL,
  `activities` VARCHAR(150) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  `status` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_AreaMember_TeamMember1_idx` (`TeamMember_identificator` ASC) VISIBLE,
  INDEX `fk_AreaMember_Area1_idx` (`Area_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_AreaMember_TeamMember1`
    FOREIGN KEY (`TeamMember_identificator`)
    REFERENCES `iktanroving`.`TeamMember` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_AreaMember_Area1`
    FOREIGN KEY (`Area_identificator`)
    REFERENCES `iktanroving`.`Area` (`identificator`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`Crewmate`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`Crewmate` (
  `identificator` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `TeamMember_identificator` SMALLINT UNSIGNED NOT NULL,
  `description` VARCHAR(150) NOT NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  `status` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_Crewmate_TeamMember1_idx` (`TeamMember_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_Crewmate_TeamMember1`
    FOREIGN KEY (`TeamMember_identificator`)
    REFERENCES `iktanroving`.`TeamMember` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`Module`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`Module` (
  `identificator` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(30) NOT NULL,
  `denomination` VARCHAR(30) NOT NULL,
  `properties` VARCHAR(150) NULL,
  `description` TINYTEXT NULL,
  `brand` VARCHAR(30) NULL,
  `model` VARCHAR(30) NULL,
  `version` VARCHAR(15) NULL,
  `webpage` VARCHAR(320) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  UNIQUE INDEX `code_UNIQUE` (`code` ASC) VISIBLE,
  UNIQUE INDEX `denomination_UNIQUE` (`denomination` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`RoverImplementation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`RoverImplementation` (
  `identificator` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `printedCircuitBoard` VARCHAR(30) NOT NULL,
  `Rover_identificator` TINYINT UNSIGNED NOT NULL,
  `Module_identificator` TINYINT UNSIGNED NOT NULL,
  `properties` VARCHAR(150) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`identificator`, `printedCircuitBoard`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_RoverImplementation_Rover1_idx` (`Rover_identificator` ASC) VISIBLE,
  INDEX `fk_RoverImplementation_Module1_idx` (`Module_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_RoverImplementation_Rover1`
    FOREIGN KEY (`Rover_identificator`)
    REFERENCES `iktanroving`.`Rover` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_RoverImplementation_Module1`
    FOREIGN KEY (`Module_identificator`)
    REFERENCES `iktanroving`.`Module` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`Tool`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`Tool` (
  `identificator` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Rover_identificator` TINYINT UNSIGNED NOT NULL,
  `denomination` VARCHAR(30) NOT NULL,
  `properties` VARCHAR(150) NULL,
  `description` TINYTEXT NULL,
  `material` VARCHAR(25) NOT NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_Tool_Rover1_idx` (`Rover_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_Tool_Rover1`
    FOREIGN KEY (`Rover_identificator`)
    REFERENCES `iktanroving`.`Rover` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`ToolImplementation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`ToolImplementation` (
  `identificator` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Tool_identificator` TINYINT UNSIGNED NOT NULL,
  `Module_identificator` TINYINT UNSIGNED NOT NULL,
  `properties` VARCHAR(150) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_ToolImplementation_Tool1_idx` (`Tool_identificator` ASC) VISIBLE,
  INDEX `fk_ToolImplementation_Module1_idx` (`Module_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_ToolImplementation_Tool1`
    FOREIGN KEY (`Tool_identificator`)
    REFERENCES `iktanroving`.`Tool` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_ToolImplementation_Module1`
    FOREIGN KEY (`Module_identificator`)
    REFERENCES `iktanroving`.`Module` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`Gadget`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`Gadget` (
  `identificator` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Rover_identificator` TINYINT UNSIGNED NOT NULL,
  `denomination` VARCHAR(30) NOT NULL,
  `properties` VARCHAR(150) NULL,
  `description` TINYTEXT NULL,
  `brand` VARCHAR(30) NULL,
  `model` VARCHAR(30) NULL,
  `version` VARCHAR(15) NULL,
  `operatingSystem` VARCHAR(30) NULL,
  `webpage` VARCHAR(320) NULL,
  `material` VARCHAR(25) NOT NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`identificator`),
  INDEX `fk_Gadget_Rover1_idx` (`Rover_identificator` ASC) VISIBLE,
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  CONSTRAINT `fk_Gadget_Rover1`
    FOREIGN KEY (`Rover_identificator`)
    REFERENCES `iktanroving`.`Rover` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`CrewmateImplementation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`CrewmateImplementation` (
  `identificator` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Gadget_identificator` TINYINT UNSIGNED NOT NULL,
  `Crewmate_identificator` TINYINT UNSIGNED NOT NULL,
  `Module_identificator` TINYINT UNSIGNED NOT NULL,
  `properties` VARCHAR(150) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_CrewmateImplementation_Crewmate1_idx` (`Crewmate_identificator` ASC) VISIBLE,
  INDEX `fk_CrewmateImplementation_Module1_idx` (`Module_identificator` ASC) VISIBLE,
  INDEX `fk_CrewmateImplementation_Gadget1_idx` (`Gadget_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_CrewmateImplementation_Crewmate1`
    FOREIGN KEY (`Crewmate_identificator`)
    REFERENCES `iktanroving`.`Crewmate` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_CrewmateImplementation_Module1`
    FOREIGN KEY (`Module_identificator`)
    REFERENCES `iktanroving`.`Module` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_CrewmateImplementation_Gadget1`
    FOREIGN KEY (`Gadget_identificator`)
    REFERENCES `iktanroving`.`Gadget` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`Measurement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`Measurement` (
  `identificator` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `variable` VARCHAR(30) NOT NULL,
  `units` VARCHAR(10) NOT NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  UNIQUE INDEX `variable_UNIQUE` (`variable` ASC) VISIBLE,
  INDEX `variable_INDEX` (`variable` ASC) VISIBLE,
  INDEX `units_INDEX` (`units` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`ToolMonitoring`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`ToolMonitoring` (
  `identificator` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Measurement_identificator` TINYINT UNSIGNED NOT NULL,
  `ToolImplementation_identificator` SMALLINT UNSIGNED NOT NULL,
  `notes` VARCHAR(150) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  `status` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_ToolMonitoring_Measurement1_idx` (`Measurement_identificator` ASC) VISIBLE,
  INDEX `fk_ToolMonitoring_ToolImplementation1_idx` (`ToolImplementation_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_ToolMonitoring_Measurement1`
    FOREIGN KEY (`Measurement_identificator`)
    REFERENCES `iktanroving`.`Measurement` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_ToolMonitoring_ToolImplementation1`
    FOREIGN KEY (`ToolImplementation_identificator`)
    REFERENCES `iktanroving`.`ToolImplementation` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`RoverMonitoring`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`RoverMonitoring` (
  `identificator` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Measurement_identificator` TINYINT UNSIGNED NOT NULL,
  `RoverImplementation_identificator` SMALLINT UNSIGNED NOT NULL,
  `notes` VARCHAR(150) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  `status` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_RoverMonitoring_Measurement1_idx` (`Measurement_identificator` ASC) VISIBLE,
  INDEX `fk_RoverMonitoring_RoverImplementation1_idx` (`RoverImplementation_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_RoverMonitoring_Measurement1`
    FOREIGN KEY (`Measurement_identificator`)
    REFERENCES `iktanroving`.`Measurement` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_RoverMonitoring_RoverImplementation1`
    FOREIGN KEY (`RoverImplementation_identificator`)
    REFERENCES `iktanroving`.`RoverImplementation` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`CrewmateMonitoring`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`CrewmateMonitoring` (
  `identificator` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Measurement_identificator` TINYINT UNSIGNED NOT NULL,
  `CrewmateImplementation_identificator` TINYINT UNSIGNED NOT NULL,
  `notes` VARCHAR(150) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  `status` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_CrewmateMonitoring_Measurement1_idx` (`Measurement_identificator` ASC) VISIBLE,
  INDEX `fk_CrewmateMonitoring_CrewmateImplementation1_idx` (`CrewmateImplementation_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_CrewmateMonitoring_Measurement1`
    FOREIGN KEY (`Measurement_identificator`)
    REFERENCES `iktanroving`.`Measurement` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_CrewmateMonitoring_CrewmateImplementation1`
    FOREIGN KEY (`CrewmateImplementation_identificator`)
    REFERENCES `iktanroving`.`CrewmateImplementation` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`RoverObservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`RoverObservation` (
  `identificator` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `RoverMonitoring_identificator` SMALLINT UNSIGNED NOT NULL,
  `value` DOUBLE NULL,
  `notes` VARCHAR(50) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_RoverObservation_RoverMonitoring1_idx` (`RoverMonitoring_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_RoverObservation_RoverMonitoring1`
    FOREIGN KEY (`RoverMonitoring_identificator`)
    REFERENCES `iktanroving`.`RoverMonitoring` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  INDEX `RoverObservation_register_INDEX` (`register` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`ToolObservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`ToolObservation` (
  `identificator` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `ToolMonitoring_identificator` SMALLINT UNSIGNED NOT NULL,
  `value` DOUBLE NULL,
  `notes` VARCHAR(50) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_ToolObservation_ToolMonitoring1_idx` (`ToolMonitoring_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_ToolObservation_ToolMonitoring1`
    FOREIGN KEY (`ToolMonitoring_identificator`)
    REFERENCES `iktanroving`.`ToolMonitoring` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  INDEX `ToolObservation_register_INDEX` (`register` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`CrewmateObservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`CrewmateObservation` (
  `identificator` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `CrewmateMonitoring_identificator` SMALLINT UNSIGNED NOT NULL,
  `value` DOUBLE NULL,
  `notes` VARCHAR(50) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_CrewmateObservation_CrewmateMonitoring1_idx` (`CrewmateMonitoring_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_CrewmateObservation_CrewmateMonitoring1`
    FOREIGN KEY (`CrewmateMonitoring_identificator`)
    REFERENCES `iktanroving`.`CrewmateMonitoring` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  INDEX `CrewmateObservation_register_INDEX` (`register` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`CrewmateProfile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`CrewmateProfile` (
  `identificator` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Measurement_identificator` TINYINT UNSIGNED NOT NULL,
  `Crewmate_identificator` TINYINT UNSIGNED NOT NULL,
  `value` DOUBLE NOT NULL,
  `notes` VARCHAR(50) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  `status` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_CrewmateProfile_Measurement1_idx` (`Measurement_identificator` ASC) VISIBLE,
  INDEX `fk_CrewmateProfile_Crewmate1_idx` (`Crewmate_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_CrewmateProfile_Measurement1`
    FOREIGN KEY (`Measurement_identificator`)
    REFERENCES `iktanroving`.`Measurement` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_CrewmateProfile_Crewmate1`
    FOREIGN KEY (`Crewmate_identificator`)
    REFERENCES `iktanroving`.`Crewmate` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`ToolProfile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`ToolProfile` (
  `identificator` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Measurement_identificator` TINYINT UNSIGNED NOT NULL,
  `Tool_identificator` TINYINT UNSIGNED NOT NULL,
  `value` DOUBLE NOT NULL,
  `notes` VARCHAR(50) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  `status` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_ToolProfile_Measurement1_idx` (`Measurement_identificator` ASC) VISIBLE,
  INDEX `fk_ToolProfile_Tool1_idx` (`Tool_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_ToolProfile_Measurement1`
    FOREIGN KEY (`Measurement_identificator`)
    REFERENCES `iktanroving`.`Measurement` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_ToolProfile_Tool1`
    FOREIGN KEY (`Tool_identificator`)
    REFERENCES `iktanroving`.`Tool` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`ModuleProfile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`ModuleProfile` (
  `identificator` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Measurement_identificator` TINYINT UNSIGNED NOT NULL,
  `Module_identificator` TINYINT UNSIGNED NOT NULL,
  `value` DOUBLE NOT NULL,
  `notes` VARCHAR(50) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  `status` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_ModuleProfile_Measurement1_idx` (`Measurement_identificator` ASC) VISIBLE,
  INDEX `fk_ModuleProfile_Module1_idx` (`Module_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_ModuleProfile_Measurement1`
    FOREIGN KEY (`Measurement_identificator`)
    REFERENCES `iktanroving`.`Measurement` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_ModuleProfile_Module1`
    FOREIGN KEY (`Module_identificator`)
    REFERENCES `iktanroving`.`Module` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`GadgetProfile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`GadgetProfile` (
  `identificator` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Measurement_identificator` TINYINT UNSIGNED NOT NULL,
  `Gadget_identificator` TINYINT UNSIGNED NOT NULL,
  `value` DOUBLE NOT NULL,
  `notes` VARCHAR(50) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  `status` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_GadgetProfile_Measurement1_idx` (`Measurement_identificator` ASC) VISIBLE,
  INDEX `fk_GadgetProfile_Gadget1_idx` (`Gadget_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_GadgetProfile_Measurement1`
    FOREIGN KEY (`Measurement_identificator`)
    REFERENCES `iktanroving`.`Measurement` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_GadgetProfile_Gadget1`
    FOREIGN KEY (`Gadget_identificator`)
    REFERENCES `iktanroving`.`Gadget` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iktanroving`.`RoverProfile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iktanroving`.`RoverProfile` (
  `identificator` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Measurement_identificator` TINYINT UNSIGNED NOT NULL,
  `Rover_identificator` TINYINT UNSIGNED NOT NULL,
  `value` DOUBLE NOT NULL,
  `notes` VARCHAR(50) NULL,
  `register` DATETIME NOT NULL DEFAULT NOW(),
  `rowUpdate` DATETIME NOT NULL DEFAULT NOW(),
  `status` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`identificator`),
  UNIQUE INDEX `identificator_UNIQUE` (`identificator` ASC) VISIBLE,
  INDEX `fk_RoverProfile_Measurement1_idx` (`Measurement_identificator` ASC) VISIBLE,
  INDEX `fk_RoverProfile_Rover1_idx` (`Rover_identificator` ASC) VISIBLE,
  CONSTRAINT `fk_RoverProfile_Measurement1`
    FOREIGN KEY (`Measurement_identificator`)
    REFERENCES `iktanroving`.`Measurement` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_RoverProfile_Rover1`
    FOREIGN KEY (`Rover_identificator`)
    REFERENCES `iktanroving`.`Rover` (`identificator`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
