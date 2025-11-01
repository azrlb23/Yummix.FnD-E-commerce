# YUMMIX - Sistem Pemesanan Online F&B

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

> YUMMIX adalah situs web e-commerce F&B yang dirancang agar pelanggan dapat menjelajahi menu, melakukan pemesanan, dan membayar secara online. Fokus utamanya adalah pada antarmuka yang sangat visual, interaktif, dan mudah digunakan, didukung oleh **Vue.js** untuk pengalaman pengguna yang reaktif dan *real-time*.

---

##  Daftar Isi

* [Tentang Proyek](#tentang-proyek)
    * [Ruang Lingkup](#ruang-lingkup)
* [Fitur Utama](#fitur-utama)
* [Arsitektur Sistem](#arsitektur-sistem)
* [Struktur Projek](#struktur-projek)
* [Tumpukan Teknologi](#tumpukan-teknologi)
* [Instalasi & Menjalankan Proyek](#instalasi--menjalankan-proyek)
    * [Prasyarat](#prasyarat)
    * [Instalasi Frontend (Client)](#instalasi-frontend-client)
    * [Instalasi Backend (Server)](#instalasi-backend-server)
* [Roadmap](#roadmap)
* [Kontak](#kontak)

---

## Tentang Proyek

Proyek ini bertujuan untuk menciptakan platform pemesanan F&B yang modern. Tidak seperti situs statis pada umumnya, YUMMIX memanfaatkan reaktivitas **Vue.js** untuk memberikan umpan balik instan kepada pengguna—seperti pembaruan keranjang belanja secara *real-time* dan pemfilteran menu yang dinamis tanpa perlu me-refresh halaman.

### Ruang Lingkup

**Termasuk (In-Scope) V1.0:**
* Halaman Landing Page (Hero, About, Review).
* Autentikasi Pelanggan (Sign Up / Login).
* Penjelajahan Menu (dengan kategori & sub-kategori).
* Sistem Keranjang Belanja (Shopping Cart) interaktif via modal.
* Proses Checkout sederhana (misal: "Cash on Delivery").
* Panel Admin dasar (untuk mengelola menu dan melihat pesanan).

**Tidak Termasuk (Out-of-Scope) V1.0:**
* Integrasi Payment Gateway (misal: Midtrans, Xendit).
* Sistem Pelacakan Pengiriman (Driver Tracking).
* Manajemen Inventaris Bahan Baku.

---

## Fitur Utama

### 👤 Untuk Pelanggan (Customer)

* **Autentikasi:** Mendaftar (`/signup`) dan masuk (`/login`) ke akun.
* **Navigasi Hybrid:**
    * **One-Page Scroll:** Navigasi di halaman utama (`/`) untuk ke bagian `About Us` dan `Contact` dengan *smooth-scroll*.
    * **Multi-Page:** Pindah halaman penuh ke bagian fungsional seperti `/menu` dan `/checkout`.
* **Penjelajahan Menu Interaktif:**
    * Filter berdasarkan Kategori (`FOOD` / `DRINKS`).
    * Filter berdasarkan Sub-Kategori (`TOAST`, `NOODLES`, `COFFEE`, `MILK`, dll.).
    * Tampilan item dalam bentuk *carousel/slider* horizontal.
    * Fungsi pencarian item menu.
* **Keranjang Belanja Real-time:**
    * Menambah item langsung dari kartu menu.
    * *Badge* jumlah item di ikon keranjang header diperbarui secara instan.
    * Modal keranjang untuk melihat detail pesanan.
    * Mengubah jumlah (`+` / `-`) atau menghapus (`X`) item.
    * Kalkulasi `SUBTOTAL`, `FEE`, dan `TOTAL` otomatis dan reaktif.
* **Proses Checkout:** Alur pemesanan sederhana untuk mengumpulkan info pengiriman.
* **Desain Responsif:** Tampilan yang optimal di perangkat desktop maupun mobile.

### admin Untuk Admin / Manajer Toko

* **Login Terpisah:** Halaman login khusus untuk admin.
* **Manajemen Pesanan:** Melihat daftar pesanan baru yang masuk dari pelanggan.
* **Manajemen Menu (CRUD):**
    * Menambah, mengedit, dan menghapus item menu (nama, harga, gambar, dll.).
    * Mengatur kategori dan sub-kategori untuk setiap item.
* **Manajemen Ketersediaan:** Menandai item sebagai "Habis" (non-aktif) agar tidak muncul di halaman pelanggan.

---

## Arsitektur Sistem

Sistem ini menggunakan arsitektur **"One-Page Scroll Hybrid"**.

1.  **Halaman Utama (`/`)**: Berfungsi sebagai *landing page* tunggal yang berisi beberapa bagian (Hero, About, Reviews, Contact) yang dapat di-scroll. Tautan seperti `#about-us` akan menggunakan *smooth-scroll* ke bagian tersebut.
2.  **Halaman Fungsional Terpisah**: Halaman yang kompleks secara fungsional seperti `/menu`, `/login`, dan `/checkout` dijadikan halaman terpisah (rute Vue yang berbeda) untuk menjaga fokus pengguna dan mempermudah pengelolaan *state*.

---

## Struktur Projek

├── public/ # Aset statis yang tidak diproses (misal: favicon.ico) 
├── src/ 
│ ├── assets/ # CSS global, font, dan gambar yang diproses 
│ ├── components/ # Komponen Vue yang dapat digunakan kembali (misal: Button, Card) 
│ ├── router/ # Konfigurasi Vue Router (index.js) 
│ ├── views/ # Komponen Halaman (misal: HomeView.vue, MenuView.vue) 
│ ├── App.vue # Komponen root/cangkang aplikasi 
│ └── main.js # Titik masuk aplikasi (inisialisasi Vue) 
├── .editorconfig # Konfigurasi konsistensi editor 
├── .gitignore # File yang diabaikan oleh Git 
├── index.html # Template HTML utama 
├── package.json # Dependensi dan skrip proyek 
├── vite.config.js # Konfigurasi Vite 
└── README.md # Dokumentasi proyek (Anda sedang membacanya)

* **`/src/views`**: Berisi komponen yang mewakili satu halaman penuh, seperti `HomeView.vue` atau `MenuView.vue`. Setiap rute utama akan menunjuk ke satu file di sini.
* **`/src/components`**: Berisi komponen-komponen kecil yang dapat digunakan kembali di berbagai halaman, seperti `Navbar.vue`, `Footer.vue`, atau `MenuItemCard.vue`.
* **`/src/router`**: Mengelola pemetaan URL ke komponen Tampilan (View) yang sesuai.
* **`/src/assets`**: Menyimpan file pendukung seperti file CSS global (`main.css`) dan gambar.

---

## Tumpukan Teknologi

Berikut adalah teknologi utama yang digunakan dalam proyek ini:

* **Frontend:** [Vue.js](https://vuejs.org/)
* **Bahasa:** [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* **Backend (Disarankan):** [Node.js](https://nodejs.org/) dengan [Express.js](https://expressjs.com/)
* **Database (Disarankan):** [PostgreSQL](https://www.postgresql.org/) atau [Firestore](https://firebase.google.com/docs/firestore) (untuk rilis cepat)
* **Styling:** (TailwindCSS)

---

## Instalasi & Menjalankan Proyek

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal Anda.

### Prasyarat

Pastikan Anda telah menginstal:
* [Node.js](https://nodejs.org/) (v18.x atau lebih tinggi)
* [NPM](https://www.npmjs.com/) (biasanya terinstal bersama Node.js)
* (Jika menggunakan PostgreSQL) Server PostgreSQL yang sedang berjalan.

### Instalasi Frontend (Client)

1.  Clone repositori ini:
    ```bash
    git clone [https://github.com/username/yummix.git](https://github.com/username/yummix.git)
    cd yummix
    ```

2.  Masuk ke direktori frontend (asumsi ada folder `client`):
    ```bash
    cd client
    ```

3.  Instal dependensi NPM:
    ```bash
    npm install
    ```

4.  Buat file `.env.local` di dalam folder `client` dan isi variabel lingkungan (misal: URL API Backend):
    ```plaintext
    VUE_APP_API_BASE_URL=http://localhost:3000/api
    ```

5.  Jalankan server development frontend:
    ```bash
    npm run serve
    ```
    Aplikasi frontend sekarang berjalan di `http://localhost:8080`.

### Instalasi Backend (Server)

1.  Buka terminal baru dan masuk ke direktori backend (asumsi ada folder `server`):
    ```bash
    cd server
    ```

2.  Instal dependensi NPM:
    ```bash
    npm install
    ```

3.  Buat file `.env` di dalam folder `server` dan isi kredensial database Anda:
    ```plaintext
    DB_HOST=localhost
    DB_USER=postgres
    DB_PASSWORD=secret
    DB_NAME=yummix_db
    DB_PORT=5432
    
    JWT_SECRET=rahasia-anda-yang-sangat-aman
    ```

4.  Jalankan migrasi database (jika menggunakan ORM seperti Sequelize/Prisma):
    ```bash
    npm run db:migrate
    ```

5.  Jalankan server development backend:
    ```bash
    npm run start:dev
    ```
    Server backend sekarang berjalan di `http://localhost:3000`.

---

## Roadmap

Fitur-fitur berikut direncanakan untuk rilis mendatang (V2.0 dan seterusnya):

* [ ] Integrasi **Payment Gateway** penuh (Midtrans, Xendit, dll.).
* [ ] Sistem **Pelacakan Pengiriman** (Driver Tracking) real-time.
* [ ] Manajemen **Inventaris Bahan Baku** di panel admin.
* [ ] Fitur **Promo & Voucher**.
* [ ] Sistem **Rating & Review** per item menu.

---

## Kontak

Nama Anda – [azrielalbian23.com](mailto:azrielalbian23.com)

Link Proyek: [https://github.com/azrlb23/Yummix.FnD-E-commerce](https://github.com/username/yummix)