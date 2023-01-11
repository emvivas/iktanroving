class Area {
    constructor(identificator, denomination, description, register, update, status) {
        this.identificator = identificator
        this.denomination = denomination
        this.description = description
        this.register = register
        this.update = update
        this.status = status
    }

getIdentificator() {
return this.identificator;
}

getDenomination() {
return this.denomination;
}

setDenomination(denomination) {
this.denomination = denomination;
}

getDescription() {
return this.description;
}

setDescription(description) {
this.description = description;
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
