const Manager = require('../lib/Manager')

describe('ManagerClass', () => {
    it('Should return Manager Office Number', () => {
        const newManager = new Manager(name, id, email, officeNumber)

        expect(newManager.officeNumber).toBe('Kaonou', 123456, 'kaonou@gmail.com', 134)

    })
});