import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://tms.amazetech.net";

export const metadata: Metadata = {
  title: "Amaze Tech Solutions — TMS Back-Office Services for Trucking Companies",
  description:
    "Expert TMS back-office services for trucking companies in Canada and USA. We work with YOUR existing TMS software — no changes needed. PRO numbers, customs docs, EDI tracking, freight billing, dispatch support, and more.",
  keywords: [
    "TMS services",
    "trucking management",
    "back-office BPO",
    "PRO numbers",
    "EDI tracking",
    "customs documentation",
    "freight management",
    "logistics BPO",
    "TMS outsourcing",
    "trucking back office services",
    "freight billing services",
    "dispatch support",
    "cross-border customs",
    "Canada trucking BPO",
    "TMS support services",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Amaze Tech Solutions — TMS Back-Office Services",
    description:
      "Expert TMS back-office services for trucking companies in Canada & USA. We work with YOUR existing TMS software — no changes needed.",
    url: siteUrl,
    siteName: "Amaze Tech Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Amaze Tech Solutions — TMS Back-Office Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaze Tech Solutions — TMS Back-Office Services",
    description:
      "Expert TMS back-office services for trucking companies in Canada & USA. We work with YOUR existing TMS software — no changes needed.",
    images: [`${siteUrl}/og-image.png`],
  },
  other: {
    "theme-color": "#0d9488",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Amaze Tech Solutions Pvt Ltd",
      url: "https://amazetech.net",
      logo: `${siteUrl}/og-image.png`,
      contactPoint: {
        "@type": "ContactPoint",
        email: "sales@amazetech.net",
        contactType: "sales",
        areaServed: ["CA", "US"],
        availableLanguage: ["English"],
      },
      sameAs: ["https://amazetech.net"],
    },
    {
      "@type": "LocalBusiness",
      name: "Amaze Tech Solutions — TMS Services",
      url: siteUrl,
      email: "sales@amazetech.net",
      description:
        "Expert TMS back-office services for trucking companies. PRO numbers, customs docs, EDI tracking, freight billing, dispatch support.",
      areaServed: [
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United States" },
      ],
      serviceType: [
        "TMS Back-Office Services",
        "Freight Billing Services",
        "Dispatch Support",
        "Cross-Border Customs Documentation",
        "EDI Tracking",
      ],
    },
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
        <meta name="theme-color" content="#0d9488" />
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
