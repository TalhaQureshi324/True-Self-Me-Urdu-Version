import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AboutContinued from "@/components/sections/AboutContinued";
import MeetTherapist from "@/components/sections/MeetTherapist";
import BioConclusion from "@/components/sections/BioConclusion";
import BreakBanner from "@/components/sections/BreakBanner";
import WhyWorkWithMe from "@/components/sections/WhyWorkWithMe";
import Testimonials from "@/components/sections/Testimonials";
import TherapyApproach from "@/components/sections/TherapyApproach";
import CounselingServices from "@/components/sections/CounselingServices";
import LocationBanner from "@/components/sections/LocationBanner";
import LocationMap from "@/components/sections/LocationMap";
import Specialties from "@/components/sections/Specialties";
import PotentialLimitlessBanner from "@/components/sections/PotentialLimitlessBanner";
import RightGuidance from "@/components/sections/RightGuidance";
import Pricing from "@/components/sections/Pricing";
// Temporarily disabled (Dad Block pause) — re-enable by uncommenting:
// import TheDadBlockSection from "@/components/sections/TheDadBlockSection";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";
import ContactSection from "@/components/sections/ContactSection";
import { site } from "@/lib/site";

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "میری کہانی - کوچنگ اور مینٹورشپ",
  description:
    "پورے ریاستہائے متحدہ امریکہ میں افراد، جوڑوں، باپوں اور کمیونٹی گروپس کے لیے غیر طبی کوچنگ اور مینٹورشپ کی خدمات۔",
  image: `${site.url}/og-image.jpg`,
  url: site.url,
  telephone: "+1-469-935-1307",
  priceRange: "$30 - $185",
  address: {
    "@type": "PostalAddress",
    addressLocality: "آسٹن",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.2672,
    longitude: -97.7431,
  },
  areaServed: {
    "@type": "Country",
    name: "ریاستہائے متحدہ امریکہ",
  },
  founder: {
    "@type": "Person",
    name: "فہد عالم",
    jobTitle: "بانی، کوچ اور مینٹور",
  },
  sameAs: ["https://www.instagram.com", "https://www.linkedin.com"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "میری کہانی میں کوچنگ سیشن کی قیمت کتنی ہے؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "انفرادی کوچنگ کی فی سیشن قیمت $125 ہے، جوڑوں اور خاندانی کوچنگ کی فی سیشن قیمت $185 ہے، اور گروپ کوچنگ کی قیمت $30 سے $60 تک ہے۔ ساتھ ہی چند محدود سلیڈنگ اسکیل (آمدنی کے مطابق) سیشن بھی دستیاب ہیں۔",
      },
    },
    {
      "@type": "Question",
      name: "کیا آپ آن لائن کوچنگ پیش کرتے ہیں؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "جی ہاں — میری کہانی مکمل طور پر آن لائن کوچنگ پریکٹس ہے جو پورے ریاستہائے متحدہ امریکہ میں کلائنٹس کو محفوظ ویڈیو سیشن فراہم کرتی ہے۔",
      },
    },
    {
      "@type": "Question",
      name: "The Dad Block کیا ہے؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Dad Block ایک کمیونٹی گروپ ہے جو باپوں کے لیے ایک پُرسکون اور بغیر کسی دباؤ کے ماحول فراہم کرتا ہے — جہاں وہ ایک دوسرے سے جڑ سکتے ہیں، سچے رشتے بنا سکتے ہیں اور والدیت کے سفر میں مل کر آگے بڑھ سکتے ہیں۔",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <About />
      <AboutContinued />
      <MeetTherapist />
      <BioConclusion />
      <BreakBanner />
      <WhyWorkWithMe />
      <Testimonials />
      <TherapyApproach />
      <CounselingServices />
      <LocationBanner />
      <LocationMap />
      <Specialties />
      <PotentialLimitlessBanner />
      <RightGuidance />
      <Pricing />
      {/* Temporarily disabled (Dad Block pause):
      <TheDadBlockSection />
      */}
      <LeadCaptureSection />
      <ContactSection />
    </>
  );
}
