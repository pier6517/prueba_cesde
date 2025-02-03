// configuracion de axios
import axios from 'axios';

// configuracion de axios
const AxiosApi = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default AxiosApi;