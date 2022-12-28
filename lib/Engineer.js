const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    } 

    getGithub() {
        return this.github
    }

    super(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole() {
        return "Engineer"
    }
}

module.export = Engineer
