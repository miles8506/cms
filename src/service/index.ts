import { apiRequest } from './request';
import { BASE_URL, TIMEOUT } from './request/config';

const ApiRequest = new apiRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptors: (config) => {
      console.log('請求前捕獲');
      return config;
    },
    requestInterceptorsCatch: (err) => {
      console.log('請求前捕獲失敗');
      return err;
    },
    responseInterceptors: (config) => {
      console.log('請求後捕獲');
      return config;
    },
    responseInterceptorsCatch: (err) => {
      console.log('請求後捕獲失敗');
      return err;
    }
  }
});

export { ApiRequest };
