import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dry-mesa-64187.herokuapp.com/'
    
})

export default api;