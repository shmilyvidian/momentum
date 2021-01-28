<template>
    <div class="register">
        <div v-if='flag' class="register_animation">
            <p class="register_question">{{question_title}}</p>
            <input type="text" v-focus v-model="userName" @keyup.enter="submit('userName')">
        </div>
        <div v-if='!flag' class="register_animation">
            <p class="register_question">{{question_title}}</p>
            <input type="text" v-focus v-model="email" @keyup.enter="submit('email')">
        </div>
    </div>
</template>
<script>
import { Observable } from 'rxjs';
import Cookies from 'js-cookie'

export default {
    name:'Register',
    data(){
        return {
            userName:'',
            email:'',
            flag: true,
            observable_text: Observable.of('hello rxjs')
        }
    },
    computed: {
        question_title: function(){
            return this.userName ? `What's your email, ${this.userName}` : 'Hello, what\'s your name?'
        }
    },
    subscriptions () {
        return {
        observable_text: Observable.of('hello world')
        }
    },
    mounted(){
        Cookies.get('userToken') && (this.$router.push('home'))
    },
    methods: {
        async submit (key){
            // eslint-disable-next-line no-console
            this.flag = false
            this[key] = this[key]
            if(key === 'email'){
                const result = await this.$store.dispatch('register',{userName: this.userName, email: this.email});
                if(!result){
                    this.userName = ''
                    this.email = ''
                    this.flag = true
                }else{
                    this.$router.push('home')
                }
            }
        }
    },
}
</script>
<style lang="less">
    .register{
        height: 150px;
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        transform: translateY(-50%);
        text-align: center;
        &_question{
            font-size: 60px;
            color:#fff;
            font-weight: bold;
            line-height: 120%;
            white-space: normal
        }
        input{
            border:none;
            width: 42%;
            border-bottom: 3px solid #fff;
            color: #fff;
            outline: none;
            background-color: rgba(0, 0, 0, 0);
           text-align: center;
            font-size: 50px;
            color: #fff;
            font-weight: 500;
        }
        &_animation{
            animation: fade-in;/*动画名称*/  
            animation-duration: 1.5s;/*动画持续时间*/  
            -webkit-animation:fade-in 1.5s;/*针对webkit内核*/
        }
        @keyframes fade-in {  
            0% {opacity: 0;}/*初始状态 透明度为0*/  
            40% {opacity: 0;}/*过渡状态 透明度为0*/  
            100% {opacity: 1;}/*结束状态 透明度为1*/  
        }  
        @-webkit-keyframes fade-in {/*针对webkit内核*/  
            0% {opacity: 0;}  
            40% {opacity: 0;}  
            100% {opacity: 1;}  
        } 
    }
</style>