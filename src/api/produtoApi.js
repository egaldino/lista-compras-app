import axios from 'axios';
import apiConfig from '../config/api.json';

const api = axios.create({
  baseURL: apiConfig.connectionUrl,
});

export default api;
