"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-wide items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          className="font-display text-[0.95rem] font-semibold tracking-tight text-ink"
        >
          Dalia Shabana
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.links.email}
            className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Contact Me
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-line bg-paper px-6 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.links.email}
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-md bg-ink px-4 py-3 text-center text-sm font-medium text-paper"
          >
            Contact Me
          </a>
        </nav>
      )}
    </header>
  );
}
