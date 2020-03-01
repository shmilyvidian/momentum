import httpRequest from '@/utils/request'
const API = {
    user: {
      register(params) { //注册接口
        return httpRequest({ url: '/user/register', params })
      },
      getUserInfo(params) {
        return httpRequest({ url: '/user/getUserInfo', method: 'get', params })
      }
    },
    weather: {
      getWeather(params) { //获取天气接口
        return httpRequest({ url: '/weather/getWeather',method: 'get',  params })
      },
    }
}
export default API
