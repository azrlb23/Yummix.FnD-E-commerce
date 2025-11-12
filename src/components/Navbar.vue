<script setup>
import { RouterLink } from 'vue-router';
// 1. Impor gambar menggunakan alias '@'
import yummixLogo from '@/assets/images/logo.png';
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-left">
        <RouterLink to="/" class="brand-logo">
          <img :src="yummixLogo" alt="Yummix Logo"> 
          <span>YUMMIX</span>
        </RouterLink>
      </div>
      <div class="navbar-center">
        <RouterLink to="/" class="nav-link">HOME</RouterLink>
        <RouterLink to="/menu" class="nav-link">MENU</RouterLink>
        <RouterLink to="/about" class="nav-link">ABOUT US</RouterLink>
        <RouterLink to="/contact" class="nav-link">CONTACT</RouterLink>
      </div>
      <div class="navbar-right">
        <button class="icon-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        </button>
        <RouterLink to="/signup" class="btn btn-primary">SIGN UP</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Variabel Warna (bisa dipindahkan ke file CSS global nanti) */
:root {
  --primary-color: #e07f6e; /* Merah bata untuk tombol utama */
  --text-color: #333;
  --link-hover-color: #e07f6e;
  --bg-soft-orange: #fcf6e8; /* Background landing page */
}

.navbar {
  background-color: var(--bg-soft-orange); /* Sesuai background gambar */
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Sedikit shadow */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem; /* Padding horizontal */
}

.navbar-left, .navbar-center, .navbar-right {
  display: flex;
  align-items: center;
}

.brand-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-color);
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 2rem;
}

.brand-logo img {
  height: 40px; /* Sesuaikan ukuran logo */
  margin-right: 0.5rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  margin: 0 1.5rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--link-hover-color);
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1.5rem;
  padding: 0;
  display: flex;
  align-items: center;
  color: var(--text-color);
}

.icon-button svg {
  height: 24px;
  width: 24px;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 9999px; /* Rounded pill button */
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #c06556; /* Sedikit lebih gelap */
}
</style>