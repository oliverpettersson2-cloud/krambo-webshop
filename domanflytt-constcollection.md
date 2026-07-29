# Bryta loss constcollection.com från Canva — utan att mailen dör

**Skriven 2026-07-30. Fakta verifierade mot live-DNS samma dag.**

## Nuläget (verifierat)

| Vad | Var | Detalj |
|---|---|---|
| Domän | Köpt via Canva | Registrar bakom kulisserna: Tucows Domains Inc. |
| DNS | Canvas namnservrar | ns1/ns2/ns3.systemdns.com |
| Webb | Canva-sajten | A-post → 103.169.142.0 |
| **Mail** | **Zoho Mail (EU)** | `cecilia@constcollection.com` — ligger INTE hos Canva |
| Mål | Cloudflare DNS + Vercel | Webshopen `art-by-cecilia` tar över webben |

**Viktigaste insikten:** domänens mail-DNS pekar på Zoho, inte Canva. Men — **brevlådan `cecilia@constcollection.com` är inte skapad ännu** (bekräftat 2026-07-30). Det som finns är bara DNS-kopplingen till ett Zoho-konto som någon satt upp tidigare. Se "Mailadressen — två vägar" längst ner innan du bryr dig om DKIM-tabellen nedan.

---

## Mail-posterna som MÅSTE återskapas exakt

Dessa är hämtade från live-DNS 2026-07-30:

| Typ | Namn | Värde | Prio |
|---|---|---|---|
| MX | `@` | `mx.zoho.eu` | 10 |
| MX | `@` | `mx2.zoho.eu` | 20 |
| MX | `@` | `mx3.zoho.eu` | 50 |
| TXT | `@` | `v=spf1 include:zohomail.eu ~all` | — |
| TXT | `zmail._domainkey` | `v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCda/ElynpA5je+zzEJWNCpFuURCnJaPZzfgQkIfLF4WNAXq70PTTm01Big8liC9BSpA+GfJcEkjohUYg+5QziEP6hvA8TOLBmNK/qH5XyjWlTCRFKXSFxEgt3y7VhBu3xu2uoYEaOvGTc0Ak2kiZieTbnpvQR1o3CQnj+gh/ChNQIDAQAB` | — |

> ⚠️ Det kan finnas fler TXT-poster (t.ex. Zohos verifieringspost `zb...`). **Steg 1 nedan fångar dem.**

---

## Steg 1 — Skärmdumpa allt i Canvas DNS-panel (5 min)

1. Logga in på Canva med kontot som äger domänen
2. Gå till **Inställningar → Domäner → constcollection.com → DNS-poster** (eller "Hantera DNS")
3. **Skärmdumpa HELA listan.** Varenda post: A, CNAME, MX, TXT — allt.
4. Spara skärmdumparna i `Desktop\06-Sidoprojekt\webshop\docs-domanflytt\` (eller maila dig själv)

Detta är din försäkring. Går något snett kan du alltid återskapa exakt.

## Steg 2 — Lägg upp domänen i Cloudflare (10 min, gratis)

1. Skapa konto på [cloudflare.com](https://dash.cloudflare.com/sign-up) (Free-planen räcker gott)
2. **Add a domain** → `constcollection.com` → Free
3. Cloudflare skannar och importerar befintliga DNS-poster automatiskt
4. **Jämför mot din skärmdump från steg 1.** Kolla särskilt att alla tre MX-posterna, SPF-TXT:en och DKIM-posten (`zmail._domainkey`) kom med. Saknas något — lägg in manuellt (tabellen ovan har värdena)
5. Cloudflare visar nu **två namnservrar** (typ `xxx.ns.cloudflare.com`). Anteckna dem. Byt INTE något ännu.

## Steg 3 — Förbered webben i Cloudflare + Vercel (10 min)

**I Vercel** ([vercel.com/oliverpettersson2-clouds-projects/art-by-cecilia](https://vercel.com/oliverpettersson2-clouds-projects/art-by-cecilia)):
1. Settings → **Domains** → lägg till `constcollection.com` och `www.constcollection.com`
2. Vercel visar vilka DNS-värden den vill ha — normalt exakt de nedan

**I Cloudflare** (DNS-fliken), ersätt Canva-webbposterna:
| Typ | Namn | Värde | Proxy |
|---|---|---|---|
| A | `@` | `76.76.21.21` | **DNS only (grått moln)** |
| CNAME | `www` | `cname.vercel-dns.com` | **DNS only (grått moln)** |

> Ta bort/ersätt gamla A-posten mot 103.169.142.0 (Canva-sajten). Rör INTE MX/TXT.
> Grått moln = viktigt. Vercel sköter SSL-certet själv; orange proxy ställer till det.

## Steg 4 — Växla namnservrarna hos Canva (2 min + väntetid)

1. I Canva: **Domäner → constcollection.com → Namnservrar** (kan heta "Använd anpassade namnservrar")
2. Byt från systemdns till Cloudflares två namnservrar från steg 2
3. Vänta. Oftast klart på 1–4 timmar, max 24–48 h. Cloudflare mailar när zonen är aktiv.

**Om Canva INTE låter dig byta namnservrar** (fältet saknas/låst): hoppa till Plan B nedan.

## Steg 5 — Verifiera (5 min, direkt när Cloudflare säger "Active")

Kör i terminalen (eller be Claude):
```bash
nslookup -type=MX constcollection.com
```
→ ska fortfarande visa `mx.zoho.eu` m.fl.

```bash
nslookup constcollection.com
```
→ ska visa `76.76.21.21`

- [ ] https://constcollection.com visar **webshopen** med grönt hänglås
- [ ] Skicka ett testmail TILL `cecilia@constcollection.com` — kommer fram i Zoho
- [ ] Skicka ett testmail FRÅN adressen till din Gmail — hamnar i inkorgen, inte skräpposten (SPF+DKIM = OK)

## Steg 6 — Efterjobb (när allt rullar)

1. I Vercel: sätt env-varn `NEXT_PUBLIC_URL=https://constcollection.com` + redeploy
2. Säg upp Canva-sajtens abonnemang (men behåll domänbetalningen tills ev. Plan C är klar)
3. Uppdatera sajtens metadata/OG-canonical till nya domänen (Claude fixar på 5 min)

---

## Plan B — om Canva vägrar namnserverbyte

Då flyttar man hela domänregistreringen ut från Canva ("transfer out"):

1. I Canva: Domäner → **Överför domän** / "Transfer away" → lås upp domänen och begär **auth-koden** (kallas även EPP-kod)
2. Starta transfer hos en registrar som tillåter fria namnservrar — t.ex. **Namecheap** eller svenska **Loopia**. (Cloudflares egen registrar kräver att zonen redan är aktiv hos Cloudflare, vilket är moment 22 i detta läge — ta Namecheap först, flytta till Cloudflare Registrar senare om du vill.)
3. Transfern tar 5–7 dagar. **DNS-posterna fortsätter fungera under tiden** — mailen dör inte.
4. När transfern är klar: peka namnservrarna på Cloudflare (steg 2–5 ovan).

**Spärrar att känna till:**
- Domänen kan inte flyttas de första **60 dagarna** efter köp/förnyelse (ICANN-regel)
- Auth-koden är färskvara — använd den inom några dagar
- Transfer kostar ungefär ett års förnyelse (~120–150 kr för .com) men lägger också till ett år på domänen

## Plan C — helt fri från Canva (rekommenderas på sikt)

Även om namnserverbytet (Plan A) funkar ligger *registreringen* kvar hos Canva/Tucows och faktureras via Canva (~200+ kr/år). För att bli helt fri: gör Plan B-transfern i lugn och ro EFTER att sajten rullar via Cloudflare. Med zonen aktiv i Cloudflare kan du då flytta direkt till **Cloudflare Registrar** = självkostnadspris (~110 kr/år för .com) och allt på ett ställe.

---

## Mailadressen — två vägar (uppdaterat 2026-07-30)

Brevlådan `cecilia@constcollection.com` **finns inte ännu** — den ska skapas. DNS:en pekar på Zoho för att någon (okänt vem — fråga Cecilia/ev. tidigare webbhjälp) en gång kopplat domänen dit.

**Väg 1 — Zoho-inlogget hittas:** logga in på Zohos adminpanel (zoho.eu) → Users → skapa `cecilia@constcollection.com`. Klart på 5 min. Då gäller MX/DKIM-tabellen ovan exakt som den står.

**Väg 2 — inget inlogg finns (troligast):** skapa ett **nytt** Zoho Mail-konto (gratisplanen "Forever Free" räcker för en adress) — men gör det **EFTER** domänflytten, när DNS:en ligger i Cloudflare:
1. Registrera på zoho.eu → Mail → lägg till domänen constcollection.com
2. Verifiera med den TXT-post Zoho ger dig → läggs in i Cloudflare
3. Zoho ger nya MX/SPF/DKIM-värden → **ersätt de gamla posterna i Cloudflare med dessa** (gamla DKIM-tabellen ovan blir då irrelevant)
4. Skapa brevlådan `cecilia@` + ev. vidarebefordran till hennes Gmail
5. Kör verifieringen i steg 5 igen (testmail in/ut)

I väg 2 är de gamla Zoho-posterna bara skräp från förr — de behålls under själva domänflytten (enligt guiden) för säkerhets skull, och byts ut i lugn och ro när nya kontot är uppe.

## TL;DR

1. Skärmdumpa Canvas DNS-poster
2. Lägg upp domänen i Cloudflare (gratis) — kolla att Zoho-posterna följde med
3. Lägg in Vercel-posterna i Cloudflare (A `76.76.21.21`, CNAME www, grått moln)
4. Byt namnservrar i Canva till Cloudflares
5. Verifiera: sajt = webshopen, mail in/ut funkar
6. Senare: flytta registreringen till Cloudflare Registrar = 100 % fri från Canva

**Mailen kan inte gå sönder i flytten — brevlådan finns inte ännu. Den skapas i lugn och ro efteråt ("Mailadressen — två vägar" ovan), och då styr ni själva alla poster i Cloudflare.**
