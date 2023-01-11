class GadgetProfile {
    constructor(identificator, code, denomination, properties, description, brand, model, version, webpage, register, update) {
        this.identificator = identificator
        this.code = code
        this.denomination = denomination
        this.properties = properties
        this.description = description
        this.brand = brand
        this.model = model
        this.version = version
        this.webpage = webpage
        this.register = register
        this.update = update
    }

    getIdentificator() {
        return this.identificator;
    }

    getCode() {
    return this.code;
    }

    setCode(code) {
    this.code = code;
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

    getWebpage() {
    return this.webpage;
    }

    setWebpage(webpage) {
    this.webpage = webpage;
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