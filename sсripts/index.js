import { initialCards } from './cards.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const popupCloseButtons = page.querySelectorAll('.popup__close-button');
const popupFormProfile = document.forms['form_profile'];
const popupFormPlace = document.forms['form_place'];
const popupProfile = page.querySelector('.popup_profile');
const popupPlace = page.querySelector('.popup_place');
const profileTitle = page.querySelector('.profile__title');
const profileSubTitle = page.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const photoGrid = document.querySelector('.photo-grid');
const placeAddButton = document.querySelector('.profile__add-button');
const popupList = document.querySelectorAll('.popup');
const popupImage = document.querySelector('.popup_image');
const popupImageSrc = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');

function showPopupProfile() {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;
  formValidators['form_profile'].resetValidation();
}

function showPopupPlaceAdd() {
  openPopup(popupPlace);
  formValidators['form_place'].resetValidation();
}

const openPopup = popup => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
};

popupCloseButtons.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => {
    closePopup(popup);
  });
});

function handleMouseClose(event) {
  const popup = event.currentTarget;
  if (event.target === popup) {
    closePopup(popup);
  }
}

const closePopup = popup => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
};

function closePopupEscape(event) {
  if (event.key === 'Escape') {
    const popupEscape = document.querySelector('.popup_opened');
    closePopup(popupEscape);
  }
}

function saveProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  closePopup(popupProfile);
}

function getCard(card) {
  const cardElement = new Card(card, '#photoTemplate', handleCardClick).generateCard();
  return cardElement;
}

const createCard = card => {
  const cardItem = getCard(card);
  photoGrid.prepend(cardItem);
};

function savePlace(evt) {
  evt.preventDefault();
  const card = {
    name: placeInput.value,
    link: linkInput.value,
    alt: placeInput.value
  };
  closePopup(popupPlace);
  createCard(card);
  evt.target.reset(); // очистка формы
}

initialCards.forEach(item => {
  createCard(item);
});

function handleCardClick(name, link) {
  popupImageSrc.setAttribute('src', link);
  popupImageSrc.setAttribute('alt', name);
  popupImageTitle.textContent = name;
  openPopup(popupImage);
}

popupList.forEach(popup => {
  popup.addEventListener('mouseup', handleMouseClose);
});

profileEditButton.addEventListener('click', showPopupProfile);
popupFormProfile.addEventListener('submit', saveProfile);
popupFormPlace.addEventListener('submit', savePlace);
placeAddButton.addEventListener('click', showPopupPlaceAdd);

const formValidators = {};

const enableValidation = config => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(formElement => {
    const validator = new FormValidator(formElement, config);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputClass: '.popup__input',
  submitButtonClass: '.popup__save-button',
  notValidButtonClass: 'popup__save-button_not-valid',
  popupInputErrorClass: 'popup__input_error-border',
  inputErrorType: '.popup__input-error_type_'
});
