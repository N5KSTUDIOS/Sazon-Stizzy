import { business, links } from "@/lib/site-data";
import HoursList from "./HoursList";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Visit() {
  return (
    <section id="visit" className="bg-cream-deep py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-berry">Come through</p>
          <h2 className="font-display mt-3 text-[2rem] leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
            West 238th Street, {business.neighborhood.split(" / ")[0]}.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl bg-white/70 p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-sm font-bold tracking-wide uppercase">
              <PinIcon className="size-4.5 text-berry" />
              Where
            </h3>
            <p className="font-display mt-4 text-3xl leading-tight font-semibold">
              {business.street}
              <span className="block">
                {business.city}, {business.state} {business.zip}
              </span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-carbon/65">
              A block from the 1 train at 238th St, on the Kingsbridge /
              Riverdale line. Takeout counter — call ahead and it&rsquo;s
              usually ready in about 15 minutes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={links.googleMaps}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-carbon px-5 py-3 text-sm font-bold text-cream transition-colors hover:bg-carbon-soft"
              >
                Google Maps
                <ArrowIcon className="size-4" />
              </a>
              <a
                href={links.appleMaps}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-carbon/20 px-5 py-3 text-sm font-bold transition-colors hover:border-carbon"
              >
                Apple Maps
                <ArrowIcon className="size-4" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/70 p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-sm font-bold tracking-wide uppercase">
              <ClockIcon className="size-4.5 text-berry" />
              Hours
            </h3>
            <div className="mt-4">
              <HoursList />
            </div>
            <a
              href={business.phoneHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-pink px-5 py-3 text-sm font-bold text-carbon transition-colors hover:bg-pink-deep"
            >
              <PhoneIcon className="size-4" />
              {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
