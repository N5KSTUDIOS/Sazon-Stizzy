/**
 * Single source of truth for every piece of copy, price, link and number on the
 * site. Nicole (or whoever runs the site) should only ever have to edit this
 * file — the components read from it.
 *
 * NOTE FOR REVIEW: items marked `// VERIFY` were pulled from public listings
 * (DoorDash / Google / Instagram) and need the restaurant to confirm before
 * this goes live.
 */

/** Placeholder until the real domain is registered — change it here only. */
export const SITE_URL = "https://sazonstizzy.com";

export const business = {
  name: "Sazon Stizzy",
  legalName: "Sazon Stizzy LLC",
  tagline: "Dominican Soul Food",
  founder: "Stizzy Nicole",
  phone: "917-261-4343",
  phoneHref: "tel:+19172614343",
  smsHref: "sms:+19172614343",
  street: "126 W 238th St",
  city: "Bronx",
  state: "NY",
  zip: "10463",
  neighborhood: "Kingsbridge / Riverdale",
  lat: 40.88357,
  lng: -73.89783,
  priceRange: "$$",
  cuisine: ["Dominican", "Latin American", "Soul Food", "Comfort Food"],
  // The restaurant delivers directly (no app fees) to these areas.
  directDeliveryAreas: "the Bronx & Harlem",
} as const;

export const links = {
  instagram: "https://www.instagram.com/sazonstizzy/",
  instagramHandle: "@sazonstizzy",
  tiktok: "https://www.tiktok.com/@sazonstizzy",
  tiktokHandle: "@sazonstizzy",
  doordash: "https://www.doordash.com/store/sazon-stizzy-llc-bronx/",
  ubereats: "https://www.ubereats.com/store/sazon-stizzy",
  grubhub: "https://www.grubhub.com/restaurant/sazon-stizzy",
  googleMaps: `https://www.google.com/maps/dir/?api=1&destination=${business.lat},${business.lng}`,
  appleMaps: `https://maps.apple.com/?daddr=${encodeURIComponent(
    `${business.street}, ${business.city}, ${business.state} ${business.zip}`,
  )}`,
  googleReviews:
    "https://www.google.com/search?q=Sazon+Stizzy+126+W+238th+St+Bronx",
} as const;

/** 0 = Sunday, matching JS `Date#getDay()`. Times are 24h, local to NYC. */
export type DayHours = { open: number; close: number } | null;

export const hours: { label: string; short: string; hours: DayHours }[] = [
  { label: "Sunday", short: "Sun", hours: { open: 14 * 60, close: 20 * 60 + 30 } },
  { label: "Monday", short: "Mon", hours: { open: 9 * 60, close: 22 * 60 } },
  { label: "Tuesday", short: "Tue", hours: { open: 9 * 60, close: 22 * 60 } },
  { label: "Wednesday", short: "Wed", hours: { open: 9 * 60, close: 22 * 60 } },
  { label: "Thursday", short: "Thu", hours: { open: 9 * 60, close: 22 * 60 } },
  { label: "Friday", short: "Fri", hours: { open: 9 * 60, close: 22 * 60 } },
  { label: "Saturday", short: "Sat", hours: { open: 14 * 60, close: 20 * 60 + 30 } },
];

export const ratings = [
  { source: "Uber Eats", score: "4.7", count: "3,000+ ratings" },
  { source: "Grubhub", score: "4.8", count: "24 reviews" },
  { source: "DoorDash", score: "4.8", count: "10+ reviews" },
  { source: "Google", score: "4.4", count: "86 reviews" },
];

/** Photography supplied by the restaurant (their own Instagram shots). */
export const photos = {
  logoMark: "/images/logo-mark.png",
  logoSticker: "/images/logo-sticker.png",
  platePollo: "/images/plate-pollo.jpg",
  plateShrimpMac: "/images/plate-shrimp-mac.jpg",
  garlicChicken: "/images/mac-fries-garlic-chicken.jpg",
  macAttack: "/images/mac-attack.jpg",
  redVelvet: "/images/red-velvet.jpg",
  cateringTrays: "/images/catering-trays.jpg",
} as const;

export type Dish = {
  name: string;
  description: string;
  price?: string;
  badge?: string;
  photo: string;
  /** Written for screen readers and for Google Images. */
  alt: string;
};

/** The headline plates — the ones people actually order. */
export const signatureDishes: Dish[] = [
  {
    name: "Build Your Own: Medium",
    description:
      "Pick one main, pick two sides. Comes with rice and beans, salad, avocado, tostones and pink stz sauce.",
    price: "$26.00",
    badge: "#1 Best seller",
    photo: photos.platePollo,
    alt: "Sazon Stizzy build your own plate with seasoned chicken, rice and beans, tostones, avocado, salad and pink stz sauce",
  },
  {
    name: "Build Your Own: Large",
    description:
      "Two mains, two sides. Here it's honey chicken and garlic shrimp over mac attack and mashed potatoes.",
    price: "$30.00",
    badge: "#3 Best seller",
    photo: photos.plateShrimpMac,
    alt: "Large plate with honey glazed chicken, creamy garlic shrimp, mac and cheese and mashed potatoes",
  },
  {
    name: "OG Mac Attack",
    description:
      "Our famous mac and cheese, baked till the top goes gold. Sazon Stizzy best seller and a Bronx staple.",
    price: "$9.00",
    badge: "Bronx staple",
    photo: photos.macAttack,
    alt: "Close up of Sazon Stizzy's OG Mac Attack macaroni and cheese with a golden baked cheese top",
  },
  {
    name: "Creamy Garlic Chicken",
    description:
      "Boneless chicken in creamy garlic sauce, plated here with seasoned fries and mac attack.",
    badge: "Fan favorite",
    photo: photos.garlicChicken,
    alt: "Creamy garlic boneless chicken with seasoned fries and macaroni and cheese",
  },
  {
    name: "Red Velvet Treatz",
    description:
      "The dessert case is not a side quest. Red velvet, layered with cream, gone in a minute.",
    badge: "Save room",
    photo: photos.redVelvet,
    alt: "Spoonful of red velvet cake layered with whipped cream from a dessert cup",
  },
];

export type MenuSection = {
  title: string;
  note?: string;
  items: { name: string; description?: string; price?: string }[];
};

export const menuSections: MenuSection[] = [
  {
    title: "Plates",
    note: "Mains + sides",
    items: [
      {
        name: "Build Your Own: Medium",
        description: "Pick one main, pick two sides.",
        price: "$26.00",
      },
      {
        name: "Build Your Own: Large",
        description: "Pick two mains, pick two sides.",
        price: "$30.00",
      },
      {
        name: "Mini Lonche",
        description: "Pick one and one only — the mini version of build your own.",
        price: "$14.00",
      },
      {
        name: "Loaded Mac Fries",
        description:
          "Fries topped with our famous mac attack, boneless chicken & cilantro aioli / pink stz sauce.",
        price: "$17.50",
      },
      { name: "Sweet Chick", price: "$17.50" },
    ],
  },
  {
    title: "Sides",
    note: "Served all day",
    items: [
      {
        name: "OG Mac Attack",
        description: "Our famous mac and cheese.",
        price: "$9.00",
      },
      {
        name: "Maduros / Sweet Plantains",
        description: "Crispy fried or sweet plantains.",
        price: "$7.00",
      },
      {
        name: "Potato Salad",
        description: "Delicious homemade potato salad.",
        price: "$7.00",
      },
    ],
  },
  {
    title: "Drinks",
    note: "Squeezed in house",
    items: [
      {
        name: "Chiñola",
        description: "Passion fruit juice over ice.",
        price: "$6.50",
      },
      {
        name: "OG Regular Lemonade",
        description: "Freshly squeezed lemonade with a hint of sweetness.",
        price: "$6.50",
      },
      {
        name: "Fresita Lemonade",
        description: "Refreshing strawberry lemonade with a sweet twist.",
        price: "$6.50",
      },
    ],
  },
  {
    title: "Also on the menu",
    note: "Ask about the specials",
    items: [
      { name: "Panko Chicken" },
      { name: "Chicken Parmesan" },
      { name: "Creamy Garlic Salmon" },
      { name: "Stuffed Salmon" },
      { name: "Sauces — cilantro aioli, pink stz" },
      { name: "Treatz — the whole dessert case" },
    ],
  },
];

/** Menu service windows as listed on the delivery apps. */
export const serviceWindows = [
  { label: "Breakfast", time: "From open" },
  { label: "Lunch", time: "Midday" },
  { label: "Dinner", time: "4:00 pm – 10:00 pm" },
];

export const orderOptions = [
  {
    name: "Call us direct",
    detail: `Pickup, or delivery across ${business.directDeliveryAreas}. No app fees, no middleman — you talk to us.`,
    action: `Call ${business.phone}`,
    href: business.phoneHref,
    primary: true,
  },
  {
    name: "Uber Eats",
    detail: "4.7 stars from over 3,000 ratings.",
    action: "Order on Uber Eats",
    href: links.ubereats,
  },
  {
    name: "DoorDash",
    detail: "Usually ready for pickup in about 11 minutes.",
    action: "Order on DoorDash",
    href: links.doordash,
  },
  {
    name: "Grubhub",
    detail: "4.8 stars — our highest rated app.",
    action: "Order on Grubhub",
    href: links.grubhub,
  },
];

export const reviews = [
  {
    quote:
      "This feel like you in ya living room eating momma love home cooked food fr",
    author: "Yaassi",
    source: "Google",
  },
  {
    quote:
      "Sazon Stizzy is truly the best! Incredible flavors and cooking.",
    author: "Verified diner",
    source: "Grubhub",
  },
  {
    quote: "A mixture of Latin American cuisine and a lot of love.",
    author: "Sazon Stizzy",
    source: "In their own words",
  },
];

export const story = {
  heading: "Two cooks, one kitchen, since 2018.",
  paragraphs: [
    `Sazon Stizzy started at home — ${business.founder} and her grandmother cooking plates out of their own kitchen in 2018, selling to whoever was smart enough to order.`,
    "Word moved the way it moves in the Bronx: fast. By 2020 there was a real storefront on West 238th, and the same two people were still doing the cooking.",
    "It's Dominican food with soul food in its bones — mac and cheese that people drive in for, honey garlic chicken, plantains, chiñola over ice. Big portions, fair prices, and somebody who actually knows your order.",
  ],
  pullQuote: "I cook bomb-ass food with my grandma.",
  pullQuoteSource: `${business.founder}, ${links.instagramHandle}`,
};

export const catering = {
  heading: "Feeding a crowd?",
  body: `We cater — birthdays, repasts, office lunches, baby showers, whatever you've got. Tell us the date, the headcount and what you're thinking, and we'll get right back to you.`,
  eventTypes: [
    "Birthday",
    "Office lunch",
    "Family gathering",
    "Baby shower",
    "Repast",
    "Other",
  ],
};

export const nav = [
  { label: "Menu", href: "#menu" },
  { label: "Catering", href: "#catering" },
  { label: "Our story", href: "#story" },
  { label: "Visit", href: "#visit" },
];
