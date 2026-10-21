import type { AnchorHTMLAttributes } from "react";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel"> & { href: string };

/** Enlace externo: siempre en otra pestaña y con rel="noopener noreferrer" (RESUMEN §5). */
export function ExternalLink({ children, ...props }: Props) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
