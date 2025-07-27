import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Gallary from '@/pages/Gallary.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/gallary', component: Gallary },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;