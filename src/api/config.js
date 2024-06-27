import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3050', 
  headers: {
    'Content-Type': 'application/json'
  }

});


export default api;