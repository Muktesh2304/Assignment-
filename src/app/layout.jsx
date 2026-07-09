import Footer from "@/Components/footer";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "One8 Commune | Premium Fine Dining Restaurant & Lounge",
    template: "%s | One8 Commune",
  },
  description: "Experience premium culinary artistry and a vibrant fine dining experience at One8 Commune.",
  alternates: {
    canonical: "https://one8commune.com",
    languages: {
      "en-IN": "https://one8commune.com",
      "en-US": "https://one8commune.com",
      "x-default": "https://one8commune.com",
    },
  },
  openGraph: {
    title: "One8 Commune | Premium Fine Dining Restaurant & Lounge",
    description: "Experience premium culinary artistry and a vibrant fine dining experience at One8 Commune.",
    url: "https://one8commune.com",
    siteName: "One8 Commune",
    images: [
      {
        url: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
        width: 1200,
        height: 630,
        alt: "One8 Commune Restaurant Elegance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One8 Commune | Premium Fine Dining Restaurant & Lounge",
    description: "Experience premium culinary artistry and a vibrant fine dining experience at One8 Commune.",
    images: ["https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"],
  },
};
 
const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "One8 Commune",
  "image": "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
  "@id": "https://one8commune.com",
  "url": "https://one8commune.com",
  "telephone": "+91-11-23456789",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Worldmark 2, Aerocity",
    "addressLocality": "New Delhi",
    "postalCode": "110037",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.5513,
    "longitude": 77.1221
  },
  "servesCuisine": ["North Indian", "Continental", "Asian", "Italian"],
  "priceRange": "₹₹₹",
  "menu": "https://one8commune.com/menu/main-dishes"
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative bg-black">
      
        <div className="fixed inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
          <Image
            src="/One-8-commune-logo-transparent.png"
            alt="One8 Commune Background Watermark Logo"
            aria-hidden="true"
            width={1250}
            height={520}
            priority
            className="w-[1250px] max-w-none opacity-[0.04] mt-24 pointer-events-none"
          />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
