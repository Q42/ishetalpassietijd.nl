const { test } = require('node:test');
const assert = require('node:assert');
require('../passietijd.js');

test('2024-01-01 (Monday) is week 1', () => {
    assert.strictEqual(new Date(2024, 0, 1).getWeek(), 1);
});

test('2024-06-14 (Friday) is week 24', () => {
    assert.strictEqual(new Date(2024, 5, 14).getWeek(), 24);
});

test('2024-12-30 (Monday) is week 1 of next year', () => {
    assert.strictEqual(new Date(2024, 11, 30).getWeek(), 1);
});

test('2025-01-01 (Wednesday) is week 1', () => {
    assert.strictEqual(new Date(2025, 0, 1).getWeek(), 1);
});

test('2023-01-01 (Sunday) is week 52 of previous year', () => {
    assert.strictEqual(new Date(2023, 0, 1).getWeek(), 52);
});

test('2023-01-02 (Monday) is week 1', () => {
    assert.strictEqual(new Date(2023, 0, 2).getWeek(), 1);
});
