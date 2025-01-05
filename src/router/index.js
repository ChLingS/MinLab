import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path:'/Periodicals',
      name:'Periodicals',
      component: () => import('../views/Periodicals.vue'),
    },
    {
      path:'/Patents',
      name:'Patents',
      component: () => import('../views/Patents.vue'),
    },
    {
      path: '/Animals',
      name: 'Animals',
      component: () => import('../views/Animals.vue'),
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/About.vue'),
    },
    {
      path:'/Create',
      name:'Create',
      component: () => import('../views/Create.vue'),
    }
  ],
})

export default router
