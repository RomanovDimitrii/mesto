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
  photoElement,
  placeAddButton,
  config,
  avatarImage,
  avatarInput
} from '../utils/constants.js';

async function handleFormProfileSubmit(data) {
  try {
    const res = await api.editProfile({ data });
    userInfo.setUserInfo(res);
  } catch (error) {
    console.error(`Ошибка при обновлении данных профайла: ${error}`);
  }
}

async function handleFormAvatarSubmit(data) {
  try {
    const res = await api.editProfileAvatar(data.avatar);
    userInfo.setUserInfo(res);
  } catch (error) {
    console.error(`Ошибка при обновлении данных профайла: ${error}`);
  }
}

async function handleFormPlaceSubmit(data) {
  try {
    const card = {
      name: data.place,
      link: data.link,
      alt: data.place
    };

    const newCard = await api.postCard({ card });
    section.addItem(createCard(newCard));
  } catch (error) {
    console.error(`Ошибка при добавлении карточки: ${error}`);
  }
}

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

let userId;
Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    cards.reverse().forEach(item => {
      section.addItem(createCard(item));
    });
  })
  .catch(error => {
    console.error(`Ошибка при получении данных профайла и карточек: ${error}`);
  });

function showPopupProfile() {
  popupProfile.open();
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.about;
  formValidators['form_profile'].resetValidation();
}

function showPopupAvatar() {
  popupAvatar.open();
  const data = userInfo.getUserInfo();
  avatarInput.value = data.avatar;
  formValidators['form_profile'].resetValidation();
}

function showPopupPlaceAdd() {
  popupPlace.open();
  formValidators['form_place'].resetValidation();
}

const section = new Section(item, photoElement);

function createCard(item) {
  const card = new Card(
    item,
    '#photoTemplate',
    handleCardClick,
    id => {
      popupDeleteConfirmation.open();
      popupDeleteConfirmation.handleDeleteCardId(() => {
        api
          .deleteCard(id)
          .then(() => {
            popupDeleteConfirmation.close();
            card.deleteCard();
          })
          .catch(err => {
            renderError(`Ошибка: ${err}`);
          });
      });
    },
    userId,
    id => {
      if (card.isLiked()) {
        api
          .deleteLike(id)
          .then(res => {
            card.setLikes(res.likes);
          })
          .catch(err => {
            renderError(`Ошибка: ${err}`);
          });
      } else {
        api
          .addLike(id)
          .then(res => {
            card.setLikes(res.likes);
          })
          .catch(err => {
            renderError(`Ошибка: ${err}`);
          });
      }
    }
  );
  return card.generateCard();
}

function handleCardClick(name, link) {
  popupImage.openPopupImage(name, link);
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
