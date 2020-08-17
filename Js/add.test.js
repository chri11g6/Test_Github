const { TestScheduler } = require('jest');
const add = require('./add');

test('Properly adds two numbers', () => {
    expect(add(1,2)).toBe(3);
});