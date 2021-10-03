import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// импортируем экземпляр созданного хранилища из листинга выше
import store from './store'

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
