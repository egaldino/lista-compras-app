import axios from 'axios';
import apiConfig from '../config/api.json';

const api = axios.create({
  baseURL: apiConfig.connectionUrl,
  timeout: 5000,
});

export const cadastrarProduto = produto => {
  return api.post('/cadastrar', produto);
};

export const listarProdutos = () => {
  return api.get('/listar');
};

export default api;
