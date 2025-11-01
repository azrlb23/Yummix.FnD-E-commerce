# Spesifikasi Kebutuhan Sistem (SRS)
## YUMMIX (Sistem Pemesanan Online F&B)

---

### 1. Pendahuluan

#### 1.1. Gambaran Umum Proyek
YUMMIX adalah situs web e-commerce F&B yang dirancang agar pelanggan dapat menjelajahi menu, melakukan pemesanan, dan membayar secara online. Fokus utamanya adalah pada antarmuka yang sangat visual, interaktif, dan mudah digunakan (seperti yang terlihat pada prototipe Figma), didukung oleh Vue.js untuk pengalaman pengguna yang reaktif.

#### 1.2. Ruang Lingkup Proyek
**Termasuk (In-Scope):**
* Halaman *Landing Page* (Hero, About, Review).
* Autentikasi Pelanggan (Sign Up / Login).
* Penjelajahan Menu (dengan kategori & sub-kategori).
* Sistem Keranjang Belanja (Shopping Cart) interaktif.
* Proses *Checkout* (Pemesanan).
* Panel Admin (untuk mengelola menu dan melihat pesanan).

**Tidak Termasuk (Out-of-Scope):**
* Integrasi *Payment Gateway* (misal: Midtrans, Xendit) - *Akan ditambahkan di versi selanjutnya.*
* Sistem Pelacakan Pengiriman (Driver Tracking).
* Manajemen Inventaris Bahan Baku (misal: stok daging, kopi).

#### 1.3. Target Pengguna
* **Pelanggan (Customer):** Pengguna utama. Menjelajahi situs, memilih makanan/minuman, dan melakukan pemesanan.
* **Admin / Manajer Toko:** Pengguna backend. Mengelola item menu (harga, gambar, status ketersediaan) dan menerima/memproses pesanan yang masuk.

---

### 2. Kebutuhan Fungsional (Functional Requirements)
#### 2.1. Halaman Publik & Navigasi
* **FR-1 (Header):** Header harus persisten dan berisi navigasi ke 'HOME', 'MENU', 'ABOUT US', 'CONTACT', ikon Keranjang, dan tombol 'SIGN UP' (Seperti pada `Login.jpg`).
* **FR-2 (Footer):** Footer harus berisi link cepat, info kontak, dan formulir 'Subscribe Newsletter' (Seperti pada `Login-2.jpg`).
* **FR-3 (Landing Page - Hero):** Halaman 'HOME' harus menampilkan *Hero Section* dengan gambar produk, slogan ("Di Setiap Gigitan..."), dan tombol 'EXPLORE MENU' (Seperti pada `Login.jpg`).
* **FR-4 (Landing Page - Review):** Halaman 'HOME' harus menampilkan bagian testimoni pelanggan ("What Our Customer Says?") (Seperti pada `Login-2.jpg`).
* **FR-5 (Halaman About Us):** Harus ada halaman 'ABOUT US' yang menceritakan kisah brand ("Bukan Sekedar Sajian Biasa.") (Seperti pada `Login-3.jpg`).
* **FR-6 (Halaman Contact):** Harus ada halaman 'CONTACT' (detailnya belum ada, tapi tautan ada di header).

#### 2.2. Autentikasi Pelanggan
* **FR-7:** Pelanggan harus bisa mendaftar akun baru (via tombol 'SIGN UP').
* **FR-8:** Pelanggan harus bisa login ke akun yang sudah ada (implisit dari 'SIGN UP').

#### 2.3. Penjelajahan Menu (Menu Browsing)
* **FR-9:** Halaman 'MENU' harus memiliki tombol filter 'FOOD' dan 'DRINKS' (Seperti pada `Login-1.jpg`).
* **FR-10:** Saat 'FOOD' dipilih, harus muncul sub-kategori 'TOAST', 'NOODLES', 'KEBAB' (Seperti pada `Login-1.jpg`).
* **FR-11:** Saat 'DRINKS' dipilih, harus muncul sub-kategori 'MILK', 'COFFEE', 'SQUASH' (Seperti pada `Login-4.jpg`).
* **FR-12:** Item menu harus ditampilkan sebagai kartu (gambar, nama, harga) dalam *carousel/slider* horizontal (Seperti pada `Login-1.jpg`).
* **FR-13:** Pelanggan harus bisa mencari item menu (via *search bar* di `Login-1.jpg`).

#### 2.4. Manajemen Keranjang (Shopping Cart)
* **FR-14:** Pelanggan harus bisa menambah item ke keranjang (tombol `+` pada kartu item di `Login-1.jpg`).
* **FR-15:** Ikon keranjang di header harus diperbarui (misal: dengan *badge* jumlah item) secara *real-time*.
* **FR-16:** Mengklik ikon keranjang akan membuka *modal pop-up* keranjang (Seperti pada `Login-5.jpg`).
* **FR-17:** Di dalam modal keranjang, pelanggan harus bisa menambah (`+`), mengurangi (`-`), atau menghapus (`X`) item (Seperti pada `Login-5.jpg`).
* **FR-18:** Modal keranjang harus secara otomatis menghitung 'SUBTOTAL', 'FEE', dan 'TOTAL' secara *real-time*.

#### 2.5. Proses Checkout
* **FR-19:** Menekan tombol 'ORDER NOW' di modal keranjang akan memulai proses checkout (Seperti pada `Login-5.jpg`).
* **FR-20:** (Implisit) Sistem harus mengumpulkan info pelanggan (alamat, no. telp) dan metode pembayaran (misal: "Cash on Delivery" untuk V1).
* **FR-21:** Setelah pesanan dikonfirmasi, pesanan harus disimpan di database dan keranjang pelanggan dikosongkan.

#### 2.6. Panel Admin (Kebutuhan Backend)
* **FR-22:** Admin harus memiliki halaman login terpisah.
* **FR-23:** Admin harus bisa melihat daftar pesanan baru yang masuk.
* **FR-24:** Admin harus bisa menambah/mengedit/menghapus item menu (nama, harga, gambar, deskripsi, kategori, sub-kategori).
* **FR-25:** Admin harus bisa menandai item sebagai "Habis", dan item ini harus non-aktif di halaman Menu pelanggan.

---

### 3. Kebutuhan Non-Fungsional (Non-Functional Requirements)

#### 3.1. Performa & Interaktivitas
* **NFR-1:** Semua interaksi (menambah ke keranjang, mengubah jumlah, memfilter menu) harus terasa instan tanpa *loading* halaman (inti dari Vue.js).
* **NFR-2:** Penghitungan total di modal keranjang harus diperbarui secara *real-time*.
* **NFR-3:** Gambar produk harus dioptimalkan agar halaman dimuat dengan cepat.

#### 3.2. Usability (Kemudahan Penggunaan)
* **NFR-4:** Situs harus *mobile-responsive* dan terlihat bagus di ponsel maupun desktop.
* **NFR-5:** Desain harus konsisten dan sesuai dengan prototipe Figma.
* **NFR-6:** Alur pemesanan harus jelas dan intuitif bagi pelanggan yang baru pertama kali berkunjung.

#### 3.3. Tumpukan Teknologi (Tech Stack)
* **Frontend:** **Vue.js** (sesuai permintaan).
* **Bahasa:** **JavaScript**.
* **Backend:** [Saran: Firebase (untuk rilis cepat) atau Node.js].
* **Database:** [Saran: Firestore (jika pakai Firebase) atau PostgreSQL].

---

### 4. Jawaban untuk Kebingungan Anda

Berdasarkan prototipe Anda, Anda sebenarnya sudah menjawab pertanyaan Anda sendiri dengan sangat baik!

1.  **About Us vs Contact Us:**
    > "saya masih bingung untuk itu dijadikan satu atau tidak."
    * **Jawaban:** Desain Anda di `Login.jpg` sudah memisahkannya ("ABOUT US" dan "CONTACT" di header). **Ini adalah praktik terbaik.** Halaman "About Us" (seperti `Login-3.jpg`) adalah untuk *bercerita* dan membangun koneksi emosional. Halaman "Contact" adalah murni fungsional (peta, nomor telepon, email). Tetap pisahkan.

2.  **Lokasi Review:**
    > "Ada bagian review, tapi saya masih bingung itu meletakkannya dimana."
    * **Jawaban:** Desain Anda di `Login-2.jpg` ("What Our Customer Says?") menempatkannya di *Landing Page* (Home). **Ini sempurna.** Ini disebut "social proof" (bukti sosial) dan sangat penting untuk meyakinkan pelanggan baru. Anda tidak perlu halaman "Review" terpisah. Menampilkannya di halaman depan jauh lebih efektif.

```eof