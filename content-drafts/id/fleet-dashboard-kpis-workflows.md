---
slug: fleet-dashboard-kpis-workflows
language: id
status: draft
title: "Dashboard Armada: KPI dan Workflow Apa yang Layak Dipantau?"
title_en: "Fleet Dashboards: Which KPIs and Workflows Are Worth Monitoring?"
category: "Dashboard & Sistem Internal"
---

Grafik yang rapi hanya berguna jika datanya cukup mutakhir, tim memakai definisi metrik yang sama, dan ada tindak lanjut ketika angka berubah.

Karena itu, kami menyarankan memulai dari satu pertanyaan: keputusan apa yang menjadi lebih mudah jika angka ini tersedia?

## Mulai dari keputusan dan workflow

Pilih satu keputusan yang berulang. Misalnya, operator perlu mengetahui perjalanan mana yang membutuhkan perhatian, supervisor perlu meninjau penyelesaian tugas, atau pemilik perlu membandingkan rencana dan aktivitas. Pertanyaan itu harus berujung pada tindakan yang jelas.

Untuk tiap keputusan, catat:

- siapa yang membuat keputusan;
- kapan keputusan perlu dibuat;
- informasi apa yang tersedia saat ini;
- tindakan apa yang diambil setelah melihat informasi;
- apa konsekuensinya bila informasi terlambat atau tidak lengkap.

Metrik yang tidak mengubah tindakan sebaiknya tidak ditampilkan.

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

Histori lokasi, misalnya, memengaruhi penyimpanan, query, dan retensi. Untuk kasus sistem yang melambat ketika data tumbuh, baca [artikel kami tentang pertumbuhan data GPS](https://akordium.id/blog/why-gps-system-slows-down-as-fleet-grows/).

## Rancang tampilan sesuai tindakan

Setelah metrik dan pengguna jelas, pilih komponen yang membantu tindakan:

- ringkasan untuk membandingkan kondisi dengan sasaran yang telah disepakati;
- daftar pengecualian untuk memprioritaskan tindak lanjut;
- detail perjalanan untuk menelusuri konteks;
- filter untuk melihat unit, waktu, atau area tertentu;
- indikator waktu pembaruan dan kualitas data.

Gunakan warna dan grafik secara konsisten, dan sertakan teks yang menjelaskan arti setiap warna peringatan.

## Pilot dashboard secara terbatas

Pilih pengguna dan keputusan tertentu untuk tahap awal. Tinjau apakah data yang diperlukan tersedia, apakah definisi KPI dipahami, dan apakah dashboard mengubah langkah kerja secara positif. Catat pertanyaan yang tidak dapat dijawab dan bagian yang menyesatkan. Perbaiki definisi serta sumber data sebelum menambah grafik baru.

Untuk memilih metrik bagi workflow armada, [bawa satu keputusan operasional ke diskusi dengan Akordium Lab](https://akordium.id/contact). Dari keputusan itu kita susun metrik dan tampilan yang dibutuhkan.
