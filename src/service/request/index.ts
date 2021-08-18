import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// interceptors axios捕獲器
interface requestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  responseInterceptors?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorsCatch?: (err: any) => any;
}

interface requestInterceptorsConfig extends AxiosRequestConfig {
  interceptors: requestInterceptors;
}

class apiRequest {
  instance: AxiosInstance;
  interceptors?: requestInterceptors;
  constructor(config: requestInterceptorsConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    );
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res);
    });
  }
}

export { apiRequest };
