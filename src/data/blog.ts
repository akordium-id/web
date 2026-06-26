export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  titleId: string;
  excerpt: string;
  excerptId: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  contentId: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cloud-migration-made-simple",
    category: "Cloud",
    title: "Cloud Migration Made Simple",
    titleId: "Migrasi Cloud yang Mudah",
    excerpt: "A practical guide to moving your business infrastructure to the cloud without downtime or complexity.",
    excerptId: "Panduan praktis memindahkan infrastruktur bisnis Anda ke cloud tanpa downtime atau kerumitan.",
    date: "3 Apr 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80",
    content: `<h2>Mengapa Migrasi ke Cloud Penting</h2>
<p>Migrasi ke cloud bukan sekadar tren teknologi—ini adalah keharusan untuk bisnis yang ingin bersaing di era digital. Berdasarkan pengalaman kami memigrasi sistem legacy ke Go dengan PostgreSQL di Bank Mega, kami menyaksikan peningkatan 4x throughput dan pengurangan biaya operasional hingga 60%.</p>

<h2>Roadmap Migrasi 5 Langkah</h2>

<h3>1. Audit Infrastruktur yang Ada</h3>
<ul>
  <li>Inventarisasi semua aplikasi dan database</li>
  <li>Identifikasi dependency dan integrasi kritis</li>
  <li>Evaluasi load pattern untuk sizing yang tepat</li>
</ul>

<h3>2. Pilih Arsitektur Target</h3>
<p>Kami merekomendasikan pendekatan <strong>lift-and-shift</strong> untuk aplikasi kritis, diikuti <strong>re-architect</strong> bertahap:</p>
<ul>
  <li>Database MySQL → PostgreSQL (lebih stabil untuk workload Indonesia)</li>
  <li>PHP Legacy → Go (concurrent processing, resource efficiency)</li>
  <li>Monolith → Microservice (independent scaling)</li>
</ul>

<h3>3. Setup Environment di Cloud</h3>
<ul>
  <li>Gunakan container (Docker) untuk konsistensi deployment</li>
  <li>Implementasikan CI/CD otomatis untuk rollback cepat</li>
  <li>Setup monitoring dengan Prometheus + Grafana</li>
</ul>

<h3>4. Migrasi Data dan Testing</h3>
<ul>
  <li>Gunakan pg_dump untuk backup PostgreSQL</li>
  <li>Implementasikan blue-green deployment</li>
  <li>Lakukan load testing dengan k6 atau Vegeta</li>
</ul>

<h3>5. Cutover dan Optimasi</h3>
<ul>
  <li>Monitor performa 24/7 selama 2 minggu pertama</li>
  <li>Optimasi query dengan EXPLAIN ANALYZE</li>
  <li>Skalakan horizontal berdasarkan usage pattern</li>
</ul>

<h2>Studi Kasus: Bank Mega</h2>
<p>Sistem legacy PHP dengan MySQL di Bank Mega kami migrasikan ke Go dengan PostgreSQL di AWS. Hasil:</p>
<ul>
  <li>Throughput: 8k TPS → 32k TPS (+300%)</li>
  <li>Response time: 2.4s → 0.3s (-87%)</li>
  <li>Biaya operasional: turun 60% dengan auto-scaling</li>
</ul>

<blockquote>Migrasi bukan tentang teknologi—tapi tentang mengurangi risiko bisnis Anda.</blockquote>`,
    contentId: `<h2>Mengapa Migrasi ke Cloud Penting</h2>
<p>Migrasi ke cloud bukan sekadar tren teknologi—ini adalah keharusan untuk bisnis yang ingin bersaing di era digital. Berdasarkan pengalaman kami memigrasi sistem legacy ke Go dengan PostgreSQL di Bank Mega, kami menyaksikan peningkatan 4x throughput dan pengurangan biaya operasional hingga 60%.</p>

<h2>Roadmap Migrasi 5 Langkah</h2>

<h3>1. Audit Infrastruktur yang Ada</h3>
<ul>
  <li>Inventarisasi semua aplikasi dan database</li>
  <li>Identifikasi dependency dan integrasi kritis</li>
  <li>Evaluasi load pattern untuk sizing yang tepat</li>
</ul>

<h3>2. Pilih Arsitektur Target</h3>
<p>Kami merekomendasikan pendekatan <strong>lift-and-shift</strong> untuk aplikasi kritis, diikuti <strong>re-architect</strong> bertahap:</p>
<ul>
  <li>Database MySQL → PostgreSQL (lebih stabil untuk workload Indonesia)</li>
  <li>PHP Legacy → Go (concurrent processing, resource efficiency)</li>
  <li>Monolith → Microservice (independent scaling)</li>
</ul>

<h3>3. Setup Environment di Cloud</h3>
<ul>
  <li>Gunakan container (Docker) untuk konsistensi deployment</li>
  <li>Implementasikan CI/CD otomatis untuk rollback cepat</li>
  <li>Setup monitoring dengan Prometheus + Grafana</li>
</ul>

<h3>4. Migrasi Data dan Testing</h3>
<ul>
  <li>Gunakan pg_dump untuk backup PostgreSQL</li>
  <li>Implementasikan blue-green deployment</li>
  <li>Lakukan load testing dengan k6 atau Vegeta</li>
</ul>

<h3>5. Cutover dan Optimasi</h3>
<ul>
  <li>Monitor performa 24/7 selama 2 minggu pertama</li>
  <li>Optimasi query dengan EXPLAIN ANALYZE</li>
  <li>Skalakan horizontal berdasarkan usage pattern</li>
</ul>

<h2>Studi Kasus: Bank Mega</h2>
<p>Sistem legacy PHP dengan MySQL di Bank Mega kami migrasikan ke Go dengan PostgreSQL di AWS. Hasil:</p>
<ul>
  <li>Throughput: 8k TPS → 32k TPS (+300%)</li>
  <li>Response time: 2.4s → 0.3s (-87%)</li>
  <li>Biaya operasional: turun 60% dengan auto-scaling</li>
</ul>

<blockquote>Migrasi bukan tentang teknologi—tapi tentang mengurangi risiko bisnis Anda.</blockquote>`
  },
  {
    slug: "it-strategies-that-scale",
    category: "Strategy",
    title: "IT Strategies That Scale",
    titleId: "Strategi IT yang Skalabel",
    excerpt: "The right software architecture, combined with proper planning, lets your systems grow alongside your business.",
    excerptId: "Arsitektur software yang tepat, dikombinasikan dengan perencanaan yang baik, membuat sistem Anda tumbuh bersama bisnis.",
    date: "27 Mar 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    content: `<h2>Prinsip Skalabilitas yang Terbukti</h2>
<p>Skalabilitas bukan tentang menambah server—tapi tentang arsitektur yang tepat. Berikut 5 prinsip dari pengalaman membangun sistem di Orin GPS yang mengolah 3TB data per bulan.</p>

<h2>Arsitektur Database yang Skalabel</h2>

<h3>TimescaleDB untuk Time-Series</h3>
<p>GPS tracking menghasilkan data time-series yang besar. Kami memigrasi dari MySQL ke PostgreSQL + TimescaleDB:</p>
<ul>
  <li>Compression otomatis mengurangi storage 90%</li>
  <li>Query time-series 5-10x lebih cepat</li>
  <li>Retensi data terkelola otomatis</li>
</ul>

<h3>Connection Pooling</h3>
<p>Gunakan pgBouncer untuk mengatur koneksi database—terutama penting di Indonesia dengan jaringan yang latency-nya tinggi.</p>

<h2>Microservice dengan Go</h2>

<p>Keuntungan Go untuk microservice:</p>
<ul>
  <li>Memory footprint kecil (50MB vs 500MB untuk Java)</li>
  <li>Concurrent processing dengan goroutine</li>
  <li>Build time < 5 detik</li>
</ul>

<h2>Studi Kasus: Orin GPS</h2>
<p>Platform GPS kami menangani 10k+ device aktif dengan 5 detik interval. Arsitektur:</p>
<ul>
  <li>Load balancer → Go microservice (3 instance)</li>
  <li>PostgreSQL + TimescaleDB di server terpisah</li>
  <li>Redis untuk caching lokasi terbaru</li>
  <li>WebSocket untuk real-time update</li>
</ul>

<p>Hasilnya: 99.9% uptime, latency < 100ms bahkan di koneksi 4G.</p>`,
    contentId: `<h2>Prinsip Skalabilitas yang Terbukti</h2>
<p>Skalabilitas bukan tentang menambah server—tapi tentang arsitektur yang tepat. Berikut 5 prinsip dari pengalaman membangun sistem di Orin GPS yang mengolah 3TB data per bulan.</p>

<h2>Arsitektur Database yang Skalabel</h2>

<h3>TimescaleDB untuk Time-Series</h3>
<p>GPS tracking menghasilkan data time-series yang besar. Kami memigrasi dari MySQL ke PostgreSQL + TimescaleDB:</p>
<ul>
  <li>Compression otomatis mengurangi storage 90%</li>
  <li>Query time-series 5-10x lebih cepat</li>
  <li>Retensi data terkelola otomatis</li>
</ul>

<h3>Connection Pooling</h3>
<p>Gunakan pgBouncer untuk mengatur koneksi database—terutama penting di Indonesia dengan jaringan yang latency-nya tinggi.</p>

<h2>Microservice dengan Go</h2>

<p>Keuntungan Go untuk microservice:</p>
<ul>
  <li>Memory footprint kecil (50MB vs 500MB untuk Java)</li>
  <li>Concurrent processing dengan goroutine</li>
  <li>Build time < 5 detik</li>
</ul>

<h2>Studi Kasus: Orin GPS</h2>
<p>Platform GPS kami menangani 10k+ device aktif dengan 5 detik interval. Arsitektur:</p>
<ul>
  <li>Load balancer → Go microservice (3 instance)</li>
  <li>PostgreSQL + TimescaleDB di server terpisah</li>
  <li>Redis untuk caching lokasi terbaru</li>
  <li>WebSocket untuk real-time update</li>
</ul>

<p>Hasilnya: 99.9% uptime, latency < 100ms bahkan di koneksi 4G.</p>`
  },
  {
    slug: "securing-your-digital-future",
    category: "Security",
    title: "Securing Your Digital Future",
    titleId: "Mengamankan Masa Depan Digital Anda",
    excerpt: "Cybersecurity is no longer optional. Here's how to build a proactive security posture for your growing business.",
    excerptId: "Keamanan siber bukan lagi pilihan. Inilah cara membangun postur keamanan proaktif untuk bisnis Anda.",
    date: "15 Mar 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&auto=format&fit=crop&q=80",
    content: `<h2>Keamanan Siber untuk Bisnis Indonesia</h2>
<p>Berdasarkan pengalaman mengamankan sistem di Teavaro (mitra Blibli 75%), kami menyaksikan bahwa 80% serangan siber adalah social engineering—bukan exploit teknis.</p>

<h2>Framework Keamanan 5 Lapis</h2>

<h3>1. Zero Trust Network</h3>
<ul>
  <li>Semua request diverifikasi, tidak ada yang dipercaya</li>
  <li>Implementasikan mTLS antara service</li>
  <li>Gunakan Cloudflare Access untuk akses internal</li>
</ul>

<h3>2. Database Hardening</h3>
<p>PostgreSQL security checklist:</p>
<ul>
  <li>Disable superuser login remote</li>
  <li>Gunakan pgbench untuk connection throttling</li>
  <li>Enkripsi data dengan pgcrypto</li>
  <li>Audit log dengan audit_trigger</li>
</ul>

<h3>3. Application Security</h3>
<p>Rate limiting di layer aplikasi—gunakan token bucket algorithm untuk mencegah DDoS.</p>

<h3>4. Backup dan Recovery</h3>
<ul>
  <li>pg_basebackup harian, simpan di 3 lokasi</li>
  <li>Test restore tiap 2 minggu</li>
  <li>Retention policy 30 hari</li>
</ul>

<h3>5. Employee Training</h3>
<ul>
  <li>Phishing simulation bulanan</li>
  <li>Password manager wajib (1Password/Bitwarden)</li>
  <li>2FA untuk semua akun critical</li>
</ul>

<h2>Studi Kasus: Teavaro</h2>
<p>Sistem data marketing Teavaro kami amankan dengan:</p>
<ul>
  <li>Vault untuk secret management</li>
  <li>PostgreSQL Row Level Security untuk isolasi data per klien</li>
  <li>Internal audit yang memenuhi standar ISO 27001</li>
</ul>

<p>Hasil: 0 insiden keamanan dalam 18 bulan operasional.</p>`,
    contentId: `<h2>Keamanan Siber untuk Bisnis Indonesia</h2>
<p>Berdasarkan pengalaman mengamankan sistem di Teavaro (mitra Blibli 75%), kami menyaksikan bahwa 80% serangan siber adalah social engineering—bukan exploit teknis.</p>

<h2>Framework Keamanan 5 Lapis</h2>

<h3>1. Zero Trust Network</h3>
<ul>
  <li>Semua request diverifikasi, tidak ada yang dipercaya</li>
  <li>Implementasikan mTLS antara service</li>
  <li>Gunakan Cloudflare Access untuk akses internal</li>
</ul>

<h3>2. Database Hardening</h3>
<p>PostgreSQL security checklist:</p>
<ul>
  <li>Disable superuser login remote</li>
  <li>Gunakan pgbench untuk connection throttling</li>
  <li>Enkripsi data dengan pgcrypto</li>
  <li>Audit log dengan audit_trigger</li>
</ul>

<h3>3. Application Security</h3>
<p>Rate limiting di layer aplikasi—gunakan token bucket algorithm untuk mencegah DDoS.</p>

<h3>4. Backup dan Recovery</h3>
<ul>
  <li>pg_basebackup harian, simpan di 3 lokasi</li>
  <li>Test restore tiap 2 minggu</li>
  <li>Retention policy 30 hari</li>
</ul>

<h3>5. Employee Training</h3>
<ul>
  <li>Phishing simulation bulanan</li>
  <li>Password manager wajib (1Password/Bitwarden)</li>
  <li>2FA untuk semua akun critical</li>
</ul>

<h2>Studi Kasus: Teavaro</h2>
<p>Sistem data marketing Teavaro kami amankan dengan:</p>
<ul>
  <li>Vault untuk secret management</li>
  <li>PostgreSQL Row Level Security untuk isolasi data per klien</li>
  <li>Internal audit yang memenuhi standar ISO 27001</li>
</ul>

<p>Hasil: 0 insiden keamanan dalam 18 bulan operasional.</p>`
  },
  {
    slug: "maximizing-roi-with-it",
    category: "ROI",
    title: "Maximizing ROI with IT",
    titleId: "Memaksimalkan ROI dengan IT",
    excerpt: "How strategic technology investment delivers measurable returns, reduces operational costs, and accelerates growth.",
    excerptId: "Bagaimana investasi teknologi strategis memberikan hasil terukur, mengurangi biaya operasional, dan mempercepat pertumbuhan.",
    date: "5 Mar 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    content: `<h2>IT Investment dengan ROI Terukur</h2>
<p>Pengalaman migrasi MIS-APAR dari CodeIgniter 3 ke Go dengan PostgreSQL menunjukkan ROI konkret dalam 6 bulan pertama.</p>

<h2>Framework ROI 4 Langkah</h2>

<h3>1. Baseline Performance</h3>
<p>Sebelum migrasi MIS-APAR:</p>
<ul>
  <li>Server: 2xCPU, 4GB RAM untuk 500 user aktif</li>
  <li>Response time: 3-5 detik</li>
  <li>Downtime: 2x/bulan rata-rata</li>
</ul>

<h3>2. Set Target Metrics</h3>
<p>Target setelah migrasi:</p>
<ul>
  <li>Resource: 1xCPU, 2GB RAM (50% lebih sedikit)</li>
  <li>Response time: < 1 detik</li>
  <li>Uptime: 99.5%</li>
</ul>

<h3>3. Eksekusi dengan Metode</h3>
<p>Kami pakai pendekatan <strong>Strangler Fig Pattern</strong>:</p>
<ul>
  <li>Buat API layer baru di Go</li>
  <li>Migrasi modul per modul</li>
  <li>Redirect traffic secara bertahap</li>
</ul>

<h3>4. Ukur dan Optimasi</h3>

<h2>Hasil Konkret: MIS-APAR</h2>
<table>
  <thead>
    <tr><th>Metric</th><th>Sebelum</th><th>Sesudah</th><th>Perubahan</th></tr>
  </thead>
  <tbody>
    <tr><td>Server Cost</td><td>$80/bulan</td><td>$40/bulan</td><td>-50%</td></tr>
    <tr><td>Response Time</td><td>4.2s</td><td>0.4s</td><td>-90%</td></tr>
    <tr><td>Throughput</td><td>200 req/min</td><td>1200 req/min</td><td>+500%</td></tr>
    <tr><td>Bug Reports</td><td>15/bulan</td><td>2/bulan</td><td>-87%</td></tr>
  </tbody>
</table>

<p>ROI dihitung: Rp 120jt penghematan tahunan vs biaya migrasi Rp 80jt = break-even 8 bulan.</p>

<h2>Formula ROI IT</h2>
<p>ROI = (Penghematan Tahunan - Biaya Migrasi) / Biaya Migrasi × 100%</p>

<p>Tidak ada penggunaan framework mahal. Kami fokus pada:</p>
<ul>
  <li>Go untuk efisiensi resource</li>
  <li>PostgreSQL untuk performa query</li>
  <li>Docker untuk deployment yang konsisten</li>
</ul>

<blockquote>Setiap baris kode Go yang ditulis adalah penghematan biaya server yang akan datang.</blockquote>`,
    contentId: `<h2>IT Investment dengan ROI Terukur</h2>
<p>Pengalaman migrasi MIS-APAR dari CodeIgniter 3 ke Go dengan PostgreSQL menunjukkan ROI konkret dalam 6 bulan pertama.</p>

<h2>Framework ROI 4 Langkah</h2>

<h3>1. Baseline Performance</h3>
<p>Sebelum migrasi MIS-APAR:</p>
<ul>
  <li>Server: 2xCPU, 4GB RAM untuk 500 user aktif</li>
  <li>Response time: 3-5 detik</li>
  <li>Downtime: 2x/bulan rata-rata</li>
</ul>

<h3>2. Set Target Metrics</h3>
<p>Target setelah migrasi:</p>
<ul>
  <li>Resource: 1xCPU, 2GB RAM (50% lebih sedikit)</li>
  <li>Response time: < 1 detik</li>
  <li>Uptime: 99.5%</li>
</ul>

<h3>3. Eksekusi dengan Metode</h3>
<p>Kami pakai pendekatan <strong>Strangler Fig Pattern</strong>:</p>
<ul>
  <li>Buat API layer baru di Go</li>
  <li>Migrasi modul per modul</li>
  <li>Redirect traffic secara bertahap</li>
</ul>

<h3>4. Ukur dan Optimasi</h3>

<h2>Hasil Konkret: MIS-APAR</h2>
<table>
  <thead>
    <tr><th>Metric</th><th>Sebelum</th><th>Sesudah</th><th>Perubahan</th></tr>
  </thead>
  <tbody>
    <tr><td>Server Cost</td><td>$80/bulan</td><td>$40/bulan</td><td>-50%</td></tr>
    <tr><td>Response Time</td><td>4.2s</td><td>0.4s</td><td>-90%</td></tr>
    <tr><td>Throughput</td><td>200 req/min</td><td>1200 req/min</td><td>+500%</td></tr>
    <tr><td>Bug Reports</td><td>15/bulan</td><td>2/bulan</td><td>-87%</td></tr>
  </tbody>
</table>

<p>ROI dihitung: Rp 120jt penghematan tahunan vs biaya migrasi Rp 80jt = break-even 8 bulan.</p>

<h2>Formula ROI IT</h2>
<p>ROI = (Penghematan Tahunan - Biaya Migrasi) / Biaya Migrasi × 100%</p>

<p>Tidak ada penggunaan framework mahal. Kami fokus pada:</p>
<ul>
  <li>Go untuk efisiensi resource</li>
  <li>PostgreSQL untuk performa query</li>
  <li>Docker untuk deployment yang konsisten</li>
</ul>

<blockquote>Setiap baris kode Go yang ditulis adalah penghematan biaya server yang akan datang.</blockquote>`
  },
];