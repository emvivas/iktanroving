class Measurement {
    constructor(identificator, variable, units, register, update) {
        this.identificator = identificator
        this.variable = variable
        this.units = units
        this.register = register
        this.update = update
    }

    getIdentificator() {
        return this.identificator;
    }

    getVariable() {
    return this.variable;
    }

    setVariable(variable) {
    this.variable = variable;
    }

    getUnits() {
    return this.units;
    }

    setUnits(units) {
    this.units = units;
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