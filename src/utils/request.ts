import axios, {AxiosInstance, AxiosRequestConfig, Canceler} from "axios";
import {Toast} from 'vant';
import 'vant/es/toast/style';

interface iAny {
  [key: string]: any;
}

/**
 * 获取请求参数组成的key
 * @param config 请求参数
 * @returns { String } 请求参数组成的key
 */
function getPenddingMapKey(config: AxiosRequestConfig) {
  return `${config.url}_${config.method}_${JSON.stringify(
    config.params
  )}_${JSON.stringify(config.data)}`;
}

class http {
  axios: AxiosInstance //axios实例
  pendding = new Map<string, Canceler>()

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:3000'
    })
    this.axios.interceptors.request.use((config) => {
      // 防重复提交
      const key = getPenddingMapKey(config);
      const pendFn = this.pendding.get(key);

      pendFn && pendFn('request cancel');
      config.cancelToken = new axios.CancelToken((fn) => {
        this.pendding.set(key, fn);
      });
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      });
      if(config.url?.indexOf('?')!==-1){
        config.url += '&timestamp='+(new Date()).getTime()
      }else{
        config.url += '?timestamp='+(new Date()).getTime()
      }
      return config
    })

    this.axios.interceptors.response.use((response) => {
      Toast.clear()
      this.pendding.delete(getPenddingMapKey(response.config));
      return response;
    }, (error) => {
      console.log(error)
      if (error && error.response) {
        const codeMap = {
          400: '请求错误',
          401: '登录过期',
          403: '拒绝访问',
          404: '请求失败',
          408: '请求超时',
          500: '服务器内部错误',
          501: '服务未实现',
          502: '无法连接服务器',
          503: '服务不可用',
          504: '连接服务器超时'
        };
        // @ts-ignore
        error.message = codeMap[error.response.status];
      }
      return Promise.reject(error);
    })
  }

  request<T>(config: any): Promise<T> {
    return new Promise((resolve, reject) => {
      this.axios(config).then((res) => {
        if (res.data.code === 200) {

        } else {
          showErrorMsg(res.data.message)
        }
        resolve(res.data)
      }).catch((err) => {
        console.log(err)
        showErrorMsg(err)
      })
    })

    function showErrorMsg(msg:string) {
      Toast.fail(msg || "请求失败");
    }
  }

  post<T>(url: string, params?: iAny, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({url, method: 'post', data: params, ...config})
  }

  get<T>(url: string, params?: iAny, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({url, method: 'get', params: params, ...config})
  }
}

export default new http()
