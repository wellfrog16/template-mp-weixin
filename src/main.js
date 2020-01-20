import Vue from 'vue';
import App from './App';
import store from './store';
import helper from '@/helper';
import utils from '@/utils';
// import moment from '@/utils/moment/moment.min';
import moment from 'moment';

Vue.config.productionTip = false;

App.mpType = 'app';

Vue.prototype.$helper = helper;
Vue.prototype.$utils = utils;
Vue.prototype.$moment = moment;

const app = new Vue({
  store,
  ...App,
})
app.$mount();
