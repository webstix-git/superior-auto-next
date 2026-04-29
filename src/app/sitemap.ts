import type { MetadataRoute } from "next";
import { SITE_URL, SEO_ROUTES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Exclude thank-you from the sitemap by design (noindex conversion page).
  const include = [
    SEO_ROUTES.home,
    SEO_ROUTES.about,
    SEO_ROUTES.services,
    SEO_ROUTES.gallery,
    SEO_ROUTES.testimonials,
    SEO_ROUTES.faq,
    SEO_ROUTES.contact,
  ];

  return include.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.path === "/" ? 1 : 0.7,
  }));
}

