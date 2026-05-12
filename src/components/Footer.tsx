import Link from "next/link";
import Script from "next/script";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
const logo = "/logo.gif";
const needHelpBg = "/need-help-bg.jpg";

const quickLinksCol1 = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
];

const quickLinksCol2 = [
  { name: "Testimonials", path: "/testimonials" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-white text-[#1F1F1F]">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Contact Info */}
          <div className="space-y-4">
            <img src={logo} alt="Superior Auto Body" className="h-20 w-auto" />
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base text-[#1F1F1F]">
                  301 North Farwell St.<br />
                  Eau Claire, WI 54703
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:715-834-7707"
                  className="text-base text-[#1F1F1F] hover:text-primary transition-colors"
                >
                  (715) 834-7707
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:office@superiorautobodyinc.com"
                  className="text-base text-[#1F1F1F] hover:text-primary transition-colors"
                >
                  office@superiorautobodyinc.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#1F1F1F]">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-base text-[#1F1F1F]">
                  <p>Monday - Friday</p>
                  <p className="font-medium text-[#1F1F1F]">8:00 AM - 5:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3 mt-[15px]">
                <span className="text-base font-medium text-[#1F1F1F]">Follow Us On:</span>
                <a
                  href="https://www.facebook.com/profile.php?id=100063544871622#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links - Two Columns */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#1F1F1F]">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-2">
                {quickLinksCol1.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-base text-[#1F1F1F] hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {quickLinksCol2.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-base text-[#1F1F1F] hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA with Background Image */}
          <div className="relative rounded-lg overflow-hidden min-h-[200px]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${needHelpBg})` }}
            />
            <div className="absolute inset-0 bg-charcoal/70" />
            <div className="relative p-6 flex flex-col justify-center h-full text-center">
              <h3 className="font-semibold text-[24px] mb-3 text-white">Need an Estimate?</h3>
              <p className="text-base text-white/80 mb-4">
                Get your free estimate today
              </p>
              <Button asChild size="sm" className="text-[18px] w-fit mx-auto px-4">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-muted mt-8 pt-4 pb-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
          <p className="text-base text-[#1F1F1F]">
            © {new Date().getFullYear()} Superior Auto Body. All rights reserved.
          </p>
          <span className="hidden sm:inline text-[#1F1F1F] mx-2">|</span>
          <div className="flex items-center gap-2">
            <Link
              href="/privacy-policy"
              className="text-base text-[#1F1F1F] hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[#1F1F1F]">|</span>
            <Link
              href="/sitemap-page"
              className="text-base text-[#1F1F1F] hover:text-primary transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* The Trade Desk Conversion Tracking */}
      <Script
        src="https://js.adsrvr.org/up_loader.3.0.0.js"
        strategy="afterInteractive"
      />
      <Script id="ttd-conversion-events" strategy="afterInteractive">
        {`
          window.ttdConversionEventsLayer = window.ttdConversionEventsLayer || [];
          function ttdConversionEvents() {
            window.ttdConversionEventsLayer.push(arguments);
          }
          
          ttdConversionEvents("init", {
            advertiserId: "43lof4d",
            pixelIds: ["mfapllr"]
          });

          ttdConversionEvents("event", {
            advertiserId: "43lof4d",
            pixelIds: ["mfapllr"]
          });
        `}
      </Script>
    </footer>
  );
}
