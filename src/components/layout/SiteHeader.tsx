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
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-[#fbfaf7]/95 backdrop-blur">
      <div className="mx-auto flex min-h-[68px] w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-2.5 md:h-[72px] md:min-h-0 md:flex-nowrap md:py-0">
        <Link href="/" className="shrink-0 font-serif text-lg tracking-[0.08em] text-neutral-900">
          MALU REHDER
        </Link>
        <nav
          aria-label="Navegação principal"
          className="order-3 flex w-full flex-wrap gap-x-5 gap-y-1 text-[11px] uppercase tracking-[0.14em] text-neutral-500 md:order-none md:ml-auto md:mr-6 md:flex-1 md:justify-end md:text-xs"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto shrink-0 md:ml-0">
          <ButtonLink
            href={consultationWhatsAppCta.href}
            label={consultationWhatsAppCta.label}
            size="compact"
          />
        </div>
      </div>
    </header>
  );
}
