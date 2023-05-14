export class Card {
  constructor(
    data,
    cardTemplateSelector,
    handleCardClick,
    handleDeleteConfirm,
    userId,
    handleLikeClick
  ) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this.id = data._id;
    this._cardTemplateSelector = cardTemplateSelector;
    this._element = undefined;
    this._handleCardClick = handleCardClick;
    this._handleDeleteConfirm = handleDeleteConfirm;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector('.photo-grid__item')
      .cloneNode(true);
    return cardElement;
  }

  isLiked() {
    const ifUserLikedCard = this._likes.find(user => user._id === this._userId);
    return ifUserLikedCard;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    this._likeCountElement.textContent = this._likes.length;

    if (this.isLiked()) {
      this._handleCardLike();
    } else {
      this._handleCardNotLike();
    }
  }

  _handleCardLike() {
    this._likeButton.classList.add('photo-grid__like-button-image_active');
  }

  _handleCardNotLike() {
    this._likeButton.classList.remove('photo-grid__like-button-image_active');
  }

  deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick(this.id);
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteConfirm(this.id);
      //   this._deleteCard();
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
    this._likeCountElement = this._element.querySelector('.photo-grid__like-button-counter');

    if (this._ownerId !== this._userId) {
      this._deleteButton.style.display = 'none';
    }
    const ifUserLikedCard = this._likes.find(user => user._id === this._userId);
    if (ifUserLikedCard) {
      this._handleCardLike();
    }

    this.setLikes(this._likes);
    this._setEventListeners();

    return this._element;
  }
}
