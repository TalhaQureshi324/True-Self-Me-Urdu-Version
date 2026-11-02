# True-Self-Me-Urdu-Version

اردو ورژن — **My Kahani** (mykahani.com)

This is the complete Urdu version of the **True Self Me** site (My_Kahani_Project). Every page, component, asset and feature is identical to the English original, with two differences:

1. **Language** — all user-facing content is translated to Urdu, with full right-to-left (RTL) layout, `lang="ur"`, and Urdu typography (Noto Nastaliq Urdu for headings, Noto Naskh Arabic for body).
2. **Payments** — intentionally left untouched; the payment method will be replaced separately (all Stripe-related files are kept as in the original).

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Environment variables: copy `.env.example` to `.env.local` and fill in the values (same variables as the original project).

## Repository layout

Same structure as the original project:

- `app/` — Next.js App Router pages (landing, service pages, booking, blog, legal, admin)
- `components/` — UI components (sections, navbar, footer, booking flow, promotions)
- `lib/` — site config, content, scheduling, pricing, email templates
- `public/` — identical asset set from the original site

## Notes

- The `app/admin` area (blog CMS) is an internal tool and remains in English, matching the original.
- Booking/scheduling flows are translated; Stripe integration code is untouched on purpose.
