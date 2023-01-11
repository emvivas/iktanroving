class TeamMember {
    constructor(identificator, Rover, Participant,TeamMember,description,campusNumber,tshirtSize,register,update,status) {
        this.identificator = identificator
        this.Rover = Rover
        this.Participant = Participant
        this.TeamMember = TeamMember
        this.description = description
        this.campusNumber = campusNumber
        this.tshirtSize = tshirtSize
        this.register = register
        this.update = update
        this.status = status
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

    getParticipant() {
    return this.Participant;
    }

    setParticipant(Participant) {
    this.Participant = Participant;
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

    getCampusNumber() {
    return this.campusNumber;
    }

    setCampusNumber(campusNumber) {
    this.campusNumber = campusNumber;
    }

    getTshirtSize() {
    return this.tshirtSize;
    }

    setTshirtSize(tshirtSize) {
    this.tshirtSize = tshirtSize;
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