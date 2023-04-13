import { initialCards } from './cards.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { formData } from './formData.js';

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

function showPopupProfile() {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;
}

function showPopupPlaceAdd() {
  openPopup(popupPlace);
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
  if (event.target === event.currentTarget) {
    const popup = event.target;
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
    console.log(popupEscape);
    closePopup(popupEscape);
  }
}

function saveProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  closePopup(popupProfile);
}

const createCard = newCard => {
  const cardItem = newCard.generateCard();
  photoGrid.prepend(cardItem);
};

function savePlace(evt) {
  //при сабмите сохраняет данные, запускает функцию newCard
  evt.preventDefault();
  const card = {
    name: placeInput.value,
    link: linkInput.value,
    alt: placeInput.value
  };
  closePopup(popupPlace);
  const newCard = new Card(card, '#photoTemplate');
  createCard(newCard);
  placeInput.value = '';
  linkInput.value = '';
  evt.submitter.classList.add('popup__save-button_not-valid');
  evt.submitter.disabled = true;
}

initialCards.forEach(item => {
  const newCard = new Card(item, '#photoTemplate');
  createCard(newCard);
});

popupList.forEach(popup => {
  popup.addEventListener('mouseup', handleMouseClose);
});

profileEditButton.addEventListener('click', showPopupProfile);
popupFormProfile.addEventListener('submit', saveProfile);
popupFormPlace.addEventListener('submit', savePlace);
placeAddButton.addEventListener('click', showPopupPlaceAdd);

new FormValidator(popupFormProfile, formData).enableValidation();
new FormValidator(popupFormPlace, formData).enableValidation();

// для вызова FormValidator для всех форм
//const formList = document.querySelectorAll('.popup__form');
//formList.forEach(form => {
// const inputList = form.querySelectorAll('.popup__input');
// new FormValidator(form, formData).enableValidation();
//});
