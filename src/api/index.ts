/**
import Vue, { PluginObject } from 'vue';
import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { baseURL } from './config';

interface CodeMessage {
  [key: string]: string;
}

const codeMessage: CodeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（登录过期、token错误）',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const DEFAULT_CONFIG: AxiosRequestConfig = {
  baseURL: baseURL,
  method: 'GET',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type':'application/json;charset=UTF-8'
  },
  timeout: 10000,
  withCredentials: false,
  responseType: 'json'
}
 
class SetIntercept<T> {
  constructor(instance: AxiosInstance) {
    instance.interceptors.request.use(
      config => {
        let method = config.method;

        if (config.withCredentials) {
          config.headers.token = 'do something for token';
        }
        
        if(undefined !== method) {
          method = method.toLocaleLowerCase();
        }

        if (method === 'post' || method === 'put' || method === 'delete') {}

        return config;
      }, 
      error => {
        return Promise.reject(error);
      }
    );
    instance.interceptors.response.use(
      response => {
        let data = undefined === response.data ? response.request.responseText : response.data;
        
        if (data.code !== '000000') {
          // 在这里提示错误信息
          console.log('not 000000 error: ', data.message);
        }
        return data;
      },
      error => {
        const { status } = error.response;
        const cmsg = codeMessage[status];

        error.message = undefined !== cmsg ? cmsg : '连接到服务器失败';
        console.log('axios response system error cmsg: ', cmsg);

        return Promise.reject(error);
      }
    );  
  }
}

class $request<T> {
  constructor(private axiosRequestConfig: AxiosRequestConfig) {
    // new SetIntercept(AxiosInstance);
  }

  install(vue: typeof Vue, options: object) {
    return new Promise((resolve, reject) => {

    });  
  }
}
*/