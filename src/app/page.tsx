import Catering from "@/components/Catering";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import Order from "@/components/Order";
import Reviews from "@/components/Reviews";
import StickyOrderBar from "@/components/StickyOrderBar";
import Story from "@/components/Story";
import Visit from "@/components/Visit";
import { business, hours, links, photos } from "@/lib/site-data";

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const pad = (minutes: number) =>
  `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(
    minutes % 60,
  ).padStart(2, "0")}`;

/**
 * Structured data — this is what puts the hours, phone number, price range and
 * "order" links straight into the Google result instead of leaving Google to
 * guess from third-party listings.
 */
const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  legalName: business.legalName,
  description: `${business.tagline} — Dominican and Latin comfort food cooked by ${business.founder} and her grandmother in the Bronx.`,
  founder: { "@type": "Person", name: business.founder },
  foundingDate: "2018",
  telephone: `+1-917-261-4343`,
  priceRange: business.priceRange,
  servesCuisine: [...business.cuisine],
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.lat,
    longitude: business.lng,
  },
  image: [photos.platePollo, photos.plateShrimpMac, photos.macAttack],
  logo: photos.logoMark,
  sameAs: [links.instagram, links.tiktok],
  acceptsReservations: "False",
  openingHoursSpecification: hours
    .filter((day) => day.hours)
    .map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAY_NAMES[hours.indexOf(day)],
      opens: pad(day.hours!.open),
      closes: pad(day.hours!.close),
    })),
  potentialAction: {
    "@type": "OrderAction",
    target: [links.ubereats, links.doordash, links.grubhub],
    deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Static, author-controlled object — no user input reaches this.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <Nav />
      <main>
        <Hero />
        <Menu />
        <Order />
        <Story />
        <Reviews />
        <Catering />
        <Visit />
      </main>
      <Footer />
      <StickyOrderBar />
    </>
  );
}
