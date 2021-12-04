import axios from 'axios'
import authHeader from './AuthHeader';

const USER_API_BASE_URL = 'http://localhost:8080/api/eurocars/user';

class UserService {
    getUsers() {
        return axios.get(USER_API_BASE_URL, { headers: authHeader() });
    }
}

export default new UserService()