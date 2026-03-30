import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amaze Tech Solutions — TMS Back-Office Services for Carriers",
  description:
    "Expert TMS back-office support for mid-size carriers in the US & Canada. 24/7 operations, zero software changes. Load entry, dispatch, billing, tracking & more.",
  keywords: [
    "TMS back office",
    "transport management system support",
    "freight carrier services",
    "trucking back office",
    "dispatch support",
    "load entry services",
    "carrier billing services",
    "cross-border customs",
    "3PL support",
    "Amaze Tech Solutions",
  ],
  authors: [{ name: "Amaze Tech Solutions Pvt Ltd" }],
  openGraph: {
    title: "Amaze Tech Solutions — Your TMS. Our Expertise.",
    description:
      "Expert TMS back-office support for mid-size carriers. 24/7 operations, zero software changes, cut costs by 50%.",
    url: "https://tms.amazetech.net",
    siteName: "Amaze Tech Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Amaze Tech Solutions — TMS Back-Office Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaze Tech Solutions — Your TMS. Our Expertise.",
    description:
      "Expert TMS back-office support for mid-size carriers. 24/7 operations, zero software changes.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Amaze Tech Solutions Pvt Ltd",
  description:
    "Expert TMS back-office support for mid-size carriers in the US & Canada.",
  url: "https://tms.amazetech.net",
  telephone: "+18888080131",
  email: "sales@amazetech.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Auer Ct",
    addressLocality: "East Brunswick",
    addressRegion: "NJ",
    postalCode: "08816",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
  serviceType: [
    "TMS Back-Office Support",
    "Freight Dispatch Services",
    "Carrier Billing Services",
    "Cross-Border Customs Documentation",
    "Load Entry and Tracking",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
