const send = document.querySelector('.comp__left__email__send');
const errIcon = document.querySelector('.comp__left__email__errIcon');
const errText = document.querySelector('.comp__left__email__errText');
const emailInput = document.querySelector('.comp__left__email__input'); // assuming this is your input field

function isValidEmail(email) {
  // Simple regex for basic validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

send.addEventListener('click', () => {
  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    errIcon.style.opacity = '1';
    errText.style.opacity = '1';
    emailInput.style.border = '2px solid hsl(0, 93%, 68%)'; // optional: show error border
  } else {
    errIcon.style.opacity = '0';
    errText.style.opacity = '0';
    emailInput.style.border = '2px solid var(hsl(0, 36%, 70%))'; // or reset to default
  }
});
