import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import MintUI from 'mint-ui'
import router from './router'

Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
