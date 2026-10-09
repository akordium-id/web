export interface VerticalBundle {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  target: string;
  targetCompact?: string;
  priceRange: string;
  priceCompact: string;
  duration: string;
  maintenanceMonthly?: string;
  slaCompact?: string;
  popular?: boolean;
  modulesIncluded: string[];
  features: string[];
}

export interface AlaCarteModule {
  id: string;
  name: string;
  category: "core" | "operations" | "financial" | "automation" | "growth";
  categoryLabel: string;
  priceRange: string;
  description: string;
  keyFeature: string;
}

export const verticalBundles: VerticalBundle[] = [
  {
    id: "umkm-starter",
    name: "Paket A: UMKM Starter",
    badge: "Mulai Cepat",
    tagline: "Profil bisnis kredibel, katalog terpusat, dan faktur penjualan otomatis.",
    target: "Supplier, produsen rumahan, katering, jasa profesional, agency rintisan.",
    targetCompact: "Supplier, katering, jasa profesional & agensi rintisan.",
    priceRange: "Rp 5.500.000 – Rp 8.500.000",
    priceCompact: "Rp 5,5jt – 8,5jt",
    duration: "1 – 2 hari kerja",
    maintenanceMonthly: "Rp 450.000 / bln (opsional)",
    slaCompact: "SLA opsional Rp 450rb/bln",
    popular: false,
    modulesIncluded: ["Catalog & Products", "CRM / Customers", "Invoices & Payments", "WhatsApp Gateway", "Discounts & Vouchers"],
    features: [
      "Landing Page Publik SEO berkecepatan tinggi",
      "Katalog Produk & Master data barang/jasa",
      "Buku kontak pelanggan & riwayat transaksi",
      "Penerbitan Invoice PDF otomatis (multi-termin)",
      "Notifikasi WhatsApp otomatis ke pelanggan",
      "100% Full Handover (Kode & Database milik Anda)",
    ],
  },
  {
    id: "vertical-pro",
    name: "Paket B: Vertical Pro",
    badge: "Paling Populer",
    tagline: "Sistem operasional vertikal dengan alur Kanban, reservasi, & inventori.",
    target: "Laundry, salon & barbershop, klinik estetika, rental armada, bimbel.",
    targetCompact: "Laundry, klinik estetika, salon, rental armada & bimbel.",
    priceRange: "Rp 12.500.000 – Rp 18.500.000",
    priceCompact: "Rp 12,5jt – 18,5jt",
    duration: "3 – 5 hari kerja",
    maintenanceMonthly: "Rp 650.000 – Rp 950.000 / bln",
    slaCompact: "SLA & ops Rp 650rb – 950rb/bln",
    popular: true,
    modulesIncluded: ["Semua Fitur Paket A", "Order Kanban / Booking Swimlane", "Inventory Ledger (FIFO/LIFO)", "Staff Commissions", "Multi-User Roles"],
    features: [
      "Seluruh cakupan Paket A Starter",
      "Workflow Vertikal (Kanban Laundry / Booking Swimlane / Course Roster)",
      "Buku besar stok append-only (alert stok aman)",
      "Kalkulasi komisi staf/teknisi & rekap payroll",
      "Hak akses bertingkat: Owner, Kasir, dan Operator",
      "Zero monthly fee per-user atau per-cabang",
    ],
  },
  {
    id: "heavy-service",
    name: "Paket C: Heavy Field & Workshop",
    badge: "Operasional Bengkel",
    tagline: "Surat Perintah Kerja (SPK), stok sparepart, dan logistik lapangan terintegrasi.",
    target: "Bengkel mobil/motor, service center elektronik, kontraktor interior, distributor.",
    targetCompact: "Bengkel, service center, kontraktor interior & distributor.",
    priceRange: "Rp 22.000.000 – Rp 35.000.000",
    priceCompact: "Rp 22jt – 35jt",
    duration: "5 – 7 hari kerja",
    maintenanceMonthly: "Rp 1.250.000 – Rp 1.750.000 / bln",
    slaCompact: "SLA dedikasi Rp 1,25jt – 1,75jt/bln",
    popular: false,
    modulesIncluded: ["Core Engine", "Work Orders (SPK & Stall Kanban)", "Purchasing (PO Supplier)", "Inventory Onderdil", "Delivery Dispatch", "Audit Trail"],
    features: [
      "Surat Perintah Kerja (SPK) & Stall Kanban teknisi",
      "Multi-category checklist inspeksi fisik & foto",
      "Purchasing Supplier (PO) otomatis restock saat tiba",
      "Penugasan kurir/teknisi lapangan & tracking TRK",
      "Pencatatan termin pembayaran (DP, Termin, Lunas)",
      "Log aktivitas anti-fraud untuk setiap transaksi",
    ],
  },
  {
    id: "retail-omnichannel",
    name: "Paket D: Retail & Multi-Outlets",
    badge: "Multi Cabang",
    tagline: "Point of Sale (POS), transfer antar-cabang, rekap kasir harian, dan loyalty.",
    target: "Jaringan retail, franchise F&B, distro pakaian, toko grosir multi-cabang.",
    targetCompact: "Retail multi-cabang, franchise F&B & toko grosir.",
    priceRange: "Rp 28.000.000 – Rp 40.000.000",
    priceCompact: "Rp 28jt – 40jt",
    duration: "7 – 10 hari kerja",
    maintenanceMonthly: "Rp 1.500.000 – Rp 2.250.000 / bln",
    slaCompact: "SLA multi-cabang Rp 1,5jt – 2,25jt/bln",
    popular: false,
    modulesIncluded: ["POS Multi-Cashier", "Branch Transfers", "Daily Cash Drawer", "Price Tiers", "Customer Loyalty Points"],
    features: [
      "Kasir POS barcode scanner & printer thermal",
      "Transfer stok antar cabang dengan approval mutasi",
      "Buku kasir (cash drawer) & rekap shift harian",
      "Multi-tier pricing (harga eceran, grosir, member)",
      "Poin loyalitas pelanggan & vocer promo berkala",
      "Dashboard analitik omzet per cabang realtime",
    ],
  },
  {
    id: "enterprise-custom",
    name: "Paket E: Enterprise ERP & AI MCP",
    badge: "Skala Perusahaan",
    tagline: "Private ERP multi-cabang tanpa batasan lisensi user + asisten AI internal.",
    target: "Perusahaan berkembang multi-cabang, manufaktur, supply chain.",
    targetCompact: "Manufaktur, supply chain & enterprise multi-cabang.",
    priceRange: "Mulai Rp 45.000.000",
    priceCompact: "Mulai Rp 45jt",
    duration: "10 – 14 hari kerja",
    maintenanceMonthly: "Rp 2.500.000 – Rp 4.000.000 / bln",
    slaCompact: "SLA 2 jam dedicated Rp 2,5jt – 4jt/bln",
    popular: false,
    modulesIncluded: ["Seluruh Modul Aktif (14+ Modul)", "MCP Server Endpoint", "Multi-Branch Isolation", "Custom Integrations", "SLA Dedicated"],
    features: [
      "Seluruh modul bisnis Akordium aktif tanpa batasan",
      "Integrasi AI Copilot & MCP Server (query bisnis dari Claude/Cursor)",
      "Arsitektur multi-cabang (branch isolation)",
      "Integrasi hardware (barcode scanner, printer jaringan)",
      "2 sesi pelatihan staf & pendampingan go-live intensif",
      "SLA penanganan kendala kritis di bawah 2 jam",
    ],
  },
];

export const alaCarteModules: AlaCarteModule[] = [
  {
    id: "core",
    name: "Core Foundation",
    category: "core",
    categoryLabel: "Fondasi",
    priceRange: "Included Baseline",
    description: "Auth Fortify (2FA, Passkey), Spatie RBAC, DB Settings ter-cache, Audit Trail, Media Vault.",
    keyFeature: "Zero setup fee di semua paket",
  },
  {
    id: "invoices-payments",
    name: "Invoices & Payments",
    category: "financial",
    categoryLabel: "Finansial",
    priceRange: "Rp 3.500.000 – Rp 5.000.000",
    description: "Kalkulasi presisi bcmath, penomoran INV atomik, invoice PDF resmi, split pembayaran termin.",
    keyFeature: "Pencegahan race condition transaksi",
  },
  {
    id: "inventory-ledger",
    name: "Inventory Ledger",
    category: "operations",
    categoryLabel: "Operasional",
    priceRange: "Rp 3.500.000 – Rp 5.000.000",
    description: "Buku besar stok append-only (FIFO/LIFO), tracking mutasi bertanda, safety stock alert otomatis.",
    keyFeature: "0 selisih opname fisik vs data",
  },
  {
    id: "booking-engine",
    name: "Booking & Reservasi",
    category: "operations",
    categoryLabel: "Operasional",
    priceRange: "Rp 4.500.000 – Rp 6.500.000",
    description: "Penjadwalan reservasi, resource swimlane calendar, anti-bentrok interval intersection.",
    keyFeature: "Anti-double booking kalender staf",
  },
  {
    id: "work-orders",
    name: "Work Orders (SPK)",
    category: "operations",
    categoryLabel: "Operasional",
    priceRange: "Rp 5.000.000 – Rp 7.500.000",
    description: "Surat Perintah Kerja, Kanban Stall mekanik/teknisi, multi-category checklist inspeksi fisik.",
    keyFeature: "Tracking status servis realtime",
  },
  {
    id: "wa-gateway",
    name: "WhatsApp Gateway",
    category: "automation",
    categoryLabel: "Otomasi",
    priceRange: "Rp 2.500.000 – Rp 4.000.000",
    description: "Driver Fonnte / Starsender / Webhook, notifikasi otomatis status pesanan, faktur, dan reservasi.",
    keyFeature: "Kirim PDF nota otomatis ke chat",
  },
  {
    id: "purchasing-po",
    name: "Purchasing & PO Supplier",
    category: "financial",
    categoryLabel: "Finansial",
    priceRange: "Rp 3.500.000 – Rp 5.000.000",
    description: "Master vendor/supplier, PO-numbering atomik, auto-restock ke inventori saat barang diterima gudang.",
    keyFeature: "Sinkronisasi otomatis hutang dagang",
  },
  {
    id: "ai-mcp",
    name: "AI Copilot & MCP Server",
    category: "growth",
    categoryLabel: "AI & Inovasi",
    priceRange: "Rp 6.000.000 – Rp 12.000.000",
    description: "Endpoint Model Context Protocol (MCP) JSON-RPC untuk tanya-jawab data bisnis dari Claude Desktop / Cursor.",
    keyFeature: "Analitik data bisnis via AI chat",
  },
];
