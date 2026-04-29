import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION } from "@/lib/seo";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  manifest: "/manifest.json",
  appleWebApp: {
    title: SITE_NAME,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessJsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
