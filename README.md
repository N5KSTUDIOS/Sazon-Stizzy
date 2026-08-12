# Sazon Stizzy — website

A spec site built for **Sazon Stizzy**, 126 W 238th St, Bronx NY — Dominican soul
food by Stizzy Nicole and her grandmother. They have 36K followers, three
delivery apps and no website of their own. This is the pitch.

## Run it

From this folder:

```bash
npx next dev
```

Or, from the parent `ClaudeWIP` folder, the preview config `sazon-stizzy-dev`
runs `next dev sazon-stizzy`.

Production check:

```bash
npx next build
```

## Where things live

| What | Where |
| --- | --- |
| **All copy, prices, hours, links** | `src/lib/site-data.ts` — edit this, not the components |
| Open/closed logic (NYC time) | `src/lib/hours.ts` |
| Sections | `src/components/*.tsx`, composed in `src/app/page.tsx` |
| Colours + fonts | `src/app/globals.css` (`@theme` block) |
| Photos | `public/images/` |
| Favicon / share image | `src/app/icon.png`, `src/app/opengraph-image.jpg` |
| Google structured data | `restaurantSchema` in `src/app/page.tsx` |

Change the domain in one place: `SITE_URL` in `src/lib/site-data.ts` (drives
canonical URLs, OG tags, `robots.txt` and `sitemap.xml`).

## Design

Palette and type are pulled off their own sticker logo — bubblegum pink, sky
blue script, cream, near-black. Fraunces for display, Plus Jakarta Sans for
body, Yellowtail for the script accents that echo the hand-lettered logo.

Mobile is the primary viewport: sticky call/order bar from 420px of scroll,
44px+ tap targets, no horizontal overflow, hamburger nav below `lg`.

## Still needed from the restaurant

- [ ] Full menu with **in-store** prices (everything here is delivery-app pricing, which is marked up)
- [ ] Confirm hours — Google, Instagram and DoorDash all list different ones. Site currently uses Mon–Fri 9am–10pm, Sat–Sun 2–8:30pm
- [ ] Confirm the "Sweet Chick" and dinner-window details
- [ ] Original logo file (this uses a crop of the sticker JPEG)
- [ ] Real links for the Uber Eats / Grubhub / DoorDash listings (placeholders in `links`)
- [ ] Whether the 2618 Jerome Ave address seen on TikTok is a second location
- [ ] A photo of Nicole and her grandmother for the story section
