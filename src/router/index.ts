import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
console.log(import.meta.env.BASE_URL)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
