const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const calcBtn = document.querySelector("#calcBtn");
const errorEl = document.querySelector("#error");
const resultEl = document.querySelector("#result");


// Result elements for displaying the calculated age
const yearsEl = document.querySelector("#years");
const monthsEl = document.querySelector("#months");
const daysEl = document.querySelector("#days");


function validate(day, month, year) {

    const today = new Date();
    today.setHours(0, 0, 0, 0);    // ignore time


    if (!day || !month || !year) {
        if (!day) dayInput.classList.add("invalid");
        else dayInput.classList.remove("invalid");

        if (!month) monthInput.classList.add("invalid");
        else monthInput.classList.remove("invalid");

        if (!year) yearInput.classList.add("invalid");
        else yearInput.classList.remove("invalid");

        return "Please fill in all three fields.";
    }

    if (month < 1 || month > 12) {
        monthInput.classList.add("invalid");
        return "Month must be between 1 and 12.";
    }

    if (day < 1 || day > 31) {
        dayInput.classList.add("invalid");
        return "Day must be between 1 and 31.";
    }

    if (year < 1900 || year > today.getFullYear()) {
        yearInput.classList.add("invalid");
        return `Year must be between 1900 and ${today.getFullYear()}.`;
    }

    // Check if the date actually exists. E.g. Feb 30 is invalid, April 31 is invalid, etc.
    const birth = new Date(year, month - 1, day);   // month is 0-indexed

    if (
        birth.getFullYear() !== year ||
        birth.getMonth() !== month - 1 ||
        birth.getDate() !== day
    ) {
        dayInput.classList.add("invalid");
        monthInput.classList.add("invalid");
        return `Invalid date. ${month}/${day} does not exist.`;
    }

    if (birth > today) {
        dayInput.classList.add("invalid");
        monthInput.classList.add("invalid");
        yearInput.classList.add("invalid");
        return "Date of birth cannot be in the future.";
    }

    dayInput.classList.remove("invalid");
    monthInput.classList.remove("invalid");
    yearInput.classList.remove("invalid");
    return null;    // no error
}



function calculateAge(day, month, year) {

    const today = new Date();
    const birth = new Date(year, month - 1, day);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;

        const prevMonthLastDay = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += prevMonthLastDay;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}



function showError(message) {
    errorEl.textContent = message;
    resultEl.style.display = "none";
}

function clearError() {
    errorEl.textContent = "";
}

function showResult(years, months, days) {

    yearsEl.textContent = years;
    monthsEl.textContent = months;
    daysEl.textContent = days;

    // Trigger the fadeUp animation by removing and re-adding the resultEl from the DOM
    resultEl.style.display = "none";

    // setTimeout 0 gives the browser one frame to reset
    // before showing it again — so animation plays fresh
    setTimeout(() => {
        resultEl.style.display = "grid";
    }, 0);

    clearError();
}



function handleCalculate() {

    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    const error = validate(day, month, year);

    if (error) {
        showError(error);
        return;
    }

    const { years, months, days } = calculateAge(day, month, year);
    showResult(years, months, days);
}



calcBtn.addEventListener("click", handleCalculate);

// Allow Enter key from any of the three inputs
[dayInput, monthInput, yearInput].forEach(input => {
    input.addEventListener("keydown", (e) => {
        if(e.key === "Enter") handleCalculate();
    })
});