import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { homeMetadata } from "@/config/seo";
import "@/styles/globals.css";

export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          as="image"
          href="/Hero@0,5x.webp"
          type="image/webp"
          media="(max-width: 639px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/Hero@0,75x.webp"
          type="image/webp"
          media="(min-width: 640px) and (max-width: 1023px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/Hero1X.webp"
          type="image/webp"
          media="(min-width: 1024px)"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-neutral-900 antialiased">
        <SiteHeader />
        <main className="min-w-0 overflow-x-clip">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
