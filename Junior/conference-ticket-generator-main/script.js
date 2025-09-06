const form = document.querySelector('.form')

const file = document.getElementById("file-upload")
const uploadContainer = document.querySelector(".form__upload__container")
const uploadContainerImg = document.querySelector(".form__upload__container__img")

const text = document.querySelector('.form__upload__container__text')
const buttons = document.querySelector('.form__upload__container__buttons')
const removeBtn = document.querySelector('.form__upload__container__buttons__remove')
const changeBtn = document.querySelector('.form__upload__container__buttons__change')
const generateBtn = document.querySelector('.form__inputs__generate')

const imgAlertImg = document.querySelector('.form__info__img')
const imgAlertText = document.querySelector('.form__info__alert')

const fullNameInput = document.querySelector('.input-fullname');
const emailInput = document.querySelector('.input-email');
const githubInput = document.querySelector('.input-github');
const formInputs = document.querySelector('.form__inputs');

// Error message elements
const fullnameError = document.querySelector('.fullname-error');
const emailError = document.querySelector('.email-error');
const githubError = document.querySelector('.github-error');


const ticketPage = document.querySelector('.ticket')
const congratsName = document.querySelector('.congrats__name')
const congratsEmail = document.querySelector('.congrats__email')
const ticketImg = document.querySelector('.ticket__img')
const ticketName = document.querySelector('.ticket__bg__profile__name')
const ticketgithub = document.querySelector('.ticket__bg__profile__github')

let imgLink
const defaultImg = './assets/images/icon-upload.svg'
const selectedFile = file.files[0];

// Update image preview on file change
uploadContainer.addEventListener("change", () => {
    

    if(selectedFile){
        const allowedTypes = ['image/jpeg', 'image/png'];
        const maxSizeBytes = 500 * 1024;

        //Check file Type
        if (!allowedTypes.includes(selectedFile.type)) {
            imgAlertImg.src = './assets/images/icon-info-err.svg'
            imgAlertText.style.color = 'hsl(7, 71%, 60%)'
            imgAlertText.innerHTML = `File type is ${selectedFile.type}. Please upload a file jpeg or png`
            return
        }

        //Check file Size
        if (selectedFile.size > maxSizeBytes) {
            imgAlertImg.src = './assets/images/icon-info-err.svg'
            imgAlertText.style.color = 'hsl(7, 71%, 60%)'
            imgAlertText.innerHTML = 'File to large. Please upload a photo under 500KB'
            return
        }

        imgLink = URL.createObjectURL(selectedFile)
        uploadContainerImg.src = imgLink
        text.style.display = 'none'
        buttons.style.display = 'flex'
    }

})


// Remove image
removeBtn.addEventListener('click', () => {
    uploadContainerImg.src = defaultImg
    text.style.display = 'flex'
    buttons.style.display = 'none'
    file.value = ''
})

// Trigger file input on change click
changeBtn.addEventListener('click', () => {
    file.click();
})

 generateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Reset errors
    fullnameError.style.display = 'none';
    emailError.style.display = 'none';
    githubError.style.display = 'none';

    let isValid = true;

    // Full name validation
    if (fullNameInput.value.trim().length < 2) {
      fullnameError.textContent = 'Please enter a valid full name (at least 2 characters).';
      fullnameError.style.display = 'block';
      isValid = false;
    }

    // Email validation (simple regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      emailError.style.display = 'block';
      isValid = false;
    }

    // GitHub username validation
    if (!githubInput.value.trim().startsWith('@') || githubInput.value.trim().length < 2) {
      githubError.textContent = 'GitHub username must start with "@" and have at least one character after it.';
      githubError.style.display = 'block';
      isValid = false;
    }

    if(!selectedFile){
        imgAlertImg.src = './assets/images/icon-info-err.svg'
        imgAlertText.style.color = 'hsl(7, 71%, 60%)'
        imgAlertText.innerHTML = `Upload file`
    }

    if (isValid && selectedFile) {
      form.style.display = 'none';
      ticketPage.style.display = 'flex'
      congratsName.innerHTML = `Congrats, <span>${fullNameInput.value}</span>! Your ticket is ready.`
      congratsEmail.innerHTML = `We've emailed your ticket to <span>${emailInput.value}</span> and will send updates in the run up to the event.`
      ticketImg.src = imgLink
      ticketName.innerHTML = fullNameInput.value
      ticketgithub.innerHTML = githubInput.value
    }
  });