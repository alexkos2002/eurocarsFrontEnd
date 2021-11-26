import axios from 'axios'

const USER_API_BASE_URL = 'http://localhost:8080/api/eurocars/user'

class UserService {
    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }
    registerUser(userRegDto) {
        return axios.post(USER_API_BASE_URL, userRegDto);
    }
}

export default new UserService()