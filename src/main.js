import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import router from './router/index'

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
