import axios, { AxiosInstance } from 'axios';

const axiosInstance:AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_BASE_ENDPOINT}`,
    headers: { 
        'x-mock-match-request-body': 'true', 
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    
});

axiosInstance.defaults.headers.common['x-mock-match-request-body'] = true

export default axiosInstance;