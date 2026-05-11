import Link from "next/link";
import { classNames } from "@/lib/class-names";

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  /** Contraste quando o botão está sobre fundo escuro (ex.: hero editorial). */
  appearance?: "default" | "onDark";
  /** Compacto: menos altura, mais alongado (ex.: header refinado). */
  size?: "default" | "compact";
};

export function ButtonLink({
  href,
  label,
  variant = "primary",
  appearance = "default",
  size = "default",
}: ButtonLinkProps) {
  const isOnDark = appearance === "onDark";
  const isCompact = size === "compact";

  return (
    <Link
      href={href}
      className={classNames(
        "inline-flex items-center justify-center rounded-full text-sm font-medium transition",
        !isCompact && "h-11 px-6 tracking-[0.02em]",
        isCompact &&
          "h-auto min-h-[44px] px-4 py-2.5 text-[11px] leading-none tracking-[0.02em] md:min-h-0 md:px-7 md:py-3.5 md:text-sm",
        variant === "primary" &&
          (isOnDark
            ? "bg-neutral-50 text-neutral-950 hover:bg-white"
            : "bg-neutral-900 text-neutral-50 hover:bg-neutral-700"),
        variant === "secondary" &&
          (isOnDark
            ? "border border-white/20 bg-transparent font-normal tracking-wide text-stone-100 shadow-none hover:bg-white/5 hover:border-white/35"
            : "border border-neutral-400 text-neutral-900 hover:border-neutral-900"),
      )}
    >
      {label}
    </Link>
  );
}
