let page = document.querySelector('.page');
let profileEditButton = page.querySelector('.profile__edit-button');
let popupCloseButtons = page.querySelectorAll('.popup__close-button');
let popupFormProfile = page.querySelector('.popup__form_profile');
let popupFormPlace = page.querySelector('.popup__form_place');
let popupProfile = page.querySelector('.popup_profile');
let popupPlace = page.querySelector('.popup_place');
let profileTitle = page.querySelector('.profile__title');
let profileSubTitle = page.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__text_type_name');
let jobInput = document.querySelector('.popup__text_type_job');
let placeInput = document.querySelector('.popup__text_type_place');
let linkInput = document.querySelector('.popup__text_type_link');
let photoGrid = document.querySelector('.photo-grid');
let placeAddButton = document.querySelector('.profile__add-button');
let popupImage = document.querySelector('.popup_image');
let popupImageSrc = document.querySelector('.popup__image');

let popupImageTitle = document.querySelector('.popup__image-title');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Челябинская область'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал'
  }
];

function showPopupProfile() {
  //функция добавляет класс попапу (popup_opened), передает данные в input из текущих значений profile__title и subtitle.
  popupProfile.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;
}

function showPopupPlaceAdd() {
  //функция добавляет класс попапу (popup_opened), очищает поле ввода данных
  popupPlace.classList.add('popup_opened');
  placeInput.value = '';
  linkInput.value = '';
}

popupCloseButtons.forEach(button =>
  //функция опрашивает все closeButtons, произошел ли клик, если да, фиксирует какому попапу принадлежит кнопка, передает данные попапа в функцию закрытия
  button.addEventListener('click', () => {
    const popup = button.closest('.popup');
    console.log(popup);
    closePopup(popup);
  })
);

//функция по полученным данным попапа удаляет модификатор видимости попапа
closePopup = popup => popup.classList.remove('popup_opened');

function saveProfile(evt) {
  //при сабмите меняет textcontent в profile__title и subtitle
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  popupProfile.classList.remove('popup_opened');
}

function savePlace(evt) {
  //при сабмите сохраняет данные, запускает функцию newCard
  evt.preventDefault();
  const newCard = {
    name: placeInput.value,
    link: linkInput.value,
    alt: placeInput.value
  };
  popupPlace.classList.remove('popup_opened');
  createCard(newCard);
}

initialCards.forEach(createCard);

function createCard(card) {
  // берет темплейт из html, подставляем данные из функции savePlace. Также ведет опрос всех кнопок на карточках, фиксирует нажатие, передает данные карточки, на которую нажали
  const newCard = document.querySelector('#photoTemplate').content.cloneNode(true);
  const photoGridTitle = newCard.querySelector('.photo-grid__title');
  photoGridTitle.textContent = card.name;
  const photoGridImage = newCard.querySelector('.photo-grid__image');
  photoGridImage.setAttribute('src', card.link);
  photoGridImage.setAttribute('alt', initialCards.alt);
  const likeButton = newCard.querySelector('.photo-grid__like-button');
  likeButton.addEventListener('click', handleLikeButton);
  const deleteButton = newCard.querySelector('.photo-grid__delete-button');
  deleteButton.addEventListener('click', handleDeleteButton);
  const popupImage = newCard.querySelector('.photo-grid__image');
  popupImage.addEventListener('click', openPopupImage);
  photoGrid.prepend(newCard);
}

function handleLikeButton(event) {
  //при нажатии на лайк (событие в createCard), меняет изображение лайка на закрашенное, или на незакрашенное
  const button = event.target;
  const like = button.closest('.photo-grid__like-button-image');
  if (like.getAttribute('src') === './images/like_covered.svg') {
    like.setAttribute('src', './images/like.svg');
  } else {
    like.setAttribute('src', './images/like_covered.svg');
  }
}

function handleDeleteButton(event) {
  //при нажатии на удаление карточки (событие в createCard), удаляет карточку
  const button = event.target;
  const card = button.closest('.photo-grid__item');
  card.remove();
}

function openPopupImage(event) {
  // при нажатии на картинку карточки (событие в createCard), сохраняет название и ссылку картинки
  const card = event.target;
  const imageSrc = card.closest('.photo-grid__image').getAttribute('src');
  const imageTitile = card.closest('.photo-grid__item').textContent;
  popupImageSrc.setAttribute('src', imageSrc);
  popupImageTitle.textContent = imageTitile;
  showPopupImage();
}

function showPopupImage() {
  //функция добавляет класс попапу (popup_opened)
  popupImage.classList.add('popup_opened');
}

profileEditButton.addEventListener('click', showPopupProfile);
popupFormProfile.addEventListener('submit', saveProfile);
popupFormPlace.addEventListener('submit', savePlace);
placeAddButton.addEventListener('click', showPopupPlaceAdd);
