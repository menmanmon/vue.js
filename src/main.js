import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import myPlugin from './plugins/myPlugin'

Vue.config.productionTip = false;

Vue.use(myPlugin)
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
