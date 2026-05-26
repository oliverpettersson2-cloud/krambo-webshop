# Krambo — Webshop (MVP)

Bred webshop byggd på Next.js 15 + Stripe + Tailwind. Säljer vad du vill.

## Snabbstart

```bash
npm install
cp .env.local.example .env.local
# Lägg in dina Stripe-nycklar (https://dashboard.stripe.com/test/apikeys)
npm run dev
```

Öppna http://localhost:3000

## Vad som ingår

- 📦 **Produktkatalog** — definierad i `lib/products.ts` (8 seed-produkter)
- 🛒 **Kundvagn** — localStorage, ikon i headern med antal
- 💳 **Stripe Checkout** — kort + Klarna, fri frakt över 500 kr, svensk lokalisering
- 🪝 **Webhook** — `/api/webhook` lyssnar på `checkout.session.completed`
- 📱 **Responsiv design** — Tailwind, ren och tidlös

## Filstruktur

```
app/
  page.tsx                  → Landningssida + produktlista
  products/[slug]/page.tsx  → Produktdetalj
  cart/page.tsx             → Kundvagn + "Till kassan"
  success/page.tsx          → Efter betalning
  api/
    checkout/route.ts       → Skapar Stripe Checkout Session
    webhook/route.ts        → Mottar Stripe-events
components/                 → Header, Footer, CartContext, ProductCard m.fl.
lib/products.ts             → Produktdata
```

## Byt ut produkterna

Redigera `lib/products.ts`. Bild via Unsplash-URL eller egen CDN.
Senare: koppla till Supabase eller Stripe Products API.

## Deploya

```bash
npx vercel
```

Sätt env-vars i Vercel: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_URL`.

## Testa Stripe lokalt

```bash
stripe listen --forward-to localhost:3000/api/webhook
# Stripe CLI ger dig en whsec_... → lägg i .env.local
```

Kortnummer för test: `4242 4242 4242 4242`, valfritt framtida datum, valfri CVC.

## Nästa steg

- [ ] Koppla produkter till Supabase eller Stripe Products
- [ ] Admin-panel för att lägga till/redigera produkter
- [ ] E-postbekräftelse via Resend
- [ ] Köpvillkor + integritetspolicy (lagkrav)
- [ ] Bokföringsexport
