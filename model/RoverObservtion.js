class RoverObservation {
    constructor(identificator, RoverMonitoring, value, notes, register){
        this.identificator = identificator
        this.RoverMonitoring = RoverMonitoring
        this.value = value
        this.notes = notes
        this.register = register
    }

    getIdentificator() {
    return this.identificator;
    }

    getRoverMonitoring() {
    return this.RoverMonitoring;
    }

    setRoverMonitoring(RoverMonitoring) {
    this.RoverMonitoring = RoverMonitoring;
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