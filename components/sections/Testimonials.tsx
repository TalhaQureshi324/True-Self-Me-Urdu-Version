/**
 * Client Testimonials: editorial cards with decorative serif quotation
 * marks, warm parchment section, fitted black role badges and a
 * "Verified Client" footer per card.
 */
const testimonials = [
  {
    role: "ڈاکٹر",
    author: "معالج، چالیس کی دہائی",
    sub: "آن لائن کلائنٹ • ٹیکساس",
    paragraphs: [
      "“دن بھر میں زیادہ تر اُس شخص کا کردار نبھاتا ہوں جس کی طرف لوگ رجوع کرتے ہیں۔ مریضوں کو تسلی چاہیے ہوتی ہے، ساتھیوں کو جوابات چاہیے ہوتے ہیں، اور خاندان چاہتا ہے کہ آپ حاضر رہیں۔ کچھ عرصے بعد مجھے احساس ہوا کہ باہر سے پُرسکون دکھنے میں تو میں بخوبی مہارت حاصل کر چکا تھا، حالانکہ اندر ہی اندر میں مکمل طور پر تھکا ہوا تھا۔",
      "فہد کے ساتھ کام کرنے میں مجھے جو بات سب سے زیادہ حیران کر گئی وہ یہ تھی کہ کتنی جلد مجھے یہ محسوس ہونا بند ہو گیا کہ ہر بار میرے پاس صحیح الفاظ ہونے چاہئیں۔ کچھ گفتگوؤں نے مجھے اُن باتوں کا احساس دیا جنہیں میں برسوں سے اپنے اندر اٹھائے چلا آ رہا تھا بغیر اُنہیں کبھی کوئی نام دیے۔",
      "میری زندگی آج بھی اتنی ہی مانگتی ہے۔ اس میں کوئی فرق نہیں آیا۔ مگر اب میں خود کو ایک مختلف انداز میں دیکھتا ہوں، اور اب میں ہر چیز کو خاموشی سے اٹھا لے جانے کی کوشش نہیں کرتا۔”",
    ],
  },
  {
    role: "کاروباری شخصیت",
    author: "بانی و کاروباری شخصیت، تیس کی دہائی",
    sub: "آن لائن کلائنٹ • ٹیکساس",
    paragraphs: [
      "“جب آپ کسی بھی چیز سے شروعات کر کے ایک کاروبار کھڑا کرتے ہیں تو وہ آپ کی ذات کا معاملہ بن جاتا ہے۔ ہر کامیابی ایسا محسوس دلاتی ہے جیسے کوئی ثبوت ہو کہ آپ کچھ صحیح کر رہے ہیں، اور ہر رکاوٹ کسی نہ کسی طرح ایسی لگتی ہے جیسے اس کا فیصلہ آپ ہی کے خلاف ہو۔ مجھے اندازہ نہ تھا کہ میری شناخت کتنی حد تک اس بات سے جڑ چکی تھی کہ کاروبار کامیاب ہو۔",
      "میں فہد کے پاس یہ سوچ کر آیا تھا کہ مجھے ذہنی دباؤ سے نمٹنے کی مدد چاہیے۔ مگر ہماری باتیں جہاں تک پہنچیں، وہ کام سے کہیں گہری تھیں۔",
      "اُن گفتگوؤں نے میری قیادت کرنے کا انداز بدلا ہے، مگر اس سے بڑھ کر اُنہوں نے یہ بھی بدلا ہے کہ جب میں کام پر نہیں ہوتا تو کیسا زندگی گزارتا ہوں۔”",
    ],
  },
  {
    role: "بزنس ایگزیکٹو",
    author: "سینئر بزنس ایگزیکٹو، چالیس کی دہائی",
    sub: "آن لائن کلائنٹ • ٹیکساس",
    paragraphs: [
      "“باہر سے سب کچھ اچھا چل رہا تھا۔ میرے پاس ایک سینئر عہدہ تھا، اچھی آمدنی تھی، اور ایک ایسا خاندان تھا جس سے محبت تھی۔ مگر میں یہ بیان نہیں کر پاتا تھا کہ آخر مجھے ان سب چیزوں سے اتنے الگ تھلگ کیوں محسوس ہوتا تھا۔",
      "فہد نے کبھی یہ محسوس نہیں ہونے دیا کہ جدوجہد کرنے کے باوجود میں ناشکرا ہوں۔ وہ سنتا تھا، مگر ایسے سوالات بھی پوچھتا تھا جنہیں سیشن ختم ہونے کے بعد بھی میں اپنے ساتھ لیے پھرتا تھا۔",
      "میں اب بھی بڑی منزلوں کا خواہاں ہوں۔ اپنے کیریئر سے اب بھی گہرا لگاؤ ہے۔ بس اب یہ محسوس نہیں ہوتا کہ مجھے اپنی ذات اس میں گم کر دینی ہے۔”",
    ],
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F4ECE1] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-[#A8532B]">
            کلائنٹ کیا کہتے ہیں
          </span>
          <h2 className="font-serif text-3xl tracking-tight text-[#1A1A1A] md:text-5xl">
            میری کہانی کو چننے والوں کے تاثرات
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.role}
              className="relative flex flex-col justify-between overflow-hidden border border-black/10 bg-[#FAF6F0] p-8 shadow-sm md:p-10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 left-4 select-none font-serif text-8xl text-black/5"
              >
                “
              </div>

              <div>
                {/* Role badge + author */}
                <div className="mb-6">
                  <span className="inline-block bg-black px-2 py-0.5 font-serif text-xs font-bold uppercase tracking-wider text-white md:text-sm">
                    {item.role}
                  </span>
                  <p className="mt-1 text-xs font-medium tracking-wide text-[#1A1A1A]/70 md:text-sm">
                    {item.author}
                  </p>
                </div>

                {/* Quote Paragraphs */}
                <div className="space-y-3 text-sm leading-relaxed text-[#2B2B2B] md:text-[15px]">
                  {item.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 flex items-center justify-between gap-2 border-t border-black/10 pt-4 text-xs font-semibold uppercase tracking-wider text-[#A8532B]">
                <span>{item.sub}</span>
                <span>تصدیق شدہ کلائنٹ</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
