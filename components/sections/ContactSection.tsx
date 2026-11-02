"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/content";

/**
 * Section 17 — Contact Me: deep rust full-width canvas with an
 * asymmetric 12-col split. Left (5 cols, sticky on desktop): the
 * "CONTACT ME" display heading and the consultation paragraph.
 * Right (7 cols): the consultation form — cream (#F3EDE5) borderless
 * inputs with white focus rings, first/last name pair, phone, email,
 * message textarea, service checkbox stack, a styled native select
 * with chevron for the referral source, and the gold bordered pill
 * "Submit" CTA. Stacks to one column on mobile/tablet.
 */

const labelClass = "block text-sm font-medium text-[#F3EDE5]";
const inputClass =
  "h-12 w-full rounded-none border-none bg-[#F3EDE5] px-4 text-black focus:outline-none focus:ring-1 focus:ring-white";

function Required() {
  return <span className="italic"> (لازمی)</span>;
}

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Hidden trap field: real users never fill it — bots autocomplete it.
    // Silently drop the submission without any request.
    if (honeypot !== "") return;
    if (status === "loading") return;
    const form = event.currentTarget;
    setStatus("loading");
    try {
      // Wire this to a real endpoint (API route, Formspree, or practice email relay).
      const data = Object.fromEntries(new FormData(form).entries());
      await new Promise((resolve) => setTimeout(resolve, 900));
      void data;
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="w-full scroll-mt-24 bg-[#5D1F13] px-6 py-20 md:px-16 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left column — heading & copy (sticky on desktop) */}
        <div className="lg:sticky lg:top-24 lg:col-span-5">
          <h2 className="font-display text-5xl font-normal uppercase tracking-wide text-[#F3EDE5] md:text-7xl">
            {contact.heading}
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#F3EDE5]">
            {contact.paragraph}
          </p>
        </div>

        {/* Right column — consultation form */}
        <div className="lg:col-span-7">
          {status === "success" ? (
            <div
              role="status"
              className="flex min-h-[320px] flex-col items-center justify-center gap-4 border border-[#F3EDE5]/40 px-6 py-12 text-center"
            >
              <p className="font-display text-2xl uppercase tracking-wide text-[#F3EDE5]">
                رابطہ کرنے کا شکریہ۔
              </p>
              <p className="max-w-md text-lg leading-relaxed text-[#F3EDE5]/90">
                آپ کی مشاورت کا وقت طے کرنے کے لیے ہم 24 سے 48 گھنٹوں کے اندر آپ
                سے رابطہ کریں گے۔
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 rounded-full border-2 border-white px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                ایک اور پیغام بھیجیں
              </button>
            </div>
          ) : (
          <form action="#" method="post" onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot — hidden from humans, tempting for bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company_website">ویب سائٹ</label>
              <input
                id="company_website"
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {/* A. Name — first/last pair */}
            <div>
              <span className={`${labelClass} mb-3 block`}>
                {contact.nameLabel}
              </span>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={`${labelClass} mb-2`}>
                    {contact.firstNameLabel}
                    <Required />
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={`${labelClass} mb-2`}>
                    {contact.lastNameLabel}
                    <Required />
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* B. Phone */}
            <div>
              <label htmlFor="phone" className={`${labelClass} mb-2`}>
                {contact.phoneLabel}
                <Required />
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className={inputClass}
              />
            </div>

            {/* C. Email */}
            <div>
              <label htmlFor="email" className={`${labelClass} mb-2`}>
                {contact.emailLabel}
                <Required />
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={inputClass}
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-8 inline-block rounded-full border-2 border-white bg-[#9E8120] px-10 py-3 text-lg font-bold text-white transition-colors hover:bg-[#8B7119] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "پیغام بھیجا جا رہا ہے…" : contact.submitLabel}
            </button>
            {status === "error" ? (
              <p role="alert" className="mt-4 text-sm font-medium text-[#F3EDE5]">
                آپ کا پیغام بھیجنے میں کوئی خرابی پیش آ گئی۔ براہ کرم دوبارہ
                کوشش کریں، یا ہمیں براہِ راست ای میل کریں۔
              </p>
            ) : null}
          </form>
          )}

          {/* Crisis / emergency notice (YMYL) */}
          {/* Non-clinical positioning statement */}
          <p className="mt-8 text-center text-xs leading-relaxed text-[#F3EDE5]/60 md:text-right">
            میری کہانی کے ذریعے پیش کی جانے والی خدمات غیر طبی کوچنگ اور ذاتی
            نشوونما کی خدمات ہیں۔ یہ نفسیاتی علاج، ذہنی صحت کی تشخیص یا طبی
            علاج نہیں ہیں۔
          </p>

          {/* Crisis / emergency notice — kept separate from coaching info */}
          <p className="mt-4 text-center text-xs text-[#F3EDE5]/80 md:text-right">
            براہِ کرم نوٹ کریں: میری کہانی کوئی ایمرجنسی سروس نہیں ہے اور اس
            فارم کو 24/7 نظر میں نہیں رکھا جاتا۔ اگر آپ کسی بحران سے گزر رہے
            ہوں تو براہِ کرم 988 ڈائل کریں یا اپنے قریبی ایمرجنسی وارڈ میں
            جائیں۔
          </p>
        </div>
      </div>
    </section>
  );
}
