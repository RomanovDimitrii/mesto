import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import './index.css';
import {
  initialCards,
  profileEditButton,
  nameInput,
  jobInput,
  placeInput,
  linkInput,
  photoElement,
  placeAddButton,
  config
} from '../utils/constants.js';

const handleFormProfileSubmit = data => {
  userInfo.setUserInfo(data);
  popupProfile.close();
};

const handleFormPlaceSubmit = () => {
  const card = {
    name: placeInput.value,
    link: linkInput.value,
    alt: placeInput.value
  };
  popupPlace.closeWithReset();
  const newCardElement = createCard(card);
  cardElement.addItem(newCardElement);
};

const popupProfile = new PopupWithForm('.popup_profile', handleFormProfileSubmit);
const popupPlace = new PopupWithForm('.popup_place', handleFormPlaceSubmit);
const popupImage = new PopupWithImage('.popup_image');

const userInfo = new UserInfo({
  profileNameSelector: '.profile__title',
  profileJobSelector: '.profile__subtitle'
});

popupProfile.setEventListeners();
popupPlace.setEventListeners();
popupImage.setEventListeners();

function showPopupProfile() {
  popupProfile.open();

  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
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
  photoElement
);

cardElement.renderer();

function createCard(items) {
  const card = new Card(items, '#photoTemplate', handleCardClick);
  return card.generateCard();
}

function handleCardClick(name, link) {
  popupImage.openPopupImage(name, link);
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

enableValidation(config);
