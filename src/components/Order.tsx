import { business, orderOptions } from "@/lib/site-data";
import { ArrowIcon, PhoneIcon } from "./Icons";

export default function Order() {
  const [direct, ...apps] = orderOptions;

  return (
    <section id="order" className="bg-carbon py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-pink">Get it hot</p>
          <h2 className="font-display mt-3 text-[2rem] leading-[1.05] font-semibold text-cream sm:text-5xl lg:text-6xl">
            Pickup, delivery, or straight to the door.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_1fr] lg:gap-6">
          {/* Ordering direct is the one we actually want people to click */}
          <a
            href={direct.href}
            className="stizzy-pattern group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-transform hover:scale-[1.01] sm:p-9"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-carbon px-3 py-1.5 text-[0.7rem] font-bold tracking-wider text-cream uppercase">
                Best way to order
              </span>
              <h3 className="font-display mt-5 text-3xl leading-tight font-semibold text-carbon sm:text-4xl">
                {direct.name}
              </h3>
              <p className="mt-3 max-w-sm font-medium text-carbon/80">{direct.detail}</p>
            </div>
            <span className="mt-8 inline-flex items-center gap-3 self-start rounded-full bg-carbon px-6 py-4 text-lg font-bold text-cream">
              <PhoneIcon className="size-5" />
              {business.phone}
            </span>
          </a>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {apps.map((option) => (
              <a
                key={option.name}
                href={option.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-3xl border border-carbon-line bg-carbon-soft p-5 transition-colors hover:border-pink/60 sm:flex-col sm:items-start sm:justify-start lg:flex-row lg:items-center"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-cream">
                    {option.name}
                  </h3>
                  <p className="mt-1 text-sm text-cream/60">{option.detail}</p>
                </div>
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors group-hover:border-pink group-hover:bg-pink group-hover:text-carbon"
                  aria-hidden
                >
                  <ArrowIcon className="size-5" />
                </span>
                <span className="sr-only">{option.action}</span>
              </a>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-cream/50">
          App links go to the live listings. Delivery apps add their own service
          markup — calling the shop direct is always the better deal.
        </p>
      </div>
    </section>
  );
}
