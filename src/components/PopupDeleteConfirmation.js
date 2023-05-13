import { Popup } from './Popup.js';

export class PopupDeleteConfirmation extends Popup {
  constructor(popupSelector, handleIdcard) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form-delete-confirmation');
    this._confirmButton = this._popup.querySelector('.popup__save-button_confirm');
    this._handleIdcard = handleIdcard;
  }
  handleDeleteCardId(id) {
    this.handleIdcard = id;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault();
      this.handleIdcard();
    });
  }
}
