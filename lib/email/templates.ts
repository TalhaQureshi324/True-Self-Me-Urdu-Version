import type { OutgoingEmail } from "./provider";

/**
 * Email templates for the booking lifecycle. Safe fields only — never
 * card numbers, payment provider ids, gclid or clinical information.
 */

export type BookingEmailData = {
  firstName: string;
  bookingReference: string;
  slotStartISO: string; // UTC
  clientTimezone: string;
  durationMinutes: number;
  manageUrl: string;
  icsUrl: string;
};

function longDate(iso: string, tz: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

function localTime(iso: string, tz: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(iso));
}

export function bookingConfirmationEmail(
  d: BookingEmailData,
): OutgoingEmail {
  const date = longDate(d.slotStartISO, d.clientTimezone);
  const time = `${localTime(d.slotStartISO, d.clientTimezone)} (${d.clientTimezone})`;

  const text = `سلام ${d.firstName}،

آپ کی کوچنگ مشاورت کی تصدیق ہو چکی ہے۔

  بکنگ نمبر: ${d.bookingReference}
  تاریخ: ${date}
  وقت: ${time}
  دورانیہ: ${d.durationMinutes} منٹ
  طریقہ: آن لائن ویڈیو مشاورت

اپنے کیلنڈر میں شامل کریں: ${d.icsUrl}
انتظام کریں یا دوبارہ شیڈول کریں: ${d.manageUrl}

منسوخی کی پالیسی: سیشن سے 24 گھنٹے پہلے تک منسوخی مفت ہے۔ اس کے بعد کی منسوخی پر تاخیری منسوخی فیس لگ سکتی ہے۔

— میری کہانی، کوچنگ اور رہنمائی`;

  const html = `<p>سلام ${d.firstName}،</p>
<p>آپ کی کوچنگ مشاورت کی تصدیق <strong>ہو چکی ہے</strong>۔</p>
<table cellpadding="6" style="font-size:14px">
  <tr><td>بکنگ نمبر</td><td><strong>${d.bookingReference}</strong></td></tr>
  <tr><td>تاریخ</td><td>${date}</td></tr>
  <tr><td>وقت</td><td>${time}</td></tr>
  <tr><td>دورانیہ</td><td>${d.durationMinutes} منٹ</td></tr>
  <tr><td>طریقہ</td><td>آن لائن ویڈیو مشاورت</td></tr>
</table>
<p><a href="${d.icsUrl}">کیلنڈر میں شامل کریں (.ics)</a> · <a href="${d.manageUrl}">بکنگ کا انتظام</a></p>
<p style="color:#666;font-size:12px">سیشن سے 24 گھنٹے پہلے تک منسوخی مفت ہے۔</p>`;

  return {
    to: "",
    subject: `مشاورت کی تصدیق ہو گئی — ${date}، ${time}`,
    html,
    text,
  };
}

export function reminderEmail(
  d: BookingEmailData & { hoursUntil: number },
): OutgoingEmail {
  const date = longDate(d.slotStartISO, d.clientTimezone);
  const time = `${localTime(d.slotStartISO, d.clientTimezone)} (${d.clientTimezone})`;
  const text = `سلام ${d.firstName}،

آپ کا کوچنگ سیشن ${d.hoursUntil} گھنٹوں میں ہے۔

  بکنگ نمبر: ${d.bookingReference}
  تاریخ: ${date}
  وقت: ${time}

انتظام کریں یا دوبارہ شیڈول کریں: ${d.manageUrl}`;
  const html = `<p>سلام ${d.firstName}،</p><p>ایک دوستانہ یاد دہانی — آپ کا کوچنگ سیشن <strong>${d.hoursUntil} گھنٹوں</strong> میں ہے۔</p><p>${date} · ${time}</p><p><a href="${d.manageUrl}">بکنگ کا انتظام</a></p>`;
  return { to: "", subject: `یاد دہانی — کوچنگ سیشن ${d.hoursUntil} گھنٹوں میں`, html, text };
}

export function rescheduleEmail(d: BookingEmailData): OutgoingEmail {
  const date = longDate(d.slotStartISO, d.clientTimezone);
  const time = `${localTime(d.slotStartISO, d.clientTimezone)} (${d.clientTimezone})`;
  const text = `سلام ${d.firstName}،

آپ کا کوچنگ سیشن دوبارہ شیڈول کر دیا گیا ہے۔

  نئی تاریخ: ${date}
  نیا وقت: ${time}
  بکنگ نمبر: ${d.bookingReference}

اپنے کیلنڈر میں شامل کریں: ${d.icsUrl}`;
  const html = `<p>سلام ${d.firstName}،</p><p>آپ کا کوچنگ سیشن <strong>دوبارہ شیڈول</strong> کر دیا گیا ہے۔</p><p><strong>${date}</strong> · ${time}</p><p><a href="${d.icsUrl}">کیلنڈر میں شامل کریں (.ics)</a></p>`;
  return { to: "", subject: "آپ کا سیشن دوبارہ شیڈول کر دیا گیا ہے", html, text };
}

export function cancellationEmail(d: {
  firstName: string;
  bookingReference: string;
  slotStartISO: string;
  clientTimezone: string;
  feeEligible: boolean;
}): OutgoingEmail {
  const date = longDate(d.slotStartISO, d.clientTimezone);
  const fee = d.feeEligible
    ? "چونکہ منسوخی 24 گھنٹے کی حد کے اندر ہوئی تھی، اس پر تاخیری منسوخی فیس لگ سکتی ہے۔"
    : "کوئی منسوخی فیس لاگو نہیں ہوتی۔";
  const text = `سلام ${d.firstName}،

آپ کی بکنگ ${d.bookingReference} (${date} کے لیے) منسوخ کر دی گئی ہے۔ ${fee}`;
  const html = `<p>سلام ${d.firstName}،</p><p>آپ کی بکنگ <strong>${d.bookingReference}</strong> (${date}) منسوخ کر دی گئی ہے۔ ${fee}</p><p>ہم کسی اور موقع پر آپ کے ساتھ کام کرنے کی امید رکھتے ہیں۔</p>`;
  return {
    to: "",
    subject: "بکنگ منسوخ کر دی گئی — میری کہانی",
    html,
    text,
  };
}

/** Fills the recipient on a prebuilt template. */
export function addressed(email: OutgoingEmail, to: string): OutgoingEmail {
  return { ...email, to };
}

/* ════════════════════════════════════════════════════════════════════
   Phase 8 — lead nurture (MARKETING) + transactional payment mail.

   Nurture copy rules: non-clinical coaching voice, a booking CTA, no
   diagnostic claims, no health promises. Marketing unsubscribe never
   affects transactional booking mail (separate job types + gating).
   ════════════════════════════════════════════════════════════════════ */

export type LeadEmailData = {
  firstName: string;
  bookUrl: string;
  unsubscribeUrl: string;
};

function nurtureFooter(unsubscribeUrl: string): string {
  return `<p style="color:#8a8178;font-size:12px">آپ کو یہ ای میل اس لیے ملا کہ آپ نے رابطے میں رہنے کی درخواست کی تھی۔ کبھی بھی <a href="${unsubscribeUrl}" style="color:#8a8178">ان سبسکرائب</a> کریں — بکنگ کی تصدیقات اور یاد دہانیاں الگ ہیں اور ہمیشہ جاری رہیں گی۔</p>`;
}

export function leadWelcomeEmail(d: LeadEmailData): OutgoingEmail {
  const text = `سلام ${d.firstName}،

میری کہانی تک رجوع کرنے کا شکریہ۔ جو بھی وجہ آپ کو یہاں لائی ہو، پہلا قدم اٹھانے کی کوشش خود ایک بڑی بات ہے — اکثر لوگ اس سے کہیں زیادہ دیر انتظار کرتے ہیں۔

کوئی دباؤ نہیں، کوئی ہوم ورک نہیں۔ جب آپ کو ٹھیک لگے، آپ 50 منٹ کی آرام دہ تعارفی گفتگو کے لیے وقت منتخب کر سکتے ہیں:

${d.bookUrl}

ان سبسکرائب: ${d.unsubscribeUrl}

جلد ملیں گے،
فہد — میری کہانی، کوچنگ اور رہنمائی`;
  const html = `<p>سلام ${d.firstName}،</p>
<p>میری کہانی تک رجوع کرنے کا شکریہ۔ جو بھی وجہ آپ کو یہاں لائی ہو، پہلا قدم اٹھانے کی کوشش خود ایک بڑی بات ہے — اکثر لوگ اس سے کہیں زیادہ دیر انتظار کرتے ہیں۔</p>
<p>کوئی دباؤ نہیں، کوئی ہوم ورک نہیں۔ جب آپ کو ٹھیک لگے، 50 منٹ کی آرام دہ تعارفی گفتگو کے لیے وقت منتخب کر لیں۔</p>
<p><a href="${d.bookUrl}" style="display:inline-block;background:#5D1F13;color:#F5EFE6;padding:12px 24px;border-radius:999px;text-decoration:none;font-weight:bold">اپنی پسند کا وقت چنیں</a></p>
${nurtureFooter(d.unsubscribeUrl)}`;
  return {
    to: "",
    subject: "آپ کے آنے پر خوشی ہوئی — جب آپ تیار ہوں",
    html,
    text,
  };
}

export function leadNurtureEmail2(d: LeadEmailData): OutgoingEmail {
  const text = `سلام ${d.firstName}،

میری کہانی کی طرف سے ایک چھوٹا سا خیال: وضاحت کسی شیڈول کے مطابق نہیں آتی۔ جو لوگ پہلی گفتگو بک کرتے ہیں، وہ اکثر کہتے ہیں کہ سب سے مشکل کام صرف یہ فیصلہ تھا کہ وہ اپنی مراد پر غور کرنا شروع کر دیں۔

اگر یہ بات دل کو چھو جائے تو اگلا قدم چھوٹا ہے — 50 منٹ کی گفتگو کہ آپ کہاں کھڑے ہیں اور کس طرف بڑھنا چاہتے ہیں:

${d.bookUrl}

ان سبسکرائب: ${d.unsubscribeUrl}

جلد ملیں گے،
فہد — میری کہانی، کوچنگ اور رہنمائی`;
  const html = `<p>سلام ${d.firstName}،</p>
<p>ایک چھوٹا سا خیال: وضاحت کسی شیڈول کے مطابق نہیں آتی۔ جو لوگ پہلی گفتگو بک کرتے ہیں، وہ اکثر کہتے ہیں کہ سب سے مشکل کام صرف یہ فیصلہ تھا کہ وہ اپنی مراد پر غور کرنا شروع کر دیں۔</p>
<p>اگر یہ بات دل کو چھو جائے تو اگلا قدم چھوٹا ہے — 50 منٹ کی گفتگو کہ آپ کہاں کھڑے ہیں اور کس طرف بڑھنا چاہتے ہیں۔</p>
<p><a href="${d.bookUrl}" style="display:inline-block;background:#5D1F13;color:#F5EFE6;padding:12px 24px;border-radius:999px;text-decoration:none;font-weight:bold">اپنی تعارفی گفتگو بک کریں</a></p>
${nurtureFooter(d.unsubscribeUrl)}`;
  return {
    to: "",
    subject: "ایک چھوٹا اگلا قدم، جب آپ تیار ہوں",
    html,
    text,
  };
}

export function leadNurtureEmail3(d: LeadEmailData): OutgoingEmail {
  const text = `سلام ${d.firstName}،

اس وقت کے لیے میری طرف سے آخری نوٹ — جانتا ہوں کہ انباکسز مصروف رہتے ہیں۔

اگر آپ کے اگلے باب کے بارے میں 50 منٹ کی گفتگو کارآمد لگے تو میرا کیلنڈر کھلا ہے:

${d.bookUrl}

ان سبسکرائب: ${d.unsubscribeUrl}

اگر ابھی وقت مناسب نہیں تو بالکل ٹھیک ہے۔ آپ بعد میں کبھی بھی trueselfme.com پر بک کر سکتے ہیں۔

جلد ملیں گے،
فہد — میری کہانی، کوچنگ اور رہنمائی`;
  const html = `<p>سلام ${d.firstName}،</p>
<p>اس وقت کے لیے میری طرف سے آخری نوٹ — جانتا ہوں کہ انباکسز مصروف رہتے ہیں۔</p>
<p>اگر آپ کے اگلے باب کے بارے میں 50 منٹ کی گفتگو کارآمد لگے تو میرا کیلنڈر کھلا ہے۔</p>
<p><a href="${d.bookUrl}" style="display:inline-block;background:#5D1F13;color:#F5EFE6;padding:12px 24px;border-radius:999px;text-decoration:none;font-weight:bold">اپنا وقت چنیں</a></p>
<p style="color:#666;font-size:13px">اگر ابھی وقت مناسب نہیں تو بالکل ٹھیک ہے — آپ بعد میں کبھی بھی بک کر سکتے ہیں۔</p>
${nurtureFooter(d.unsubscribeUrl)}`;
  return {
    to: "",
    subject: "ایک بار پھر دروازہ کھولا ہے",
    html,
    text,
  };
}

/* ── transactional payment notifications (NOT marketing) ─────────────── */

export function paymentSucceededEmail(d: {
  firstName: string;
  amount: string;
  bookingReference: string;
}): OutgoingEmail {
  const text = `سلام ${d.firstName}،

سیشن ${d.bookingReference} کے لیے آپ کی پیمنٹ ${d.amount} کامیابی سے موصول ہو گئی ہے۔ شکریہ۔

ہمارا پیمنٹ پروسیسر اس پیغام کے ساتھ رسید بھی بھیج رہا ہے۔`;
  const html = `<p>سلام ${d.firstName}،</p><p>سیشن <strong>${d.bookingReference}</strong> کے لیے آپ کی پیمنٹ <strong>${d.amount}</strong> کامیابی سے موصول ہو گئی ہے۔ شکریہ۔</p><p style="color:#666;font-size:12px">ہمارا پیمنٹ پروسیسر اس پیغام کے ساتھ رسید بھی بھیج رہا ہے۔</p>`;
  return {
    to: "",
    subject: `پیمنٹ موصول ہو گئی — ${d.amount}`,
    html,
    text,
  };
}

export function paymentFailedEmail(d: {
  firstName: string;
  bookingReference: string;
  manageUrl: string;
}): OutgoingEmail {
  const text = `سلام ${d.firstName}،

سیشن ${d.bookingReference} کی پیمنٹ مکمل نہیں ہو سکی۔ کوئی چارج نہیں لگا۔

آپ اپنا سیشن اور پیمنٹ کی تفصیلات کبھی بھی اپنے محفوظ بکنگ صفحے پر دیکھ سکتے ہیں:

${d.manageUrl}

— میری کہانی، کوچنگ اور رہنمائی`;
  const html = `<p>سلام ${d.firstName}،</p><p>سیشن <strong>${d.bookingReference}</strong> کی پیمنٹ مکمل نہیں ہو سکی۔ <strong>کوئی چارج نہیں لگا۔</strong></p><p>آپ اپنا سیشن اور پیمنٹ کی تفصیلات اپنے محفوظ بکنگ صفحے پر دیکھ سکتے ہیں۔</p><p><a href="${d.manageUrl}" style="display:inline-block;background:#5D1F13;color:#F5EFE6;padding:12px 24px;border-radius:999px;text-decoration:none;font-weight:bold">میری بکنگ کھولیں</a></p>`;
  return {
    to: "",
    subject: "پیمنٹ مکمل نہیں ہو سکی",
    html,
    text,
  };
}

export function paymentActionRequiredEmail(d: {
  firstName: string;
  bookingReference: string;
  manageUrl: string;
}): OutgoingEmail {
  const text = `سلام ${d.firstName}،

سیشن ${d.bookingReference} کی پیمنٹ مکمل کرنے کے لیے آپ کے بینک کو ایک اور تصدیقی قدم درکار ہے۔

اسے اپنے محفوظ بکنگ صفحے پر مکمل کریں (چند سیکنڈ لگتے ہیں، کوئی نئی تفصیل درکار نہیں):

${d.manageUrl}

اگر یہ قدم مکمل نہیں ہوتا تو پیمنٹ آگے نہیں بڑھتی — آپ بعد میں وہیں سے دوبارہ کوشش بھی کر سکتے ہیں۔`;
  const html = `<p>سلام ${d.firstName}،</p><p>سیشن <strong>${d.bookingReference}</strong> کی پیمنٹ مکمل کرنے کے لیے آپ کے بینک کو ایک اور تصدیقی قدم درکار ہے۔</p><p>اسے اپنے محفوظ بکنگ صفحے پر مکمل کریں — چند سیکنڈ لگتے ہیں اور کوئی نئی تفصیل درکار نہیں۔</p><p><a href="${d.manageUrl}" style="display:inline-block;background:#5D1F13;color:#F5EFE6;padding:12px 24px;border-radius:999px;text-decoration:none;font-weight:bold">بینک سے تصدیق کریں</a></p><p style="color:#666;font-size:12px">اگر یہ قدم مکمل نہیں ہوتا تو پیمنٹ آگے نہیں بڑھتی — آپ بعد میں وہیں سے دوبارہ کوشش کر سکتے ہیں۔</p>`;
  return {
    to: "",
    subject: "پیمنٹ مکمل کرنے کے لیے صرف ایک تیز قدم",
    html,
    text,
  };
}

export function refundCompletedEmail(d: {
  firstName: string;
  amount: string;
  bookingReference: string;
}): OutgoingEmail {
  const text = `سلام ${d.firstName}،

بکنگ ${d.bookingReference} کے لیے آپ کی ریفنڈ ${d.amount} مکمل ہو گئی ہے۔ آپ کے بینک کے مطابق اسے اپنے اسٹیٹمنٹ میں آنے میں چند کاروباری دن لگ سکتے ہیں۔

دوبارہ آپ کے ساتھ کام کرنے کی امید رکھتے ہیں۔`;
  const html = `<p>سلام ${d.firstName}،</p><p>بکنگ <strong>${d.bookingReference}</strong> کے لیے آپ کی ریفنڈ <strong>${d.amount}</strong> مکمل ہو گئی ہے۔</p><p style="color:#666;font-size:12px">آپ کے بینک کے مطابق اسے اسٹیٹمنٹ میں آنے میں چند کاروباری دن لگ سکتے ہیں۔</p><p>دوبارہ آپ کے ساتھ کام کرنے کی امید رکھتے ہیں۔</p>`;
  return {
    to: "",
    subject: `ریفنڈ مکمل — ${d.amount}`,
    html,
    text,
  };
}

/* ── crisis emergency-information response ───────────────────────────── */

export function emergencyInfoEmail(firstName: string): OutgoingEmail {
  const text = `سلام ${firstName}،

رابطہ کرنے کا شکریہ۔ اگر آپ فوری خطرے میں ہیں یا کسی ایمرجنسی کا سامنا کر رہے ہیں تو براہِ کرم ابھی ایمرجنسی سروسز (امریکہ میں 911) سے رابطہ کریں یا 988 Suicide & Crisis Lifeline کو کال یا پیغام (امریکہ میں 988) بھیجیں — وہ فوری مدد کر سکتے ہیں۔

میری کہانی غیر طبی کوچنگ فراہم کرتی ہے اور ایمرجنسی سروس نہیں ہے۔ آپ کا پیغام ذاتی جائزے کے لیے نشان زد کر دیا گیا ہے اور ایک حقیقی شخص جلد از جلد آپ سے رابطہ کرے گا۔

آپ اہم ہیں۔ اگر آپ بحران میں ہیں تو براہِ کرم ابھی اوپر دیے گئے وسائل سے رابطہ کریں۔`;
  const html = `<p>سلام ${firstName}،</p>
<p>رابطہ کرنے کا شکریہ۔ اگر آپ فوری خطرے میں ہیں یا کسی ایمرجنسی کا سامنا کر رہے ہیں تو براہِ کرم ابھی <strong>ایمرجنسی سروسز (امریکہ میں 911)</strong> سے رابطہ کریں یا <strong>988 Suicide &amp; Crisis Lifeline (کال یا پیغام 988 امریکہ میں)</strong> کو پیغام دیں — وہ فوری مدد کر سکتے ہیں۔</p>
<p>میری کہانی غیر طبی کوچنگ فراہم کرتی ہے اور <strong>ایمرجنسی سروس نہیں</strong> ہے۔ آپ کا پیغام ذاتی جائزے کے لیے نشان زد کر دیا گیا ہے اور ایک حقیقی شخص جلد از جلد آپ سے رابطہ کرے گا۔</p>
<p>آپ اہم ہیں۔ اگر آپ بحران میں ہیں تو براہِ کرم ابھی اوپر دیے گئے وسائل سے رابطہ کریں۔</p>`;
  return {
    to: "",
    subject: "اہم — فوری معاونت کے وسائل",
    html,
    text,
  };
}
