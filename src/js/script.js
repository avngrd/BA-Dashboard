const linkMainPage = document.querySelector('.footer-main-page');
const mainPage = document.querySelector('.header__content');
const linkSecureTitle = document.querySelector('.title-secure');
const popUp = document.querySelector('.popup');
const popUpClose = document.querySelector('.popup_close');
const loginButton = document.querySelector('.login_button');
const coursePopUp = document.querySelector('.course');
const coursePopUpClose = document.querySelector('.course_close');
const allPopUps = document.querySelector('.nav_list');
const login = document.querySelector('#login');
const password = document.querySelector('#pass');
const popUpAuthButton = document.querySelector('.popup_in');


let isAuth = false;

function authorisation(event) {
  event.preventDefault();

  if (login.value != '' && password.value != '') {
    popUp.classList.add('visually-hidden');
    loginButton.textContent = login.value;
    isAuth += true;
  } else if (login.value === '') {
    alert('Введите логин');
  } else if (password.value === '') {
    alert('Введите пароль');
  }
};

function popUpsOpenHandler(event) {
  const targetButton = event.target.closest("li");

  if (targetButton.dataset.pop === "auth") {
    popUp.classList.remove('visually-hidden');
  } else if (targetButton.dataset.pop === 'course') {
    coursePopUp.classList.remove('visually-hidden');
  };
};
allPopUps.addEventListener('click', popUpsOpenHandler);

let closePopUpCourse = () => {
  coursePopUp.classList.add('visually-hidden');
};

coursePopUpClose.addEventListener('click', closePopUpCourse);

let closePopUpAuth = () => {
  popUp.classList.add('visually-hidden');
};

popUpClose.addEventListener('click', closePopUpAuth)

let scrollToPage = () => {
  mainPage.scrollIntoView({ behavior: "smooth" });
};

linkMainPage.addEventListener("click", scrollToPage);
linkSecureTitle.addEventListener("click", scrollToPage);
