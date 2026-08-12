import { links, reviews } from "@/lib/site-data";
import { ArrowIcon, StarIcon } from "./Icons";

export default function Reviews() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-berry">Word of mouth</p>
          <h2 className="font-display mt-3 text-[2rem] leading-[1.06] font-semibold sm:text-5xl">
            People don&rsquo;t whisper about this place.
          </h2>
          <a
            href={links.googleReviews}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-berry hover:underline"
          >
            Read all the reviews
            <ArrowIcon />
          </a>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <li
              key={review.author}
              className="flex flex-col rounded-3xl border border-carbon/10 bg-white/70 p-6"
            >
              <div className="flex gap-0.5 text-berry" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="font-display mt-4 flex-1 text-lg leading-snug font-medium">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <p className="mt-5 text-sm font-semibold">
                {review.author}
                <span className="ml-2 font-normal text-carbon/50">{review.source}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
