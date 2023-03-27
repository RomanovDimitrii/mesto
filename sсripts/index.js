const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const popupCloseButtons = page.querySelectorAll('.popup__close-button');
const popupFormProfile = document.forms['form_profile'];
const popupFormPlace = document.forms['form_place'];
const popupProfile = page.querySelector('.popup_profile');
const popupPlace = page.querySelector('.popup_place');
const profileTitle = page.querySelector('.profile__title');
const profileSubTitle = page.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const placeInput = document.querySelector('.popup__text_type_place');
const linkInput = document.querySelector('.popup__text_type_link');
const photoGrid = document.querySelector('.photo-grid');
const placeAddButton = document.querySelector('.profile__add-button');
const popupImage = document.querySelector('.popup_image');
const popupImageSrc = document.querySelector('.popup__image');
const cardTemplate = document.querySelector('#photoTemplate');
const popupImageTitle = document.querySelector('.popup__image-title');
const popupList = document.querySelectorAll('.popup');

function showPopupProfile() {
  //функция добавляет класс попапу (popup_opened), передает данные в input из текущих значений profile__title и subtitle.

  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;
}

function showPopupPlaceAdd() {
  //функция добавляет класс попапу (popup_opened), очищает поле ввода данных
  openPopup(popupPlace);
}

function showPopupImage() {
  //функция добавляет класс попапу (popup_opened)
  openPopup(popupImage);
}

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

function closePopupEscape(event) {
  if (event.key === 'Escape') {
    const popupEscape = document.querySelector('.popup_opened');
    closePopup(popupEscape);
  }
}

//функция по полученным данным попапа удаляет модификатор видимости попапа
closePopup = popup => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
};

//функция по полученным данным попапа добавляет модификатор видимости попапа
openPopup = popup => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
};

function saveProfile(evt) {
  //при сабмите меняет textcontent в profile__title и subtitle
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  closePopup(popupProfile);
}

function savePlace(evt) {
  //при сабмите сохраняет данные, запускает функцию newCard
  evt.preventDefault();
  const newCard = {
    name: placeInput.value,
    link: linkInput.value,
    alt: placeInput.value
  };
  closePopup(popupPlace);
  createCard(newCard); //тут надо геткард
  placeInput.value = '';
  linkInput.value = '';
  evt.submitter.classList.add('popup__save-button_not-valid');
  evt.submitter.disabled = true;
}

initialCards.forEach(createCard);

function createCard(card) {
  // В константу newCard заносит данные первичного массива, добавляются новые через savePlace, или удаляются .
  const newCard = getCard(card);

  photoGrid.prepend(newCard);
}

function getCard(card) {
  // берет темплейт из html, подставляем данные из функции savePlace, или  массива initialCards
  const cardItem = cardTemplate.content.cloneNode(true);
  const photoGridTitle = cardItem.querySelector('.photo-grid__title');
  photoGridTitle.textContent = card.name;
  const photoGridImage = cardItem.querySelector('.photo-grid__image');
  photoGridImage.setAttribute('src', card.link);
  photoGridImage.setAttribute('alt', card.name);
  setListeners(cardItem);
  return cardItem;
}

function setListeners(cardItem) {
  //Ведет опрос всех кнопок на карточках, фиксирует нажатие, передает данные карточки, на которую нажали
  const likeButton = cardItem.querySelector('.photo-grid__like-button');
  likeButton.addEventListener('click', handleLikeButton);
  const deleteButton = cardItem.querySelector('.photo-grid__delete-button');
  deleteButton.addEventListener('click', handleDeleteButton);
  const popupImage = cardItem.querySelector('.photo-grid__image');
  popupImage.addEventListener('click', openPopupImage);
}

function handleLikeButton(event) {
  //при нажатии на лайк (событие в createCard), меняет изображение лайка на закрашенное, или на незакрашенное
  const button = event.target;
  const like = button.closest('.photo-grid__like-button-image');
  like.classList.toggle('photo-grid__like-button-image_active');
}

function handleDeleteButton(event) {
  //при нажатии на удаление карточки (событие в createCard), удаляет карточку
  const button = event.target;
  const card = button.closest('.photo-grid__item');
  card.remove();
}

function handleEscButton(event, popup) {
  //при нажатии на удаление карточки (событие в createCard), удаляет карточку
  if (event.keyCode === 'Escape') {
    console.log('ESC');
    closePopup(popup);
  }
}

function openPopupImage(event) {
  // при нажатии на картинку карточки (событие в createCard), сохраняет название и ссылку картинки
  const card = event.target;
  const imageSrc = card.closest('.photo-grid__image').getAttribute('src');
  const imageTitile = card.closest('.photo-grid__item').textContent;
  const imageAlt = card.closest('.photo-grid__image').getAttribute('alt');
  popupImageSrc.setAttribute('src', imageSrc);
  popupImageSrc.setAttribute('alt', imageTitile);
  popupImageTitle.textContent = imageTitile;
  showPopupImage();
}
popupList.forEach(popup => {
  popup.addEventListener('click', handleMouseClose);
});

profileEditButton.addEventListener('click', showPopupProfile);
popupFormProfile.addEventListener('submit', saveProfile);
popupFormPlace.addEventListener('submit', savePlace);
placeAddButton.addEventListener('click', showPopupPlaceAdd);
