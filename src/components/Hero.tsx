import { business, links, photos, ratings } from "@/lib/site-data";
import { ArrowIcon, PhoneIcon, PinIcon, StarIcon } from "./Icons";
import OpenStatus from "./OpenStatus";
import Photo from "./Photo";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-carbon pt-28 pb-14 sm:pt-32 lg:pt-36 lg:pb-20"
    >
      {/* Pink and sky glow lifted from the sticker, warming up the dark */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(65% 50% at 88% 4%, rgba(245,199,217,0.28) 0%, transparent 62%), radial-gradient(55% 45% at 2% 34%, rgba(124,197,238,0.20) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-11 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="text-center">
            <p className="eyebrow text-pink">
              Bronx, New York · Family run since 2018
            </p>

            <h1 className="font-display mt-4 text-[2.45rem] leading-[0.95] font-semibold text-cream sm:text-6xl lg:text-[4.25rem]">
              Dominican soul food,
              <span className="font-script mt-2 block text-[0.86em] leading-[1.15] font-normal text-pink">
                cooked with my grandma.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              {business.founder} and her grandmother have been cooking out of one
              kitchen on West 238th since the plates were still going out of
              their house. Big portions, fair prices, and mac and cheese people
              cross the borough for.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pink px-7 py-4 text-base font-bold text-carbon transition-transform hover:scale-[1.02]"
              >
                See the menu
                <ArrowIcon />
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-4 text-base font-bold text-cream transition-colors hover:border-sky hover:text-sky"
              >
                <PhoneIcon className="size-5" />
                Call {business.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
              <OpenStatus />
              <a
                href={links.googleMaps}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-cream/70 transition-colors hover:text-pink"
              >
                <PinIcon className="size-4.5" />
                {business.street}, {business.city}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Photo
              src={photos.platePollo}
              alt="Sazon Stizzy plate with seasoned chicken, rice and beans, tostones, avocado and salad"
              priority
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="col-span-2 aspect-[16/11] rounded-3xl"
            />
            <Photo
              src={photos.macAttack}
              alt="Baked mac and cheese with a golden cheese top"
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="aspect-square rounded-3xl"
            />
            <Photo
              src={photos.redVelvet}
              alt="Red velvet dessert cup with whipped cream"
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="aspect-square rounded-3xl"
            />
          </div>
        </div>

        {/* What the internet already says about them */}
        <div className="mt-14 border-t border-carbon-line pt-8 lg:mt-20">
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {ratings.map((r) => (
              <li
                key={r.source}
                className="rounded-2xl border border-carbon-line bg-carbon-soft p-4"
              >
                <div className="flex items-center gap-1.5 text-pink">
                  <StarIcon />
                  <span className="font-display text-xl font-semibold text-cream">
                    {r.score}
                  </span>
                </div>
                <p className="mt-1.5 text-sm font-semibold text-cream">{r.source}</p>
                <p className="text-xs text-cream/55">{r.count}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
