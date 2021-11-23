import axios from 'axios';
import { Loading, Message } from 'element-ui';

const request = axios.create({
  baseURL: '', // process.env.NODE_ENV === 'development' ? 'http://22.187.19.164:9081' : 'http://22.187.19.164:9081',//http://21.123.75.119:9080
  timeout: 15000,
  withCredentials: true,
});
let loadingInstance;
// 这里是又对多个loading处理了一下，但其实element的服务方式loading已经设置了当有多个loading情况时只会渲染一个loading实例，
// 但为了保证其他loading统一这里我还是加一层
let num = 0;
// 请求拦截函数
function interceptorsRequest(config) {
  if (num === 0) {
    loadingInstance = Loading.service({
      body: true,
      text: '加载中',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.8)',
      customClass: 'ele_loading',
    });
  }
  num += 1;
  return config;
}
// 响应拦截函数
function interceptorsResponse(res) {
  num -= 1;
  if (num === 0) {
    loadingInstance.close();
  }
  if (res.status === 200) {
    if (res.data.stat) {
      if (res.data.stat === '00') {
        return res.data;
      }
      Message.error({ message: res.data.result });
    }
  }
  Message.error({ message: '连接服务器出错了' });
  return res; // Promise.reject(res.data.message);
}
// 请求异常处理
const errHandlerRequest = (error) => {
  loadingInstance.close();
  Message.error({ message: '连接服务器出错了' });
  return Promise.reject(error);
};
// 响应异常处理
const errHandlerResponse = (error) => {
  num -= 1;
  if (num === 0) {
    loadingInstance.close();
  }
  Message.error({ message: '连接服务器出错了' });
  return Promise.reject(error);
};
request.interceptors.request.use(interceptorsRequest, errHandlerRequest);
request.interceptors.response.use(interceptorsResponse, errHandlerResponse);

function get(url, params) {
  return request({
    url,
    method: 'get',
    params,
  });
}
function post(url, data) {
  return request({
    url,
    method: 'post',
    data,
  });
}

export default request;
export {
  post,
  get,
};
