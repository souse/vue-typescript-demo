import { AxiosRequestConfig } from 'axios';

export const baseURL: string = '';

export const DEFAULT_CONFIG: AxiosRequestConfig = {
  method: 'GET',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type':'application/json;charset=UTF-8'
  },
  timeout: 10000,
  withCredentials: false,
  responseType: 'json'
}
