import axios from 'axios'
import authHeader from './AuthHeader';

const PERSONAL_ROOM_API_BASE_URL = 'http://localhost:8080/api/eurocars/room/';

class PersonalRoomService {
    getAdminData() {
        return axios.get(PERSONAL_ROOM_API_BASE_URL + 'admin', { headers: authHeader() });
    }
}

export default new PersonalRoomService()