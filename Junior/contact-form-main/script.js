const submit = document.querySelector('.submit')

const firstnameInput = document.querySelector('.firstname_input')
const firstnameErr = document.querySelector('.firstname_err')

const lastnameInput = document.querySelector('.lastname_input')
const lastnameErr = document.querySelector('.lastname_err')

const emailInput = document.querySelector('.email_input')
const emailErr = document.querySelector('.email_err')

const radio0 = document.querySelector('.radio0')
const radio0Icon = document.querySelector('.radio0Icon')
const radio1 = document.querySelector('.radio1')
const radio1Icon = document.querySelector('.radio1Icon')
const radioErr = document.querySelector('.radio_err')

const messageInput = document.querySelector('.message_input')
const messageErr = document.querySelector('.message_err')

const checkInput = document.querySelector('.check_input')
const checkErr = document.querySelector('.check_err')

const alert = document.querySelector('.alert')

let radio
let allGood = true

radio1.addEventListener('click', () => {
    
    if(radio = 2){
        radio1Icon.style.backgroundImage = "url('./assets/icon-radio-selected.svg')";
        radio0Icon.style.backgroundImage = "url('./assets/icon-radio-notselected.svg')";
    }
    radio = 1
})

radio0.addEventListener('click', () => {
    
    if(radio = 2){
        radio0Icon.style.backgroundImage = "url('./assets/icon-radio-selected.svg')";
        radio1Icon.style.backgroundImage = "url('./assets/icon-radio-notselected.svg')";
    }
    radio = 2
})

submit.addEventListener('click', () => {

    let isValid = true; // Assume form is valid unless a check fails

    // First name validation
    if (!firstnameInput.value) {
        firstnameErr.style.display = 'block';
        isValid = false;
    } else {
        firstnameErr.style.display = 'none';
    }

    // Last name validation
    if (!lastnameInput.value) {
        lastnameErr.style.display = 'block';
        isValid = false;
    } else {
        lastnameErr.style.display = 'none';
    }

    // Email validation - check if empty first
    if (!emailInput.value) {
        emailErr.style.display = 'block';
        emailErr.innerHTML = 'This field is required';
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        emailErr.style.display = 'block';
        emailErr.innerHTML = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailErr.style.display = 'none';
    }

    // Radio button validation
    if (radio === undefined) {
        radioErr.style.display = 'block';
        isValid = false;
    } else {
        radioErr.style.display = 'none';
    }

    // Message validation
    if (!messageInput.value) {
        messageErr.style.display = 'block';
        isValid = false;
    } else {
        messageErr.style.display = 'none';
    }

    // Checkbox validation
    if (!checkInput.checked) {
        checkErr.style.display = 'block';
        isValid = false;
    } else {
        checkErr.style.display = 'none';
    }

    // Final check - show alert only if all validations passed
    if (isValid) {
        alert.style.display = 'flex';
    } else {
        return;
    }

    
})

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
