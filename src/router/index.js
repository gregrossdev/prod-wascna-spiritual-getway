import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: '/register',
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: '/cart',
    component: () => import("../views/Shopping/CartView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router