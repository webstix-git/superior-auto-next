import { SITE_NAME, SITE_URL } from "@/lib/seo";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: "+1-715-834-7707",
    email: "office@superiorautobodyinc.com",
    image: `${SITE_URL}/hero-banner.jpg`,
    logo: `${SITE_URL}/logo.gif`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "301 North Farwell St.",
      addressLocality: "Eau Claire",
      addressRegion: "WI",
      postalCode: "54703",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    sameAs: ["https://www.facebook.com/profile.php?id=100063544871622"],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

