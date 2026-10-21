import Link from "next/link";
import { EMAIL, INTEREST_LINKS, LEGAL_NAME, PBX_DISPLAY, ROUTES, WHATSAPP_DISPLAY } from "@/lib/constants";
import { Brand } from "./Brand";
import { ExternalLink } from "./ExternalLink";

const COLUMNS = [
  {
    title: "Clientes",
    links: [
      { label: "Pagar factura", href: ROUTES.pagar },
      { label: "Test de velocidad", href: ROUTES.test },
    ],
  },
  {
    title: "iWana",
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
    <footer className="border-t border-line bg-bg-alt pt-14 pb-7 text-sm">
      <div className="wrap">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Brand />
            <p className="mt-4 max-w-80 text-muted">
              WhatsApp {WHATSAPP_DISPLAY} · PBX {PBX_DISPLAY} · {EMAIL}
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className={headingClass}>{col.title}</h3>
              <ul className="m-0 list-none space-y-2.5 p-0">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
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
        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-line pt-5 text-[13px] text-muted">
          <span>Copyright © 2026 · {LEGAL_NAME}</span>
          <span>Provincia del Tequendama · Cundinamarca</span>
        </div>
      </div>
    </footer>
  );
}
