 "use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const logo = "/logo.gif";
const navLinks = [{
  name: "Home",
  path: "/"
}, {
  name: "About Us",
  path: "/about"
}, {
  name: "Services",
  path: "/services"
}, {
  name: "Gallery",
  path: "/gallery"
}, {
  name: "Testimonials",
  path: "/testimonials"
}, {
  name: "FAQ",
  path: "/faq"
}, {
  name: "Contact",
  path: "/contact"
}];
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  
  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      <nav className="container py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src={logo} alt="Superior Auto Body" className="h-[120px] w-auto" />
          </Link>

          {/* Desktop: Right side content */}
          <div className="hidden lg:flex flex-col items-end gap-2">
            {/* Phone + CTA - Top Row */}
            <div className="flex items-center gap-4">
              <a
                href="tel:715-834-7707"
                className="flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors"
                style={{ color: '#1F1F1F' }}
              >
                <Phone className="h-4 w-4" />
                (715) 834-7707
              </a>
              <Button asChild className="text-lg">
                <Link href="/contact">Get a Free Estimate</Link>
              </Button>
            </div>
            
            {/* Navigation - Bottom Row */}
            <div className="flex items-center gap-6 pt-[10px]">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:715-834-7707"
                className="flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors"
                style={{ color: '#1F1F1F' }}
              >
                <Phone className="h-4 w-4" />
                (715) 834-7707
              </a>
              <Button asChild className="mt-2">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Free Estimate
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}