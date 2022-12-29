const Manager = require('../lib/Manager')

describe('ManagerClass', () => {
    it('Should return Manager Office Number', () => {
        const newManager = new Manager('Kaonou', 123456, 'kaonou@gmail.com', 134)

        expect(newManager.officeNumber).toBe(134)

    })
});