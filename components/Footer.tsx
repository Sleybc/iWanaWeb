import Link from "next/link";
import { EMAIL, INTEREST_LINKS, LEGAL_NAME, PBX_DISPLAY, PBX_TEL, ROUTES, WHATSAPP_DISPLAY, waLink } from "@/lib/constants";
import { Brand } from "./Brand";
import { ICONS } from "@/lib/icons";
import { ExternalLink } from "./ExternalLink";
import { Icon } from "./ui";

const COLUMNS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Clientes",
    links: [
      { label: "Pagar mi factura", href: ROUTES.pagar },
      { label: "Pedir soporte", href: waLink("soporte"), external: true },
      { label: "Medir velocidad", href: ROUTES.test },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Nuestra empresa", href: ROUTES.empresa },
      { label: "Contacto", href: ROUTES.contacto },
      { label: "Política de datos", href: ROUTES.privacidad },
    ],
  },
];

const headingClass = "mb-3.5 text-xs font-bold uppercase tracking-[.12em] text-muted";
const linkClass = "no-underline hover:underline";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-alt pt-14 pb-7 text-sm print:hidden">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Brand />
            <ul className="m-0 mt-4 list-none space-y-2.5 p-0 text-muted">
              <li>
                <ExternalLink href={waLink("contacto")} className="inline-flex min-h-7 items-center gap-2 no-underline hover:underline">
                  <Icon d={ICONS.whatsapp} className="size-4 text-accent-text" />
                  WhatsApp {WHATSAPP_DISPLAY}
                </ExternalLink>
              </li>
              <li>
                <a href={`tel:${PBX_TEL}`} className="inline-flex min-h-7 items-center gap-2 no-underline hover:underline">
                  <Icon d={ICONS.phone} className="size-4 text-accent-text" />
                  Teléfono {PBX_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex min-h-7 items-center gap-2 no-underline hover:underline">
                  <Icon d="M3 5h18v14H3ZM3 5l9 7 9-7" className="size-4 text-accent-text" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className={headingClass}>{col.title}</h3>
              <ul className="m-0 list-none space-y-2.5 p-0">
                {col.links.map((l) => (
                  <li key={l.href}>
                    {l.external ? (
                      <ExternalLink href={l.href} className={linkClass}>{l.label}</ExternalLink>
                    ) : (
                      <Link href={l.href} className={linkClass}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 md:col-span-1">
            <h3 className={headingClass}>Sitios de interés</h3>
            <ul className="m-0 list-none space-y-2.5 p-0">
              {INTEREST_LINKS.map((l) => (
                <li key={l.href}>
                  <ExternalLink href={l.href} className={linkClass}>
                    {l.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start gap-3 md:mt-10 md:flex-row md:flex-wrap md:justify-between border-t border-line pt-5 text-[13px] text-muted">
          <span>© 2026 · {LEGAL_NAME}</span>
          <span>Provincia del Tequendama · Cundinamarca</span>
          {/* Acceso del equipo a /corporativo/ (página con noindex): visible pero discreto. */}
          <Link
            href={ROUTES.corporativo}
            className="inline-flex items-center gap-1.5 text-muted no-underline hover:text-text hover:underline"
          >
            <Icon d={ICONS.lock} className="size-3.5 text-accent-text" />
            Acceso colaboradores
          </Link>
        </div>
      </div>
    </footer>
  );
}
