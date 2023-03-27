const showInputError = (errorTextElement, validationMessage, activeErrorClass) => {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(activeErrorClass);
};

const hideInputError = (errorTextElement, activeErrorClass) => {
  errorTextElement.classList.remove(activeErrorClass);
  errorTextElement.textContent = '';
};

const disableButton = (submitButton, notValidSubmitButtonClass) => {
  submitButton.classList.add(notValidSubmitButtonClass);
  submitButton.disabled = true;
};

const enableButton = (submitButton, notValidSubmitButtonClass) => {
  submitButton.classList.remove(notValidSubmitButtonClass);
  submitButton.disabled = false;
};

const checkInputValidity = (input, errorClassTemplate, activeErrorClass) => {
  const errorTextElement = document.querySelector(`.${errorClassTemplate}${input.name}`);

  if (input.validity.valid) {
    hideInputError(errorTextElement, activeErrorClass);
  } else {
    showInputError(errorTextElement, input.validationMessage, activeErrorClass);
  }
};

const hasInvalidInput = inputList => {
  return Array.from(inputList).some(input => !input.validity.valid);
};

const toggleButtonState = (submitButton, notValidSubmitButtonClass, inputList) => {
  if (!hasInvalidInput(inputList)) {
    enableButton(submitButton, notValidSubmitButtonClass);
  } else {
    disableButton(submitButton, notValidSubmitButtonClass);
  }
};

const setEventListeners = (
  formList,
  inputSelector,
  errorClassTemplate,
  activeErrorClass,
  submitButtonSelector,
  notValidSubmitButtonClass
) => {
  formList.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
    });
    const inputList = form.querySelectorAll(inputSelector);
    inputList.forEach(input => {
      input.addEventListener('input', e => {
        checkInputValidity(input, errorClassTemplate, activeErrorClass);
        toggleButtonState(submitButton, notValidSubmitButtonClass, inputList);
      });
      const submitButton = form.querySelector(submitButtonSelector);

      //        checkInputValidity(input, errorClassTemplate, activeErrorClass);
    });
  });
};

const enableValidation = config => {
  const formList = document.querySelectorAll(config.formSelector);

  setEventListeners(
    formList,
    config.inputSelector,
    config.errorClassTemplate,
    config.activeErrorClass,
    config.submitButtonSelector,
    config.notValidSubmitButtonClass
  );
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  errorClassTemplate: 'form__input-error_type_',
  activeErrorClass: 'popup__input-error',
  submitButtonSelector: '.popup__save-button',
  notValidSubmitButtonClass: 'popup__save-button_not-valid'
});
