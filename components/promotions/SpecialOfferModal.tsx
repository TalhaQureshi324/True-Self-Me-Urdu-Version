"use client";

import { useCallback, useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { useBookingDrawer } from "@/components/booking/BookingProvider";

const SEEN_KEY = "has_seen_special_offer";
const SHOW_DELAY_MS = 2500;

/**
 * Welcome special-offer modal: fades in ~2.5s after arrival, once per
 * browser session (sessionStorage suppression). Dismissible via the
 * corner ✕, backdrop click, or Escape. "Claim This Offer & Book" opens
 * the booking drawer with the 4-session bundle preselected.
 */
export default function SpecialOfferModal() {
  const { openBooking } = useBookingDrawer();
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Two-step mount: mounted enables the transition classes, show flips
  // them on — so the card fades in gracefully instead of popping.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;
    const t = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setShow(true));
    }, SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const dismiss = useCallback(() => {
    setShow(false);
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* storage unavailable — worst case it re-shows next load */
    }
    // Unmount after the fade-out transition.
    setTimeout(() => setMounted(false), 300);
  }, []);

  // Escape closes; claim also marks the offer as seen.
  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mounted, dismiss]);

  const claim = () => {
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
    setTimeout(() => setMounted(false), 300);
    openBooking("special-offer-modal", "bundle4");
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!show}
    >
      {/* Backdrop */}
      <button
        type="button"
        tabIndex={-1}
        aria-label="خصوصی آفر بند کریں"
        onClick={dismiss}
        className="absolute inset-0 cursor-default bg-black/50 backdrop-blur-sm"
      />

      {/* Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="خصوصی آفر — 4 آن لائن سیشنز برائے $200"
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md rounded-2xl border border-stone-200 bg-[#FDFBF7] p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] transition-all duration-300 sm:p-8 ${
          show ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.98] opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="خصوصی آفر بند کریں"
          className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-700"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A8532B]">
          محدود وقت کے لیے خصوصی آفر
        </p>

        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#5D1F13]">
          حقیقی شفا کی طرف سفر کا آغاز کریں
        </h2>

        {/* Price highlight card */}
        <div className="mt-5 rounded-xl border border-stone-200 bg-[#F5EFE6] px-5 py-5 text-center">
          <p className="font-display text-5xl font-semibold tracking-tight text-[#5D1F13]">
            $200<span className="mr-1 text-lg font-normal text-stone-600">USD</span>
          </p>
          <p className="mt-1 text-sm font-medium text-stone-700">
            4 آن لائن تھراپی سیشنز کے لیے
          </p>
          <p className="mt-2 inline-block rounded-full bg-[#5D1F13]/[0.06] px-3 py-1 text-xs font-semibold text-[#5D1F13]">
            فی سیشن $50 کے برابر (معیاری نرخوں سے بچت)
          </p>
        </div>

        {/* Benefits */}
        <ul className="mt-5 space-y-2.5 text-sm text-stone-700">
          {[
            "4 انفرادی 50 منٹ کے آن لائن سیشنز",
            "ذاتی رہنمائی اور مکمل سپورٹ",
            "مختلف ٹائم زونز کے مطابق لچکدار شیڈولنگ",
          ].map((line) => (
            <li key={line} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A8532B]/10">
                <Check className="h-3.5 w-3.5 text-[#A8532B]" aria-hidden="true" />
              </span>
              {line}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={claim}
          className="mt-6 w-full rounded-full bg-[#A8532B] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_-10px_rgba(168,83,43,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8F4423]"
        >
          یہ آفر حاصل کریں اور بک کریں
        </button>
        <button
          type="button"
          onClick={dismiss}
          className="mt-3 w-full text-center text-sm font-medium text-stone-500 underline underline-offset-4 transition-colors hover:text-stone-700"
        >
          جی نہیں، شکریہ — براؤزنگ جاری رکھیں
        </button>
      </div>
    </div>
  );
}
