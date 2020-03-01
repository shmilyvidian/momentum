import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores/';
import focus from './directives/focus'
require('./styles/reset.css');

Vue.config.productionTip = false
Vue.use(focus)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
