import { createRouter, createWebHistory } from 'vue-router'
import home from '@/router/home.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...home, //Как пример реализации систематизации роутинга для роста проекта
    {path: '/cart', name: 'cart', component: () => import('../views/cart/CartView.vue')},
    {path: '/favorites', name: 'favorites', component: () => import('../views/favorites/FavoritesView.vue')},
    {path: '/product/:id', name: 'product-item', component: () => import('../views/products/ProductView.vue')},
    {path: '/:catchAll(.*)', name: 'not-found', component: () => import('../views/notFound/NotFoundView.vue')}
  ],
})

export default router
