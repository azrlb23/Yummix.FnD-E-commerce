<script setup>
// Impor <RouterView> dari vue-router
import { RouterView } from 'vue-router'
// Impor komponen Navbar
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  
  <RouterView />
</template>

<style scoped>
/* Kita akan menambahkan styling global di file lain (misal: src/assets/main.css)
  Untuk saat ini, kita biarkan kosong.
*/
</style>