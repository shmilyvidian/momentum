import API from '@/api'

const home = {
    state: { userToken: '', weather:'' },
    mutations: {
        setState(state, playload){
            const {data, key} = playload;
            state[key] = data;
          }
    },
    actions: {
        async getWeather (context,param){
            const data =  await API.weather.getWeather(param) || '多云'
            // eslint-disable-next-line no-console
            console.log(await API.weather.getWeather(param),'data')
            context.commit('setState',{data,key:'weather'});
            return data
        }
    }
  }
  
  export default home
  