import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('./../views/home.vue')

const routes = [
  { path: '/home', component: Home },
  { path: '/', component: Home }
]

const router = new Router({
  routes // (缩写) 相当于 routes: routes
})

export default router;
