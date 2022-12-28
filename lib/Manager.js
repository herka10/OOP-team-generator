const Employee = require('./Employee')

class Manager extends Employee {
    super(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    } 

    getOfficeNumber() {
        return this.officeNumber
    }    

    getRole() {
        return "Manager"
    }
}

module.exports = Manager
