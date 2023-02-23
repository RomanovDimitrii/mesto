let page = document.querySelector('.page');
let editButton = page.querySelector('.profile__edit-button');
let closeButton = page.querySelector('.popup__close-button');
let saveButton = page.querySelector('.popup__save-button');
let likeButtonImage = page.querySelector('.like-button__image');
let saveForm = page.querySelector('.popup__container');

let profileTitle = page.querySelector('.profile__title');
let profileSubTitle = page.querySelector('.profile__subtitle');

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);
saveForm.addEventListener('submit', saveProfile);
likeButtonImage.addEventListener('click', fillLikeButton);

function showPopup() {
  let editForm = page.querySelector('.popup');
  editForm.classList.add('popup_opened');
}

function fillLikeButton() {
  likeButtonImage.setAttribute('src', '../images/like_covered.svg');
}

function closePopup() {
  let editForm = page.querySelector('.popup');
  editForm.classList.remove('popup_opened');
}

function saveProfile(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('.popup__text_type_name');
  let jobInput = document.querySelector('.popup__text_type_job');
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  closePopup();
}
