"use client";

import { useState } from "react";
import Link from "next/link";
import { consultationWhatsAppCta } from "@/config/site-content";
import { ButtonLink } from "@/components/ui/ButtonLink";

const navLinks = [
  { label: "Curadoria", href: "#curadoria" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Consultoria", href: "#consultoria" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-black bg-[linear-gradient(185deg,rgba(0,0,0,1)_0%,rgba(44,42,42,1)_100%)] backdrop-blur-md [border-image:linear-gradient(90deg,rgba(38,38,38,0.5)_0%,rgba(255,255,255,1)_100%)_1]">
      <div className="mx-auto flex min-h-[64px] w-full min-w-0 max-w-6xl items-center justify-between gap-x-2 bg-[linear-gradient(185deg,rgba(26,23,20,1)_53%,rgba(44,42,42,1)_100%)] bg-clip-text text-transparent px-3 py-2 sm:gap-x-3 sm:px-4 lg:h-[72px] lg:min-h-0 lg:gap-x-6 lg:px-6 lg:py-0">
        <Link
          href="/"
          className="shrink-0 font-serif text-[0.95rem] tracking-[0.06em] text-neutral-50 sm:text-base sm:tracking-[0.07em] md:text-lg md:tracking-[0.08em]"
        >
          MALU REHDER
        </Link>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-6">
          <nav
            aria-label="Navegação principal"
            className="flex items-center gap-x-5 text-xs uppercase tracking-[0.14em] text-neutral-300"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap transition hover:text-neutral-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink
            href={consultationWhatsAppCta.href}
            label={consultationWhatsAppCta.label}
            size="compact"
            appearance="onDark"
          />
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-neutral-700 bg-white/5 px-3 text-[11px] uppercase tracking-[0.12em] text-neutral-200 lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
        >
          Menu
        </button>
      </div>
      {menuOpen ? (
        <div
          id="mobile-nav-panel"
          className="border-t border-neutral-700/55 bg-gradient-to-b from-[#2a2b31] to-[#16171c] px-4 pb-4 pt-3 lg:hidden"
        >
          <nav
            aria-label="Navegação mobile"
            className="grid grid-cols-2 gap-2 text-[11px] uppercase tracking-[0.13em] text-neutral-300"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center justify-center rounded-lg border border-neutral-700 bg-white/5 px-3 py-2 text-center transition hover:border-neutral-600 hover:text-neutral-50"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3">
            <ButtonLink
              href={consultationWhatsAppCta.href}
              label={consultationWhatsAppCta.label}
              size="compact"
              appearance="onDark"
            />
          </div>
        </div>
      ) : null}
    </header>
  );
}
