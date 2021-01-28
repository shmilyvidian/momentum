import API from '@/api'
import Cookies from 'js-cookie'

const user = {
    state: { userToken: '', userInfo: {} },
    mutations: {
        setState (state, {key, value}) {
            // 变更状态
            state[key] = value
          }
    },
    actions: {
        async register (context,param){
            const res =  await API.user.register(param)
            if(res){
                context.commit('setState',{key:'userInfo', value: res['user']} )
                Cookies.set('userToken','Bearer ' + res['token'])
            }
            
            return res
        }
    }
  }

  export default user
