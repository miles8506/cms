import { apiRequest } from './request';
import { BASE_URL, TIMEOUT } from './request/config';

const ApiRequest = new apiRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    interceptorRequest: (config) => {
      // 夾帶token
      const token = '';
      if (token) config.headers.Authorization = token;

      return config;
    },
    interceptorResponse: (res) => {
      // axios直接獲取data數據
      const data = res.data;
      // 接收資料後去判斷是否成功獲取
      if (data.returnCode === '-1001') window.alert('response err');

      return data;
    },
    interceptorResponseCatch: (err) => {
      // 接收資料後去判斷是否成功獲取
      if (err.response.status === 404) window.alert('response err');

      return err;
    }
  }
});

export { ApiRequest };
