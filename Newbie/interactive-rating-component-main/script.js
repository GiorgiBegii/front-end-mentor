const rates = document.querySelector('.rates')
const submit = document.querySelector('.btn')
const secondCard = document.querySelector('.secondCard')
const firstCard = document.querySelector('.firstCard')
const rated = document.querySelector('.rated')

let choosenRate
let lastChoosen

for(let i = 1; i <= 5; i++){
    const rate = document.createElement('div')
    rate.setAttribute('class', 'rate')
    rate.innerText = i
    rates.appendChild(rate)
    rate.addEventListener('click', () => {
        choosenRate = i
        rate.style.background = 'hsl(0, 100%, 100%)'
        if(lastChoosen != undefined) {
            document.querySelectorAll('.rate')[lastChoosen].style.background = 'hsl(213, 19%, 18%)'
        }
        lastChoosen = i - 1
    })
}

submit.addEventListener('click', () => {
    rated.innerHTML = `You selected ${choosenRate} out of 5`
    secondCard.style.display = 'flex'
    firstCard.style.display = 'none'
})