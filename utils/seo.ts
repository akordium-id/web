// SEO and metadata utilities for Akordium

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  locale?: string;
  siteName?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown>;
}

export const defaultSEO: SEOProps = {
  title: "Akordium",
  description: "Partner digital yang peduli untuk perkembangan bisnis Anda serta mengedepankan kenyamanan dan kolaborasi bersama",
  keywords: [
    "digital",
    "pembuatan website",
    "pembuatan aplikasi",
    "edukasi",
    "indonesia",
    "jawa",
    "web development",
    "app development",
    "digital marketing",
  ],
  ogType: "website",
  twitterCard: "summary_large_image",
  ogImage: "/og-image.jpg",
  locale: "id_ID",
  siteName: "Akordium",
  noIndex: false,
};

export function generateMetaTags(
  seo: SEOProps = {},
): Array<{ name?: string; property?: string; content: string }> {
  const meta = { ...defaultSEO, ...seo };
  const metaTags = [
    { name: "description", content: meta.description! },
    { name: "keywords", content: meta.keywords!.join(", ") },
    { property: "og:title", content: meta.title! },
    { property: "og:description", content: meta.description! },
    { property: "og:type", content: meta.ogType! },
    { property: "og:image", content: meta.ogImage! },
    { property: "og:site_name", content: meta.siteName! },
    { property: "og:locale", content: meta.locale! },
    { name: "twitter:card", content: meta.twitterCard! },
    { name: "twitter:title", content: meta.title! },
    { name: "twitter:description", content: meta.description! },
    { name: "twitter:image", content: meta.ogImage! },
  ];

  if (meta.canonicalUrl) {
    metaTags.push({ property: "og:url", content: meta.canonicalUrl });
    // Canonical URL is handled separately in the Head component
  }

  if (meta.noIndex) {
    metaTags.push({ name: "robots", content: "noindex, nofollow" });
  }

  return metaTags;
}

export function generateStructuredData(data?: Record<string, unknown>): string | null {
  if (!data) return null;

  try {
    return JSON.stringify(data);
  } catch (error) {
    console.error("Error generating structured data:", error);
    return null;
  }
}
