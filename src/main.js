import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import MintUI from 'mint-ui'
import router from './router'
import axios from 'axios'

axios.get('json/banner.json')
.then(res=>{
  Vue.prototype.jsonData = res.data
  window.localStorage.setItem("banner",JSON.stringify(res.data))
})

axios.get('json/event.json')
.then(res=>{
  Vue.prototype.eventData = res.data
  window.localStorage.setItem("event",JSON.stringify(res.data))
})

Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
