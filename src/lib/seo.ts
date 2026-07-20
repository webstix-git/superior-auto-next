import type { Metadata } from "next";

export const SITE_NAME = "Superior Auto Body";

// Set NEXT_PUBLIC_SITE_URL in production (e.g. https://example.com).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? "http://localhost:3000";

export const DEFAULT_DESCRIPTION =
  "Family-owned collision repair in Eau Claire, WI. I-CAR Gold Class certified technicians, eco-friendly paint, and convenient night drop-off.";

export type SeoRouteKey =
  | "home"
  | "about"
  | "services"
  | "gallery"
  | "testimonials"
  | "faq"
  | "contact"
  | "thankYou";

const routes: Record<
  SeoRouteKey,
  {
    path: string;
    title: string;
    description: string;
    ogImagePath: string;
    indexable?: boolean;
  }
> = {
  home: {
    path: "/",
    title: `${SITE_NAME} | Collision Repair in Eau Claire, WI`,
    description: DEFAULT_DESCRIPTION,
    ogImagePath: "/hero-banner.jpg",
  },
  about: {
    path: "/about",
    title: `About Us | ${SITE_NAME}`,
    description:
      "Learn about Superior Auto Body—serving the Chippewa Valley since 1971 with trusted collision repair, certified technicians, and a commitment to quality.",
    ogImagePath: "/inside-header-banner.jpeg",
  },
  services: {
    path: "/services",
    title: `Services | ${SITE_NAME}`,
    description:
      "Explore our collision repair services including collision restoration, 24/7 night drop-off, and eco-friendly water-based paint for a perfect finish.",
    ogImagePath: "/collision-repair-services.jpg",
  },
  gallery: {
    path: "/gallery",
    title: `Gallery | ${SITE_NAME}`,
    description:
      "View before-and-after photos and a gallery of our collision repair work, paint services, and facility.",
    ogImagePath: "/gallery-corvette.jpg",
  },
  testimonials: {
    path: "/testimonials",
    title: `Testimonials | ${SITE_NAME}`,
    description:
      "Read reviews from our customers and learn why drivers trust Superior Auto Body for quality collision repair and friendly service.",
    ogImagePath: "/team-group-photo.jpg",
  },
  faq: {
    path: "/faq",
    title: `FAQ | ${SITE_NAME}`,
    description:
      "Answers to common questions about insurance, estimates, repair timelines, parts, warranties, and our collision repair process.",
    ogImagePath: "/inside-header-banner.jpeg",
  },
  contact: {
    path: "/contact",
    title: `Contact | ${SITE_NAME}`,
    description:
      "Contact Superior Auto Body for a free estimate. Call (715) 834-7707 or send us a message—located in Eau Claire, WI.",
    ogImagePath: "/logo.gif",
  },
  thankYou: {
    path: "/thank-you",
    title: `Thank You | ${SITE_NAME}`,
    description: "Thanks for reaching out to Superior Auto Body. We’ll get back to you as soon as possible.",
    ogImagePath: "/logo.gif",
    indexable: false,
  },
};

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function buildPageMetadata(key: SeoRouteKey): Metadata {
  const r = routes[key];
  const canonical = absoluteUrl(r.path);
  const indexable = r.indexable ?? true;

  return {
    title: r.title,
    description: r.description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: r.title,
      description: r.description,
      url: canonical,
      images: [
        {
          url: absoluteUrl(r.ogImagePath),
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: r.title,
      description: r.description,
      images: [absoluteUrl(r.ogImagePath)],
    },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: true, nocache: true },
  };
}

export const SEO_ROUTES = routes;
