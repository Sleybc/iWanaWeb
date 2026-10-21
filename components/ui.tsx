import type { ReactNode } from "react";

// Primitivas del lienzo. Regla de radios Firma iWana: botones en píldora,
// superficies de 24 px, controles internos de 16 px.

export type ButtonVariant = "primary" | "ghost" | "lime" | "onnavy";

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-cta text-cta-text shadow-xs hover:bg-cta-hover hover:text-cta-text",
  ghost:
    "border-sec-border bg-sec-bg text-sec-text hover:border-sec-hover-border hover:bg-sec-hover-bg hover:text-sec-text",
  // Lima relleno solo sobre franjas azul noche (RESUMEN §3, decisión 5).
  lime: "border-transparent bg-iwana-secondary text-iwana-primary hover:bg-iwana-secondary-400 hover:text-iwana-primary",
  onnavy: "border-white/45 bg-transparent text-white hover:border-white hover:text-white",
};

/** Clases de botón para usar en <a> o <button>. */
export function buttonClass(variant: ButtonVariant = "primary", size: "md" | "sm" = "md") {
  const sizing = size === "sm" ? "min-h-11 px-[22px] text-[15px]" : "min-h-12 px-7 text-base";
  return `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill border font-semibold no-underline transition-colors cursor-pointer ${sizing} ${BUTTON_VARIANTS[variant]}`;
}

/** Superficie de 24 px: sombra azulada en claro, borde #383838 en oscuro. Sirve en div, li o article. */
export const cardClass = "rounded-surface border border-card-border bg-card shadow-card";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.14em] text-muted before:h-0.5 before:w-7 before:rounded-sm before:bg-accent before:content-['']">
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  className = "mb-10",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-[clamp(1.75rem,1.2rem+1.8vw,2.25rem)] font-bold leading-[1.15] tracking-[-.024em]">
        {title}
      </h2>
      {lead ? <p className="mt-3.5 max-w-[620px] text-[1.0625rem] text-muted">{lead}</p> : null}
    </div>
  );
}

/** Ícono de trazo con el path del lienzo. */
export function Icon({ d, className = "", children }: { d?: string; className?: string; children?: ReactNode }) {
  return (
    <svg className={`ico ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      {d ? <path d={d} /> : null}
      {children}
    </svg>
  );
}

/** Texto solo para lectores de pantalla. */
export function SrOnly({ children }: { children: ReactNode }) {
  return <span className="sr-only">{children}</span>;
}

/** Dato pendiente de confirmar por iWana, visible a propósito (CLAUDE.md: nada se inventa). */
export function Pending({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-[6px] bg-warn-bg px-2 text-[.92em] font-semibold text-warn-text">
      [{children}]
    </span>
  );
}
