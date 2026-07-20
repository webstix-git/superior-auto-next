import type { Metadata } from "next";
import Link from "next/link";
import { Layout } from "@/components/Layout";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";

const insideBanner = "/inside-header-banner.jpeg";

export const metadata: Metadata = {
  title: "Sitemap | Superior Auto Body",
  description:
    "Navigate our website easily with this sitemap. Find all pages including services, about us, gallery, testimonials, FAQ, and contact information.",
  robots: { index: true, follow: true },
};

const siteLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function SitemapPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-charcoal text-card py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${insideBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 via-40% to-transparent to-60%" />

        <div className="container relative">
          <h1 className="text-4xl md:text-5xl font-bold">Sitemap</h1>
        </div>
      </section>

      <PageBreadcrumb currentPage="Sitemap" />

      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-charcoal">
            Website Pages
          </h2>
          <ul className="space-y-3">
            {siteLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-lg text-primary hover:underline transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-6 text-charcoal">
            Legal Pages
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/privacy-policy"
                className="text-lg text-primary hover:underline transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/sitemap-page"
                className="text-lg text-primary hover:underline transition-colors"
              >
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
