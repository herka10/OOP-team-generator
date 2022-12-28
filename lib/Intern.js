const Employee = require('./Employee')

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    } 

    getSchool() {
        return this.school
    }

    super(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole() {
        return "Intern"
    }
}

module.export = Intern
