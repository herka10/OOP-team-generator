const Employee = require('../lib/Employee')

describe('EmployeeClass', () => {
    it('Should return employee name', () => {
        const newEmployee = new Employee('Kaonou', 123456, 'kaonou@gmail.com')

        expect(newEmployee.name).toBe('Kaonou')
    })
});