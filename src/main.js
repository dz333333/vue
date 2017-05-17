import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import './assets/js/font.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './router-config'
let router=new VueRouter(routes)
import axios from 'axios'
axios.interceptors.request.use(function(config){
    store.dispatch('showloading');
    return config;
},function(error){
    return Promise.reject(error);
});
axios.interceptors.response.use(function(response){
    store.dispatch('hideloading');
    return response;
},function(error){
    return Promise.reject(error);
});
Vue.prototype.$http = axios
import filters from './filters'
import store from './store'
Object.keys(filters).forEach((key)=>{
  Vue.filter(key,filters[key])
})
import loading from './components/loading'
Vue.use(loading)
import 'animate.css'
new Vue({
  el: '#app',
  render: h => h(App),
    router,
    store
})
