// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

const url = 'https://mesto.nomoreparties.co/v1/cohort-65';
const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_about');
const photoElement = document.querySelector('.photo-grid');
const placeAddButton = document.querySelector('.profile__add-button');
const avatarImage = document.querySelector('.profile__avatar');

const avatarInput = document.querySelector('.popup__input_type_avatar');

const config = {
  formSelector: '.popup__form',
  inputClass: '.popup__input',
  submitButtonClass: '.popup__save-button',
  notValidButtonClass: 'popup__save-button_not-valid',
  popupInputErrorClass: 'popup__input_error-border',
  inputErrorType: '.popup__input-error_type_'
};

export {
  url,
  page,
  profileEditButton,
  nameInput,
  jobInput,
  photoElement,
  placeAddButton,
  config,
  avatarImage,
  avatarInput
};
