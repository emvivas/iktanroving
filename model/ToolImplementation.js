class ToolImplementation {
    constructor(identificator, Tool, Module, properties, register, update) {
        this.identificator = identificator
        this.Tool = Tool
        this.Module = Module
        this.properties = properties
        this.register = register
        this.update = update
    }

    getIdentificator() {
        return this.identificator;
    }

    getTool() {
    return this.Tool;
    }

    setTool(Tool) {
    this.Tool = Tool;
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