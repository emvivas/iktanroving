class AreaMember {
    constructor(identificator, TeamMember, Area, activities, register, update, status) {
        this.identificator = identificator
        this.TeamMember = TeamMember
        this.Area = Area
        this.activities = activities
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

    getArea() {
    return this.Area;
    }

    setArea(Area) {
    this.Area = Area;
    }

    getActivities() {
    return this.activities;
    }

    setActivities(activities) {
    this.activities = activities;
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

