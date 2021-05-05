import axios, { AxiosInstance } from 'axios';

const axiosInstance:AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_BASE_ENDPOINT}`     
});

axiosInstance.defaults.headers.common['x-mock-match-request-body'] = true

export default axiosInstance;