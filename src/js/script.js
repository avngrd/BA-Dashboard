const linkMainPage = document.querySelector('.footer-main-page');
const mainPage = document.querySelector('.header__content');

let scrollToPage = () => {
  mainPage.scrollIntoView({behavior:"smooth"});
};
linkMainPage.addEventListener("click", scrollToPage);
