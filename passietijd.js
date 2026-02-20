/**
 * Returns the ISO 8601 week number (1-53) of the date.
 *
 * @returns {number} The ISO week number.
 */
Date.prototype.getWeek = function() {
    var d = new Date(this.getTime());
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    var yearStart = new Date(d.getFullYear(), 0, 1);
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

/**
 * Determines whether it is currently passietijd.
 *
 * Passietijd is every Friday in an odd ISO week number,
 * evaluated in the Europe/Amsterdam timezone.
 *
 * @param {Date} now - The current date/time to check.
 * @returns {boolean} True if it is passietijd.
 */
function isPassietijd(now) {
    var timeInAmsterdam = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Amsterdam" }));
    var isFriday = timeInAmsterdam.getDay() === 5;
    var weekNumber = timeInAmsterdam.getWeek();
    return isFriday && weekNumber % 2 !== 0;
}

if (typeof module !== 'undefined') {
    module.exports = { isPassietijd };
}
