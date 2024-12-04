# Sistem Pengelolaan Pesanan Restoran
Anda diminta untuk membuat sebuah sistem sederhana untuk mengelola pesanan di sebuah restoran.
Sistem ini akan menggunakan bahasa pemrograman JavaScript dan memanfaatkan berbagai konsep yang telah dipelajari.

## Fitur yang harus ada
### Struktur Data untuk Menyimpan Data Pesanan
- Gunakan Array dan Object untuk menyimpan data pesanan.
- Setiap pesanan harus memiliki informasi berikut:
  - ID Pesanan (unik) -> `id`
  - Nama Pelanggan -> `customerName`
  - Daftar Item yang Dipesan (Array dari objek item, setiap item memiliki nama dan harga) -> `items` -> `{ name: string, price: number }`
  - Total Harga Pesanan -> `totalPrice`
  - Status Pesanan (Menunggu, Diproses, Selesai) -> `status`

## Ketentuan
1. Kode harus dipecah ke dalam beberapa modul JavaScript.
