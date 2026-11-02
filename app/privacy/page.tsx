import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "پرائیویسی پالیسی — My Kahani",
  description:
    "میری کہانی آپ کی معلومات کیسے جمع کرتی ہے، انہیں کیسے استعمال کرتی ہے اور کیسے محفوظ رکھتی ہے، جب آپ ہماری کوچنگ سروسز اور ویب سائٹ استعمال کرتے ہیں۔",
  alternates: { canonical: `${site.url}/privacy` },
  robots: { index: true, follow: true },
};

const lastUpdated = "September 30, 2026";

export default function PrivacyPage() {
  return (
    <main id="top" className="bg-[#F5EFE6]">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-10 sm:pt-24">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A8532B]">
          قانونی
        </p>
        <h1 className="mt-4 font-display text-4xl text-[#5D1F13] sm:text-5xl">
          پرائیویسی پالیسی
        </h1>
        <p className="mt-4 text-sm text-[#1A1A1A]/55">
          آخری تازہ کاری: {lastUpdated}
        </p>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="space-y-10 rounded-2xl border border-black/[0.08] bg-white p-8 sm:p-12">
          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              1. جائزہ
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              میری کہانی (”ہم“، ”ہمارا“ یا ”ہمارے“)
              {" "}
              <Link
                href="/"
                className="font-semibold text-[#A8532B] underline underline-offset-4"
              >
                trueselfme.com
              </Link>
              {" "}چلاتی ہے، جو غیر طبی کوچنگ اور ذاتی ترقی کی سروسز فراہم کرتی ہے۔ یہ پرائیویسی پالیسی بیان کرتی ہے کہ ہم کیا معلومات جمع کرتے ہیں، انہیں کیسے استعمال کرتے ہیں، اور آپ کے پاس کیا اختیارات ہیں۔ ہماری ویب سائٹ استعمال کرنے یا سیشن بک کرنے پر آپ یہاں بیان کردہ طریقوں سے اتفاق کرتے ہیں۔
            </p>
            <p className="mt-3 rounded-lg border border-[#A8532B]/25 bg-[#A8532B]/[0.06] px-4 py-3 text-sm leading-relaxed text-[#5D1F13]">
              <strong>اہم:</strong> ہماری سروسز غیر طبی کوچنگ ہیں — نفسیاتی علاج، تشخیص یا طبی معالجہ نہیں۔ ہم اس ویب سائٹ کے ذریعے کوئی طبی یا صحت سے متعلق معلومات جمع یا محفوظ نہیں کرتے۔
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              2. ہم کون سی معلومات جمع کرتے ہیں
            </h2>
            <div className="mt-4 space-y-4 text-[1A1A1A]/75">
              <div>
                <h3 className="font-semibold text-[#1A1A1A]">
                  معلومات جو آپ براہِ راست فراہم کرتے ہیں
                </h3>
                <ul className="mt-2 list-disc space-y-1 pr-6 text-sm leading-relaxed text-[#1A1A1A]/70">
                  <li>
                    <strong>بکنگ کی تفصیلات:</strong> پہلا نام، آخری نام، ای میل ایڈریس اور فون نمبر (اختیاری) جب آپ سیشن بک کرتے ہیں
                  </li>
                  <li>
                    <strong>رابطے کی معلومات:</strong> پہلا نام اور ای میل ایڈریس (اور اختیاری فون نمبر) جب آپ رابطے میں رہنے کے لیے سائن اپ کرتے ہیں
                  </li>
                  <li>
                    <strong>پیمنٹ کارڈ:</strong> مکمل طور پر Stripe کے ذریعے پروسیس ہوتا ہے — ہم آپ کا مکمل کارڈ نمبر، CVC یا میعاد ختم ہونے کی تاریخ کبھی نہیں دیکھتے یا محفوظ نہیں کرتے۔ ہم حوالے کے لیے صرف کارڈ کی کمپنی اور آخری ہندسے رکھتے ہیں۔
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A]">
                  خود بخود جمع کی گئی معلومات
                </h3>
                <ul className="mt-2 list-disc space-y-1 pr-6 text-sm leading-relaxed text-[#1A1A1A]/70">
                  <li>
                    <strong>مارکیٹنگ کا حساب:</strong> اگر آپ کسی اشتہار سے آئے ہیں تو ہم کلک شناخت کنندہ (gclid، gbraid یا wbraid) اور مہم کے پیرامیٹرز (UTM ٹیگز) آپ کے براؤزر میں فرسٹ پارٹی کوکیز میں محفوظ کرتے ہیں تاکہ آپ کی بکنگ کا درست حساب رہے
                  </li>
                  <li>
                    <strong>استعمال کے تجزیات:</strong> گمنام صفحہ دیکھنے، اسکرول کی گہرائی اور سیکشن کی سرگرمی جب Google Analytics فعال ہو
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              3. ہم آپ کی معلومات کیسے استعمال کرتے ہیں
            </h2>
            <ul className="mt-3 list-disc space-y-2 pr-6 text-sm leading-relaxed text-[#1A1A1A]/70">
              <li>آپ کی بکنگ کی تصدیق اور انتظام کے لیے (تصدیقی اور یاد دہانی ای میلز، کیلنڈر دعوتیں)</li>
              <li>پیمنٹ سے متعلق اطلاعات بھیجنے کے لیے (رسید، پیمنٹ ناکامی کی اطلاع، ریفنڈ کی تصدیق)</li>
              <li>اگر آپ نے اجازت دی ہو تو کبھی کبھار کوچنگ ای میلز بھیجنے کے لیے (آپ کبھی بھی ان سبسکرائب کر سکتے ہیں)</li>
              <li>یہ جاننے کے لیے کہ کن مارکیٹنگ چینلز سے بکنگز آتی ہیں تاکہ ہم اپنی رسائی بہتر بنا سکیں</li>
              <li>قانونی ذمہ داریاں پوری کرنے اور تنازعات حل کرنے کے لیے</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              4. کوکیز
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              ہم اس سائٹ پر تھوڑی سی فرسٹ پارٹی کوکیز استعمال کرتے ہیں:
            </p>
            <ul className="mt-3 list-disc space-y-2 pr-6 text-sm leading-relaxed text-[#1A1A1A]/70">
              <li>
                <strong>tsm_attribution</strong> — یاد رکھتی ہے کہ کس اشتہار یا مہم نے آپ کو یہاں پہنچایا (30 دن کی میعاد، صرف فرسٹ پارٹی)
              </li>
              <li>
                <strong>tsm_attribution_last</strong> — حالیہ مہم پر پہنچنے کی یاد رکھتی ہے (30 دن کی میعاد، صرف فرسٹ پارٹی)
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/70">
              یہ کوکیز آپ کو دوسری ویب سائٹس پر ٹریک نہیں کرتیں۔ آپ اپنی براؤزر سیٹنگز کے ذریعے کبھی بھی انہیں صاف کر سکتے ہیں۔
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              5. تیسرے فریق کی سروسز
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              ہم درج ذیل فراہم کنندگان پر انحصار کرتے ہیں، جن پر ان کی اپنی پرائیویسی پالیسیاں لاگو ہوتی ہیں:
            </p>
            <div className="mt-3 space-y-3">
              {[
                {
                  name: "Stripe",
                  what: "پیمنٹ پروسیسنگ، کارڈ محفوظ کرنا اور بلنگ",
                  link: "https://stripe.com/privacy",
                },
                {
                  name: "Supabase",
                  what: "بکنگ اور رابطہ ریکارڈز کے لیے ڈیٹابیس ہوسٹنگ",
                  link: "https://supabase.com/privacy",
                },
                {
                  name: "Resend",
                  what: "بکنگ کی تصدیقات اور یاد دہانیوں کے لیے ای میل ڈیلیوری",
                  link: "https://resend.com/privacy",
                },
                {
                  name: "Google Analytics",
                  what: "گمنام استعمال کے تجزیات (جب فعال ہوں)",
                  link: "https://policies.google.com/privacy",
                },
                {
                  name: "Microsoft Clarity",
                  what: "گمنام سیشن ریکارڈنگز اور ہیٹ میپس",
                  link: "https://privacy.microsoft.com/privacystatement",
                },
                {
                  name: "Google Ads",
                  what: "اشتہارات کے کنورژن کا حساب",
                  link: "https://policies.google.com/privacy",
                },
              ].map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col gap-1 rounded-lg border border-black/[0.06] bg-[#F3EDE5] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <span className="font-semibold text-[#5D1F13]">
                      {s.name}
                    </span>
                    <span className="mr-2 text-sm text-[#1A1A1A]/65">
                      {s.what}
                    </span>
                  </div>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#A8532B] underline underline-offset-4"
                  >
                    پرائیویسی پالیسی ←
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              6. جو ہم کبھی نہیں کرتے
            </h2>
            <ul className="mt-3 list-disc space-y-2 pr-6 text-sm leading-relaxed text-[#1A1A1A]/70">
              <li>ہم آپ کی ذاتی معلومات کبھی تیسرے فریق کو نہیں بیچتے یا کرائے پر نہیں دیتے</li>
              <li>ہم آپ کا ای میل ایڈریس اشتہار دہندوں یا ڈیٹا بروکرز کے ساتھ کبھی شیئر نہیں کرتے</li>
              <li>ہم آپ کا مکمل کارڈ نمبر، CVC یا بینک کی تفصیلات کبھی اپنے سرورز پر محفوظ نہیں کرتے</li>
              <li>ہم اس ویب سائٹ کے ذریعے طبی، میڈیکل یا صحت کی تشخیص سے متعلق کوائف کبھی جمع نہیں کرتے</li>
              <li>ہم کسی ایسے شخص کو مارکیٹنگ ای میلز کبھی نہیں بھیجتے جس نے اجازت نہ دی ہو یا ان سبسکرائب کر دیا ہو</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              7. ڈیٹا کتنے عرصے تک رہتا ہے
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              بکنگ کے ریکارڈ (جس میں آپ کا نام، ای میل، سیشن کی تاریخ اور قیمت شامل ہے) اتنی مدت تک رکھے جاتے ہیں جتنی سروس فراہم کرنے اور ٹیکس/اکاؤنٹنگ کی ذمہ داریاں پوری کرنے کے لیے درکار ہو۔ رابطے کے ریکارڈ اُس وقت تک رکھے جاتے ہیں جب تک آپ ان سبسکرائب نہ کریں یا ڈیلیٹ کی درخواست نہ دیں۔ اٹری بیوشن کوکیز 30 دن بعد خود بخود ختم ہو جاتی ہیں۔
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              8. آپ کے حقوق
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              آپ کے علاقے کے قانون کے مطابق آپ کو یہ حقوق حاصل ہو سکتے ہیں:
            </p>
            <ul className="mt-2 list-disc space-y-1 pr-6 text-sm leading-relaxed text-[#1A1A1A]/70">
              <li>ہمارے پاس موجود اپنی ذاتی ڈیٹا تک رسائی حاصل کرنا</li>
              <li>غلط یا نامکمل ڈیٹا درست کروانا</li>
              <li>اپنی ذاتی ڈیٹا ڈیلیٹ کروانا (”بھلے جانے کا حق“)</li>
              <li>مارکیٹنگ کے پیغامات کی اجازت کبھی بھی واپس لینا</li>
              <li>اپنی ڈیٹا کی ایک نقل پورٹ ایبل فارمیٹ میں مانگنا</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/70">
              ان میں سے کوئی حق استعمال کرنے کے لیے ہمیں{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-[#A8532B] underline underline-offset-4"
              >
                {site.email}
              </a>
              {" "}پر ای میل کریں۔ ہم 30 دن کے اندر جواب دیتے ہیں۔
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              9. سیکیورٹی
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              ہم آپ کی معلومات کو صنعتی معیار کے طریقوں سے محفوظ رکھتے ہیں: تمام ٹریفک HTTPS کے ذریعے انکرپٹ ہے، کارڈ کا ڈیٹا Stripe ٹوکنائز کرتا ہے (کچا کارڈ نمبر کبھی ہمارے پاس نہیں آتا)، ڈیٹابیس تک رسائی صرف سرور سائیڈ سروس رول کیڈینشلز تک محدود ہے، اور webhook پے لوڈز کرپٹوگرافک طور پر تصدیق کیے جاتے ہیں۔ کوئی نظام مکمل طور پر محفوظ نہیں ہوتا، لیکن ہم آپ کے ہمارے ساتھ شیئر کردہ معلومات کی حفاظت کے معقول اقدامات کرتے ہیں۔
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              10. بچوں کی پرائیویسی
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              ہماری سروسز بالغ افراد کے لیے ہیں۔ ہم 18 سال سے کم عمر کسی سے جان بوجھ کر ذاتی معلومات نہیں جمع کرتے۔ اگر آپ کو لگے کہ کسی بچے نے ہمیں معلومات دی ہیں تو ہمیں بتائیں، ہم اسے ڈیلیٹ کر دیں گے۔
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              11. اس پالیسی میں تبدیلیاں
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              ہم وقتاً فوقتاً اس پرائیویسی پالیسی کو اپ ڈیٹ کر سکتے ہیں۔ اس صفحے کے اوپر ”آخری تازہ کاری“ کی تاریخ موجودہ ورژن دکھاتی ہے۔ اہم تبدیلیوں کی اطلاع ای میل کے ذریعے موجودہ کلائنٹس کو دی جائے گی۔
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              12. رابطہ
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              اس پالیسی کے بارے میں سوالات؟ ہم تک پہنچیں:
            </p>
            <div className="mt-4 space-y-2 text-sm text-[#1A1A1A]/75">
              <p>
                <span className="font-semibold text-[#5D1F13]">ای میل: </span>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[#A8532B] underline underline-offset-4"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#5D1F13]">فون: </span>
                <a
                  href={site.phoneHref}
                  className="text-[#A8532B] underline underline-offset-4"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#5D1F13]">
                  مقام:{" "}
                </span>
                {site.city} — پورے ملک میں کلائنٹس کی خدمات
              </p>
            </div>
          </section>
        </div>

        {/* Cross-link */}
        <p className="mt-8 text-center text-sm text-[#1A1A1A]/55">
          {" "}ہماری
          <Link
            href="/terms"
            className="font-semibold text-[#A8532B] underline underline-offset-4"
          >
            سروسز کی شرائط
          </Link>
          {" "}بھی دیکھیں
        </p>
      </section>
    </main>
  );
}
