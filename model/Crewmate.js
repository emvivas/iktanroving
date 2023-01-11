class Crewmate {
    constructor(identificator, TeamMember, description, register, update, status) {
        this.identificator = identificator
        this.TeamMember = TeamMember
        this.description = description
        this.register = register
        this.update = update
        this.status = status
    }
    
    getIdentificator() {
        return this.identificator;
    }

    getTeamMember() {
    return this.TeamMember;
    }

    setTeamMember(TeamMember) {
    this.TeamMember = TeamMember;
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