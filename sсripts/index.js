let page = document.querySelector('.page');
let profileEditButton = page.querySelector('.profile__edit-button');
let popupCloseButton = page.querySelector('.popup__close-button');
// let likeButtonImage = page.querySelector('.like-button__image');
let popupForm = page.querySelector('.popup__container');
let editForm = page.querySelector('.popup');
let profileTitle = page.querySelector('.profile__title');
let profileSubTitle = page.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__text_type_name');
let jobInput = document.querySelector('.popup__text_type_job');

// likeButtonImage.addEventListener('click', fillLikeButton);

function showPopup() {
  //функция добавляет класс попапу (display none меняет на flex), передает данные в input из текущих значений profile__title и subtitle.
  editForm.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;
}

// function fillLikeButton() {
//   likeButtonImage.setAttribute('src', './images/like_covered.svg');
// }

function closePopup() {
  //функция убирает класс попапу (display flex меняет на none)
  editForm.classList.remove('popup_opened');
}

function saveProfile(evt) {
  //при сабмите меняет textcontent в profile__title и subtitle
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  closePopup();
}

profileEditButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', saveProfile);
