import Link from "next/link";
import { ROUTES, waLink } from "@/lib/constants";
import { Brand } from "./Brand";
import { ExternalLink } from "./ExternalLink";
import { MobileMenu } from "./MobileMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { buttonClass } from "./ui";

export type NavItem = { key: string; label: string; href: string };

// Navegación de las páginas internas, en la versión de Contacto, Empresa y
// Privacidad del lienzo (la más reciente). Planes enlaza a su sección de la portada.
const SUBPAGE_NAV: NavItem[] = [
  { key: "inicio", label: "Inicio", href: ROUTES.inicio },
  { key: "planes", label: "Planes", href: "/#planes" },
  { key: "pagar", label: "Pagar factura", href: ROUTES.pagar },
  { key: "test", label: "Test de velocidad", href: ROUTES.test },
  { key: "contacto", label: "Contacto", href: ROUTES.contacto },
];

// El menú móvil del lienzo añade «Nuestra empresa» antes de Contacto.
const MOBILE_NAV: NavItem[] = [
  ...SUBPAGE_NAV.slice(0, 4),
  { key: "empresa", label: "Nuestra empresa", href: ROUTES.empresa },
  SUBPAGE_NAV[4],
];

export function Header({ current }: { current?: string }) {
  const cta = (
    <ExternalLink href={waLink("contratar")} className={buttonClass("primary")}>
      Solicitar servicio
    </ExternalLink>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg">
      <div className="wrap relative">
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <Brand />
          <nav aria-label="Principal" className="hidden gap-[30px] min-[1080px]:flex">
            {SUBPAGE_NAV.map((item) => {
              const cur = item.key === current;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={cur ? "page" : undefined}
                  className={`whitespace-nowrap text-sm font-semibold no-underline hover:text-text ${
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
            <div className="hidden min-[1080px]:inline-flex">{cta}</div>
            <MobileMenu items={MOBILE_NAV} current={current} cta={cta} />
          </div>
        </div>
      </div>
    </header>
  );
}
