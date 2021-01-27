<template>
    <div class="home">
        <div class="home_weather">{{weather}}</div>
        <div class="home_container">
            <p class="home_container_clock">{{currentTime}}</p>
            <p class="home_container_message">{{currentMessage}}</p>
            <div class="home_container_question">
            <p>What is your main focus for today?</p>
            <input type="text"  v-focus  v-model="mainFoucs" @keyup.enter="submit('mainFoucs')">
        </div>
        </div>
    </div>
</template>
<script>
import { getCurrentTime, getSayHiMessage } from '@/utils/common'
import {
  mapActions,
} from 'vuex'
export default {
    name:'Home',
    data(){
        return{
            currentTime: getCurrentTime(),
            mainFoucs: '',
        }
    },
    computed: {
        currentMessage:function(){
            return getSayHiMessage() + 'Alice'
        },
        weather: {
            get() {
                return this.$store.state.home.weather
            },
            set() {}
            },
    },
    mounted() {
    this.getWeather({city: 'shenzhen'});
       const timer_time = setInterval(()=>{
           this.currentTime = getCurrentTime()
       }, 1000)
        this.$once('hook:beforeDestroy', () => {
            clearInterval(timer);
            clearInterval(timer_time);
        })
    },

    methods: {
        ...mapActions([
      'getWeather'
     ]),
     submit(){
         // eslint-disable-next-line no-console
          this.$store.dispatch('getUserInfo',{ email: 'shmilyvidian@163.com'});
     }
    },
}
</script>

<style lang="less" scope>
    .home{
        color: #fff;
        &_weather{
            text-align: right
        }
        &_container{
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            text-align: center;
            transform: translate(-50%,-50%);
            &_clock{
                font-size: 150px;
                font-weight: 500;
                margin-bottom: -15px;
                margin-top: 40px;
            }
            &_message{
                font-size: 60px;
                margin-top: 0;
                font-weight: 500;
            }
            &_question{
                 font-size: 24px;
                 input{
                    border:none;
                    width: 22%;
                    border-bottom: 3px solid #fff;
                    color: #fff;
                    outline: none;
                    background-color: rgba(0, 0, 0, 0);
                    text-align: center;
                    font-size: 50px;
                    color: #fff;
                    font-weight: 500;
                }
            }
        }
    }
</style>