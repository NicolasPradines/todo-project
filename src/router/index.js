import { createRouter, createWebHistory } from 'vue-router'
import Listes from '@/views/AllList.vue'
import Details from '@/views/ListesDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Listes,
    },
    {
      path: '/:id',
      name: 'details',
      props: true,
      component: Details,
    },
  ],
})

export default router
