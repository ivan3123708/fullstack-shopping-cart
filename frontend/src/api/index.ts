import axios, { AxiosInstance } from 'axios';
import env from '../envConfig';

const instance: AxiosInstance = axios.create({ baseURL: env.apiUrl });

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;
