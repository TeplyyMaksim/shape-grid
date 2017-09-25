// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueD3 from 'vue-d3';
import BootstrapVue from 'bootstrap-vue';
import VueNotifications from 'vue-notifications';
import miniToastr from 'mini-toastr';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App';

// toasts
const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
};
miniToastr.init({types: toastTypes});
function toast ({title, message, type, timeout, cb}) {
  return miniToastr[type](message, title, timeout, cb)
}
const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}
VueNotifications.config.timeout = 2500;
Vue.use(VueNotifications, options)

Vue.use(VueD3);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
