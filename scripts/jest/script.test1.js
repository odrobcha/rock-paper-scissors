const myScript = require('../script');

describe( 'test my script', () => {
    test('userScore', () => {

        expect(myScript.userScore).toBe(0);
    });
})
