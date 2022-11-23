const linkMainPage = document.querySelector('.footer-main-page');
const mainPage = document.querySelector('.header__content');
const linkSecureTitle = document.querySelector('.title-secure');
const popUp = document.querySelector('.popup');
const popUpClose = document.querySelector('.popup_close');

let closePopUp = ()=>{
  popUp.classList.add('.visually-hidden');
}
popUpClose.addEventListener('click', closePopUp);

let scrollToPage = () => {
  mainPage.scrollIntoView({behavior:"smooth"});
};

linkMainPage.addEventListener("click", scrollToPage);
linkSecureTitle.addEventListener("click", scrollToPage);
