import { initialCards } from '../components/cards.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import './index.css';

const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const popupFormPlace = document.forms['form_place'];
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const photoGrid = document.querySelector('.photo-grid');
const placeAddButton = document.querySelector('.profile__add-button');

const handleFormProfileSubmit = data => {
  userInfo.setUserInfo(data);
  popupProfile.closeWithoutReset();
};

const handleFormPlaceSubmit = () => {
  const card = {
    name: placeInput.value,
    link: linkInput.value,
    alt: placeInput.value
  };
  popupPlace.close();
  const newCardElement = createCard(card);
  cardElement.addItem(newCardElement);
};

const popupProfile = new PopupWithForm('.popup_profile', handleFormProfileSubmit);
const popupPlace = new PopupWithForm('.popup_place', handleFormPlaceSubmit);

const userInfo = new UserInfo({
  profileNameSelector: '.profile__title',
  profileJobSelector: '.profile__subtitle'
});

popupProfile.setEventListeners();

function showPopupProfile() {
  popupProfile.open();
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().job;
  formValidators['form_profile'].resetValidation();
}

function showPopupPlaceAdd() {
  popupPlace.open();
  formValidators['form_place'].resetValidation();
}

const cardElement = new Section(
  {
    items: initialCards,
    renderer: item => {
      const card = createCard(item);
      cardElement.addItem(card);
    }
  },
  photoGrid
);

cardElement.renderer();

function createCard(items) {
  const card = new Card(items, '#photoTemplate', handleCardClick);
  return card.generateCard();
}

function handleCardClick(name, link) {
  const popupImage = new PopupWithImage(name, link, '.popup_image');
  popupImage.openPopupImage();
}

profileEditButton.addEventListener('click', showPopupProfile);
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
