import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "سروسز کی شرائط — My Kahani",
  description:
    "وہ شرائط جو آپ کے میری کہانی کی کوچنگ سروسز کے استعمال پر لاگو ہوتی ہیں، جن میں بکنگ، منسوخی، پیمنٹ اور ذمہ داری شامل ہے۔",
  alternates: { canonical: `${site.url}/terms` },
  robots: { index: true, follow: true },
};

const lastUpdated = "September 30, 2026";

export default function TermsPage() {
  return (
    <main id="top" className="bg-[#F5EFE6]">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-10 sm:pt-24">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A8532B]">
          قانونی
        </p>
        <h1 className="mt-4 font-display text-4xl text-[#5D1F13] sm:text-5xl">
          سروسز کی شرائط
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
              1. شرائط سے اتفاق
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              یہ سروسز کی شرائط (”شرائط“) آپ کے
              {" "}
              <Link
                href="/"
                className="font-semibold text-[#A8532B] underline underline-offset-4"
              >
                trueselfme.com
              </Link>
              {" "}کے استعمال اور میری کہانی (”ہم“، ”ہمارا“ یا ”ہمارے“) کی فراہم کردہ کوچنگ سروسز پر لاگو ہوتی ہیں۔ ہماری ویب سائٹ تک رسائی حاصل کرنے، سیشن بک کرنے یا ہماری کوئی بھی سروس استعمال کرنے پر آپ ان شرائط سے پابند ہونے پر اتفاق کرتے ہیں۔ اگر آپ اتفاق نہیں کرتے تو براہِ کرم ہماری سروسز استعمال نہ کریں۔
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              2. سروسز کی نوعیت
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#1A1A1A]/75">
              <p>
                میری کہانی <strong>غیر طبی کوچنگ</strong> اور ذاتی ترقی کی سروسز فراہم کرتی ہے۔ ہماری سروسز میں شامل ہیں:
              </p>
              <ul className="list-disc space-y-1 pr-6">
                <li>ذاتی کوچنگ سیشنز (50 منٹ، آن لائن)</li>
                <li>کیریئر اور پروفیشنل کوچنگ</li>
                <li>تعلقات اور مواصلات کی کوچنگ</li>
                <li>باپ بننے / پالن پوسنا کی کوچنگ</li>
              </ul>
              <div className="rounded-lg border border-[#A8532B]/25 bg-[#A8532B]/[0.06] px-4 py-3 text-[#5D1F13]">
                <p className="font-semibold">ہم کیا نہیں ہیں:</p>
                <ul className="mt-2 list-disc space-y-1 pr-5">
                  <li>ہم لائسنس یافتہ نفسیاتی معالج یا ذہنی صحت کے مشیر نہیں</li>
                  <li>ہم طبی تشخیص یا میڈیکل علاج فراہم نہیں کرتے</li>
                  <li>ہماری سروسز پروفیشنل ذہنی صحت کی دیکھ بھال کا متبادل نہیں</li>
                  <li>ہم ایمرجنسی یا بحران کی سروسز فراہم نہیں کرتے</li>
                </ul>
              </div>
              <p>
                اگر آپ ذہنی صحت کے بحران سے گزر رہے ہیں تو فوراً 988 Suicide &amp; Crisis Lifeline (کال یا پیغام 988) یا ایمرجنسی سروسز (911) سے رابطہ کریں۔
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              3. بکنگ اور شیڈولنگ
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#1A1A1A]/75">
              <p>
                <strong>سلٹ ہولڈ:</strong> جب آپ کوئی وقت منتخب کرتے ہیں تو بکنگ فارم مکمل کرنے تک ہم اس سلٹ پر عارضی 10 منٹ کا ہولڈ لگا دیتے ہیں۔ اگر آپ یہ عمل مقررہ وقت میں مکمل نہیں کرتے تو سلٹ دوبارہ کھلی ہو جاتی ہے۔
              </p>
              <p>
                <strong>تصدیق:</strong> بکنگ صرف اُس وقت تصدیق ہوتی ہے جب آپ کا کارڈ کامیابی سے تصدیق ہو کر فائل پر محفوظ ہو جائے۔ اُس وقت آپ کو کیلنڈر دعوت کے ساتھ تصدیقی ای میل ملے گا۔
              </p>
              <p>
                <strong>شیڈول تبدیل کرنا:</strong> آپ تصدیقی ای میل میں دیے گئے محفوظ لنک سے اپنا سیشن دوبارہ شیڈول کر سکتے ہیں۔ مقررہ وقت سے 24 گھنٹے سے زیادہ پہلے شیڈول تبدیل کروانا مفت ہے۔
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              4. منسوخی کی پالیسی
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#1A1A1A]/75">
              <div className="rounded-lg border border-green-700/20 bg-green-50 px-4 py-3">
                <p className="font-semibold text-green-800">
                  مفت منسوخی: سیشن سے 24 گھنٹے سے زیادہ پہلے
                </p>
                <p className="mt-1 text-green-700">
                  کوئی چارج نہیں۔ آپ کے محفوظ کارڈ سے کوئی بل نہیں بنایا جاتا۔
                </p>
              </div>
              <div className="rounded-lg border border-[#A8532B]/25 bg-[#A8532B]/[0.06] px-4 py-3">
                <p className="font-semibold text-[#5D1F13]">
                  تاخیر سے منسوخی: سیشن سے 24 گھنٹے سے کم پہلے
                </p>
                <p className="mt-1 text-[#5D1F13]/80">
                  تاخیر سے منسوخی کی صورت میں فیس لگ سکتی ہے، جو محفوظ کارڈ سے وصول کی جا سکتی ہے، ہماری اُس پالیسی کے مطابق جو بکنگ کے وقت بتائی جاتی ہے۔
                </p>
              </div>
              <div className="rounded-lg border border-red-700/20 bg-red-50 px-4 py-3">
                <p className="font-semibold text-red-800">
                  نو شو: بغیر اطلاع حاضر نہ ہونا
                </p>
                <p className="mt-1 text-red-700">
                  پوری سیشن فیس محفوظ کارڈ سے وصول کی جائے گی۔
                </p>
              </div>
              <p>
                آپ تصدیقی ای میل میں دیے گئے محفوظ لنک سے کبھی بھی بکنگ منسوخ کر سکتے ہیں۔ ہماری طرف سے منسوخی (بیماری، ایمرجنسی وغیرہ) کی صورت میں ہمیشہ مکمل ریفنڈ یا بغیر کسی خرچ کے دوبارہ شیڈول ہوتا ہے۔
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              5. پیمنٹ کی شرائط
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#1A1A1A]/75">
              <p>
                <strong>محفوظ کارڈ:</strong> بکنگ کے وقت ہم آپ کا پیمنٹ طریقہ Stripe کے ذریعے محفوظ طور پر تصدیق اور محفوظ کرتے ہیں۔ ایک عارضی اتھارائزیشن ہولڈ (فوراً ختم ہو جانے والا) تصدیق کرتا ہے کہ آپ کا کارڈ فعال ہے۔
              </p>
              <p>
                <strong>سیشن کی بلنگ:</strong> سیشن فیس آپ کے محفوظ کارڈ سے سیشن <em>مکمل ہونے کے بعد</em> وصول کی جاتی ہے، بکنگ کے وقت نہیں۔
              </p>
              <p>
                <strong>قیمتیں:</strong> موجودہ قیمتیں ہماری ویب سائٹ پر دکھائی جاتی ہیں اور بکنگ کے وقت تصدیق کی جاتی ہیں۔ بکنگ کے وقت کی قیمت طے ہو جاتی ہے — مستقبل میں قیمت کی تبدیلی کی تصدیق شدہ بکنگز پر کوئی اثر نہیں پڑتا۔
              </p>
              <p>
                <strong>پیمنٹ ناکامی:</strong> اگر سیشن کے بعد کا چارج ناکام ہو جائے تو ہم آپ کو ای میل سے اطلاع دیں گے، جس میں آپ کا پیمنٹ طریقہ اپ ڈیٹ کرنے یا تصدیق مکمل کرنے کے لیے ایک محفوظ لنک ہوگا۔
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              6. کلائنٹ کی ذمہ داریاں
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              کلائنٹ ہونے کے ناطے آپ یہ اتفاق کرتے ہیں کہ:
            </p>
            <ul className="mt-2 list-disc space-y-1 pr-6 text-sm leading-relaxed text-[#1A1A1A]/70">
              <li>بکنگ کی درست معلومات فراہم کریں گے (نام، ای میل، فون)</li>
              <li>سیشنز میں وقت پر حاضر ہوں گے اور مخلصی سے حصہ لیں گے</li>
              <li>پہلے تحریری اجازت کے بغیر سیشنز ریکارڈ نہیں کریں گے</li>
              <li>کیلنڈر دعوتیں یا بکنگ لنکس دوسروں کے ساتھ شیئر نہیں کریں گے</li>
              <li>
                یہ سمجھیں گے کہ کوچنگ ایک مشترکہ عمل ہے — نتائج آپ کی اپنی کوشش اور شرکت پر منحصر ہوتے ہیں
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              7. ذہنی ملکیت
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              اس ویب سائٹ کا تمام مواد — بشمول متن، گرافکس، لوگو، تصاویر اور ڈیزائن — میری کہانی کی ملکیت ہے اور کاپی رائٹ قانون سے محفوظ ہے۔ تحریری اجازت کے بغیر ہمارے مواد کو دوبارہ پیدا کرنا، تقسیم کرنا یا اس سے مشتق کام بنانا منع ہے۔
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              8. ذمہ داری کی حد
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#1A1A1A]/75">
              <p>
                قانون کی اجازت سے زیادہ سے زیادہ حد تک، میری کہانی اور اس کے پریکٹیشنرز ہماری سروسز کے استعمال سے پیدا ہونے والے کسی بھی بالواسطہ، اتفاقی، خصوصی، لاحق یا سزائی نقصان کے لیے ذمہ دار نہیں ہوں گے۔
              </p>
              <p>
                ہماری سروسز سے متعلق کسی دعوے پر ہماری کل ذمہ داری اُس رقم سے زیادہ نہیں ہوگی جو آپ نے اُس سیشن کے لیے ادا کی جس سے وہ دعوا پیدا ہوا۔
              </p>
              <p>
                <strong>
                  آپ تسلیم کرتے ہیں کہ کوچنگ کے نتائج کی ضمانت نہیں ہوتی
                </strong>{" "}
                اور یہ آپ کی اپنی کوشش، حالات اور اس عمل میں شرکت جیسے عوامل پر منحصر ہوتے ہیں۔
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              9. ضمانتوں سے دستبرداری
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              ہماری سروسز ”جیسی ہیں“ فراہم کی جاتی ہیں، بغیر کسی واضح یا ضمنی ضمانت کے۔ ہم یہ ضمانت نہیں دیتے کہ ہماری سروسز آپ کی خاص توقعات پوری کریں گی یا ہماری ویب سائٹ بغیر مداخلت یا خرابی کے چلے گی۔
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              10. مارکیٹنگ کے پیغامات
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              اگر آپ رابطے میں رہنے کے لیے سائن اپ کرتے ہیں تو آپ کبھی کبھار کوچنگ سے متعلق ای میلز وصول کرنے پر اتفاق کرتے ہیں۔ آپ کسی بھی ای میل میں دیے گئے لنک سے کبھی بھی ان سبسکرائب کر سکتے ہیں۔ مارکیٹنگ ای میلز سے ان سبسکرائب کرنا فعال بکنگز کے ٹرانزیکشنل ای میلز (بکنگ کی تصدیقات، پیمنٹ کی اطلاعات، سیشن یاد دہانیاں) کو <strong>روک نہیں</strong> سکتا۔
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              11. لاگو قانون
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              ان شرائط پر امریکہ کی ریاست ٹیکساس کے قوانین لاگو ہوں گے، جھگڑے کے قوانین کے اصولوں کو نظر انداز کرتے ہوئے۔ کسی بھی تنازعے کا فیصلہ ٹیکساس کی ٹریوس کاؤنٹی کی عدالتوں میں ہوگا۔
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              12. ان شرائط میں تبدیلیاں
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              ہم وقتاً فوقتاً ان شرائط کو اپ ڈیٹ کر سکتے ہیں۔ اس صفحے کے اوپر ”آخری تازہ کاری“ کی تاریخ موجودہ ورژن دکھاتی ہے۔ تبدیلیوں کے بعد ہماری سروسز کا جاری رکھنا نظرثانی شدہ شرائط کی قبولیت سمجھا جائے گا۔
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#5D1F13]">
              13. رابطہ
            </h2>
            <p className="mt-3 leading-relaxed text-[#1A1A1A]/75">
              ان شرائط کے بارے میں سوالات؟ ہم تک پہنچیں:
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
            </div>
          </section>
        </div>

        {/* Cross-link */}
        <p className="mt-8 text-center text-sm text-[#1A1A1A]/55">
          {" "}ہماری
          <Link
            href="/privacy"
            className="font-semibold text-[#A8532B] underline underline-offset-4"
          >
            پرائیویسی پالیسی
          </Link>
          {" "}بھی دیکھیں
        </p>
      </section>
    </main>
  );
}
