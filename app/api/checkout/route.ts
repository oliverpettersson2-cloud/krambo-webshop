import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductById, getFormat } from "@/lib/products";

export async function POST(req: Request) {
  try {
    const { items } = (await req.json()) as {
      items: { productId: string; formatId: string; qty: number }[];
    };

    if (!items?.length) {
      return NextResponse.json({ error: "Kundvagnen är tom" }, { status: 400 });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "STRIPE_SECRET_KEY saknas. Kopiera .env.local.example till .env.local och lägg in nycklar." },
        { status: 500 }
      );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3300";

    const line_items = items
      .map((i) => {
        const p = getProductById(i.productId);
        if (!p || !p.inStock) return null;
        const f = getFormat(p, i.formatId);
        if (!f) return null;
        const qty = i.qty;
        return {
          price_data: {
            currency: "sek",
            product_data: {
              name: `${p.name} — ${f.name}`,
              description: `Cecilia K. (${p.year}) · ${f.description}`,
              images: [`${baseUrl}${p.image}`],
            },
            unit_amount: f.priceSEK * 100,
          },
          quantity: qty,
        };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);

    if (!line_items.length) {
      return NextResponse.json({ error: "Inga giltiga verk i kundvagnen" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      payment_method_types: ["card", "klarna"],
      shipping_address_collection: { allowed_countries: ["SE", "NO", "DK", "FI", "DE", "GB"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 14900, currency: "sek" },
            display_name: "Försäkrad leverans (5-10 dagar)",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 10 },
            },
          },
        },
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cart`,
      locale: "sv",
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: err.message || "Internt fel" }, { status: 500 });
  }
}
