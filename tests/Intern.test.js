const Intern = require('../lib/Intern')

describe('InternClass', () => {
    it('Should return intern school', () => {
        const newIntern = new Intern('Kaonou', 123456, 'kaonou@gmail.com', 'UW of WI')

        expect(newIntern.school).toBe('UW of WI')
    })
});