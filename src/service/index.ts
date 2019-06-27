import request from '../api/index';
import { AxiosPromise } from 'axios';

// The return type of an async function or method must be the global Promise<T> type.
export const searchMovies = async (type: string): Promise<any> => {
  return request({ 
    url: `/api/movie/${type}`,
    params: {
      apikey: '0df993c66c0c636e29ecbb5344252a4a'
    }
  })
}