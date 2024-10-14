import axios, {type AxiosInstance} from 'axios';

const httpClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 60000,  // Timeout after 60 seconds
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
})

export default httpClient;
