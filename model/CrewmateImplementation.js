class CrewmateImplementation {
    constructor(identificator,Gadget,Crewmate,Module,properties,register,update) {
        this.identificator = identificator
        this.Gadget = Gadget
        this.Crewmate = Crewmate
        this.Module = Module
        this.properties = properties
        this.register = register
        this.update = update
    }

    getIdentificator() {
        return this.identificator;
    }

    getGadget() {
    return this.Gadget;
    }

    setGadget(Gadget) {
    this.Gadget = Gadget;
    }

    getCrewmate() {
    return this.Crewmate;
    }

    setCrewmate(Crewmate) {
    this.Crewmate = Crewmate;
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