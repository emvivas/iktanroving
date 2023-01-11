class ToolMonitoring {
    constructor(identificator, Measurement, ToolImplementation, notes, register, update, status) {
        this.identificator = identificator
        this.Measurement = Measurement
        this.ToolImplementation = ToolImplementation
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

    getToolImplementation() {
    return this.ToolImplementation;
    }

    setToolImplementation(ToolImplementation) {
    this.ToolImplementation = ToolImplementation;
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