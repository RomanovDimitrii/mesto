export class FormValidator {
  constructor(form, formData) {
    this._form = form;
    this._inputClass = formData.inputClass;
    this._submitButtonClass = formData.submitButtonClass;
    this._notValidButtonClass = formData.notValidButtonClass;
    this._popupInputErrorClass = formData.popupInputErrorClass;
    this._inputErrorType = formData.inputErrorType;
    this._inputList = this._form.querySelectorAll(this._inputClass);
    this._submitButton = this._form.querySelector(this._submitButtonClass);
  }

  _setEventListeners() {
    this._toggleButtonState(this._submitButton, this._inputList);
    this._inputList.forEach(input => {
      input.addEventListener('input', e => {
        this._checkInputValidity(input);
        this._toggleButtonState(this._submitButton, this._inputList);
      });
    });
  }

  _disableButton = () => {
    this._submitButton.classList.add(this._notValidButtonClass);
    this._submitButton.disabled = true;
  };

  _enableButton = () => {
    this._submitButton.classList.remove(this._notValidButtonClass);
    this._submitButton.disabled = false;
  };

  _hasInvalidInput = inputList => {
    return Array.from(inputList).some(input => !input.validity.valid);
  };

  _toggleButtonState = () => {
    if (!this._hasInvalidInput(this._inputList)) {
      this._enableButton();
    } else {
      this._disableButton();
    }
  };

  _showInputError = input => {
    this._errorTextElement.textContent = input.validationMessage;
    input.classList.add(this._popupInputErrorClass);
  };

  _hideInputError = input => {
    this._errorTextElement.textContent = '';
    input.classList.remove(this._popupInputErrorClass);
  };

  _checkInputValidity = input => {
    this._errorTextElement = document.querySelector(`${this._inputErrorType}${input.name}`);

    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  };

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach(inputElement => {
      this._errorTextElement = document.querySelector(
        `${this._inputErrorType}${inputElement.name}`
      );
      this._hideInputError(inputElement);
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
