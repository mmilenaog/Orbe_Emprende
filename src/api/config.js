import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3050', // Reemplaza con la URL de tu servidor backend
  headers: {
    'Content-Type': 'application/json'
  }

});


export default api;