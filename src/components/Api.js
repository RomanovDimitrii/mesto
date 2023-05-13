export class API {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  async getInitialCards() {
    const initialCards = await fetch(`${this._url}/cards`, {
      headers: this._headers
    });

    if (!initialCards.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
    return initialCards.json();
  }

  async getProfile() {
    const profileData = await fetch(`${this._url}/users/me`, {
      headers: this._headers
    });

    if (!profileData.ok) {
      console.log('ошибка getProfile');
      return Promise.reject(`Ошибка: ${profileData.status}`);
    }
    return profileData.json();
  }

  async editProfile({ data }) {
    const response = await fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    });
    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
    return response.json();
  }

  async editProfileAvatar(data) {
    const response = await fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data
      })
    });
    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
    return response.json();
  }

  async postCard({ card }) {
    const response = await fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    });
    if (!response.ok) {
      console.log('запрос не прошел');
      return Promise.reject(`Ошибка: ${response.status}`);
    }
    console.log('запрос прошел');
    return response.json();
  }

  async deleteCard(id) {
    const response = await fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    });
    if (!response.ok) {
      console.log('запрос на удаление карточки не прошел');
      return Promise.reject(`Ошибка: ${response.status}`);
    }
    console.log('запрос на удаление карточки прошел');
    return response.json();
  }

  async deleteLike(id) {
    const response = await fetch(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    });
    if (!response.ok) {
      console.log('запрос на удаление лайка не прошел');
      return Promise.reject(`Ошибка: ${response.status}`);
    }
    console.log('запрос на удаление лайка прошел');
    return response.json();
  }

  async addLike(id) {
    const response = await fetch(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    });
    if (!response.ok) {
      console.log('запрос на добавление лайка не прошел');
      return Promise.reject(`Ошибка: ${response.status}`);
    }
    console.log('запрос на добавление лайка прошел');
    return response.json();
  }
}
