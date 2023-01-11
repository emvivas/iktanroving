class CrewmateObservation {
    constructor(identificator, CrewmateMonitoring, value, notes, register){
        this.identificator = identificator
        this.CrewmateMonitoring = CrewmateMonitoring
        this.value = value
        this.notes = notes
        this.register = register
    }

    getIdentificator() {
    return this.identificator;
    }

    getCrewmateMonitoring() {
    return this.CrewmateMonitoring;
    }

    setCrewmateMonitoring(CrewmateMonitoring) {
    this.CrewmateMonitoring = CrewmateMonitoring;
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
}
