import axios, { AxiosInstance } from 'axios';
import { openNotification } from './openNotification';

const getAxiosClient = ((): AxiosInstance => {
    const axiosInstance = axios.create({
        timeout: 5000,
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    axiosInstance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.code === 'ECONNABORTED') {
                openNotification('서버에 이상이 있습니다.');
            }
            return Promise.reject(error);
        },
    );

    return axiosInstance;
})();

export default getAxiosClient;
