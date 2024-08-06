import nativeAxios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { randomUUID } from 'crypto';
import { axiosLogger } from './logger.middleware';

const axios: AxiosInstance = nativeAxios.create({
    timeout: 120 * 1000, // 2 minutes
});

class AxiosError extends Error {
    constructor(readonly message = 'Axios Error', readonly content: any = {}) {
        super(message);
        this.name = 'AxiosError';
        this.content = content;
        Error.captureStackTrace(this, AxiosError);
    }

    getStatusCode() {
        return this.content.response.status;
    }

    getResponseData() {
        return this.content.response.data;
    }
}

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const customUuid = randomUUID();
    config.reqId = customUuid;
    const message = {
        reqId: customUuid,
        time: Date.now(),
        config: config,
    };

    axiosLogger.info(message);
    return config;
});

axios.interceptors.response.use(
    (response) => {
        const customUuid = response.config && response.config.reqId ? response.config.reqId : '';
        const message = {
            reqId: customUuid,
            time: Date.now(),
            status: response.status,
            data: response.data,
            headers: response.headers,
            logMessage: 'RESPONSE RECEIVED',
        };

        axiosLogger.info(message);
        return response;
    },
    (error) => {
        const customUuid =
            error.response && error.response.config && error.response.config.reqId
                ? error.response.config.reqId
                : '';

        const errorResponse = error.response
            ? error.response
            : {
                  status: null,
                  data: null,
                  headers: null,
              };
        const message = {
            reqId: customUuid,
            time: Date.now(),
            status: errorResponse.status,
            data: errorResponse.data,
            headers: errorResponse.headers,
            logMessage: error.message || 'ERROR',
        };
        axiosLogger.info(message);
        return Promise.reject(new AxiosError(error.message, error));
    },
);

export { axios, AxiosError };
