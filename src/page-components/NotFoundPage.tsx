"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Layout } from "@/components/Layout";
import { Search } from "lucide-react";

const insideBanner = "/inside-header-banner.jpeg";

const siteLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Sitemap", path: "/sitemap-page" },
];

export default function NotFoundPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchedLink = [...siteLinks, ...legalLinks].find(
        (link) =>
          link.name.toLowerCase().includes(query) ||
          link.path.toLowerCase().includes(query)
      );

      if (matchedLink) {
        router.push(matchedLink.path);
      } else {
        router.push("/");
      }
    }
  };

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
          <h1 className="text-4xl md:text-5xl font-bold">Page Not Found</h1>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-8xl md:text-9xl font-bold text-primary">404</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-charcoal">
            Oops! We couldn&apos;t find that page.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>

          {/* Search Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-charcoal">
              Search Our Website
            </h3>
            <form onSubmit={handleSearch} className="flex max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search pages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-r-md hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span className="sr-only sm:not-sr-only">Search</span>
              </button>
            </form>
          </div>

          {/* Sitemap Links */}
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-6 text-charcoal text-center">
              Or Browse Our Pages
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4 text-charcoal">
                  Main Pages
                </h4>
                <ul className="space-y-3">
                  {siteLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        href={link.path}
                        className="text-primary hover:underline transition-colors flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4 text-charcoal">
                  Legal Pages
                </h4>
                <ul className="space-y-3">
                  {legalLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        href={link.path}
                        className="text-primary hover:underline transition-colors flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
