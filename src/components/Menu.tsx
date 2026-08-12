import { business, menuSections, serviceWindows, signatureDishes } from "@/lib/site-data";
import { PhoneIcon } from "./Icons";
import Photo from "./Photo";

export default function Menu() {
  return (
    <section id="menu" className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-berry">The plates</p>
          <h2 className="font-display mt-3 text-[2rem] leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
            Build your own, or let the best sellers decide.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-carbon/70 sm:text-lg">
            Pick your mains, pick your sides. Everything is cooked to order, and
            the portions are the reason people send pictures of them.
          </p>
        </div>

        <ul className="mt-9 flex flex-wrap justify-center gap-2.5">
          {serviceWindows.map((w) => (
            <li
              key={w.label}
              className="rounded-full border border-carbon/15 px-4 py-2 text-sm font-semibold"
            >
              {w.label}
              <span className="ml-2 font-normal text-carbon/55">{w.time}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((dish, i) => (
            <article
              key={dish.name}
              className="flex flex-col overflow-hidden rounded-3xl border border-carbon/10 bg-white/70 transition-shadow hover:shadow-[0_20px_44px_-26px_rgba(27,19,16,0.6)]"
            >
              <Photo
                src={dish.photo}
                alt={dish.alt}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                className="aspect-[4/3] w-full"
                priority={i === 0}
              />
              <div className="flex flex-1 flex-col p-5">
                {dish.badge && (
                  <span className="mb-2 self-start rounded-full bg-pink-soft px-2.5 py-1 text-[0.7rem] font-bold tracking-wide text-berry uppercase">
                    {dish.badge}
                  </span>
                )}
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{dish.name}</h3>
                  {dish.price && (
                    <span className="font-display text-lg font-semibold text-berry">
                      {dish.price}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-carbon/70">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}

          {/* Sixth cell: the thing the delivery apps can't tell you */}
          <article className="stizzy-pattern flex flex-col justify-between rounded-3xl p-6 sm:p-7">
            <div>
              <p className="eyebrow text-sky-deep">Off menu</p>
              <h3 className="font-display mt-3 text-2xl leading-tight font-semibold text-carbon">
                Ask what&rsquo;s good today.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-carbon/75">
                Breakfast, lunch and dinner each have their own lineup, and the
                specials change with the week. The apps won&rsquo;t tell you —
                we will.
              </p>
            </div>
            <a
              href={business.phoneHref}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-carbon px-5 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-carbon-soft"
            >
              <PhoneIcon className="size-4" />
              {business.phone}
            </a>
          </article>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 border-t border-carbon/10 pt-12 sm:grid-cols-2">
          {menuSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-baseline justify-between gap-3 border-b-2 border-carbon pb-2">
                <h3 className="font-display text-2xl font-semibold">{section.title}</h3>
                {section.note && (
                  <span className="text-xs font-semibold tracking-wide text-carbon/50 uppercase">
                    {section.note}
                  </span>
                )}
              </div>
              <ul className="mt-4 space-y-4">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold">{item.name}</span>
                      {item.price && (
                        <>
                          <span
                            className="h-px min-w-4 flex-1 self-end bg-carbon/20"
                            aria-hidden
                          />
                          <span className="font-semibold text-berry">{item.price}</span>
                        </>
                      )}
                    </div>
                    {item.description && (
                      <p className="mt-1 text-sm leading-relaxed text-carbon/65">
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 rounded-2xl bg-carbon/5 p-5 text-sm leading-relaxed text-carbon/70">
          Prices shown are the current delivery-app prices — call the shop for
          in-store pricing and today&rsquo;s specials on{" "}
          <a
            href={business.phoneHref}
            className="font-semibold text-berry underline underline-offset-2"
          >
            {business.phone}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
