import type { Metadata } from "next";
import { SparkleDoodle } from "@/components/ui/doodles";
import BookingFlow from "@/components/booking/BookingFlow";

export const metadata: Metadata = {
  title: "سیشن بک کریں",
  description:
    "My Kahani کے ساتھ اپنی 50 منٹ کی آن لائن مشاورت شیڈول کریں — پورے ملک میں دستیاب، نقد ادائیگی، کارڈ فائل پر، کوئی ایڈوانس چارج نہیں۔",
};

/**
 * Standalone booking landing — the destination for paid traffic
 * (/book?gclid=...) and anyone arriving from search. Full-width hero
 * plus the centered booking suite.
 */
export default function BookPage() {
  return (
    <div className="bg-[#F5EFE6]">
      {/* Hero */}
      <section className="border-b border-black/[0.08] px-4 pb-10 pt-14 text-center sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-4 py-1.5 text-xs font-bold text-[#5D1F13]">
            <SparkleDoodle className="h-3.5 w-3.5 text-[#A8532B]" />
            نقد ادائیگی • کارڈ فائل پر • کوئی ایڈوانس چارج نہیں
          </p>
          <h1 className="mt-6 font-display text-5xl font-normal tracking-tight text-[#5D1F13] sm:text-6xl">
            اپنے سفر کا آغاز کریں
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#1A1A1A]/70">
            اپنی 50 منٹ کی مشاورت کے لیے وقت منتخب کریں۔ سیشن آن لائن، پورے
            ملک میں دستیاب ہیں۔
          </p>
        </div>
      </section>

      {/* Booking suite */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <BookingFlow />
        </div>
      </section>
    </div>
  );
}
