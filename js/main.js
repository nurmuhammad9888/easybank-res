let elOpenBtn = document.querySelector(".showbtn")
let elNav = document.querySelector(".site-header__show")
let elCloseBtn = document.querySelector(".showbtn")
let elOverlay = document.querySelector(".overlay")

elOpenBtn.addEventListener("click", function(){
    elNav.classList.toggle("site-header__show-active")
    elCloseBtn.classList.toggle("showbtn-active")
    elOverlay.classList.toggle("overlay-active")
})
elOverlay.addEventListener("click", function(){
    elNav.classList.toggle("site-header__show-active")
    elCloseBtn.classList.toggle("showbtn-active")
    elOverlay.classList.toggle("overlay-active")
})