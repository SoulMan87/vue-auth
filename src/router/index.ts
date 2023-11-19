import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Login from "@/views/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {path: '/login', component: Login}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
