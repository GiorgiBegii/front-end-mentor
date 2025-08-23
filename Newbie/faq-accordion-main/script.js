const pluses = document.querySelectorAll('.plus')
const minuses = document.querySelectorAll('.minus')
const tests = document.querySelectorAll('.accordion__body__item__text')

for(let i = 0; i < pluses.length; i++){
    pluses[i].addEventListener('click', () => {
        minuses[i].style.display = "block"
        pluses[i].style.display = "none"
        tests[i].style.display = "block"
    })

    minuses[i].addEventListener('click', () => {
        pluses[i].style.display = "block"
        minuses[i].style.display = "none"
        tests[i].style.display = "none"
    })
}