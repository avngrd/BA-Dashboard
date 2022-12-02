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
const footerRecButton = document.querySelector('.footer-rec');
const recContainer = document.querySelector('.feedback__container');
const profileClose = document.querySelector('.profile_close');
const profileOut = document.querySelector('.profile-out');
const profileHeaderButton = document.querySelector('.profile-header');
const profilePopUp = document.querySelector('.user-profile');
const profileLogin = document.querySelector('.profile_login');

let isAuth = false;

function authorisation(event) {
  event.preventDefault();

  if (login.value === '') {
    alert('Введите логин');
  } else if (password.value === '') {
    alert('Введите пароль');
  }else if(login.value.length > 20){
    alert('Длина логина должна составлять от 8-20 символов');
  }else{
    popUp.classList.add('visually-hidden');
    loginButton.classList.add('visually-hidden');
    profileHeaderButton.classList.remove('visually-hidden');
    profileLogin.textContent = login.value;
    isAuth = true;
  }
};

popUpAuthButton.addEventListener('click', authorisation);

function popUpsOpenHandler(event) {
  const targetButton = event.target.closest("li");

  if (targetButton.dataset.pop === "auth") {
    popUp.classList.remove('visually-hidden');
  } else if (targetButton.dataset.pop === 'course') {
    coursePopUp.classList.remove('visually-hidden');
  }else if(targetButton.dataset.pop === 'profile'){
  profilePopUp.classList.remove('visually-hidden');
  }
};
allPopUps.addEventListener('click', popUpsOpenHandler);

let logOut = () => {
  profilePopUp.classList.add('visually-hidden');
  profileHeaderButton.classList.add('visually-hidden');
  loginButton.classList.remove('visually-hidden');
};

profileOut.addEventListener('click', logOut);

let closeProfilePopUp = () => {
  profilePopUp.classList.add('visually-hidden');
}
profileClose.addEventListener('click', closeProfilePopUp);

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

let scrollToFeedbackBlock =() => {
  recContainer.scrollIntoView({ behavior: "smooth" });
};

footerRecButton.addEventListener('click', scrollToFeedbackBlock);

