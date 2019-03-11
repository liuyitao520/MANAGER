// 导入axios
import axios from 'axios'
// 导入Vue
import Vue from 'vue'
// 设置基地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

// 设置拦截器 (回调函数)
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // console.log('拦截啦');
    // config 这次请求的各项设置
    // console.log(config);
    // config 保存了请求的信息 比如 header url地址
    // 除了登录 都增加token
    if (config.url.indexOf('/login') == -1) {
      // 不是登录接口
      config.headers.Authorization = window.sessionStorage.getItem('token')
    }
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 设置拦截器 响应拦截器
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    // console.log('请求回来啦')
    // console.log(response)
    Vue.prototype.$message(response.data.meta.msg)
    return response
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

// 实现install方法
// 把axios设置到Vue.原型上
// 暴露出去
export default {
  install(Vue) {
    Vue.prototype.$http = axios
  }
}
