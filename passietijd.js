// A known passietijd Friday used as the biweekly anchor.
var REFERENCE_DATE = new Date(2026, 0, 23); // Fri 23 Jan 2026

// Exceptions: dates where passietijd is moved from its regular Friday.
// Each entry maps the cancelled date (YYYY-MM-DD) to its replacement (YYYY-MM-DD).
var EXCEPTIONS = {
    '2026-03-20': '2026-03-16', // Moved from Fri to Mon
};

/**
 * Determines whether it is currently passietijd.
 *
 * Passietijd occurs every two weeks on Friday, anchored to a known reference
 * date (23 Jan 2026). Some dates may be moved to a different day; these are
 * listed as exceptions above.
 *
 * The check is evaluated in the Europe/Amsterdam timezone.
 *
 * @param {Date} now - The current date/time to check.
 * @returns {boolean} True if it is passietijd.
 */
function isPassietijd(now) {
    var timeInAmsterdam = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Amsterdam" }));
    var today = formatDate(timeInAmsterdam);

    // Check if today is an exception replacement date
    for (var cancelled in EXCEPTIONS) {
        if (EXCEPTIONS[cancelled] === today) return true;
    }

    // Check if today is a cancelled date
    if (EXCEPTIONS[today]) return false;

    // Check if today is a regular biweekly Friday
    var isFriday = timeInAmsterdam.getDay() === 5;
    if (!isFriday) return false;

    timeInAmsterdam.setHours(0, 0, 0, 0);
    var diffDays = Math.round((timeInAmsterdam - REFERENCE_DATE) / 86400000);
    return diffDays % 14 === 0;
}

if (typeof module !== 'undefined') {
    module.exports = { isPassietijd };
}

function formatDate(d) {
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
}
