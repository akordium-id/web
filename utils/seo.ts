// SEO and metadata utilities for Akordium

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const defaultSEO: SEOProps = {
  title: "Akordium",
  description: "Your digital partner for business growth and innovation",
  keywords: [
    "digital",
    "pembuatan website",
    "pembuatan aplikasi",
    "edukasi",
    "indonesia",
    "jawa",
  ],
  ogType: "website",
  twitterCard: "summary_large_image",
  ogImage: "/og-image.jpg",
};

export function generateMetaTags(
  seo: SEOProps = {},
): Array<{ name?: string; property?: string; content: string }> {
  const meta = { ...defaultSEO, ...seo };

  return [
    { name: "description", content: meta.description! },
    { name: "keywords", content: meta.keywords!.join(", ") },
    { property: "og:title", content: meta.title! },
    { property: "og:description", content: meta.description! },
    { property: "og:type", content: meta.ogType! },
    { property: "og:image", content: meta.ogImage! },
    { name: "twitter:card", content: meta.twitterCard! },
    { name: "twitter:title", content: meta.title! },
    { name: "twitter:description", content: meta.description! },
    { name: "twitter:image", content: meta.ogImage! },
  ];
}
