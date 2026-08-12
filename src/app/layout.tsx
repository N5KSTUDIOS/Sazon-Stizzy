import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, Yellowtail } from "next/font/google";
import "./globals.css";
import { business, SITE_URL } from "@/lib/site-data";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// Brush script that echoes the hand-lettered logo, used for small accents only.
const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} | ${business.tagline} in the Bronx`,
    template: `%s | ${business.name}`,
  },
  description:
    `${business.tagline} on West 238th St in the ${business.neighborhood} section of the Bronx. ` +
    `Famous mac attack, loaded mac fries, honey garlic chicken and fresh chiñola. ` +
    `Pickup, delivery across ${business.directDeliveryAreas}, and catering — call ${business.phone}.`,
  keywords: [
    "Dominican food Bronx",
    "soul food Bronx",
    "Sazon Stizzy",
    "mac and cheese Bronx",
    "catering Bronx",
    "Kingsbridge restaurant",
    "Riverdale Dominican restaurant",
    "food delivery Bronx",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: business.name,
    title: `${business.name} — ${business.tagline} in the Bronx`,
    description:
      `Home cooked Dominican soul food on W 238th St. Pickup, delivery and catering. Call ${business.phone}.`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — ${business.tagline}`,
    description: `Home cooked Dominican soul food on W 238th St, Bronx NY.`,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1b1310",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} ${yellowtail.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-carbon">{children}</body>
    </html>
  );
}
