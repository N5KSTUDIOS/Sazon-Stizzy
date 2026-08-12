"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/site-data";
import { PhoneIcon } from "./Icons";

/**
 * Phone-only conversion bar. Most people meeting this restaurant are standing
 * somewhere deciding what to eat — the two things they need are never more
 * than a thumb away.
 */
export default function StickyOrderBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-carbon-line bg-carbon/95 px-3 pt-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2.5">
        <a
          href={business.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-pink py-3.5 text-[0.95rem] font-bold text-carbon"
        >
          <PhoneIcon className="size-4.5" />
          Call to order
        </a>
        <a
          href="#order"
          className="flex flex-1 items-center justify-center rounded-full border border-cream/30 py-3.5 text-[0.95rem] font-bold text-cream"
        >
          Order online
        </a>
      </div>
    </div>
  );
}
