const Engineer = require('../lib/Engineer')

describe('EngineerClass', () => {
    it('Should return engineer github username', () => {
        const newEngineer = new Engineer('Kaonou', 123456, 'kaonou@gmail.com', 'herka10')

        expect(newEngineer.github).toBe('herka10')
    })
});