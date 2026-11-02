import { NextResponse } from "next/server";
import { rateLimit, clientIp } from "@/lib/rateLimit";

/**
 * POST /api/booking/promo
 * Body: { code: string }
 *
 * Validates a promotional/discount code against the configured list and
 * returns the discount that should be applied to the session fee.
 * Codes live in the PROMO_CODES env var (JSON array) or fall back to
 * none configured — in which case every code is "invalid" but the
 * endpoint still returns 200 with valid:false (not an error).
 *
 * Format (PROMO_CODES env var):
 *   [{"code":"WELCOME20","type":"percent","value":20},
 *    {"code":"FRIEND50","type":"flat_cents","value":5000}]
 */

type PromoCode = {
  code: string;
  /** "percent" (0-100) or "flat_cents" */
  type: "percent" | "flat_cents";
  value: number;
  /** Optional human-friendly label for display. */
  label?: string;
};

function configuredCodes(): PromoCode[] {
  try {
    const raw = process.env.PROMO_CODES ?? "[]";
    const parsed = JSON.parse(raw) as PromoCode[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  const rl = rateLimit(`promo:${clientIp(request)}`, 10, 60_000);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "بہت زیادہ کوششیں۔ براہ کرم چند لمحے انتظار کریں。" },
      { status: 429 },
    );
  }

  let body: { code?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ valid: false, error: "درخواست غلط ہے۔" }, { status: 400 });
  }

  const code = (body.code ?? "").trim().toUpperCase();
  if (!code) {
    return NextResponse.json(
      { valid: false, error: "براہ کرم پرومو کوڈ درج کریں۔" },
      { status: 400 },
    );
  }

  const match = configuredCodes().find((p) => p.code.toUpperCase() === code);
  if (!match) {
    return NextResponse.json(
      { valid: false, error: "پرومو کوڈ غلط ہے۔" },
      { status: 200 },
    );
  }

  return NextResponse.json({
    valid: true,
    code: match.code,
    type: match.type,
    value: match.value,
    label: match.label ?? null,
  });
}
