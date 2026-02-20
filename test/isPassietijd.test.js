const { test } = require('node:test');
const assert = require('node:assert');
const { isPassietijd } = require('../passietijd.js');

test('Friday in an odd week → true', () => {
    // 2024-01-05 is Friday, week 1 (odd)
    assert.strictEqual(isPassietijd(new Date(2024, 0, 5, 12, 0)), true);
});

test('Friday in an even week → false', () => {
    // 2024-01-12 is Friday, week 2 (even)
    assert.strictEqual(isPassietijd(new Date(2024, 0, 12, 12, 0)), false);
});

test('non-Friday in an odd week → false', () => {
    // 2024-01-03 is Wednesday, week 1 (odd)
    assert.strictEqual(isPassietijd(new Date(2024, 0, 3, 12, 0)), false);
});

test('non-Friday in an even week → false', () => {
    // 2024-01-10 is Wednesday, week 2 (even)
    assert.strictEqual(isPassietijd(new Date(2024, 0, 10, 12, 0)), false);
});
