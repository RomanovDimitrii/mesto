export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector, avatar }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._avatar = document.querySelector('.profile__avatar');
  }
  // получение данных из DOM (не инпутов, а страницы)
  getUserInfo() {
    this._profileData = {};

    this._profileData = {
      name: this._profileName.textContent,
      about: this._profileJob.textContent,
      avatar: this._avatar.src
    };
    return this._profileData;
  }
  //изменение данных в DOM
  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileJob.textContent = data.about;
    this._avatar.src = data.avatar;
  }
  //изменение данных в DOM
  setUserInfoAvatar(avatar) {
    this._avatar = avatar;
  }
}
