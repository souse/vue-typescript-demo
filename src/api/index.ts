import { Toast } from 'vant';
import axios, { AxiosRequestConfig, AxiosResponse} from 'axios'
import { DEFAULT_CONFIG } from './config';

let request = axios.create(DEFAULT_CONFIG)

request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response: AxiosResponse) => {
    // 错误校验
    if (response.status !== 200) {
      Toast.fail('调用接口异常')
      throw new Error('调用接口异常');
    }
    return response.data
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default request;