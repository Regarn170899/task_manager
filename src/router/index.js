import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/list",
    name: "list",
    component: ()=>import("../views/ListView.vue")
  },{
    path: "/task/:id",
    name: "task",
    component: ()=>import("../views/taskCorrection.vue")
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
