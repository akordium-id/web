---
slug: fleet-dashboard-kpis-workflows
language: id
status: draft
title: "Dashboard Armada: KPI dan Workflow Apa yang Layak Dipantau?"
title_en: "Fleet Dashboards: Which KPIs and Workflows Are Worth Monitoring?"
category: "Dashboard & Sistem Internal"
---

Dashboard armada sering dimulai dengan pertanyaan, “Grafik apa yang perlu ditampilkan?” Pertanyaan yang lebih berguna adalah, “Keputusan apa yang ingin dibuat lebih mudah?” Grafik yang rapi tidak banyak membantu jika datanya terlambat, definisi metriknya berbeda antar tim, atau tidak ada tindak lanjut setelah angka berubah.

Gunakan panduan ini untuk menentukan apa yang layak dipantau sebelum memilih tampilan atau membangun dashboard.

## Mulai dari keputusan dan workflow

Pilih satu keputusan yang berulang. Misalnya, operator perlu mengetahui perjalanan mana yang membutuhkan perhatian, supervisor perlu meninjau penyelesaian tugas, atau pemilik perlu membandingkan rencana dan aktivitas. Pertanyaan itu harus berujung pada tindakan yang jelas.

Untuk tiap keputusan, catat:

- siapa yang membuat keputusan;
- kapan keputusan perlu dibuat;
- informasi apa yang tersedia saat ini;
- tindakan apa yang diambil setelah melihat informasi;
- apa konsekuensinya bila informasi terlambat atau tidak lengkap.

Jika tidak ada tindakan yang berubah setelah metrik terlihat, pertimbangkan untuk tidak menampilkannya. Dashboard bukan tujuan akhir—ia membantu orang memahami keadaan dan memilih tindak lanjut.

## Definisikan KPI sebelum mendesain grafik

Setiap metrik perlu memiliki definisi yang bisa dipahami semua pengguna. Tuliskan nama, rumus atau aturan hitung, sumber data, rentang waktu, pengecualian, dan pemiliknya. Contohnya, istilah “pengiriman selesai” harus menjelaskan event apa yang menandai selesai dan siapa yang mengonfirmasinya.

Kemudian tentukan:

1. **Pemilik metrik:** siapa yang memeriksa dan menjelaskan perubahan?
2. **Frekuensi review:** apakah metrik dipantau saat operasi berjalan atau cukup ditinjau berkala?
3. **Kualitas data:** field mana yang wajib dan bagaimana data hilang ditangani?
4. **Tindakan:** apa yang dilakukan ketika hasil berada di luar kondisi yang disepakati?

Hindari membuat satu dashboard untuk semua peran. Operator mungkin membutuhkan daftar tugas yang perlu ditindaklanjuti, sementara pimpinan mungkin membutuhkan ringkasan periode. Keduanya dapat memakai sumber data yang sama dengan cara pandang berbeda.

## Jangan menyamarkan masalah data dengan visualisasi

Sebelum membuat grafik, periksa apakah sumber data memiliki timestamp yang konsisten, status yang terdefinisi, dan cara menangani catatan duplikat atau terlambat. Metrik yang dihitung dari data tidak lengkap perlu diberi konteks. Jika pengguna tidak tahu kapan data terakhir diperbarui, mereka bisa menyangka keadaan lama sebagai kondisi saat ini.

Histori lokasi, misalnya, memiliki konsekuensi pada penyimpanan, query, dan retensi. Untuk perspektif teknis, baca [artikel tentang penyimpanan data GPS dengan PostgreSQL dan TimescaleDB](https://najib.id/writing/2026/gps-data-postgresql-timescaledb/). Untuk kasus sistem yang melambat ketika data tumbuh, Akordium juga memiliki [artikel terpisah tentang pertumbuhan data GPS](https://akordium.id/blog/why-gps-system-slows-down-as-fleet-grows/). Artikel ini berfokus pada pemilihan keputusan dan workflow dashboard, bukan mengulang klaim performa atau migrasi dari artikel tersebut.

## Rancang tampilan sesuai tindakan

Setelah metrik dan pengguna jelas, pilih komponen yang membantu tindakan:

- ringkasan untuk membandingkan kondisi dengan sasaran yang telah disepakati;
- daftar pengecualian untuk memprioritaskan tindak lanjut;
- detail perjalanan untuk menelusuri konteks;
- filter untuk melihat unit, waktu, atau area tertentu;
- indikator waktu pembaruan dan kualitas data.

Gunakan warna dan grafik secara konsisten. Jangan memakai warna peringatan hanya untuk dekorasi; pastikan arti warna dapat dipahami dan tersedia informasi teks yang mendukungnya.

## Pilot dashboard secara terbatas

Pilih pengguna dan keputusan tertentu untuk tahap awal. Tinjau apakah data yang diperlukan tersedia, apakah definisi KPI dipahami, dan apakah dashboard mengubah langkah kerja secara positif. Catat pertanyaan yang tidak dapat dijawab dan bagian yang menyesatkan. Perbaiki definisi serta sumber data sebelum menambah grafik baru.

Jika Anda ingin menentukan metrik untuk workflow armada, [diskusikan kebutuhan dashboard atau sistem internal dengan Akordium Lab](https://akordium.id/contact). Mulai dari keputusan yang ingin dibantu, bukan daftar grafik yang ingin dibuat.
