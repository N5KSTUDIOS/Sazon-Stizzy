"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { business, nav, photos } from "@/lib/site-data";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Don't let the page scroll behind the open mobile panel.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-carbon-line bg-carbon/95 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src={photos.logoMark}
            alt=""
            width={420}
            height={420}
            priority
            className="size-11 rounded-full ring-2 ring-pink/60 sm:size-12"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.3rem] font-semibold tracking-tight text-cream sm:text-[1.45rem]">
              Sazon <span className="text-pink">Stizzy</span>
            </span>
            <span className="mt-1 text-[0.6rem] font-bold tracking-[0.2em] text-cream/55 uppercase">
              {business.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-cream/80 transition-colors hover:text-pink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-pink px-5 py-2.5 text-sm font-bold text-carbon transition-colors hover:bg-pink-deep sm:inline-flex"
          >
            <PhoneIcon className="size-4" />
            {business.phone}
          </a>
          <a
            href="#order"
            className="hidden rounded-full border border-cream/30 px-5 py-2.5 text-sm font-bold text-cream transition-colors hover:border-sky hover:text-sky lg:inline-flex"
          >
            Order online
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-cream lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-carbon-line bg-carbon px-4 pt-2 pb-8 sm:px-6 lg:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display block border-b border-carbon-line py-4 text-2xl font-semibold text-cream"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center rounded-full bg-pink px-6 py-4 text-base font-bold text-carbon"
          >
            Order online
          </a>
          <a
            href={business.phoneHref}
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-4 text-base font-bold text-cream"
          >
            <PhoneIcon className="size-5" />
            Call {business.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
