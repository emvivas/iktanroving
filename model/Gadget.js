class Gadget {
    constructor(identificator, Rover, denomination, properties, description, brand, model, version, operatingSystem, webpage, material, register, update ){
        this.identificator = identificator
        this.Rover = Rover
        this.denomination = denomination
        this.properties = properties
        this.description = description
        this.brand = brand
        this.model = model
        this.version = version
        this.operatingSystem = operatingSystem
        this.webpage = webpage
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

    setdenomination(denomination) {
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

    getBrand() {
    return this.brand;
    }

    setBrand(brand) {
    this.brand = brand;
    }

    getModel() {
    return this.model;
    }

    setModel(model) {
    this.model = model;
    }

    getVersion() {
    return this.version;
    }

    setVersion(version) {
    this.version = version;
    }

    getOperatingSystem() {
    return this.operatingSystem;
    }

    setOperatingSystem(operatingSystem) {
    this.operatingSystem = operatingSystem;
    }

    getWebpage() {
    return this.webpage;
    }

    setWebpage(webpage) {
    this.webpage = webpage;
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
