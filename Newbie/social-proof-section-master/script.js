const stars = document.querySelectorAll('.header__rates__stars')

for(let i = 0; i < stars.length; i++) {
    for(let j = 0; j < 5; j++) {
        const star = document.createElement("img")
        star.src = './assets/icon-star.svg'
        stars[i].appendChild(star)
    }
}