import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3000" // URL của backend
});

export default instance;
