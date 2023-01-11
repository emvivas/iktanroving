class Participant{
    constructor(identificator, code, email, telephone, name, firstLastname, secondLastname, sex, birthday, password, countryNumber, state, city, zip, location, register, update) {
        this.identificator = identificator
        this.code = code
        this.email = email
        this.telephone = telephone
        this.name = name
        this.firstLastname = firstLastname
        this.secondLastname = secondLastname
        this.sex = sex
        this.birthday = birthday
        this.password = password
        this.countryNumber = countryNumber
        this.state = state
        this.city = city
        this.zip = zip
        this.location = location
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

    getEmail() {
    return this.email;
    }

    setEmail(email) {
    this.email = email;
    }

    getTelephone() {
    return this.telephone;
    }

    setTelephone(telephone) {
    this.telephone = telephone;
    }

    getName() {
    return this.name;
    }

    setName(name) {
    this.name = name;
    }

    getFirstLastname() {
    return this.firstLastname;
    }

    setFirstLastname(firstLastname) {
    this.firstLastname = firstLastname;
    }

    getSecondLastname() {
    return this.secondLastname;
    }

    setSecondLastname(secondLastname) {
    this.secondLastname = secondLastname;
    }

    getSex() {
    return this.sex;
    }

    setSex(sex) {
    this.sex = sex;
    }

    getBirthday() {
    return this.birthday;
    }

    setBirthday(birthday) {
    this.birthday = birthday;
    }

    getPassword() {
    return this.password;
    }

    setPassword(password) {
    this.password = password;
    }

    getCountryNumber() {
    return this.countryNumber;
    }

    setCountryNumber(countryNumber) {
    this.countryNumber = countryNumber;
    }

    getState() {
    return this.state;
    }

    setState(state) {
    this.state = state;
    }

    getCity() {
    return this.city;
    }

    setCity(city) {
    this.city = city;
    }

    getZip() {
    return this.zip;
    }

    setZip(zip) {
    this.zip = zip;
    }

    getLocation() {
    return this.location;
    }

    setLocation(location) {
    this.location = location;
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
    