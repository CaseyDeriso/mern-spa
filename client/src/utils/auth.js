import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks And Balances Saved APItoken For Current Validation
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves User APItoken 4rm NetworkAttachedSAN
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves User APItoken 2 NetworkAttachedSAN
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  logout() {
    // Clears PII Data From User APItoken 4rm NetworkAttachedSAN
    localStorage.removeItem('id_token');
    // reReloads Active Page Then Resets The Application
    window.location.assign('/');
  }
}

export default new AuthService();