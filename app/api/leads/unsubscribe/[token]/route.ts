import { NextResponse } from "next/server";
import { isDatabaseConfigured, getSupabaseAdmin } from "@/lib/supabase";
import { unsubscribeLead } from "@/lib/leads";

/**
 * GET /api/leads/unsubscribe/[token]
 *
 * One-click marketing unsubscribe from the nurture emails. Transactional
 * booking mail (confirmations, reminders, payment notices) is separate
 * and is NOT affected. Unknown tokens get the same neutral confirmation
 * as known ones — no address enumeration.
 */

function page(message: string): NextResponse {
  const html = `<!DOCTYPE html>
<html lang="ur" dir="rtl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>My Kahani — ان سبسکرائب</title>
<style>
  body { font-family: "Noto Naskh Arabic", "Jameel Noori Nastaleeq", serif; background: #F5EFE6; color: #1A1A1A;
         display: flex; align-items: center; justify-content: center;
         min-height: 100vh; margin: 0; line-height: 1.9; }
  .card { background: #fff; border: 1px solid rgba(0,0,0,.08);
          border-radius: 16px; padding: 40px; max-width: 480px; text-align: center; }
  h1 { color: #5D1F13; font-size: 24px; margin-top: 0; }
  p { line-height: 1.9; color: rgba(26,26,26,.75); }
</style>
</head>
<body>
  <div class="card">
    <h1>My Kahani — کوچنگ اور رہنمائی</h1>
    <p>${message}</p>
  </div>
</body>
</html>`;
  return new NextResponse(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> },
) {
  const neutral =
    "آپ کوچنگ سے متعلق ای میلز کی سبسکرائب کینسل کر چکے ہیں۔ موجودہ سیشنز کی بکنگ تصدیقات، یاد دہانیاں اور ادائیگی کے نوٹس الگ ہیں اور آپ کا کوئی سیشن شیڈول ہو تو وہ پھر بھی بھیجے جائیں گے۔";
  if (!isDatabaseConfigured) {
    return page("سائن اپس اس وقت منسلک نہیں ہیں۔ براہ کرم بعد میں دوبارہ کوشش کریں۔");
  }
  const { token } = await params;
  if (!token || token.length < 16) {
    return page(neutral);
  }
  const supabase = getSupabaseAdmin();
  const { data: lead } = await supabase
    .from("leads")
    .select("id, status")
    .eq("unsubscribe_token", token)
    .maybeSingle();
  if (!lead) {
    return page(neutral);
  }
  await unsubscribeLead(supabase, lead.id);
  return page(neutral);
}
