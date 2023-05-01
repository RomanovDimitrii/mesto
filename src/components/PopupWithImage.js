import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(name, link, popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._name = name;
    this._link = link;
  }
  openPopupImage() {
    super.open();
    this._popup.querySelector('.popup__image').setAttribute('src', this._link);
    this._popup.querySelector('.popup__image').setAttribute('alt', this._name);
    this._popup.querySelector('.popup__image-title').textContent = this._name;
  }
}
