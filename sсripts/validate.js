const showInputError = (
  errorTextElement,
  validationMessage,
  activeErrorClass,
  activeInputForm,
  inputErrorClass
) => {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(activeErrorClass);
  activeInputForm.classList.add(inputErrorClass);
};

const hideInputError = (errorTextElement, activeErrorClass, activeInputForm, inputErrorClass) => {
  errorTextElement.classList.remove(activeErrorClass);
  errorTextElement.textContent = '';
  activeInputForm.classList.remove(inputErrorClass);
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
  activeInputselector,
  inputErrorClass
) => {
  const errorTextElement = document.querySelector(`.${errorClassTemplate}${input.name}`);
  const activeInputForm = input.closest(activeInputselector);

  if (input.validity.valid) {
    hideInputError(errorTextElement, activeErrorClass, activeInputForm, inputErrorClass);
  } else {
    showInputError(
      errorTextElement,
      input.validationMessage,
      activeErrorClass,
      activeInputForm,
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
  activeInputselector,
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
          activeInputselector,
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
    config.activeInputselector,
    config.inputErrorClass
  );
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  errorClassTemplate: 'popup__input-error_type_',
  activeErrorClass: 'popup__input-error',
  submitButtonSelector: '.popup__save-button',
  notValidSubmitButtonClass: 'popup__save-button_not-valid',
  activeInputselector: '.popup__input',
  inputErrorClass: 'popup__input_error-border'
});
