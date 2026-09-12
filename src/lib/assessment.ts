export interface DimensionScores {
	salesChannel: number;
	operationalFriction: number;
	credibilityDemand: number;
	searchIntent: number;
	platformRisk: number;
}

export type UrgencyTier = "low" | "moderate" | "critical";

export interface UrgencyResult {
	totalScore: number;
	urgencyPercentage: number;
	urgencyTier: UrgencyTier;
	urgencyLevel: string;
	urgencyBadgeClass: string;
	progressBarClass: string;
	summaryText: string;
	recType: string;
	recDesc: string;
	recList: string[];
}

/**
 * Calculates urgency score and recommendations for UMKM website readiness.
 * Total score ranges from 5 (min) to 20 (max), mapped to 0% - 100%.
 */
export function calculateUrgency(businessName: string, scores: DimensionScores): UrgencyResult {
	const totalScore =
		scores.salesChannel +
		scores.operationalFriction +
		scores.credibilityDemand +
		scores.searchIntent +
		scores.platformRisk;

	const clampedScore = Math.max(5, Math.min(20, totalScore));
	const urgencyPercentage = Math.round(((clampedScore - 5) / 15) * 100);

	if (urgencyPercentage <= 40) {
		return {
			totalScore,
			urgencyPercentage,
			urgencyTier: "low",
			urgencyLevel: "Rendah (Fase Validasi Pasar)",
			urgencyBadgeClass: "bg-emerald-600 text-white",
			progressBarClass: "bg-emerald-500",
			summaryText: `Model bisnis ${businessName} saat ini masih berjalan cukup efisien di kanal yang ada. Ketergantungan terhadap risiko pihak ketiga masih terkendali dan beban admin belum berada di titik kritis.`,
			recType: "Optimasi Profil Gratis & Kanal Eksisting",
			recDesc: "Anda belum membutuhkan investasi pembuatan website custom yang mahal. Fokuslah pada memaksimalkan channel gratisan.",
			recList: [
				"Klaim dan optimalkan Google Business Profile (Google Maps) dengan foto produk & review pelanggan.",
				"Gunakan link-in-bio (Biolink) terstruktur agar calon pembeli mudah diarahkan ke WhatsApp.",
				"Fokus validasi produk dan tingkatkan perputaran omzet sebelum berinvestasi pada sistem digital mandiri.",
			],
		};
	}

	if (urgencyPercentage <= 70) {
		return {
			totalScore,
			urgencyPercentage,
			urgencyTier: "moderate",
			urgencyLevel: "Moderat (Butuh Efisiensi & Kredibilitas)",
			urgencyBadgeClass: "bg-amber-500 text-stone-950",
			progressBarClass: "bg-amber-400",
			summaryText: `Bisnis ${businessName} mulai mengalami inefisiensi operasional. Waktu tim mulai banyak terbuang untuk melayani pertanyaan dasar berulang, atau ada calon pembeli potensial yang menuntut profil yang lebih profesional.`,
			recType: "Landing Page Konversi 1 Halaman (High-Conversion)",
			recDesc: "Solusi terbaik untuk fase ini adalah Landing Page ramping berorientasi aksi langsung ke WhatsApp.",
			recList: [
				"Satu halaman terarah yang memuat katalog ringkas, daftar harga transparan, dan FAQ otomatis.",
				"Integrasi tombol pesan WhatsApp dengan format pesan otomatis agar admin tidak perlu mengetik ulang.",
				"Domain nama brand sendiri (.id / .com) untuk membangun rasa percaya calon pembeli baru.",
			],
		};
	}

	return {
		totalScore,
		urgencyPercentage,
		urgencyTier: "critical",
		urgencyLevel: "Kritis / Sangat Mendesak (Risiko Ketergantungan Tinggi)",
		urgencyBadgeClass: "bg-rose-600 text-white",
		progressBarClass: "bg-rose-500",
		summaryText: `Bisnis ${businessName} berada dalam zona rentan jika terus mengandalkan platform pihak ketiga secara pasif. Potongan komisi, risiko pembatasan akun, dan bottleneck chat admin berpotensi menahan laju pertumbuhan omzet Anda.`,
		recType: "Website Bisnis Mandiri (Company Profile Kredibel / Sistem Pemesanan)",
		recDesc: "Anda membutuhkan aset digital mandiri yang sepenuhnya Anda kendalikan tanpa potongan sepihak.",
		recList: [
			"Website Company Profile / Katalog Produk resmi berkecepatan tinggi dengan SEO Google Search.",
			"Sistem pencatatan pesanan otomatis yang mengurangi beban chat admin hingga 70%.",
			"Database pelanggan mandiri yang bebas dari ancaman suspend akun media sosial atau marketplace.",
		],
	};
}
