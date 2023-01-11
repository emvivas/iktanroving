class ToolObservation {
    constructor(identificator,ToolMonitoring,value,notes,register) {
        this.identificator = identificator
        this.ToolMonitoring = ToolMonitoring
        this.value = value
        this.notes = notes
        this.register = register
    }

    getIdentificator() {
        return this.identificator;
    }

    getToolMonitoring() {
    return this.ToolMonitoring;
    }

    setToolMonitoring(ToolMonitoring) {
    this.ToolMonitoring = ToolMonitoring;
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