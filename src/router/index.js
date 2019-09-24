import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('./../views/home.vue')
const About = () => import('./../views/about.vue')
const Intro = () => import('./../views/intro.vue')
const Specialise = () => import('./../views/specialise.vue')
const Star = () => import('./../views/star.vue')
const Event = () => import('./../views/event.vue')

const CourseOne = () => import('./../views/course-one.vue')
const CourseOneOne = () => import('./../views/course-one-one.vue')
const CourseOneTwo = () => import('./../views/course-one-two.vue')

const CourseTwo = () => import('./../views/course-two.vue')
const CourseTwoOne = () => import('./../views/course-two-one.vue')
const CourseTwoTwo = () => import('./../views/course-two-two.vue')

const CourseThree = () => import('./../views/course-three.vue')
const CourseThreeOne = () => import('./../views/course-three-one.vue')
const CourseThreeTwo = () => import('./../views/course-three-two.vue')
const CourseThreeThree = () => import('./../views/course-three-three.vue')

const routes = [
  { path: '/home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/intro', name: 'intro', component: Intro },
  { path: '/specialise', name: 'specialise', component: Specialise },
  { path: '/star', name: 'star', component: Star },
  { path: '/event', name: 'event', component: Event },
  { path: '/course/1', name: 'course1', component: CourseOne },
  { path: '/course/1/1', name: 'course1-1', component: CourseOneOne },
  { path: '/course/1/2', name: 'course1-2', component: CourseOneTwo },
  { path: '/course/2', name: 'course2', component: CourseTwo },
  { path: '/course/2/1', name: 'course2-1', component: CourseTwoOne },
  { path: '/course/2/2', name: 'course2-2', component: CourseTwoTwo },
  { path: '/course/3', name: 'course3', component: CourseThree },
  { path: '/course/3/1', name: 'course3-1', component: CourseThreeOne },
  { path: '/course/3/2', name: 'course3-2', component: CourseThreeTwo },
  { path: '/course/3/3', name: 'course3-3', component: CourseThreeThree },
  { path: '/', component: Home }
]

const router = new Router({
  routes, // (缩写) 相当于 routes: routes
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router;
