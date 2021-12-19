import axios from 'axios'
import authHeader from './AuthHeader';

const USER_API_BASE_URL = 'http://localhost:8080/api/eurocars/user';

class UserService {
    getUsers() {
        return axios.get(USER_API_BASE_URL, { headers: authHeader() });
    }
    getUsersByRole(roleName) {
        return axios.get(USER_API_BASE_URL + "/byRole",
          { 
            params: {
                role: roleName
            },
            headers : authHeader()
          }
        )
    }
    createUser(userCreationDto) {
        return axios.post(USER_API_BASE_URL, 
        userCreationDto,
        { headers: authHeader() });
    }
    updateUser(id, userUpdateDto) {
        return axios.put(USER_API_BASE_URL + '/' + id,
        userUpdateDto,
        { headers: authHeader() });
    }
    deleteUser(id) {
        return axios.delete(USER_API_BASE_URL + '/' + id,
        { headers: authHeader() });
    }
}

export default new UserService()