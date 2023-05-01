import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupText = this._popup.querySelector('.popup__image-title');
  }
  openPopupImage(name, link) {
    super.open();
    this._popupImage.setAttribute('src', link);
    this._popupImage.setAttribute('alt', name);
    this._popupText.textContent = name;
  }
}
