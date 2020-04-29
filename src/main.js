import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuex from 'vuex'//authenticate
import VueRouter from 'vue-router'
import axios from 'axios';//http
import vueResource from 'vue-resource';//http


import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(vueResource);



Vue.config.productionTip = false
Vue.use(Vuex)//state management
Vue.use(VueRouter)//routing
Vue.use(axios)//http


  

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
