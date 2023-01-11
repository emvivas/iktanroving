class RoverImplementation {
    constructor(identificator, Rover, Module, properties, register, update) {
        this.identificator = identificator
        this.Rover = Rover
        this.Module = Module
        this.properties = properties
        this.register = register
        this.update = update
    }

    getIdentificator() {
        return this.identificator;
    }

    getRover() {
    return this.Rover;
    }

    setRover(Rover) {
    this.Rover = Rover;
    }

    getModule() {
    return this.Module;
    }

    setModule(Module) {
    this.Module = Module;
    }

    getProperties() {
    return this.properties;
    }

    setProperties(properties) {
    this.properties = properties;
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