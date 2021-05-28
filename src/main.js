import Vue from 'vue';
import VueMoment from 'vue-moment';
import Background from '@/layouts/default.vue';
import Empty from '@/layouts/empty.vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueMoment);

Vue.component('background-layout', Background);
Vue.component('empty-layout', Empty);

Vue.config.productionTip = false;

window.EventBus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
