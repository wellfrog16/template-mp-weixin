import Vue from 'vue';
import App from './App';
import store from './store';
import helper from '@/helper';

Vue.config.productionTip = false;

App.mpType = 'app';

Vue.prototype.$helper = helper;

const app = new Vue({
  store,
  ...App,
})
app.$mount();
