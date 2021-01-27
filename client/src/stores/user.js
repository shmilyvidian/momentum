import API from '@/api'
import Cookies from 'js-cookie'

const user = {
    state: { userToken: '',  },
    mutations: {

    },
    actions: {
        async register (context,param){
            const res =  await API.user.register(param)
            Cookies.set('userToken','bearer ' + res['token'])
            return res
        }
    }
  }

  export default user
