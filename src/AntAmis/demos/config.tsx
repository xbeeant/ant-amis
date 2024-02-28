import { RenderOptions, toast, ToastLevel } from 'amis';
import axios from 'axios';

const config: RenderOptions = {
  alert,
  confirm,
  notify: (type: ToastLevel, msg: string) => {
    toast[type]
      ? toast[type](msg, type === 'error' ? '系统错误' : '系统消息')
      : console.warn('[Notify]', type, msg);
    console.log('[notify]', type, msg);
  },
  // 下面三个接口必须实现
  fetcher: ({
    url, // 接口地址
    method, // 请求方法 get、post、put、delete
    data, // 请求数据
    responseType,
    config: paramConfig, // 其他配置
    headers, // 请求头
  }: any) => {
    let config = paramConfig || {};
    config.withCredentials = true;
    if (responseType) {
      config.responseType = responseType;
    }

    if (config.cancelExecutor) {
      config.cancelToken = new (axios as any).CancelToken(
        config.cancelExecutor,
      );
    }

    config.headers = headers || {};

    config = {
      ...config,
      // url,
      headers: {
        ...headers,
      },
    };

    if (method !== 'post' && method !== 'put' && method !== 'patch') {
      if (data) {
        config.params = data;
      }

      return (axios as any)[method](url, config);
    } else if (data && data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else if (
      data &&
      typeof data !== 'string' &&
      !(data instanceof Blob) &&
      !(data instanceof ArrayBuffer)
    ) {
      // eslint-disable-next-line no-param-reassign
      data = JSON.stringify(data);
      config.headers['Content-Type'] = 'application/json';
    }

    axios.interceptors.response.use(
      (res) => {
        //请求成功对响应数据进行处理
        console.log(res);
        return res;
      },
      (err) => {
        //响应错误做些什么（此处错误，到达后端后返回）
        return Promise.reject(err);
      },
    );

    return (axios as any)[method](url, data, config);
  },
  isCancel: (value: any) => (axios as any).isCancel(value),
  copy: (contents: string, options: any = {}) => {
    // const ret = copy(contents, options);
    // if (ret && (!options || options.shutdown !== true)) {
    //   toast.info('内容已拷贝到剪切板');
    // }
    // return ret;
  },
  tracker: (eventTrack) => {
    console.log(eventTrack);
  },
};

export default config;
