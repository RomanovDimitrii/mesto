export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector, avatar }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._avatar = avatar;
  }

  getUserInfo() {
    this._profileData = {};

    this._profileData = {
      name: this._profileName.textContent,
      about: this._profileJob.textContent
    };
    return this._profileData;
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileJob.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}
