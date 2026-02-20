const { test } = require('node:test');
const assert = require('node:assert');
const { isPassietijd } = require('../passietijd.js');

// All scheduled passietijd dates for 2026
const passietijdDates = [
    new Date(2026, 0, 23),  // Fri
    new Date(2026, 1, 6),   // Fri
    new Date(2026, 1, 20),  // Fri
    new Date(2026, 2, 6),   // Fri
    new Date(2026, 2, 16),  // Mon (exception)
    new Date(2026, 3, 3),   // Fri
    new Date(2026, 3, 17),  // Fri
    new Date(2026, 4, 1),   // Fri
    new Date(2026, 4, 15),  // Fri
    new Date(2026, 4, 29),  // Fri
    new Date(2026, 5, 12),  // Fri
    new Date(2026, 5, 26),  // Fri
    new Date(2026, 6, 10),  // Fri
    new Date(2026, 6, 24),  // Fri
    new Date(2026, 7, 7),   // Fri
    new Date(2026, 7, 21),  // Fri
    new Date(2026, 8, 4),   // Fri
    new Date(2026, 8, 18),  // Fri
    new Date(2026, 9, 2),   // Fri
    new Date(2026, 9, 16),  // Fri
    new Date(2026, 9, 30),  // Fri
    new Date(2026, 10, 13), // Fri
    new Date(2026, 10, 27), // Fri
    new Date(2026, 11, 11), // Fri
    new Date(2026, 11, 25), // Fri
];

for (let date of passietijdDates) {
    let label = date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' });
    test(label + ' is passietijd', () => {
        assert.strictEqual(isPassietijd(date), true);
    });
}

// Some dates that are NOT passietijd (the weeks in between)
const notPassietijdDates = [
    new Date(2026, 0, 16),  // Fri, week before first passietijd
    new Date(2026, 0, 30),  // Fri, week after first passietijd
    new Date(2026, 1, 13),  // Fri, between two passietijds
    new Date(2026, 0, 21),  // Wed, non-Friday in a passietijd week
    new Date(2027, 0, 15),  // Fri, between two passietijds
];

for (let date of notPassietijdDates) {
    let label = date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' });
    test(label + ' is NOT passietijd', () => {
        assert.strictEqual(isPassietijd(date), false);
    });
}
