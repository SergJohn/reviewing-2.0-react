import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dry-mesa-64187.herokuapp.com/' || 'http://localhost:5000'
    
})

export default api;