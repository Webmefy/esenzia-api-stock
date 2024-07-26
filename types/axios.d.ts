import 'axios';

declare module 'axios' {
    export interface InternalAxiosRequestConfig<D = any> {
      reqId?: string;
    }
  }