/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._name=e.name,this._likes=e.likes,this._userId=i,this._ownerId=e.owner._id,this.id=e._id,this._cardTemplateSelector=r,this._element=void 0,this._handleCardClick=n,this._handleDeleteConfirm=o,this._handleLikeClick=u}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".photo-grid__item").cloneNode(!0)}},{key:"isLiked",value:function(){var t=this;return this._likes.find((function(e){return e._id===t._userId}))}},{key:"setLikes",value:function(t){this._likes=t,this._likeCountElement.textContent=this._likes.length,this.isLiked()?this._handleCardLike():this._handleCardNotLike()}},{key:"_handleCardLike",value:function(){this._likeButton.classList.add("photo-grid__like-button-image_active")}},{key:"_handleCardNotLike",value:function(){this._likeButton.classList.remove("photo-grid__like-button-image_active")}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._handleLikeClick(t.id)})),this._deleteButton.addEventListener("click",(function(){t._handleDeleteConfirm(t.id)})),this._cardPicture.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"generateCard",value:function(){var t=this;return this._element=this._getTemplate(),this._cardPicture=this._element.querySelector(".photo-grid__image"),this._cardPicture.src=this._link,this._cardPicture.alt=this._name,this._element.querySelector(".photo-grid__title").textContent=this._name,this._likeButton=this._element.querySelector(".photo-grid__like-button"),this._deleteButton=this._element.querySelector(".photo-grid__delete-button"),this._likeCountElement=this._element.querySelector(".photo-grid__like-button-counter"),this._ownerId!==this._userId&&(this._deleteButton.style.display="none"),this._likes.find((function(e){return e._id===t._userId}))&&this._handleCardLike(),this.setLikes(this._likes),this._setEventListeners(),this._element}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,u(n.key),n)}}function i(t,e,r){return(e=u(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===n(e)?e:String(e)}var a=function(){function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"_disableButton",(function(){n._submitButton.classList.add(n._notValidButtonClass),n._submitButton.disabled=!0})),i(this,"_enableButton",(function(){n._submitButton.classList.remove(n._notValidButtonClass),n._submitButton.disabled=!1})),i(this,"_hasInvalidInput",(function(t){return Array.from(t).some((function(t){return!t.validity.valid}))})),i(this,"_toggleButtonState",(function(){n._hasInvalidInput(n._inputList)?n._disableButton():n._enableButton()})),i(this,"_showInputError",(function(t){n._errorTextElement.textContent=t.validationMessage,t.classList.add(n._popupInputErrorClass)})),i(this,"_hideInputError",(function(t){n._errorTextElement.textContent="",t.classList.remove(n._popupInputErrorClass)})),i(this,"_checkInputValidity",(function(t){n._errorTextElement=document.querySelector("".concat(n._inputErrorType).concat(t.name)),t.validity.valid?n._hideInputError(t):n._showInputError(t)})),this._form=e,this._inputClass=r.inputClass,this._submitButtonClass=r.submitButtonClass,this._notValidButtonClass=r.notValidButtonClass,this._popupInputErrorClass=r.popupInputErrorClass,this._inputErrorType=r.inputErrorType,this._inputList=this._form.querySelectorAll(this._inputClass),this._submitButton=this._form.querySelector(this._submitButtonClass)}var e,r;return e=t,(r=[{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(this._submitButton,this._inputList),this._inputList.forEach((function(e){e.addEventListener("input",(function(r){t._checkInputValidity(e),t._toggleButtonState(t._submitButton,t._inputList)}))}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._errorTextElement=document.querySelector("".concat(t._inputErrorType).concat(e.name)),t._hideInputError(e)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var s=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=e,this._photoElement=r}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._photoElement.prepend(t)}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._closeButton=this._popup.querySelector(".popup__close-button")}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("mouseup",(function(e){t._handleMouseClose(e)}))}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleMouseClose",value:function(t){t.currentTarget===t.target&&this.close()}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},v.apply(this,arguments)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(n);if(o){var r=b(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popup=document.querySelector(t),e._popupImage=e._popup.querySelector(".popup__image"),e._popupText=e._popup.querySelector(".popup__image-title"),e}return e=u,(r=[{key:"openPopupImage",value:function(t,e){v(b(u.prototype),"open",this).call(this),this._popupImage.setAttribute("src",e),this._popupImage.setAttribute("alt",t),this._popupText.textContent=t}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},S.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(n);if(o){var r=E(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._popup=document.querySelector(t),r._formElement=r._popup.querySelector(".popup__form-delete-confirmation"),r._confirmButton=r._popup.querySelector(".popup__save-button_confirm"),r._handleIdcard=e,r}return e=u,(r=[{key:"handleDeleteCardId",value:function(t){this.handleIdcard=t}},{key:"setEventListeners",value:function(){var t=this;S(E(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t.handleIdcard()}))}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},P.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(n);if(o){var r=x(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleFormSubmit=e,r._formElement=r._popup.querySelector(".popup__form"),r._inputList=r._formElement.querySelectorAll(".popup__input"),r._submitButton=r._formElement.querySelector(".popup__save-button"),r}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;P(x(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault();var r=t._submitButton.textContent;t._submitButton.textContent="Сохранение...",t._handleFormSubmit(t._getInputValues()).then((function(){return t.close()})).finally((function(){t._submitButton.textContent=r}))}))}},{key:"closeWithReset",value:function(){P(x(u.prototype),"close",this).call(this),this._formElement.reset()}}])&&L(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}var R=function(){function t(e){var r=e.profileNameSelector,n=e.profileJobSelector;e.avatar,function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(r),this._profileJob=document.querySelector(n),this._avatar=document.querySelector(".profile__avatar")}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return this._profileData={},this._profileData={name:this._profileName.textContent,about:this._profileJob.textContent,avatar:this._avatar.src},this._profileData}},{key:"setUserInfo",value:function(t){this._profileName.textContent=t.name,this._profileJob.textContent=t.about,this._avatar.src=t.avatar}},{key:"setUserInfoAvatar",value:function(t){this._avatar=t}}])&&B(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===q(o)?o:String(o)),n)}var o}var N=function(){function t(e){var r=e.url,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=r,this._headers=n}var e,r;return e=t,(r=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkResponse).catch(console.log)}},{key:"getProfile",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkResponse).catch(console.log)}},{key:"editProfile",value:function(t){var e=t.data;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse).catch(console.log)}},{key:"editProfileAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._checkResponse).catch(console.log)}},{key:"postCard",value:function(t){var e=t.card;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse).catch(console.log)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResponse).catch(console.log)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse).catch(console.log)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse).catch(console.log)}},{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}}])&&A(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),V=document.querySelector(".page").querySelector(".profile__edit-button"),D=document.querySelector(".popup__input_type_name"),U=document.querySelector(".popup__input_type_about"),G=document.querySelector(".photo-grid"),J=document.querySelector(".profile__add-button"),F=document.querySelector(".profile__avatar"),M=document.querySelector(".popup__input_type_avatar");function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function Y(){Y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,u=Object.create(i.prototype),a=new O(o||[]);return n(u,"_invoke",{value:w(t,r,a)}),u}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function h(){}function y(){}var d={};c(d,i,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(j([])));m&&m!==e&&r.call(m,i)&&(d=m);var b=y.prototype=p.prototype=Object.create(d);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function o(n,i,u,a){var c=s(t[n],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==H(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,u,a)}),(function(t){o("throw",t,u,a)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,a)}))}a(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=S(u,r);if(a){if(a===f)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=y,n(b,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:h,configurable:!0}),h.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(g.prototype),c(g.prototype,u,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var u=new g(l(e,r,n,o),i);return t.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},_(b),c(b,a,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return u.type="throw",u.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function W(t,e,r,n,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}function $(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(t){W(i,n,o,u,a,"next",t)}function a(t){W(i,n,o,u,a,"throw",t)}u(void 0)}))}}function K(){return(K=$(Y().mark((function t(e){var r;return Y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,it.editProfile({data:e});case 3:r=t.sent,ut.setUserInfo(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Ошибка при обновлении данных профайла: ".concat(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Q(){return(Q=$(Y().mark((function t(e){var r;return Y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,it.editProfileAvatar(e.avatar);case 3:r=t.sent,ut.setUserInfo(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Ошибка при обновлении данных профайла: ".concat(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function X(){return(X=$(Y().mark((function t(e){var r,n;return Y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={name:e.place,link:e.link,alt:e.place},t.next=4,it.postCard({card:r});case 4:n=t.sent,at.addItem(ct(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Ошибка при добавлении карточки: ".concat(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}var Z,tt=new I(".popup_profile",(function(t){return K.apply(this,arguments)})),et=new I(".popup_place",(function(t){return X.apply(this,arguments)})),rt=new _(".popup_image"),nt=new I(".popup_avatar",(function(t){return Q.apply(this,arguments)})),ot=new O(".popup_delete-confirmation"),it=new N({url:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"28e66ce0-e1c0-46c6-ba61-67192a6d327c","Content-Type":"application/json"}}),ut=new R({profileNameSelector:".profile__title",profileJobSelector:".profile__subtitle",avatar:F});tt.setEventListeners(),et.setEventListeners(),rt.setEventListeners(),nt.setEventListeners(),Promise.all([it.getProfile(),it.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];Z=o._id,ut.setUserInfo(o),i.reverse().forEach((function(t){at.addItem(ct(t))}))})).catch((function(t){console.error("Ошибка при получении данных профайла и карточек: ".concat(t))}));var at=new s({},G);function ct(t){var e=new r(t,"#photoTemplate",lt,(function(t){ot.open(),ot.handleDeleteCardId((function(){!function(t){st.apply(this,arguments)}(t),ot.close(),e.deleteCard()}))}),Z,(function(t){e.isLiked()?it.deleteLike(t).then((function(t){e.setLikes(t.likes)})).catch((function(t){renderError("Ошибка: ".concat(t))})):it.addLike(t).then((function(t){e.setLikes(t.likes)})).catch((function(t){renderError("Ошибка: ".concat(t))}))}));return e.generateCard()}function lt(t,e){rt.openPopupImage(t,e)}function st(){return(st=$(Y().mark((function t(e){return Y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,it.deleteCard(e);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error("Ошибка при удалении карточки: ".concat(t.t0));case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}ot.setEventListeners(),V.addEventListener("click",(function(){tt.open();var t=ut.getUserInfo();D.value=t.name,U.value=t.about,pt.form_profile.resetValidation()})),J.addEventListener("click",(function(){et.open(),pt.form_place.resetValidation()})),F.addEventListener("click",(function(){nt.open();var t=ut.getUserInfo();M.value=t.avatar,pt.form_profile.resetValidation()}));var ft,pt={};ft={formSelector:".popup__form",inputClass:".popup__input",submitButtonClass:".popup__save-button",notValidButtonClass:"popup__save-button_not-valid",popupInputErrorClass:"popup__input_error-border",inputErrorType:".popup__input-error_type_"},Array.from(document.querySelectorAll(ft.formSelector)).forEach((function(t){var e=new a(t,ft),r=t.getAttribute("name");pt[r]=e,e.enableValidation()}))})();