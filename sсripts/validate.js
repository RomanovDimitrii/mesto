const showInputError = (
  errorTextElement,
  validationMessage,
  activeErrorClass,
  input,
  inputErrorClass
) => {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(activeErrorClass);
  input.classList.add(inputErrorClass);
};

const hideInputError = (errorTextElement, activeErrorClass, input, inputErrorClass) => {
  errorTextElement.classList.remove(activeErrorClass);
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
  activeErrorClass,

  inputErrorClass
) => {
  const errorTextElement = document.querySelector(`.${errorClassTemplate}${input.name}`);
  // const activeInputForm = input.closest(inputSelector);

  if (input.validity.valid) {
    hideInputError(errorTextElement, activeErrorClass, input, inputErrorClass);
  } else {
    showInputError(
      errorTextElement,
      input.validationMessage,
      activeErrorClass,
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
  activeErrorClass,
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
          activeErrorClass,

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
    config.activeErrorClass,
    config.submitButtonSelector,
    config.notValidSubmitButtonClass,

    config.inputErrorClass
  );
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClassTemplate: 'popup__input-error_type_',
  activeErrorClass: 'popup__input-error',
  submitButtonSelector: '.popup__save-button',
  notValidSubmitButtonClass: 'popup__save-button_not-valid',
  inputErrorClass: 'popup__input_error-border'
});
