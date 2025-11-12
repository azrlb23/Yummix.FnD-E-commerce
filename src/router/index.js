// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// Kita akan menambahkan komponen HalamanHome di sini nanti
// import HomeView from '../views/HomeView.vue' 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { // Rute placeholder untuk Menu
    path: '/menu',
    name: 'menu',
    component: () => import('../views/MenuView.vue') // Lazy load
  },
  { // Rute placeholder untuk About Us
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue') // Lazy load
  },
  { // Rute placeholder untuk Contact
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue') // Lazy load
  },
  { // Rute placeholder untuk Sign Up
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUpView.vue') // Lazy load
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router