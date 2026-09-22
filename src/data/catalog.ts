export interface ProductFeature {
  title: string;
  description?: string;
  included: boolean;
}

export interface ProductAddon {
  id: string;
  name: string;
  priceFormatted: string;
  price: number;
  description: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: 'website' | 'system' | 'custom';
  categoryLabel: string;
  badge?: string;
  shortDescription: string;
  problem: string[];
  solution: string;
  targetAudience: string[];
  keyHighlights: string[];
  features: ProductFeature[];
  pricingModel: 'fixed' | 'range' | 'modular' | 'custom';
  startingPrice?: number;
  priceFormatted: string;
  priceSubtext?: string;
  estimatedDuration: string;
  maintenance?: {
    available: boolean;
    text: string;
  };
  addons?: ProductAddon[];
  faq?: ProductFAQ[];
  popular?: boolean;
}

export interface ModuleItem {
  id: string;
  name: string;
  category: 'customer' | 'sales' | 'inventory' | 'admin' | 'reporting' | 'communication';
  categoryLabel: string;
  description: string;
  businessImpact: string;
  estimatedCost: number;
  priceFormatted: string;
  features: string[];
  recommendedFor?: string[];
}

export interface SolutionPack {
  id: string;
  title: string;
  sector: string;
  description: string;
  painPoints: string[];
  recommendedModules: string[]; // module ids
  estimatedPriceRange: string;
  estimatedDuration: string;
}

export const formatRupiah = (value: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value).replace('IDR', 'Rp');
};

export const products: Product[] = [
  {
    slug: 'company-profile',
    name: 'Company Profile Starter',
    tagline: 'Membangun impresi profesional dan kredibilitas bisnis pertama kali di ranah online.',
    category: 'website',
    categoryLabel: 'Website & Brand',
    badge: 'Ramah UMKM',
    shortDescription: 'Website profil bisnis 1 halaman responsif, cepat diakses, dan langsung mengarahkan calon klien ke WhatsApp.',
    problem: [
      'Calon pelanggan ragu bertransaksi karena profil bisnis belum resmi atau sulit dicari di Google.',
      'Sosial media sering tenggelam dan sulit merangkum katalog serta legalitas bisnis dengan rapi.',
      'Biaya pembuatan website agensi seringkali dipatok jutaan rupiah di luar kapasitas fase rintisan.'
    ],
    solution: 'Kami bangun landing page berkecepatan tinggi dengan struktur informasi teruji, copywriting lugas, dan integrasi tombol chat WhatsApp langsung.',
    targetAudience: ['Usaha rumahan & UMKM', 'Jasa Konsultan / Freelancer', 'Klinik / Usaha Lokal Baru'],
    keyHighlights: [
      'Landing page 1 halaman responsif (Mobile, Tablet, Desktop)',
      'Copywriting bisnis & penataan katalog produk/jasa ringkas',
      'Integrasi Google Maps & Direct WhatsApp Chat',
      'Optimasi SEO dasar untuk nama brand di Google',
      'Selesai dan serah terima dalam 3 hari kerja'
    ],
    features: [
      { title: 'Desain Responsif & Modern', description: 'Tampilan bersih dan ramah dibuka di semua smartphone.', included: true },
      { title: 'Struktur Konten Bisnis Lengkap', description: 'Tentang, Layanan, Portofolio/Galeri, dan Kontak.', included: true },
      { title: 'Tombol Chat WhatsApp Instan', description: 'Mengarahkan prospek langsung dengan pesan pembuka otomatis.', included: true },
      { title: 'Setup Google Maps & Kontak Resmi', description: 'Memudahkan pelanggan menemukan lokasi fisik Anda.', included: true },
      { title: 'Garansi Teknis 14 Hari', description: 'Perbaikan jika ada kendala tampilan atau tautan rusak.', included: true },
      { title: 'Dashboard Admin Mandiri', description: 'Belum termasuk panel edit mandiri (cocok untuk profil statis).', included: false },
    ],
    pricingModel: 'fixed',
    startingPrice: 500000,
    priceFormatted: 'Rp 500.000',
    priceSubtext: 'pembayaran satu kali / proyek',
    estimatedDuration: '3 hari kerja',
    maintenance: {
      available: true,
      text: 'Opsional: update konten berkala & maintenance mulai Rp 100.000/bulan.',
    },
    addons: [
      { id: 'multipage', name: 'Halaman Tambahan (Multi-page)', price: 250000, priceFormatted: 'Rp 250.000/hal', description: 'Penambahan halaman khusus seperti Artikel, Tim, atau Legalitas.' },
      { id: 'seo-advance', name: 'Setup Google Search Console & Analytics', price: 200000, priceFormatted: 'Rp 200.000', description: 'Pendaftaran sitemap dan tracking pengunjung riil.' },
    ],
    faq: [
      {
        question: 'Apakah harga Rp 500.000 sudah termasuk domain dan hosting?',
        answer: 'Belum. Domain (.com/.id) dan hosting cloud super cepat biasanya berkisar antara Rp 150.000 - Rp 300.000/tahun. Kami bantu pandu pembeliannya agar aset sepenuhnya atas nama Anda.',
      },
      {
        question: 'Berapa lama proses pengerjaannya?',
        answer: 'Rata-rata 3 hari kerja setelah materi (teks profil, foto produk/layanan, kontak) kami terima.',
      },
    ],
  },
  {
    slug: 'landing-page-campaign',
    name: 'High-Converting Landing Page',
    tagline: 'Halaman khusus fokus konversi iklan & penawaran promosi produk/jasa.',
    category: 'website',
    categoryLabel: 'Website & Brand',
    shortDescription: 'Landing page terarah untuk memaksimalkan ROI iklan (Meta Ads/Google Ads) dengan copywriting persuasif dan kecepatan akses kilat.',
    problem: [
      'Biaya iklan terbuang sia-sia karena landing page lambat dibuka atau pengunjung bingung harus klik apa.',
      'Formulir pendaftaran atau checkout terlalu rumit sehingga prospek mundur di tengah jalan.'
    ],
    solution: 'Struktur landing page AIDA (Attention, Interest, Desire, Action) dengan load speed di bawah 1 detik dan call-to-action yang tegas.',
    targetAudience: ['Bisnis dengan budget Ads rutin', 'Peluncuran Produk Baru', 'Penyedia Layanan / Workshop'],
    keyHighlights: [
      'Struktur layout fokus sales conversion & A/B test friendly',
      'Ultra fast load speed (< 1.2s Core Web Vitals)',
      'Integrasi Meta Pixel & Google Analytics Events',
      'Custom Form Lead Generation / WA Order Generator'
    ],
    features: [
      { title: 'Copywriting Penawaran Terarah', included: true },
      { title: 'Tracking Pixel & Conversion Events', included: true },
      { title: 'Mobile-first Optimization', included: true },
      { title: 'Garansi Performa Skor Lighthouse 90+', included: true },
    ],
    pricingModel: 'fixed',
    startingPrice: 1250000,
    priceFormatted: 'Rp 1.250.000',
    priceSubtext: 'per penawaran / campaign',
    estimatedDuration: '4–6 hari kerja',
    addons: [
      { id: 'ab-variant', name: 'Varian Landing Page A/B Testing', price: 500000, priceFormatted: 'Rp 500.000', description: '1 varian headline dan copy alternatif untuk menguji respon audiens.' }
    ],
    faq: [
      {
        question: 'Bisakah diintegrasikan dengan Google Sheets atau CRM?',
        answer: 'Bisa. Setiap lead yang masuk lewat formulir bisa langsung otomatis terkirim ke Google Spreadsheet atau notifikasi WhatsApp tim sales.',
      }
    ]
  },
  {
    slug: 'inventory-starter',
    name: 'Inventory Starter',
    tagline: 'Kelola stok masuk, stok keluar, dan riwayat persediaan tanpa spreadsheet yang rentan selisih.',
    category: 'system',
    categoryLabel: 'Sistem Bisnis',
    badge: 'Paling Populer',
    popular: true,
    shortDescription: 'Aplikasi internal web-based untuk kontrol inventaris, pencatatan mutasi barang, notifikasi stok menipis, dan ekspor laporan periodik.',
    problem: [
      'Stok fisik dan catatan spreadsheet sering selisih tanpa jejak siapa yang mengubahnya.',
      'Sering kehabisan stok barang cepat laku (fast-moving) karena tidak ada peringatan dini.',
      'Butuh waktu berjam-jam setiap akhir bulan hanya untuk rekap opname.'
    ],
    solution: 'Sistem inventaris terpusat dengan log aktivitas tercatat, indikator stok minimum otomatis, dan dasbor ringkas yang bisa dibuka dari laptop maupun HP admin gudang.',
    targetAudience: ['Toko Retail & Distributor', 'Bisnis Fashion & F&B', 'Gudang Bengkel / Sparepart'],
    keyHighlights: [
      'Master data produk & varian harga modal/jual',
      'Pencatatan mutasi: Stok Masuk, Keluar, dan Penyesuaian (Opname)',
      'Audit log transaksi: tahu persis siapa admin yang input dan waktunya',
      'Peringatan otomatis saat stok di bawah batas aman',
      'Ekspor laporan mutasi ke Excel/PDF dalam satu klik'
    ],
    features: [
      { title: 'Manajemen Produk & Kategori', description: 'SKU, barcode, satuan, harga modal, dan harga jual.', included: true },
      { title: 'Transaksi Stok Masuk & Keluar', description: 'Alur mutasi jelas dengan nomor referensi nota/surat jalan.', included: true },
      { title: 'Stok Opname & Adjustment', description: 'Penyesuaian stok berkala dengan catatan alasan selisih.', included: true },
      { title: 'Dashboard Ringkasan Aset Stok', description: 'Nilai total aset persediaan dan peringatan stok menipis.', included: true },
      { title: 'Multi-User dengan Pembagian Peran', description: 'Akses terpisah antara Admin Gudang dan Pemilik Bisnis.', included: true },
      { title: 'Ekspor Excel & PDF', description: 'Unduh laporan mutasi untuk kebutuhan pembukuan.', included: true },
      { title: 'Integrasi Mesin Kasir POS Kasir', description: 'Dapat ditambahkan sebagai modul Sales Kasir di tahap berikutnya.', included: false }
    ],
    pricingModel: 'fixed',
    startingPrice: 1750000,
    priceFormatted: 'Rp 1.750.000',
    priceSubtext: 'sistem dasar siap pakai / deploy ke server Anda',
    estimatedDuration: '7–10 hari kerja',
    maintenance: {
      available: true,
      text: 'Garansi bug 30 hari + opsi maintenance hosting & backup mulai Rp 250.000/bulan.',
    },
    addons: [
      { id: 'barcode-scan', name: 'Modul Barcode / QR Scanner Handphone', price: 500000, priceFormatted: 'Rp 500.000', description: 'Scan barcode barang masuk/keluar langsung lewat kamera smartphone tanpa beli alat scanner terpisah.' },
      { id: 'supplier-mgmt', name: 'Manajemen Data Supplier & Purchase Order', price: 600000, priceFormatted: 'Rp 600.000', description: 'Catat kontak supplier, hutang barang, dan surat pesanan resmi.' }
    ],
    faq: [
      {
        question: 'Apakah sistem ini terpasang di komputer kasir atau online di browser?',
        answer: 'Sistem berbasis web online (cloud). Anda dan staf bisa membukanya dari browser laptop, tablet, maupun handphone di mana saja.',
      },
      {
        question: 'Bagaimana jika nanti saya mau menambah fitur kasir atau invoice pelanggan?',
        answer: 'Sangat bisa! Arsitektur kami modular. Anda cukup menambahkan modul Sales & Invoicing tanpa harus membongkar ulang sistem inventaris yang sudah berjalan.',
      }
    ]
  },
  {
    slug: 'business-system-base',
    name: 'Modular Business System',
    tagline: 'Sistem operasional fleksibel: pilih modul yang dibutuhkan, tambah kapan saja bisnis bertumbuh.',
    category: 'system',
    categoryLabel: 'Sistem Bisnis',
    badge: 'Sangat Fleksibel',
    shortDescription: 'Pondasi aplikasi web terpusat (auth, role permission, audit log, base dashboard) dengan modul yang Anda susun sendiri sesuai alur kerja.',
    problem: [
      'Aplikasi SaaS langganan terasa kaku: banyak fitur yang tidak terpakai tapi harus bayar mahal per user tiap bulan.',
      'Software custom dari nol terasa menakutkan biayanya dan sering molor berbulan-bulan.',
    ],
    solution: 'Mulai dari paket base berbiaya terjangkau, lalu sambungkan modul-modul bisnis teruji (Pelanggan, Order, Invoice, Laporan) sesuai workflow unik Anda.',
    targetAudience: ['Bisnis Berkembang (5–30 staf)', 'Jasa Operasional & Agensi', 'Pabrikasi / Workshop Khusus'],
    keyHighlights: [
      'Base investasi mulai Rp 2.500.000 (sudah termasuk core engine + dasbor utama)',
      'Modul tambahan transparan: mulai Rp 500.000 – Rp 750.000 per modul',
      'Kepemilikan penuh 100% kode & database di server Anda',
      'Tidak ada biaya lisensi per user bulanan'
    ],
    features: [
      { title: 'Core App Engine & Manajemen Pengguna', description: 'Hak akses bertingkat: Owner, Manager, Staff.', included: true },
      { title: 'Audit Trail & Keamanan Sistem', description: 'Pencatatan riwayat aksi penting untuk mencegah fraud.', included: true },
      { title: 'Dashboard Metrik Utama', description: 'Statistik performa bisnis harian dan bulanan.', included: true },
      { title: 'Modul Pilihan Sesuai Kebutuhan', description: 'Bebas pasang modul Inventory, Invoice, Booking, dll.', included: true },
      { title: 'Full Handover Server Anda', description: 'Deploy ke VPS pribadi / Coolify Anda.', included: true },
    ],
    pricingModel: 'modular',
    startingPrice: 2500000,
    priceFormatted: 'Base Rp 2.500.000',
    priceSubtext: '+ modul pilihan (Rp 500rb - 750rb)',
    estimatedDuration: '10–18 hari kerja',
    addons: [
      { id: 'wa-gateway', name: 'Integrasi WhatsApp Notifikasi Otomatis', price: 750000, priceFormatted: 'Rp 750.000', description: 'Kirim notifikasi otomatis ke WA customer saat invoice terbit atau status order berubah.' }
    ],
    faq: [
      {
        question: 'Bagaimana cara menentukan modul apa saja yang saya butuhkan?',
        answer: 'Anda bisa mencoba fitur Konfigurator kami atau berkonsultasi gratis 1-on-1 dengan kami untuk memetakan alur bisnis Anda terlebih dahulu.',
      }
    ]
  },
  {
    slug: 'custom-engineering',
    name: 'Custom Software Engineering',
    tagline: 'Rekayasa sistem khusus untuk alur bisnis kompleks, multi-cabang, atau integrasi legacy.',
    category: 'custom',
    categoryLabel: 'Custom Engineering',
    shortDescription: 'Pengembangan backend & aplikasi enterprise dengan arsitektur tangguh, performa tinggi, dan analisis mendalam bersama praktisi senior.',
    problem: [
      'Alur kerja operasional terlalu unik untuk diselesaikan oleh software pasaran atau template jadi.',
      'Sistem lama (legacy) sering macet, data berantakan, atau sulit berkomunikasi dengan API eksternal.',
      'Kebutuhan integrasi IoT, GPS tracking armada, atau volume data tinggi.'
    ],
    solution: 'Arsitektur perangkat lunak clean, teknologi teruji (Go/Laravel/PostgreSQL), dokumentasi jelas, dan pendampingan implementasi langsung.',
    targetAudience: ['Instansi & Perusahaan', 'Operasional Multi-Cabang', 'Sistem IoT / GPS / Real-time'],
    keyHighlights: [
      'Analisis arsitektur sistem dan database komprehensif',
      'Backend berkinerja tinggi (Go / Clean Architecture / PostgreSQL)',
      'Integrasi multi-API (payment gateway, hardware, sistem pihak ketiga)',
      'Dokumentasi teknis serah terima lengkap untuk tim internal Anda'
    ],
    features: [
      { title: 'Discovery & Pemetaan Solusi', description: 'Bedah kebutuhan operasional dan estimasi risiko sebelum koding.', included: true },
      { title: 'Arsitektur Modular & Scalable', description: 'Sistem siap menampung lonjakan pengguna dan transaksi.', included: true },
      { title: 'Integrasi API Pihak Ketiga & Hardware', description: 'Kompatibilitas dengan layanan cloud, sensor IoT, atau ERP lama.', included: true },
      { title: 'SLA Garansi & Pendampingan Deployment', description: 'Support deployment mandiri di infrastruktur on-premise atau private cloud.', included: true },
    ],
    pricingModel: 'custom',
    priceFormatted: 'Custom Quote',
    priceSubtext: 'sesuai ruang lingkup & tingkat kompleksitas',
    estimatedDuration: '3–8 minggu kerja',
    faq: [
      {
        question: 'Kenapa harga custom software tidak langsung dipatok angka pasti?',
        answer: 'Karena software custom ibarat membangun rumah dengan denah khusus: jumlah ruangan, instalasi, dan beban kerja menentukan biaya. Kami menjamin transparansi dengan estimasi breakdown biaya detail sebelum kontrak dimulai.',
      }
    ]
  }
];

export const modules: ModuleItem[] = [
  {
    id: 'customer',
    name: 'Pelanggan & CRM Ringkas',
    category: 'customer',
    categoryLabel: 'Pelanggan',
    description: 'Buku kontak digital pelanggan, catatan preferensi, riwayat transaksi, dan riwayat interaksi dalam satu tempat.',
    businessImpact: 'Tim tidak lagi lupa follow up prospek dan tahu riwayat belanja pelanggan setia.',
    estimatedCost: 500000,
    priceFormatted: 'Rp 500.000',
    features: ['Database kontak & tag kategori', 'Riwayat order & total belanja', 'Catatan follow up / keluhan', 'Ekspor kontak']
  },
  {
    id: 'inventory',
    name: 'Manajemen Inventaris & Stok',
    category: 'inventory',
    categoryLabel: 'Inventaris',
    description: 'Katalog barang, mutasi stok masuk/keluar, stock opname berkala, dan peringatan batas stok aman.',
    businessImpact: 'Mencegah kehilangan barang, memotong selisih opname fisik, dan menghentikan kehabisan stok mendadak.',
    estimatedCost: 750000,
    priceFormatted: 'Rp 750.000',
    features: ['Master SKU & varian', 'Catatan barang masuk/keluar', 'Peringatan stok menipis otomatis', 'Laporan nilai aset gudang']
  },
  {
    id: 'sales',
    name: 'Pesanan & Kasir (Sales Order)',
    category: 'sales',
    categoryLabel: 'Penjualan',
    description: 'Pencatatan order penjualan, alur approval diskon, status pengerjaan pesanan, hingga pencatatan pelunasan.',
    businessImpact: 'Order tidak tercecer di chat WhatsApp, omset harian tercatat presisi tanpa manipulasi manual.',
    estimatedCost: 750000,
    priceFormatted: 'Rp 750.000',
    features: ['Form input order cepat', 'Status order (Draft, Diproses, Selesai)', 'Otomatis potong stok saat order deal', 'Perhitungan diskon & pajak']
  },
  {
    id: 'invoice',
    name: 'Invoice & Surat Tagihan',
    category: 'sales',
    categoryLabel: 'Penjualan',
    description: 'Penerbitan faktur tagihan resmi PDF otomatis, pelacakan piutang jatuh tempo, dan pencatatan pembayaran termin.',
    businessImpact: 'Mempercepat perputaran kas (cash flow) dan mempermudah penagihan ke klien korporat.',
    estimatedCost: 500000,
    priceFormatted: 'Rp 500.000',
    features: ['Generate invoice PDF siap cetak / kirim WA', 'Pelacakan status pembayaran (Lunas / Tempo)', 'Pembayaran bertahap (Down Payment / Termin)', 'Notifikasi tagihan jatuh tempo']
  },
  {
    id: 'booking',
    name: 'Jadwal & Reservasi Layanan',
    category: 'sales',
    categoryLabel: 'Operasional',
    description: 'Pencatatan reservasi waktu, alokasi staf teknisi/terapis, dan pencegahan double-booking.',
    businessImpact: 'Menghilangkan tabrakan jadwal antrean dan memastikan staf bekerja optimal sesuai kapasitas.',
    estimatedCost: 750000,
    priceFormatted: 'Rp 750.000',
    features: ['Kalender slot reservasi interaktif', 'Alokasi staf pelaksana per booking', 'Status kedatangan pelanggan', 'Integrasi konfirmasi WA']
  },
  {
    id: 'reporting',
    name: 'Dasbor Analisis & Ekspor Data',
    category: 'reporting',
    categoryLabel: 'Laporan',
    description: 'Visualisasi grafik performa pendapatan, produk terlaris, rekap bulanan, dan ekspor data fleksibel ke Excel/CSV.',
    businessImpact: 'Pemilik bisnis bisa mengambil keputusan berbasis data nyata dalam hitungan detik, bukan kira-kira.',
    estimatedCost: 500000,
    priceFormatted: 'Rp 500.000',
    features: ['Grafik trend omset harian/bulanan', 'Daftar produk & layanan paling laris', 'Laporan siap unduh (Excel, CSV, PDF)', 'Filter tanggal fleksibel']
  },
  {
    id: 'membership',
    name: 'Membership & Poin Loyalitas',
    category: 'customer',
    categoryLabel: 'Pelanggan',
    description: 'Sistem tingkatan keanggotaan (Silver/Gold), akumulasi poin belanja, dan diskon khusus member.',
    businessImpact: 'Meningkatkan repeat order dan retensi loyalitas pelanggan secara konsisten.',
    estimatedCost: 750000,
    priceFormatted: 'Rp 750.000',
    features: ['Level membership & kupon diskon', 'Pencatatan perolehan dan penukaran poin', 'Kartu member digital']
  },
  {
    id: 'wa-notification',
    name: 'Notifikasi Otomatis WhatsApp',
    category: 'communication',
    categoryLabel: 'Komunikasi',
    description: 'Kirim notifikasi otomatis ke nomor WhatsApp pelanggan saat pesanan diproses, dikirim, atau tagihan diterbitkan.',
    businessImpact: 'Meningkatkan kepercayaan pembeli tanpa tim Anda harus mengetik chat konfirmasi satu per satu.',
    estimatedCost: 750000,
    priceFormatted: 'Rp 750.000',
    features: ['Template pesan dinamis dengan nama pelanggan', 'Notifikasi status order real-time', 'Kirim nota/invoice via link WA resmi']
  },
  {
    id: 'role-approval',
    name: 'Multi-Role & Log Persetujuan',
    category: 'admin',
    categoryLabel: 'Administrasi',
    description: 'Pembatasan hak akses staf, alur approval persetujuan pengeluaran dana, dan rekam jejak anti-fraud.',
    businessImpact: 'Menjaga keamanan operasional internal dan mencegah staf mengakses data rahasia pemilik.',
    estimatedCost: 500000,
    priceFormatted: 'Rp 500.000',
    features: ['Setting hak akses per menu', 'Alur persetujuan manager sebelum aksi final', 'Log waktu & identitas pelaku perubahan data']
  }
];

export const solutionPacks: SolutionPack[] = [
  {
    id: 'toko-retail',
    title: 'Paket Operasional Toko & Distributor',
    sector: 'Retail, Grosir, & Distributor',
    description: 'Solusi terintegrasi untuk mengendalikan rantai penjualan dan keluar-masuk barang toko secara efisien.',
    painPoints: ['Stok fisik sering selisih', 'Nota penjualan manual sering hilang', 'Rekap omset harian butuh waktu lama'],
    recommendedModules: ['inventory', 'sales', 'invoice', 'customer', 'reporting'],
    estimatedPriceRange: 'Rp 3.500.000 – Rp 4.500.000',
    estimatedDuration: '10–14 hari kerja'
  },
  {
    id: 'bengkel-service',
    title: 'Paket Manajemen Bengkel & Servis',
    sector: 'Bengkel Otomotif, Servis Elektronik, Field Tech',
    description: 'Pantau riwayat servis kendaraan/alat pelanggan, stok onderdil/sparepart, dan kinerja teknisi dalam satu layar.',
    painPoints: ['Riwayat servis pelanggan lupa dicatat', 'Stok onderdil mahal rawan hilang', 'Staf bingung pembagian antrean servis'],
    recommendedModules: ['customer', 'inventory', 'sales', 'invoice', 'reporting'],
    estimatedPriceRange: 'Rp 3.500.000 – Rp 4.500.000',
    estimatedDuration: '10–14 hari kerja'
  },
  {
    id: 'salon-beauty',
    title: 'Paket Reservasi Studio & Klinik Kecantikan',
    sector: 'Salon, Barbershop, Spa, Klinik Estetika',
    description: 'Atur jadwal reservasi pelanggan tanpa tabrakan jadwal, kelola komisi terapis, dan rawat loyalitas member setia.',
    painPoints: ['Jadwal booking sering bentrok', 'Sulit hitung komisi pengerjaan terapis', 'Pelanggan lupa jadwal reservasi'],
    recommendedModules: ['booking', 'customer', 'membership', 'sales', 'wa-notification'],
    estimatedPriceRange: 'Rp 3.800.000 – Rp 4.800.000',
    estimatedDuration: '12–16 hari kerja'
  },
  {
    id: 'agency-project',
    title: 'Paket Jasa Profesional & Agensi',
    sector: 'Konsultan, Digital Agency, Kontraktor',
    description: 'Sentralisasi data klien, pelacakan progress milestone proyek, serta manajemen faktur penagihan bertahap.',
    painPoints: ['Penagihan termin invoice sering terlambat', 'Data kontak klien dan riwayat brief tercecer', 'Sulit mengukur profit per proyek'],
    recommendedModules: ['customer', 'invoice', 'reporting', 'role-approval'],
    estimatedPriceRange: 'Rp 3.200.000 – Rp 4.200.000',
    estimatedDuration: '10–14 hari kerja'
  }
];

export const calculateEstimatedSystem = (selectedModuleIds: string[], businessScale: 'solo' | 'small' | 'medium') => {
  const basePrice = 2500000;
  const baseDays = 8;

  const selectedModules = modules.filter(m => selectedModuleIds.includes(m.id));
  const modulesPrice = selectedModules.reduce((sum, m) => sum + m.estimatedCost, 0);
  const extraDays = selectedModules.length * 1.5;

  let multiplier = 1.0;
  if (businessScale === 'small') multiplier = 1.1; // 2-5 user setup & training
  if (businessScale === 'medium') multiplier = 1.25; // 6-20 user setup, roles & high concurrency

  const totalMin = Math.round((basePrice + modulesPrice) * multiplier / 50000) * 50000;
  const totalMax = Math.round(totalMin * 1.25 / 50000) * 50000;

  const daysMin = Math.ceil((baseDays + extraDays));
  const daysMax = Math.ceil(daysMin * 1.3);

  return {
    totalMin,
    totalMax,
    daysMin,
    daysMax,
    selectedModules,
  };
};
