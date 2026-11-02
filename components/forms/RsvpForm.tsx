"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { events } from "@/lib/content";

const rsvpSchema = z.object({
  name: z.string().min(2, "براہِ کرم اپنا نام بتائیں۔"),
  email: z.string().email("براہِ کرم درست ای میل ایڈریس درج کریں۔"),
  event: z.string().min(1, "وہ محفل چنیں جس میں شامل ہونا چاہتے ہیں۔"),
  attendees: z.string().min(1, "کتنے لوگ آ رہے ہیں؟"),
  note: z.string().max(300, "براہِ کرم اسے 300 حروف کے اندر رکھیں۔").optional(),
});

type RsvpValues = z.infer<typeof rsvpSchema>;

const fieldClass =
  "w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 transition-colors focus:border-terracotta focus:outline-none";

const errorClass = "mt-1.5 text-xs font-medium text-terracotta-deep";

export default function RsvpForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RsvpValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: { name: "", email: "", event: "", attendees: "1", note: "" },
  });

  const onSubmit = async (_values: RsvpValues) => {
    // Wire this to an API route or your events mailing list relay.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitted(true);
    reset();
  };

  return (
    <div className="rounded-[2rem] border border-ink/10 bg-cream-dark/50 p-7 sm:p-10">
      {submitted ? (
        <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
          <CheckCircle2 className="h-12 w-12 text-olive" aria-hidden="true" />
          <h3 className="mt-5 font-display text-3xl font-semibold">
            آپ لسٹ میں شامل ہو گئے
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
            اپنا انباکس دیکھتے رہیں — تصدیق کے ساتھ ملنے کی جگہ اور کیا ساتھ لانا ہے، سب تفصیلات آ جائیں گی۔ پھر ملیں گے۔
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-7 rounded-full border-2 border-ink/20 px-6 py-3 text-sm font-bold transition-colors hover:border-terracotta hover:text-terracotta"
          >
            دوسری محفل کے لیے شرکت کی تصدیق کریں
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="rsvp-name" className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
                نام *
              </label>
              <input id="rsvp-name" type="text" autoComplete="name" className={fieldClass} placeholder="آپ کا نام" {...register("name")} />
              {errors.name ? <p className={errorClass}>{errors.name.message}</p> : null}
            </div>
            <div>
              <label htmlFor="rsvp-email" className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
                ای میل *
              </label>
              <input id="rsvp-email" type="email" autoComplete="email" className={fieldClass} placeholder="you@example.com" {...register("email")} />
              {errors.email ? <p className={errorClass}>{errors.email.message}</p> : null}
            </div>
            <div>
              <label htmlFor="rsvp-event" className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
                محفل *
              </label>
              <select id="rsvp-event" className={fieldClass} {...register("event")}>
                <option value="">محفل منتخب کریں…</option>
                {events.list.map((event) => (
                  <option key={event.name} value={event.name}>
                    {event.name}
                  </option>
                ))}
              </select>
              {errors.event ? <p className={errorClass}>{errors.event.message}</p> : null}
            </div>
            <div>
              <label htmlFor="rsvp-attendees" className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
                شرکاء *
              </label>
              <select id="rsvp-attendees" className={fieldClass} {...register("attendees")}>
                <option value="1">صرف میں</option>
                <option value="2">میں + 1</option>
                <option value="3">میں + 2</option>
                <option value="4+">میں + 3 یا زیادہ</option>
              </select>
              {errors.attendees ? <p className={errorClass}>{errors.attendees.message}</p> : null}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="rsvp-note" className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
                کوئی بات جو ہمیں بتانی چاہیے؟ <span className="font-medium normal-case">(اختیاری)</span>
              </label>
              <textarea
                id="rsvp-note"
                rows={3}
                className={`${fieldClass} resize-y`}
                placeholder="چھوٹا بچہ ساتھ ہے؟ پہلی بار آ رہے ہیں؟ جھجک محسوس ہو رہی ہے؟ سب ٹھیک ہے — ہمیں بتائیں۔"
                {...register("note")}
              />
              {errors.note ? <p className={errorClass}>{errors.note.message}</p> : null}
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-4 text-sm font-bold tracking-wide text-cream shadow-[0_6px_20px_-8px_rgba(152,67,31,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-terracotta-deep disabled:translate-y-0 disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? "بھیجا جا رہا ہے…" : "مجھے شامل کریں"}
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      )}
    </div>
  );
}
