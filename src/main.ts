import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import buriedPoint from './mixins/buried-point'

Vue.config.productionTip = false
Vue.use(buriedPoint)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
