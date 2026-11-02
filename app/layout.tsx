import type { Metadata, Viewport } from "next";
import { Noto_Nastaliq_Urdu, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import BookingProvider from "@/components/booking/BookingProvider";
import AttributionCapture from "@/components/tracking/AttributionCapture";
import GAScript from "@/components/analytics/GAScript";
import ClarityScript from "@/components/analytics/ClarityScript";
import FloatingBookingButton from "@/components/booking/FloatingBookingButton";
import EngagementTracker from "@/components/analytics/EngagementTracker";
import SpecialOfferBanner from "@/components/promotions/SpecialOfferBanner";
import SpecialOfferModal from "@/components/promotions/SpecialOfferModal";
import { site } from "@/lib/site";

// Display font for headings — classic Nastaliq calligraphic style.
// Nastaliq needs generous vertical space, so keep line-heights loose
// (globals.css enforces a safe minimum for .font-display).
const display = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urdu-display",
  display: "swap",
});

// Body font — clean Naskh for readable UI text and paragraphs.
const sans = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urdu-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "My Kahani | امریکہ بھر میں کوچنگ اور رہنمائی",
    template: "%s | My Kahani",
  },
  description:
    "بھروسے مند، اصل اور بے دباؤ کوچنگ اور رہنمائی — افراد، جوڑوں اور باپوں کے لیے، پورے ریاستہائے متحدہ امریکہ میں۔ استحکام، وضاحت اور مقصد کی طرف بڑھنے کی حمایت۔",
  keywords: [
    "ذاتی کوچنگ",
    "پیشہ ورانہ کوچنگ",
    "باپوں کے لیے کوچنگ",
    "مردوں کی کوچنگ",
    "رشتوں اور جوڑوں کی کوچنگ",
    "کیریئر کوچنگ",
    "زندگی کے تبدیلیوں کی کوچنگ",
    "My Kahani",
    "میری کہانی",
  ],
  authors: [{ name: "My Kahani" }],
  creator: "My Kahani",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "ur_PK",
    url: site.url,
    siteName: "My Kahani",
    title: "My Kahani | امریکہ بھر میں کوچنگ اور رہنمائی",
    description:
      "ذاتی اور پیشہ ورانہ کوچنگ کے لیے ایک پُرسکون، بے دباؤ جگہ — پورے ریاستہائے متحدہ امریکہ میں آن لائن سیشن۔",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Kahani - کوچنگ اور رہنمائی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Kahani | کوچنگ اور رہنمائی",
    description:
      "افراد، جوڑوں اور باپوں کے لیے کوچنگ — پورے ریاستہائے متحدہ امریکہ میں۔",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Austin",
    "geo.position": "30.2672;-97.7431",
    ICBM: "30.2672, -97.7431",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#5D1F13",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ur"
      dir="rtl"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <GAScript />
        <ClarityScript />
        <AttributionCapture />
        <EngagementTracker />
        <BookingProvider>
          <SpecialOfferBanner />
          <Navbar />
          <main id="top" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingBookingButton />
          <SpecialOfferModal />
        </BookingProvider>
      </body>
    </html>
  );
}
