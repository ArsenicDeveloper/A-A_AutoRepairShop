import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aa-auto-repair.vercel.app"),
  title: {
    default: "A&A Auto Repair Shop | Mobile Mechanic & Home Service",
    template: "%s | A&A Auto Repair Shop",
  },
  description:
    "Professional mobile mechanic and home-service automotive repair. Certified mechanics providing diagnostics, engine repair, AC, brakes, tune-up, and more directly at your location. Call 0995-230-5453.",
  keywords: [
    "mobile mechanic",
    "home service mechanic",
    "auto repair",
    "engine repair",
    "car diagnostics",
    "brake repair",
    "AC repair",
    "oil change",
    "tune-up",
    "A&A Auto Repair Shop",
    "automotive repair",
    "mobile auto repair",
    "engine overhaul",
    "turbo service",
  ],
  openGraph: {
    title: "A&A Auto Repair Shop | Mobile Mechanic & Home Service",
    description:
      "Certified mechanics at your location. Engine repair, diagnostics, AC, brakes & more. Call 0995-230-5453.",
    type: "website",
    locale: "en_US",
    siteName: "A&A Auto Repair Shop",
  },
  twitter: {
    card: "summary_large_image",
    title: "A&A Auto Repair Shop | Mobile Mechanic & Home Service",
    description:
      "Certified mechanics at your location. Engine repair, diagnostics, AC, brakes & more. Call 0995-230-5453.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "A&A Auto Repair Shop",
  description:
    "Professional mobile mechanic and home-service automotive repair. Certified mechanics providing diagnostics, engine repair, AC service, brake repair, and more.",
  telephone: "+639952305453",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  serviceArea: { "@type": "AdministrativeArea", name: "Metro Area" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Automotive Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Scan & Diagnostics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engine Diagnosis" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Top Overhaul" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Complete Engine Overhaul" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Conditioning Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brake System Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oil & Filter Change" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tune-Up Services" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "120",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#05070d] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
