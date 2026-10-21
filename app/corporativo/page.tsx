import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cardClass, Eyebrow, Icon } from "@/components/ui";
import { INTERNAL_PORTALS, ROUTES } from "@/lib/constants";
import { ICONS } from "@/lib/icons";

// Accesos rápidos del equipo de iWana. No aparece en el menú ni en el pie, y
// pide a los buscadores no indexarla. Solo enlaces: cada portal tiene su propio
// inicio de sesión y este sitio no guarda ni pide credenciales.

export const metadata: Metadata = {
  title: "Portales corporativos",
  robots: { index: false, follow: false, nocache: true },
};

const PORTAL_ICONS: Record<(typeof INTERNAL_PORTALS)[number]["name"], string> = {
  Siigo: ICONS.receipt,
  WispHub: ICONS.users,
  Correo: ICONS.mail,
  UISP: ICONS.antenna,
  AdminOLT: "M4 4h16v6H4ZM4 14h16v6H4ZM8 7h.01M8 17h.01",
};

export default function CorporativoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-alt pt-10 pb-12">
          <div className="wrap">
            <Eyebrow>Uso exclusivo del equipo de iWana</Eyebrow>
            <h1 className="mt-4 text-[clamp(2rem,1.3rem+2.8vw,3rem)] font-bold leading-[1.08] tracking-[-.03em]">
              Portales corporativos
            </h1>
            <p className="mt-3.5 max-w-[620px] text-[1.0625rem] text-muted">
              Accesos rápidos a las herramientas internas. Cada portal pide su propio usuario y contraseña.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="wrap">
            <ul className="m-0 grid list-none gap-5 p-0 min-[640px]:grid-cols-2 min-[960px]:grid-cols-3">
              {INTERNAL_PORTALS.map((portal) => (
                <li key={portal.name}>
                  <ExternalLink
                    href={portal.href}
                    className={`${cardClass} group flex h-full items-center gap-4 p-6 no-underline transition-colors hover:border-sec-hover-border`}
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-pill bg-badge-bg text-badge-text">
                      <Icon>
                        <path d={PORTAL_ICONS[portal.name]} />
                        {portal.name === "UISP" ? <circle cx="12" cy="9" r="2" /> : null}
                      </Icon>
                    </span>
                    <span className="min-w-0 flex-1">
                      <strong className="block text-lg font-bold">{portal.name}</strong>
                      <span className="block text-sm text-muted">{portal.description}</span>
                    </span>
                    <Icon d={ICONS.external} className="size-4 text-muted group-hover:text-text" />
                    <span className="sr-only">(se abre en otra pestaña)</span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">
              ¿Eres cliente y buscas ayuda?{" "}
              <Link href={ROUTES.contacto} className="font-semibold text-accent-text">
                Ve a Contacto
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
