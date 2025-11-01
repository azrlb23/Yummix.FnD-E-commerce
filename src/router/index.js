// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Kita akan menambahkan komponen HalamanHome di sini nanti
// import HomeView from '../views/HomeView.vue' 

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // ... rute lain akan ditambahkan di sini
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router