class Tool {
    constructor(identificator, Rover, denomination , properties , description , material , register , update  ){
        this.identificator = identificator
        this.Rover = Rover
        this.denomination = denomination
        this.properties = properties
        this.description = description
        this.material = material
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

    getDenomination() {
    return this.denomination;
    }

    setDenomination(denomination) {
    this.denomination = denomination;
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

    getMaterial() {
    return this.material;
    }

    setMaterial(material) {
    this.material = material;
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
