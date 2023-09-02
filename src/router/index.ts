import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login/login.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Demo from '../views/Demo/index.vue'
import Demo2 from '../views/Demo/demo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: Demo2
    }
  ]
})

export default router
