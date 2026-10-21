import Link from "next/link";
import { ROUTES, waLink } from "@/lib/constants";
import { ICONS } from "@/lib/icons";
import { Brand } from "./Brand";
import { ExternalLink } from "./ExternalLink";
import { MobileMenu } from "./MobileMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { buttonClass, Icon } from "./ui";

export type NavItem = { key: string; label: string; href: string };

// Acceso del equipo a /corporativo/: ícono en la cabecera y última opción del menú móvil.
const STAFF_ITEM: NavItem = { key: "corporativo", label: "Acceso colaboradores", href: ROUTES.corporativo };

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
  STAFF_ITEM,
];

// Portada: la navegación salta a sus secciones; «Pagar factura» queda destacado.
const HOME_NAV: NavItem[] = [
  { key: "como-funciona", label: "Cómo funciona", href: "#como-funciona" },
  { key: "tecnologias", label: "Tecnologías", href: "#tecnologias" },
  { key: "planes", label: "Planes", href: "#planes" },
  { key: "cobertura", label: "Cobertura", href: "#cobertura" },
  { key: "pagar", label: "Pagar factura", href: ROUTES.pagar },
];

const HOME_MOBILE_NAV: NavItem[] = [
  ...HOME_NAV.slice(0, 4),
  { key: "puntos", label: "Puntos de atención", href: "#puntos" },
  { key: "empresa", label: "Nuestra empresa", href: ROUTES.empresa },
  { key: "contacto", label: "Contacto", href: ROUTES.contacto },
  { key: "pagar", label: "Pagar factura", href: ROUTES.pagar },
  { key: "test", label: "Test de velocidad", href: ROUTES.test },
  STAFF_ITEM,
];

export function Header({ current, variant = "page" }: { current?: string; variant?: "page" | "home" }) {
  const home = variant === "home";
  const nav = home ? HOME_NAV : SUBPAGE_NAV;
  const cta = (
    <ExternalLink href={waLink("contratar")} className={buttonClass("primary")}>
      Solicitar servicio
    </ExternalLink>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg print:hidden">
      <div className="wrap relative">
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <Brand />
          <nav aria-label="Principal" className="hidden gap-[30px] min-[1080px]:flex">
            {nav.map((item) => {
              const cur = item.key === current;
              const pay = home && item.key === "pagar";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={cur ? "page" : undefined}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold no-underline hover:text-text ${
                    cur
                      ? "text-text underline decoration-accent decoration-2 underline-offset-8"
                      : pay
                        ? "text-text"
                        : "text-muted"
                  }`}
                >
                  {pay ? <Icon d={ICONS.card} className="size-4 text-accent-text" /> : null}
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href={ROUTES.corporativo}
              aria-label="Acceso colaboradores"
              title="Acceso colaboradores"
              aria-current={current === "corporativo" ? "page" : undefined}
              className={`hidden size-11 place-items-center rounded-pill no-underline hover:bg-icon-hover min-[640px]:grid ${
                current === "corporativo" ? "bg-icon-hover text-text" : "text-muted hover:text-text"
              }`}
            >
              <Icon d={ICONS.lock} />
            </Link>
            <ThemeSwitcher />
            <div className="hidden min-[1080px]:inline-flex">{cta}</div>
            <MobileMenu items={home ? HOME_MOBILE_NAV : MOBILE_NAV} current={current} cta={cta} />
          </div>
        </div>
      </div>
    </header>
  );
}
