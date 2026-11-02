import { isDatabaseConfigured, getSupabaseAdmin } from "@/lib/supabase";
import { ArrowDownToLine, CalendarDays, CheckCircle2, Clock } from "lucide-react";
import BookingConfirmation from "@/components/booking/BookingConfirmation";

export const dynamic = "force-dynamic";

/**
 * /booking/confirmed/[bookingReference]
 *
 * Shareable confirmation view addressed by the public booking
 * reference. Shows only safe fields: reference, status, slot times,
 * masked card, practitioner. Never exposes payment provider profile ids,
 * database ids, attribution or email addresses.
 */
export default async function BookingConfirmedPage({
  params,
}: {
  params: Promise<{ bookingReference: string }>;
}) {
  const { bookingReference } = await params;
  const reference = decodeURIComponent(bookingReference).toUpperCase();

  if (!isDatabaseConfigured) {
    return (
      <main className="min-h-screen bg-[#F5EFE6] px-4 py-24 text-center">
        <h1 className="font-display text-3xl text-[#5D1F13]">
          شیڈولنگ ابھی منسلک نہیں ہے۔
        </h1>
      </main>
    );
  }

  const supabase = getSupabaseAdmin();
  const { data: booking } = await supabase
    .from("bookings")
    .select(
      "booking_reference, status, slot_start, slot_end, first_name, card_brand, card_last4",
    )
    .eq("booking_reference", reference)
    .single();

  if (!booking) {
    return (
      <main className="min-h-screen bg-[#F5EFE6] px-4 py-24 text-center">
        <h1 className="font-display text-3xl text-[#5D1F13]">
          بکنگ نہیں ملی
        </h1>
        <p className="mt-4 text-sm text-[#1A1A1A]/70">
          براہ کرم اپنی تصدیقی ای میل میں دیا گیا لنک چیک کریں۔
        </p>
      </main>
    );
  }

  const cardLabel =
    booking.card_last4 && booking.status !== "cancelled"
      ? `کارڈ فائل پر — ${booking.card_brand ?? "کارڈ"} (آخری ہندسے: ${booking.card_last4})`
      : null;

  return (
    <main className="min-h-screen bg-[#F5EFE6] px-4 py-24">
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#5D1F13]">
          <CheckCircle2 className="h-9 w-9 text-[#F5EFE6]" aria-hidden="true" />
        </span>
        <h1 className="mt-6 font-display text-4xl text-[#5D1F13]">
          {booking.status === "cancelled"
            ? "یہ بکنگ منسوخ کر دی گئی تھی"
            : "آپ کی مشاورت محفوظ ہو گئی ہے"}
        </h1>
        <p className="mt-3 text-sm font-bold text-[#A8532B]">
          بکنگ نمبر {booking.booking_reference}
        </p>

        <div className="mt-8 space-y-2.5 rounded-xl border border-black/[0.08] bg-[#F3EDE5] px-5 py-4 text-right text-sm">
          <p className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 text-[#1A1A1A]/60">
              <CalendarDays className="h-4 w-4 text-[#A8532B]" aria-hidden="true" />
              تاریخ
            </span>
            <span className="font-semibold text-[#1A1A1A]">
              {new Intl.DateTimeFormat("ur-PK", {
                timeZone: "America/Chicago",
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              }).format(new Date(booking.slot_start))}
            </span>
          </p>
          <p className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 text-[#1A1A1A]/60">
              <Clock className="h-4 w-4 text-[#A8532B]" aria-hidden="true" />
              وقت
            </span>
            <span className="font-semibold text-[#1A1A1A]">
              {new Intl.DateTimeFormat("ur-PK", {
                timeZone: "America/Chicago",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              }).format(new Date(booking.slot_start))}{" "}
              <span className="font-normal text-[#1A1A1A]/55">
                وسطی امریکی وقت (CST)
              </span>
            </span>
          </p>
          <p className="flex items-center justify-between gap-4">
            <span className="text-[#1A1A1A]/60">دورانیہ</span>
            <span className="font-semibold text-[#1A1A1A]">50 منٹ</span>
          </p>
          <p className="flex items-center justify-between gap-4">
            <span className="text-[#1A1A1A]/60">انداز</span>
            <span className="font-semibold text-[#1A1A1A]">
              آن لائن ویڈیو مشاورت
            </span>
          </p>
          <p className="flex items-center justify-between gap-4">
            <span className="text-[#1A1A1A]/60">پریکٹیشنر</span>
            <span className="font-semibold text-[#1A1A1A]">
              Fahd Alam — کوچ اور منتور
            </span>
          </p>
          {cardLabel && (
            <p className="flex items-center justify-between gap-4">
              <span className="text-[#1A1A1A]/60">ادائیگی کا طریقہ</span>
              <span className="font-semibold text-[#1A1A1A]">{cardLabel}</span>
            </p>
          )}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href={`/api/bookings/${encodeURIComponent(booking.booking_reference)}/calendar`}
            className="inline-flex items-center gap-2 rounded-full bg-[#5D1F13] px-6 py-3 text-sm font-bold text-[#F5EFE6] shadow-[0_6px_20px_-8px_rgba(93,31,19,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4A1811]"
          >
            <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
            کیلنڈر میں شامل کریں (.ics)
          </a>
          <p className="max-w-md text-xs leading-relaxed text-[#1A1A1A]/55">
            ایک کارڈ فائل پر رکھ دیا گیا ہے۔ آپ کی مشاورت کے بعد ہی کوئی چارج
            کیا جائے گا۔ اس بکنگ کو منظم یا منسوخ کرنے کے لیے اپنی تصدیقی ای
            میل میں دیا گیا لنک استعمال کریں۔
          </p>
        </div>
      </div>
    </main>
  );
}
