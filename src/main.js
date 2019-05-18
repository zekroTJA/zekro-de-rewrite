/** @format */

import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Bootstrap from 'bootstrap-vue';
import Router from 'vue-router';

Vue.use(Bootstrap);
Vue.use(Router);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
