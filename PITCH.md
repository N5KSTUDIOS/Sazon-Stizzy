# The pitch — Sazon Stizzy

Short version to say out loud, and the reasoning behind each piece of the site.

---

## The one-liner

> "You've got 36,000 followers, 3,000 ratings on Uber Eats and a 4.8 on Grubhub —
> and when somebody Googles you, the top result belongs to DoorDash. Every order
> that comes through those apps costs you a cut. This costs you a domain."

## The four things worth money

**1. Right now every customer is rented.**
Instagram owns the audience, the apps own the orders. If Instagram changes its
feed or an app quietly moves them down a list, the phone stops ringing and
there's nothing they own to fall back on. A site is the one address that's
theirs.

**2. Delivery apps take 15–30% of every order.**
That's the whole argument for the site's biggest, loudest button being
**Call us direct** — pickup or their own delivery across the Bronx and Harlem,
no commission. The apps are still on the page, just second. One extra direct
order a day pays for the site many times over.

**3. Catering is the highest-margin thing they do, and no app sells it.**
The catering section has a form that composes a text message — occasion, date,
headcount, what they want — and hands it to the customer's own Messages app.
It lands on the phone the shop already answers. No inbox to check, no service to
pay for, nothing to break.

**4. Google currently has to guess.**
The site ships structured data (`Restaurant` schema): address, phone, geo,
hours, cuisine, price range, ordering links. That's what feeds the hours,
the call button and the map pin in a Google result — instead of Google
scraping it off third-party listings that disagree with each other. Their hours
are currently listed three different ways in three different places.

## Built into the page on purpose

| Decision | Why |
| --- | --- |
| Live "Open until 10pm" badge, in NYC time | The #1 question a hungry person has. Computed from the hours table, never stale, correct even if the visitor's phone is in another timezone |
| Sticky call / order bar on phones | Most people meet a restaurant standing on a sidewalk. Two thumb-sized buttons, always there |
| Their own photos, big | Nobody buys a plate from a description. The food shots are the whole design |
| Pink / sky-blue / cream palette | Lifted from their sticker logo, so it reads as *theirs* on sight, not a template |
| Ratings from four platforms up front | 4.8, 4.8, 4.7, 4.4 is the proof. Borrow the credibility they already earned |
| Real review quotes | "This feel like you in ya living room eating momma love home cooked food fr" sells better than anything a copywriter would write |
| One page, anchor nav | A takeout spot doesn't need a site map. Menu, order, story, catering, visit |

## Cost, honestly

- Domain: ~$15/year
- Hosting: free tier is genuinely enough — the whole site is static
- Changes: menu, prices and hours all live in one file

## What to ask them for

Menu with in-store prices, confirmed hours, the original logo file, and a photo
of Nicole and her grandmother. Everything else on the page is already real.

## Closing move

Have it open on a phone when the pitch happens. Hand it over, let them scroll
their own food, then tap **Call to order** and let their own phone ring.
