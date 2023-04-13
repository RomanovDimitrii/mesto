const popupImage = document.querySelector('.popup_image');
const popupImageSrc = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');

export class Card {
  constructor(data, cardTemplateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardTemplateSelector = cardTemplateSelector;
    this._element = undefined;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector('.photo-grid__item')
      .cloneNode(true);
    return cardElement;
  }

  _handleCardLike() {
    this._likeButton.classList.toggle('photo-grid__like-button-image_active');
  }

  _handleDelete() {
    this._element.remove();
  }

  _handleCardClick() {
    popupImageSrc.setAttribute('src', this._link);
    popupImageSrc.setAttribute('alt', this._name);
    popupImageTitle.textContent = this._name;
    popupImage.classList.add('popup_opened');
    document.addEventListener('keydown', this._closePopupEscape);
  }

  _closePopupEscape(event) {
    if (event.key === 'Escape') {
      popupImage.classList.remove('popup_opened');
      document.removeEventListener('keydown', this.closePopupEscape);
    }
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleCardLike();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDelete();
    });

    this._cardPicture.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardPicture = this._element.querySelector('.photo-grid__image');
    this._cardPicture.src = this._link;
    this._cardPicture.alt = this._name;
    this._element.querySelector('.photo-grid__title').textContent = this._name;
    this._likeButton = this._element.querySelector('.photo-grid__like-button');
    this._deleteButton = this._element.querySelector('.photo-grid__delete-button');

    this._setEventListeners();

    return this._element;
  }
}
