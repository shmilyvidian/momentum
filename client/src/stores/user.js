import API from '@/api'

const user = {
    state: { userToken: '',  },
    mutations: {

    },
    actions: {
        async register (context,param){
            const res =  await API.user.register(param)
            return res
        }
    }
  }
  
  export default user
  