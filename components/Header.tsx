import Link from "next/link";
import { ROUTES, waLink } from "@/lib/constants";
import { Brand } from "./Brand";
import { ExternalLink } from "./ExternalLink";
import { MobileMenu } from "./MobileMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { buttonClass } from "./ui";

export type NavItem = { key: string; label: string; href: string };

// Navegación de las páginas internas del lienzo. En el lienzo, Planes y
// Cobertura enlazan a Main.dc.html; aquí van a su sección de la portada.
const SUBPAGE_NAV: NavItem[] = [
  { key: "inicio", label: "Inicio", href: ROUTES.inicio },
  { key: "planes", label: "Planes", href: "/#planes" },
  { key: "cobertura", label: "Cobertura", href: "/#cobertura" },
  { key: "pagar", label: "Pagar factura", href: ROUTES.pagar },
  { key: "test", label: "Test de velocidad", href: ROUTES.test },
];

export function Header({ current }: { current?: string }) {
  const cta = (
    <ExternalLink href={waLink("general")} className={buttonClass("primary")}>
      Solicitar servicio
    </ExternalLink>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg">
      <div className="wrap relative">
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <Brand />
          <nav aria-label="Principal" className="hidden gap-[30px] min-[960px]:flex">
            {SUBPAGE_NAV.map((item) => {
              const cur = item.key === current;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={cur ? "page" : undefined}
                  className={`text-sm font-semibold no-underline hover:text-text ${
                    cur ? "text-text underline decoration-accent decoration-2 underline-offset-8" : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <div className="hidden min-[960px]:inline-flex">{cta}</div>
            <MobileMenu items={SUBPAGE_NAV} current={current} cta={cta} />
          </div>
        </div>
      </div>
    </header>
  );
}
