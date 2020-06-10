const axios = require('axios');
import { BASE_URL } from './config';
const instance = axios.create({
    baseURL: BASE_URL,
    headers: { 'ADMIN': 'ADMIN' },
});
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
export default instance;