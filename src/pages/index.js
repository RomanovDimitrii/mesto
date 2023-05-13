import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupDeleteConfirmation } from '../components/PopupDeleteConfirmation.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { API } from '../components/Api.js';
import './index.css';
import {
  url,
  profileEditButton,
  nameInput,
  jobInput,
  placeInput,
  linkInput,
  photoElement,
  placeAddButton,
  config,
  avatarImage,
  avatarInput,
  popupSaveButton
} from '../utils/constants.js';

async function handleFormProfileSubmit(data) {
  try {
    document.querySelector('.popup__save-button_profile').textContent = 'Сохранение...';
    userInfo.setUserInfo(data);
    await api.editProfile({ data });

    popupProfile.close();
    document.querySelector('.popup__save-button_profile').textContent = 'Сохранить';
  } catch (error) {
    console.error(`Ошибка при обновлении данных профайла: ${error}`);
  }
}

async function handleFormAvatarSubmit() {
  try {
    document.querySelector('.popup__save-button_avatar').textContent = 'Сохранение...';
    console.log(popupSaveButton);
    const data = await api.getProfile();

    data.avatar = avatarInput.value;
    userInfo.setUserInfo(data);
    await api.editProfileAvatar(data.avatar);

    popupAvatar.close();
    document.querySelector('.popup__save-button_avatar').textContent = 'Сохранить';
  } catch (error) {
    console.error(`Ошибка при обновлении данных профайла: ${error}`);
  }
}

async function handleFormPlaceSubmit() {
  try {
    document.querySelector('.popup__save-button_place').textContent = 'Сохранение...';
    const card = {
      name: placeInput.value,
      link: linkInput.value,
      alt: placeInput.value
    };

    const newCard = await api.postCard({ card });
    section.addItem(createCard(newCard));
    popupPlace.closeWithReset();
    document.querySelector('.popup__save-button_place').textContent = 'Сохранить';
  } catch (error) {
    console.error(`Ошибка при добавлении карточки: ${error}`);
  }
}
//data.owner._id
const popupProfile = new PopupWithForm('.popup_profile', handleFormProfileSubmit);
const popupPlace = new PopupWithForm('.popup_place', handleFormPlaceSubmit);
const popupImage = new PopupWithImage('.popup_image');
const popupAvatar = new PopupWithForm('.popup_avatar', handleFormAvatarSubmit);

const popupDeleteConfirmation = new PopupDeleteConfirmation('.popup_delete-confirmation');

const api = new API({
  url: url,
  headers: {
    authorization: '28e66ce0-e1c0-46c6-ba61-67192a6d327c',
    'Content-Type': 'application/json'
  }
});
let item = {};

const userInfo = new UserInfo({
  profileNameSelector: '.profile__title',
  profileJobSelector: '.profile__subtitle',
  avatar: avatarImage
});

popupProfile.setEventListeners();
popupPlace.setEventListeners();
popupImage.setEventListeners();
popupAvatar.setEventListeners();

async function showPopupProfile() {
  try {
    popupProfile.open();
    const data = await api.getProfile();
    nameInput.value = data.name;
    jobInput.value = data.about;

    setUserData(data);
    formValidators['form_profile'].resetValidation();
  } catch (error) {
    console.error(`Ошибка при получении данных профайла: ${error}`);
  }
}

async function showPopupAvatar() {
  try {
    popupAvatar.open();
    const data = await api.getProfile();
    avatarInput.value = data.avatar;
    //    setUserData(data);

    formValidators['form_profile'].resetValidation();
  } catch (error) {
    console.error(`Ошибка при получении данных профайла: ${error}`);
  }
}

let userId;
async function setUserData() {
  const data = await api.getProfile();
  userId = data._id;
  userInfo.setUserInfo(data);
}
setUserData();

const section = new Section(item, photoElement);

function showPopupPlaceAdd() {
  popupPlace.open();
  formValidators['form_place'].resetValidation();
}

async function addCards() {
  try {
    const data = await api.getInitialCards();

    data.forEach(item => {
      section.addItem(createCard(item));
    });
  } catch (error) {
    console.error(`Ошибка при добавлении карточки: ${error}`);
  }
}

addCards();

function createCard(item) {
  const card = new Card(
    item,
    '#photoTemplate',
    handleCardClick,
    id => {
      popupDeleteConfirmation.open();
      popupDeleteConfirmation.handleDeleteCardId(() => {
        deleteCard(id);
        popupDeleteConfirmation.close();
        card.deleteCard();
      });
    },
    userId,
    id => {
      if (card.isLiked()) {
        api.deleteLike(id).then(res => {
          card.setLikes(res.likes);
        });
      } else {
        api.addLike(id).then(res => {
          card.setLikes(res.likes);
        });
      }
    }
  );
  return card.generateCard();
}

function handleCardClick(name, link) {
  popupImage.openPopupImage(name, link);
}

async function deleteCard(id) {
  try {
    await api.deleteCard(id);
  } catch (error) {
    console.error(`Ошибка при удалении карточки: ${error}`);
  }
}

popupDeleteConfirmation.setEventListeners();
profileEditButton.addEventListener('click', showPopupProfile);
placeAddButton.addEventListener('click', showPopupPlaceAdd);
avatarImage.addEventListener('click', showPopupAvatar);

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
