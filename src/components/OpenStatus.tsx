"use client";

import { useEffect, useState } from "react";
import { getOpenStatus, type OpenStatus as Status } from "@/lib/hours";

/**
 * "Are they open right now?" is the single most asked question a restaurant
 * site answers. Computed on the client so the server render can be cached and
 * the answer is never stale — and always in the restaurant's own timezone.
 */
export default function OpenStatus({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(getOpenStatus());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) {
    // Reserve the space so nothing jumps when the real answer arrives.
    return <span className={`inline-block h-9 w-44 ${className}`} aria-hidden />;
  }

  const dotColor = status.isOpen
    ? status.closingSoon
      ? "bg-pink"
      : "bg-leaf"
    : "bg-pink-deep";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3.5 py-2 text-sm font-semibold text-cream ${className}`}
    >
      <span className="relative flex size-2.5">
        {status.isOpen && (
          <span
            className={`absolute inline-flex size-full animate-ping rounded-full opacity-70 ${dotColor}`}
          />
        )}
        <span className={`relative inline-flex size-2.5 rounded-full ${dotColor}`} />
      </span>
      {status.label}
    </span>
  );
}
