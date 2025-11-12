<script setup>
// Pastikan Anda menempatkan gambar Anda di path ini
import heroImage from '@/assets/images/hero-image.png';
</script>

<template>
  <section class="hero-section">
    <div class="container hero-layout">
      
      <div class="hero-content">
        <h1 class="hero-title">
          Di Setiap Gigitan, Ada Kebahagiaan.
        </h1>
        <p class="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary">EXPLORE MENU</button>
          <button class="btn btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            SEARCH
          </button>
        </div>
      </div>

      <div class="hero-image-container">
        <img :src="heroImage" alt="Aneka Makanan Yummix">
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 4rem 0; /* Memberi jarak dari navbar dan konten di bawah */
}
.hero-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* Kolom Konten Kiri */
.hero-content {
  flex: 1; /* Mengambil ruang yang tersedia */
  max-width: 45%; /* Batasi lebar agar tidak terlalu lebar */
}
.hero-title {
  font-size: 3.2rem; /* Ukuran font besar sesuai desain */
  font-weight: 800; /* Sangat tebal */
  color: var(--text-dark);
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 1.5rem;
}
.hero-description {
  font-size: 1rem;
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 2.5rem;
}
.hero-actions {
  display: flex;
  gap: 1rem; /* Jarak antar tombol */
}

/* Kolom Gambar Kanan */
.hero-image-container {
  flex: 1; /* Mengambil ruang yang tersedia */
  display: flex;
  justify-content: center;
  max-width: 50%;
}
.hero-image-container img {
  max-width: 100%;
  height: auto;
  /* Efek bayangan halus seperti di desain */
  filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));
}
</style>