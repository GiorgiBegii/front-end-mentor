const shareIcon = document.querySelector('.card__text__bottom__user__shareImg')
const share = document.querySelector('.card__text__bottom__user__share')
const user = document.querySelector('.card__text__bottom__user')

const displayWidth = window.innerWidth;


if(displayWidth > "600"){
    shareIcon.addEventListener("click", () => {
        if(share.style.display == "none") {
            share.style.display = "flex"
        }else {
            share.style.display = "none"
        }
        
    })
}else {
    shareIcon.addEventListener("click", () => {
        if(user.style.display == "none") {
            user.style.display = "flex"
            share.style.display = "none"
        }else {
            share.style.display = "flex"
            user.style.display = "none"
        }
    })
}
