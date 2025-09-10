const button = document.querySelector('.card-middle_button');

const dayInput = document.querySelector('.dayInput');
const monthInput = document.querySelector('.monthInput');
const yearInput = document.querySelector('.yearInput');

const dayInputErr = document.querySelector('.dayInput_err');
const monthInputErr = document.querySelector('.monthInput_err');
const yearInputErr = document.querySelector('.yearInput_err');

const yearResult = document.querySelector('.card-results_year');
const monthResult = document.querySelector('.card-results_month');
const dayResult = document.querySelector('.card-results_day');

button.addEventListener('click', () => {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    const now = new Date();
    const birthDate = new Date(year, month - 1, day);

    // Reset errors
    dayInputErr.innerHTML = '';
    monthInputErr.innerHTML = '';
    yearInputErr.innerHTML = '';

    // Validation
    let valid = true;

    if (!dayInput.value) {
        dayInputErr.innerHTML = 'This field is required';
        valid = false;
    }

    if (!monthInput.value) {
        monthInputErr.innerHTML = 'This field is required';
        valid = false;
    }

    if (!yearInput.value) {
        yearInputErr.innerHTML = 'This field is required';
        valid = false;
    }

    if (year > now.getFullYear()) {
        yearInputErr.innerHTML = 'Must be in the past';
        valid = false;
    }

    if (month < 1 || month > 12) {
        monthInputErr.innerHTML = 'Must be a valid month';
        valid = false;
    }

    if (day < 1 || day > 31) {
        dayInputErr.innerHTML = 'Must be a valid day';
        valid = false;
    }

    // Check if the date is real (e.g., not Feb 30)
    if (isNaN(birthDate.getTime()) || birthDate.getDate() !== day || birthDate.getMonth() !== month - 1 || birthDate.getFullYear() !== year) {
        dayInputErr.innerHTML = 'Must be a valid date';
        valid = false;
    }

    if (!valid) return;

    // Calculate age
    let ageYears = now.getFullYear() - year;
    let ageMonths = now.getMonth() - (month - 1);
    let ageDays = now.getDate() - day;

    if (ageDays < 0) {
        ageMonths--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        ageDays += previousMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Display result
    yearResult.innerHTML = ageYears;
    monthResult.innerHTML = ageMonths;
    dayResult.innerHTML = ageDays;
});
