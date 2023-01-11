class CrewmateProfile {
    constructor(identificator, Measurement, Crewmate, value, notes, register, update, status) {
        this.identificator = identificator
        this.Measurement = Measurement
        this.Crewmate = Crewmate
        this.value = value
        this.notes = notes
        this.register = register
        this.update = update
        this.status = status
    }

    getIdentificator() {
    return this.identificator;
    }

    getMeasurement() {
    return this.Measurement;
    }

    setMeasurement(Measurement) {
    this.Measurement = Measurement;
    }

    getCrewmate() {
    return this.Crewmate;
    }

    setCrewmate(Crewmate) {
    this.Crewmate = Crewmate;
    }

    getValue() {
    return this.value;
    }

    setValue(value) {
    this.value = value;
    }

    getNotes() {
    return this.notes;
    }

    setNotes(notes) {
    this.notes = notes;
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

    getStatus() {
    return this.status;
    }

    setStatus(status) {
    this.status = status;
    }

}
