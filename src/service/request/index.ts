import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ElLoading } from 'element-plus';
import type { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type';

interface interceptorsHook {
  interceptorRequest?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  interceptorRequestCatch?: (err: any) => any;
  interceptorResponse?: (config: any) => any;
  interceptorResponseCatch?: (err: any) => any;
}

interface interceptorsConfig extends AxiosRequestConfig {
  interceptors?: interceptorsHook;
  showLoadingStatus?: boolean;
}

class apiRequest {
  instance: AxiosInstance;
  interceptors?: interceptorsHook;
  showLoadingStatus: boolean;
  ShowLoadingMask?: ILoadingInstance;
  constructor(config: interceptorsConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoadingStatus = config.showLoadingStatus ?? true;

    this.instance.interceptors.request.use(
      this.interceptors?.interceptorRequest,
      this.interceptors?.interceptorRequestCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.interceptorResponse,
      this.interceptors?.interceptorResponseCatch
    );

    // 全局攔截器，直接在constructor中使用攔截器即可
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoadingStatus) {
          this.ShowLoadingMask = ElLoading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
        }
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use((res) => {
      this.ShowLoadingMask?.close();
      const data = res.data;
      return data;
    });
  }

  request<T>(config: interceptorsConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.interceptorRequest) {
        config = config.interceptors.interceptorRequest(config);
      }

      if (config.showLoadingStatus === false) this.showLoadingStatus = false;

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.interceptorResponse) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            res = config.interceptors.interceptorResponse(res);
          }

          // init loadinpage 防止下一次request無法show出loading page
          this.showLoadingStatus = true;
          resolve(res);
        })
        .catch((err) => {
          // init loadinpage 防止下一次request無法show出loading page
          this.showLoadingStatus = true;
          reject(err);
        });
    });
  }

  // method get post delete patch
  get<T>(config: interceptorsConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' });
  }
  post<T>(config: interceptorsConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' });
  }
  delete<T>(config: interceptorsConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' });
  }
  patch<T>(config: interceptorsConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' });
  }
}

export { apiRequest };
