"use client";

import { useMemo, useState } from "react";
import { business, catering, links, photos } from "@/lib/site-data";
import { InstagramIcon, PhoneIcon } from "./Icons";
import Photo from "./Photo";

/**
 * No backend, no inbox to check, nothing to break: the form composes a text
 * message and hands it to the phone's own Messages app. The customer hits send,
 * and the request lands where the restaurant already lives — their phone.
 */
export default function Catering() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [eventType, setEventType] = useState(catering.eventTypes[0]);
  const [details, setDetails] = useState("");

  const message = useMemo(() => {
    const lines = [
      `Hi Sazon Stizzy! I'd like to ask about catering.`,
      name && `Name: ${name}`,
      date && `Date: ${date}`,
      guests && `Guests: ${guests}`,
      eventType && `Occasion: ${eventType}`,
      details && `Details: ${details}`,
    ].filter(Boolean);
    return lines.join("\n");
  }, [name, date, guests, eventType, details]);

  const smsHref = `${business.smsHref}?&body=${encodeURIComponent(message)}`;

  const fieldClass =
    "w-full rounded-2xl border border-carbon/15 bg-white px-4 py-3.5 text-base text-carbon placeholder:text-carbon/40 focus:border-carbon focus:outline-none";
  const labelClass = "block text-sm font-bold text-carbon";

  return (
    <section id="catering" className="bg-carbon py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <p className="eyebrow text-center text-pink">Catering</p>
            <h2 className="font-display mt-3 text-center text-[2rem] leading-[1.05] font-semibold text-cream sm:text-5xl">
              {catering.heading}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg">
              {catering.body}
            </p>

            <Photo
              src={photos.cateringTrays}
              alt="Several Sazon Stizzy catering trays lined up with chicken, rice and beans, tostones and salad"
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="mt-8 aspect-[16/10] rounded-3xl"
            />

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-3 text-sm font-bold text-cream transition-colors hover:border-pink hover:text-pink"
              >
                <PhoneIcon className="size-4" />
                Rather call? {business.phone}
              </a>
              <a
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-3 text-sm font-bold text-cream transition-colors hover:border-pink hover:text-pink"
              >
                <InstagramIcon className="size-4" />
                DM us
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-cream p-6 sm:p-8">
            <h3 className="font-display text-center text-2xl font-semibold">
              Tell us what you need
            </h3>
            <p className="mt-2 text-center text-sm text-carbon/65">
              Fill this in and it opens a text to the shop, already written. You
              hit send.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className={labelClass} htmlFor="cater-name">
                  Your name
                </label>
                <input
                  id="cater-name"
                  className={`${fieldClass} mt-1.5`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Who are we cooking for?"
                  autoComplete="name"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="cater-date">
                    Date
                  </label>
                  <input
                    id="cater-date"
                    type="date"
                    className={`${fieldClass} mt-1.5`}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="cater-guests">
                    How many people
                  </label>
                  <input
                    id="cater-guests"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    className={`${fieldClass} mt-1.5`}
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder="25"
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="cater-type">
                  Occasion
                </label>
                <select
                  id="cater-type"
                  className={`${fieldClass} mt-1.5`}
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  {catering.eventTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="cater-details">
                  What are you thinking?
                </label>
                <textarea
                  id="cater-details"
                  rows={3}
                  className={`${fieldClass} mt-1.5 resize-none`}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Trays of mac attack, chicken, rice and beans…"
                />
              </div>

              <a
                href={smsHref}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-carbon px-6 py-4 text-base font-bold text-cream transition-colors hover:bg-carbon-soft"
              >
                Text this to the shop
              </a>
              <p className="text-center text-xs text-carbon/50">
                Opens your own messages app — nothing sends until you hit send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
