export class FormValidator {
  constructor(form, formData) {
    this._form = form;
    this._inputClass = formData.inputClass;
    this._submitButtonClass = formData.submitButtonClass;
    this._notValidButtonClass = formData.notValidButtonClass;
    this._popupInputErrorClass = formData.popupInputErrorClass;
    this._inputErrorType = formData.inputErrorType;
  }

  _setEventListeners() {
    const inputList = this._form.querySelectorAll(this._inputClass);
    const submitButton = this._form.querySelector(this._submitButtonClass);
    this._toggleButtonState(submitButton, inputList);
    inputList.forEach(input => {
      input.addEventListener('input', e => {
        this._checkInputValidity(input);
        this._toggleButtonState(submitButton, inputList);
      });
    });
  }

  _disableButton = submitButton => {
    submitButton.classList.add(this._notValidButtonClass);
    submitButton.disabled = true;
  };

  _enableButton = submitButton => {
    submitButton.classList.remove(this._notValidButtonClass);
    submitButton.disabled = false;
  };

  _hasInvalidInput = inputList => {
    return Array.from(inputList).some(input => !input.validity.valid);
  };

  _toggleButtonState = (submitButton, inputList) => {
    if (!this._hasInvalidInput(inputList)) {
      this._enableButton(submitButton);
    } else {
      this._disableButton(submitButton);
    }
  };

  _showInputError = (errorTextElement, input) => {
    errorTextElement.textContent = input.validationMessage;
    input.classList.add(this._popupInputErrorClass);
  };

  _hideInputError = (errorTextElement, input) => {
    errorTextElement.textContent = '';
    input.classList.remove(this._popupInputErrorClass);
  };

  _checkInputValidity = input => {
    const errorTextElement = document.querySelector(`${this._inputErrorType}${input.name}`);

    if (input.validity.valid) {
      this._hideInputError(errorTextElement, input);
    } else {
      this._showInputError(errorTextElement, input);
    }
  };

  enableValidation() {
    this._setEventListeners();
  }
}
