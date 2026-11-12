// A known passietijd Friday used as the biweekly anchor.
const REFERENCE_DATE = new Date(2026, 0, 23); // Fri 23 Jan 2026

// Exceptions: dates where passietijd is moved from its regular Friday.
// Each entry maps the cancelled date (YYYY-MM-DD) to its replacement (YYYY-MM-DD).
const EXCEPTIONS = {
    '2026-03-20': '2026-03-16', // Moved from Fri to Mon
};

// w00tcamp is the yearly Q42 hackathon and counts as passietijd.
// Bounds are Amsterdam wall-clock time, matching how isPassietijd compares.
// Add a new entry each year.
const W00TCAMPS = [
    { start: new Date(2026, 10, 12, 13, 0), end: new Date(2026, 10, 13, 20, 30) }, // Thu 12 Nov 13:00 - Fri 13 Nov 20:30
];

function toAmsterdamTime(now) {
    return new Date(now.toLocaleString("en-US", { timeZone: "Europe/Amsterdam" }));
}

/**
 * Determines whether it is currently w00tcamp.
 *
 * @param {Date} now - The current date/time to check.
 * @returns {boolean} True if w00tcamp is in progress.
 */
export function isW00tcamp(now) {
    const timeInAmsterdam = toAmsterdamTime(now);
    return W00TCAMPS.some(({ start, end }) => timeInAmsterdam >= start && timeInAmsterdam < end);
}

/**
 * Determines whether it is currently passietijd.
 *
 * Passietijd occurs every two weeks on Friday, anchored to a known reference
 * date (23 Jan 2026). Some dates may be moved to a different day; these are
 * listed as exceptions above.
 *
 * The check is evaluated in the Europe/Amsterdam timezone 
 * because that's where all Q42 offices are located.
 *
 * @param {Date} now - The current date/time to check.
 * @returns {boolean} True if it is passietijd.
 */
export function isPassietijd(now) {
    if (isW00tcamp(now)) return true;

    const timeInAmsterdam = toAmsterdamTime(now);
    const today = formatDate(timeInAmsterdam);

    // Check if today is an exception replacement date
    for (const cancelled in EXCEPTIONS) {
        if (EXCEPTIONS[cancelled] === today) return true;
    }

    // Check if today is a cancelled date
    if (EXCEPTIONS[today]) return false;

    // Check if today is a regular biweekly Friday
    const isFriday = timeInAmsterdam.getDay() === 5;
    if (!isFriday) return false;

    timeInAmsterdam.setHours(0, 0, 0, 0);
    const diffDays = Math.round((timeInAmsterdam - REFERENCE_DATE) / 86400000);
    return diffDays % 14 === 0;
}

function formatDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
}
