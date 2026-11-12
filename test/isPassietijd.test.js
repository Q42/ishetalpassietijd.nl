import { test } from 'node:test';
import assert from 'node:assert';
import { isPassietijd, isW00tcamp } from '../passietijd.js';

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

// w00tcamp 2026: Thu 12 Nov 13:00 until Fri 13 Nov 20:30 (Amsterdam time)
const w00tcampCases = [
    ['2026-11-12T11:59:00Z', false], // 12:59 Amsterdam
    ['2026-11-12T12:00:00Z', true],  // 13:00 Amsterdam
    ['2026-11-13T00:00:00Z', true],
    ['2026-11-13T19:29:00Z', true],  // 20:29 Amsterdam
    ['2026-11-13T19:30:00Z', false], // 20:30 Amsterdam
];

for (const [iso, expected] of w00tcampCases) {
    test(iso + ' w00tcamp is ' + expected, () => {
        assert.strictEqual(isW00tcamp(new Date(iso)), expected);
    });
}

test('w00tcamp counts as passietijd on a non-passietijd Thursday', () => {
    assert.strictEqual(isPassietijd(new Date('2026-11-12T15:00:00Z')), true);
});
