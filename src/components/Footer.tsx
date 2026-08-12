import Image from "next/image";
import { business, links, nav, photos } from "@/lib/site-data";
import { InstagramIcon, PhoneIcon, TikTokIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-carbon pt-14 pb-28 text-cream lg:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={photos.logoMark}
                alt=""
                width={420}
                height={420}
                className="size-12 rounded-full ring-2 ring-pink/60"
              />
              <span className="font-display text-2xl font-semibold">
                Sazon <span className="text-pink">Stizzy</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
              {business.tagline} in the Bronx. Cooked by {business.founder} and
              her grandmother since 2018.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex size-11 items-center justify-center rounded-full border border-cream/25 transition-colors hover:border-pink hover:text-pink"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon />
              </a>
              <a
                href={links.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex size-11 items-center justify-center rounded-full border border-cream/25 transition-colors hover:border-pink hover:text-pink"
              >
                <span className="sr-only">TikTok</span>
                <TikTokIcon />
              </a>
              <a
                href={business.phoneHref}
                className="flex size-11 items-center justify-center rounded-full border border-cream/25 transition-colors hover:border-pink hover:text-pink"
              >
                <span className="sr-only">Call {business.phone}</span>
                <PhoneIcon />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-wide uppercase">Find us</h2>
            <address className="mt-4 space-y-1 text-sm not-italic text-cream/70">
              <p>{business.street}</p>
              <p>
                {business.city}, {business.state} {business.zip}
              </p>
              <p className="pt-2">
                <a href={business.phoneHref} className="font-semibold text-cream hover:text-pink">
                  {business.phone}
                </a>
              </p>
            </address>
            <p className="mt-4 text-sm text-cream/60">
              Delivery across {business.directDeliveryAreas}.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-wide uppercase">This site</h2>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-pink">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#order" className="hover:text-pink">
                  Order online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-carbon-line pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved.
          </p>
          <p>Made in the Bronx.</p>
        </div>
      </div>
    </footer>
  );
}
