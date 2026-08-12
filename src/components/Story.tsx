import Image from "next/image";
import { links, photos, story } from "@/lib/site-data";
import { InstagramIcon } from "./Icons";
import Photo from "./Photo";

export default function Story() {
  return (
    <section id="story" className="bg-cream-deep py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="relative">
            <Photo
              src={photos.garlicChicken}
              alt="Creamy garlic chicken with seasoned fries and mac and cheese in a takeout tray"
              sizes="(min-width: 1024px) 40vw, 92vw"
              className="aspect-[5/4] rounded-3xl"
            />
            <div className="mt-4 grid grid-cols-[1fr_auto] items-end gap-4">
              <Photo
                src={photos.plateShrimpMac}
                alt="Honey chicken and garlic shrimp over mac and cheese and mashed potatoes"
                sizes="(min-width: 1024px) 28vw, 60vw"
                className="aspect-[4/3] rounded-3xl"
              />
              <Image
                src={photos.logoSticker}
                alt="Sazon Stizzy logo"
                width={600}
                height={600}
                className="size-28 rounded-full shadow-[0_10px_30px_-12px_rgba(27,19,16,0.6)] sm:size-32"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow text-center text-berry">Our story</p>
            <h2 className="font-display mt-3 text-center text-[2rem] leading-[1.06] font-semibold sm:text-5xl">
              {story.heading}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-carbon/75 sm:text-lg">
              {story.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <figure className="mt-8 border-l-4 border-pink-deep pl-5">
              <blockquote className="font-script text-3xl leading-snug sm:text-4xl">
                {story.pullQuote}
              </blockquote>
              <figcaption className="mt-2 text-sm font-semibold text-carbon/60">
                — {story.pullQuoteSource}
              </figcaption>
            </figure>

            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-carbon px-6 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-carbon-soft"
            >
              <InstagramIcon className="size-5" />
              Follow {links.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
