class Rover {
    constructor(identificator, denomination, competitionYear, properties, description, register, update ){
        this.identificator = identificator
        this.denomination = denomination
        this.competitionYear = competitionYear
        this.properties = properties
        this.description = description
        this.register = register
        this.update = update
    }

    getIdentificator() {
    return this.identificator;
    }

    getDenomination() {
    return this.denomination;
    }

    setDenomination(denomination) {
    this.denomination = denomination;
    }

    getCompetitionYear() {
    return this.competitionYear;
    }

    setCompetitionYear(competitionYear) {
    this.competitionYear = competitionYear;
    }

    getProperties() {
    return this.properties;
    }

    setProperties(properties) {
    this.properties = properties;
    }

    getDescription() {
    return this.description;
    }

    setDescription(description) {
    this.description = description;
    }

    getRegister() {
    return this.register;
    }

    setRegister(register) {
        this.register = register;
    }

    getUpdate() {
    return this.update;
    }

    setUpdate(update) {
    this.update = update;
    }
}

