export class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._cardTemplateSelector = cardTemplateSelector;
    this._element = undefined;
    this._handleCardClick = handleCardClick;
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

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleCardLike();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDelete();
    });

    this._cardPicture.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
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
