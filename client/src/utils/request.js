import axios from 'axios'
import Cookies from 'js-cookie'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css'

// 创建axios请求实例
const request = axios.create({
  baseURL: 'http://localhost:5000', // 设置跨域代理接口统一的前置地址
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json; multipart/form-data',
    "withCredentials": true
  }
})

request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  NProgress.start()
  config.headers = {
    'token': Cookies.get('userToken'),
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 只返回数据
  NProgress.done()
  return response.data
}, function (error) {
  // const status = error.response.status;
  // if (status >= 500) {
  //   alert('服务繁忙请稍后再试')
  // } else if (status >= 400) {
  //   alert(error.response.data.message)
  // }
  // // 对响应错误做点什么
  // console.dir(error)
  return Promise.reject(error)
})

const get = (url, data) => request.get( url, { params: data })

const httpRequest = async ({ method = 'post', params, url }, callback) => {
    const data =  method === 'get' ? await get(url, { ...params }) : await request[method || 'post'](url, {...params})
    // eslint-disable-next-line no-console
    if(data.code !== 200){

      // Taro.showToast({{ title: '网络异常', icon: 'none', duration: 2000 });
      return
    }
    // TODO: 暂时后端没数据直接返回null，已跟后端沟通后续会改成空数据或空对象
    typeof callback === 'function' && callback.call(this, data.data)

    if ( data.data ) {
        typeof callback === 'function' && callback.call(this, data.data)
    }
    return Promise.resolve(data.data)
}

export default httpRequest
