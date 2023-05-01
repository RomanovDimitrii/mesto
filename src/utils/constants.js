const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const photoElement = document.querySelector('.photo-grid');
const placeAddButton = document.querySelector('.profile__add-button');

const config = {
  formSelector: '.popup__form',
  inputClass: '.popup__input',
  submitButtonClass: '.popup__save-button',
  notValidButtonClass: 'popup__save-button_not-valid',
  popupInputErrorClass: 'popup__input_error-border',
  inputErrorType: '.popup__input-error_type_'
};

export {
  initialCards,
  page,
  profileEditButton,
  nameInput,
  jobInput,
  placeInput,
  linkInput,
  photoElement,
  placeAddButton,
  config
};
