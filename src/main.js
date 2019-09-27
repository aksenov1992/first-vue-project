import Vue from 'vue';
import VueResource from 'vue-resource';
import store from './store/';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueResource);


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

