const linkMainPage = document.querySelector('.footer-main-page');
const mainPage = document.querySelector('.header__content');
const linkSecureTitle = document.querySelector('.title-secure');


let scrollToPage = () => {
  mainPage.scrollIntoView({behavior:"smooth"});
};

linkMainPage.addEventListener("click", scrollToPage);
linkSecureTitle.addEventListener("click", scrollToPage);
