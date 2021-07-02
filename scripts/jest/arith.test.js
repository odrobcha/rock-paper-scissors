const { add, mul, sub, div } = require('./arith');

test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
});

xtest('3 * 4 = 12', () => {                                                     //scip the test
    expect(mul(3, 4)).toBe(12);
});

test.each([[1, 1, 0], [-1, 2, -3], [2, 2, 0]])(
    '%i - %i equals %i', (a, b, expected) => {
        expect(sub(a, b)).toBe(expected);
    },
);

test.each([[1, 1, 1], [-1, 2, -0.5], [2, 2, 1]])(
    '%i / %i equals %i', (a, b, expected) => {
        expect(div(a, b)).toBe(expected);
    },
);