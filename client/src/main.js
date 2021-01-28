import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores/';
import VueRx from 'vue-rx'
import Rx from 'rxjs/Rx'
import './plugins/element'
import focus from './directives/focus'
require('./styles/reset.css');

Vue.config.productionTip = false
Vue.use(focus)
Vue.use(VueRx, Rx)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
