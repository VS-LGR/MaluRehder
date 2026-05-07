import Link from "next/link";
import { instagramLink, siteFooterCopy } from "@/config/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-10 text-neutral-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm md:flex-row md:items-start md:justify-between">
        <div className="space-y-1">
          <p>{siteFooterCopy.line1}</p>
          <p className="text-neutral-400">{siteFooterCopy.line2}</p>
        </div>
        <Link
          href={instagramLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 underline decoration-white/15 underline-offset-4 transition hover:text-neutral-200 hover:decoration-white/35"
        >
          Instagram · {instagramLink.handle}
        </Link>
      </div>
    </footer>
  );
}
