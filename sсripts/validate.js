const showInputError = (
  errorTextElement,
  validationMessage,

  input,
  inputErrorClass
) => {
  errorTextElement.textContent = validationMessage;
  input.classList.add(inputErrorClass);
};

const hideInputError = (errorTextElement, input, inputErrorClass) => {
  errorTextElement.textContent = '';
  input.classList.remove(inputErrorClass);
};

const disableButton = (submitButton, notValidSubmitButtonClass) => {
  submitButton.classList.add(notValidSubmitButtonClass);
  submitButton.disabled = true;
};

const enableButton = (submitButton, notValidSubmitButtonClass) => {
  submitButton.classList.remove(notValidSubmitButtonClass);
  submitButton.disabled = false;
};

const checkInputValidity = (
  input,
  errorClassTemplate,

  inputErrorClass
) => {
  const errorTextElement = document.querySelector(`.${errorClassTemplate}${input.name}`);

  if (input.validity.valid) {
    hideInputError(errorTextElement, input, inputErrorClass);
  } else {
    showInputError(
      errorTextElement,
      input.validationMessage,

      input,
      inputErrorClass
    );
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

  submitButtonSelector,
  notValidSubmitButtonClass,

  inputErrorClass
) => {
  formList.forEach(form => {
    const inputList = form.querySelectorAll(inputSelector);
    const submitButton = form.querySelector(submitButtonSelector);
    toggleButtonState(submitButton, notValidSubmitButtonClass, inputList);
    inputList.forEach(input => {
      input.addEventListener('input', e => {
        checkInputValidity(
          input,
          errorClassTemplate,

          inputErrorClass
        );
        toggleButtonState(submitButton, notValidSubmitButtonClass, inputList);
      });
    });
  });
};

const enableValidation = config => {
  const formList = document.querySelectorAll(config.formSelector);

  setEventListeners(
    formList,
    config.inputSelector,
    config.errorClassTemplate,
    config.submitButtonSelector,
    config.notValidSubmitButtonClass,
    config.inputErrorClass
  );
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClassTemplate: 'popup__input-error_type_',
  submitButtonSelector: '.popup__save-button',
  notValidSubmitButtonClass: 'popup__save-button_not-valid',
  inputErrorClass: 'popup__input_error-border'
});
