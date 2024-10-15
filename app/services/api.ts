import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: 'https://goldcsapi.onrender.com/api',
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('jwtToken');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;