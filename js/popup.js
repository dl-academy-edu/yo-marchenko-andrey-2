const popup = document.querySelector(".popup");
const popup_open = document.querySelector(".header__contact__link");
const popup_close = document.querySelector(".popup__close");

popup_open.addEventListener('click', function (){
    popup.classList.add('popup-show')
});

popup_close.addEventListener('click', function (){
    popup.classList.remove('popup-show')
});
