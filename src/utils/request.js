import axios from 'axios';

/**
 * @description 全局接口api
 * @author zhangzhzh
 */
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000,
    headers: {
        post: {
            'Content-Type': 'application/x-www-form;charset=utf-8',
        },
    },
});

service.interceptors.request.use(
    (config) => config,
    (error) => {
        Promise.reject(error);
    },
);

service.interceptors.response.use(
    (response) => {
        const res = response.data;
        return res;
    },
    (error) => Promise.reject(error),
);

export default service;
