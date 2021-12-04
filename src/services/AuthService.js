import axios from 'axios';

const AUTH_API_BASE_URL = 'http://localhost:8080/api/eurocars/auth/';

class AuthService {
    registerUser(userRegDto) {
        return axios.post(AUTH_API_BASE_URL + 'signup', userRegDto);
    }

    login(userAuthDto) {
      return axios
        .post(AUTH_API_BASE_URL + 'signin', {
          username: userAuthDto.username,
          password: userAuthDto.password
        });
    }

    logout() {
      localStorage.removeItem('jwt');
      localStorage.removeItem('roles');
    }
  
  }
  
  export default new AuthService();