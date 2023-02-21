let page = document.querySelector('.page');
let editButton = page.querySelector('.profile__edit-button');
let closeButton = page.querySelector('.edit-form__close-button');
let saveButton = page.querySelector('.edit-form__save-button');

let profileTitle = page.querySelector('.profile__title');
let profileSubTitle = page.querySelector('.profile__subtitle');

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);
saveButton.addEventListener('click', saveProfile);
function showPopup() {
  let editForm = page.querySelector('.edit-form');
  editForm.classList.remove('edit-form_display_hidden');
  console.log('показал');
}

function closePopup() {
  let editForm = page.querySelector('.edit-form');
  editForm.classList.add('edit-form_display_hidden');
}

function editProfile() {
  let heading = document.querySelector('.edit-form__text_type_heading');
  let description = document.querySelector('.edit-form__text_type_description');
  profileTitle.textContent = heading.value;
  profileSubTitle.textContent = description.value;
}

function saveProfile() {
  console.log('Прошло');
  editProfile();
  closePopup();
}
