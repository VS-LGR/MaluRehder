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
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-[#fbfaf7]/95 backdrop-blur">
      <div className="mx-auto flex min-h-[64px] w-full max-w-6xl items-center justify-between gap-x-3 px-4 py-2 lg:h-[72px] lg:min-h-0 lg:gap-x-6 lg:px-6 lg:py-0">
        <Link href="/" className="shrink-0 font-serif text-base tracking-[0.07em] text-neutral-900 md:text-lg md:tracking-[0.08em]">
          MALU REHDER
        </Link>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-6">
          <nav
            aria-label="Navegação principal"
            className="flex items-center gap-x-5 text-xs uppercase tracking-[0.14em] text-neutral-500"
          >
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-neutral-900">
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink
            href={consultationWhatsAppCta.href}
            label={consultationWhatsAppCta.label}
            size="compact"
          />
        </div>
        <button
          type="button"
          className="inline-flex h-9 items-center justify-center rounded-full border border-neutral-300 bg-white px-3 text-[11px] uppercase tracking-[0.12em] text-neutral-700 lg:hidden"
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
          className="border-t border-neutral-200/80 bg-[#fbfaf7] px-4 pb-4 pt-3 lg:hidden"
        >
          <nav aria-label="Navegação mobile" className="grid grid-cols-2 gap-2 text-[11px] uppercase tracking-[0.13em] text-neutral-600">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-neutral-200 bg-white px-3 py-2 transition hover:border-neutral-400 hover:text-neutral-900"
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
            />
          </div>
        </div>
      ) : null}
    </header>
  );
}
