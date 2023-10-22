const TOKEN = 'token';

// localStorage에 저장하는 것은 보안에 좋지않은 방식
export default class TokenStorage {
  saveToken(token) {
    localStorage.setItem(TOKEN, token);
  }
  getToken() {
    return localStorage.getItem(TOKEN);
  }
  clearToken() {
    // localStorage.clear(TOKEN);
    localStorage.removeItem(TOKEN);
  }
}
