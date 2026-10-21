import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { buttonClass, cardClass, Eyebrow, Icon, SectionHead } from "@/components/ui";
import { INTERNAL_PORTALS, ROUTES, waLink } from "@/lib/constants";
import { ICONS } from "@/lib/icons";

// Accesos rápidos del equipo de iWana, con el mismo patrón de las demás
// subpáginas (ruta, titular con acento, sección de tarjetas y franja final).
// Se enlaza desde el ícono de candado de la cabecera y el pie, y pide a los
// buscadores no indexarla. Solo enlaces: cada portal tiene su propio inicio de
// sesión y este sitio no guarda ni pide credenciales.

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
      <Header current="corporativo" />
      <main>
        <section className="bg-bg-alt pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-18">
          <div className="wrap">
            <nav aria-label="Ruta" className="flex items-center gap-2 text-[13px] text-muted">
              <Link href={ROUTES.inicio} className="no-underline hover:underline">
                Inicio
              </Link>
              <span aria-hidden="true">/</span>
              <span>Portales corporativos</span>
            </nav>
            <div className="mt-6">
              <Eyebrow>Uso exclusivo del equipo de iWana</Eyebrow>
            </div>
            <h1 className="mt-5 text-[clamp(2.5rem,1.4rem+4.2vw,4.25rem)] font-bold leading-[1.02] tracking-[-.035em]">
              Portales <em className="not-italic text-accent-text">corporativos.</em>
            </h1>
            <p className="mt-[22px] max-w-[600px] text-[1.1875rem] text-muted">
              Accesos rápidos a las herramientas internas de iWana, en un solo lugar.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="wrap">
            <SectionHead eyebrow="Herramientas" title="Elige el portal." />
            <ul className="m-0 grid list-none gap-5 p-0 min-[640px]:grid-cols-2 min-[960px]:grid-cols-3">
              {INTERNAL_PORTALS.map((portal) => (
                <li key={portal.name}>
                  <ExternalLink
                    href={portal.href}
                    className={`${cardClass} group flex h-full items-center gap-4 p-5 no-underline transition-colors hover:border-sec-hover-border min-[640px]:p-7`}
                  >
                    <span className="grid size-[52px] shrink-0 place-items-center rounded-pill bg-badge-bg text-badge-text">
                      <Icon>
                        <path d={PORTAL_ICONS[portal.name]} />
                        {portal.name === "UISP" ? <circle cx="12" cy="9" r="2" /> : null}
                      </Icon>
                    </span>
                    <span className="min-w-0 flex-1">
                      <strong className="block text-xl font-bold tracking-[-.01em]">{portal.name}</strong>
                      <span className="mt-0.5 block text-[15px] text-muted">{portal.description}</span>
                    </span>
                    <span className="grid size-10 shrink-0 place-items-center rounded-pill border border-sec-border text-sec-text transition-colors group-hover:border-sec-hover-border group-hover:bg-sec-hover-bg">
                      <Icon d={ICONS.external} className="size-4" />
                    </span>
                    <span className="sr-only">(se abre en otra pestaña)</span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
            <p role="note" className="mt-6 flex max-w-[760px] items-start gap-2.5 text-[15px] text-muted">
              <Icon d={ICONS.lock} className="mt-[3px] size-4 text-accent-text" />
              <span>
                Cada portal pide su propio usuario y contraseña. No las compartas ni las dejes guardadas en equipos de
                uso público.
              </span>
            </p>
          </div>
        </section>

        <section className="bg-deep py-16 text-white">
          <div className="wrap flex flex-col gap-7 min-[960px]:flex-row min-[960px]:items-center min-[960px]:justify-between">
            <div className="min-w-0">
              <h2 className="max-w-[640px] text-[clamp(2rem,1.3rem+2.4vw,3rem)] font-bold leading-[1.05] tracking-[-.03em] text-balance">
                ¿Eres cliente y buscas ayuda?
              </h2>
              <p className="mt-3 max-w-[620px] text-lg text-iwana-primary-200">
                Esta página es para el equipo de iWana. Te atendemos por nuestros canales de servicio.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[640px]:flex-row min-[640px]:flex-wrap min-[960px]:shrink-0">
              <ExternalLink href={waLink("soporte")} className={`${buttonClass("lime")} w-full min-[640px]:w-auto`}>
                <Icon d={ICONS.whatsapp} className="size-4" />
                Soporte por WhatsApp
              </ExternalLink>
              <Link href={ROUTES.contacto} className={`${buttonClass("onnavy")} w-full min-[640px]:w-auto`}>
                Otros canales
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
