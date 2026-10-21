import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OfficeCard } from "@/components/OfficeCard";
import { buttonClass, cardClass, Eyebrow, Icon } from "@/components/ui";
import {
  COVERAGE,
  EMAIL,
  OFFICES,
  PBX_DISPLAY,
  PBX_TEL,
  ROUTES,
  WHATSAPP_DISPLAY,
  waLink,
} from "@/lib/constants";
import { ICONS } from "@/lib/icons";

// Fuente: diseno/claude-design/Contacto.dc.html. Sin formulario (RESUMEN §3,
// decisión 12): los motivos abren WhatsApp con un texto fijo.

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos por WhatsApp, llámanos o visítanos en El Colegio, San Antonio del Tequendama y Tena.",
};

const chipClass =
  "inline-flex min-h-11 items-center gap-2 rounded-pill border border-sec-border bg-sec-bg px-[18px] text-[15px] font-semibold text-sec-text no-underline transition-colors hover:border-sec-hover-border hover:bg-sec-hover-bg hover:text-sec-text";
const channelValueClass =
  "break-words text-[clamp(1.375rem,1.1rem+.9vw,1.75rem)] font-bold tracking-[-.02em] no-underline hover:underline";

export default function ContactoPage() {
  return (
    <>
      <Header current="contacto" />
      <main>
        <section className="bg-bg-alt pt-10 pb-24">
          <div className="wrap">
            <nav aria-label="Ruta" className="flex items-center gap-2 text-[13px] text-muted">
              <Link href={ROUTES.inicio} className="no-underline hover:underline">
                Inicio
              </Link>
              <span aria-hidden="true">/</span>
              <span>Contacto</span>
            </nav>
            <div className="mt-7">
              <Eyebrow>Contacto</Eyebrow>
            </div>
            <h1 className="mt-4 text-[clamp(2.25rem,1.4rem+3.4vw,3.5rem)] font-bold leading-[1.04] tracking-[-.035em]">
              Estamos para <em className="not-italic text-accent-text">ayudarte.</em>
            </h1>
            <p className="mt-3.5 max-w-[620px] text-[1.0625rem] text-muted">
              Escríbenos, llámanos o visítanos en el punto de atención más cercano.
            </p>

            <div className="mt-10 grid gap-5 min-[900px]:grid-cols-[1.25fr_1fr_1fr]">
              <article className="flex flex-col gap-2.5 rounded-surface border border-card-border bg-card p-7 shadow-card-hi">
                <div className="grid size-[52px] place-items-center rounded-pill bg-cta text-cta-text">
                  <Icon d={ICONS.whatsapp} />
                </div>
                <h2 className="mt-2 text-lg font-semibold text-muted">Escríbenos por WhatsApp</h2>
                <ExternalLink href={waLink("contacto")} className={channelValueClass}>
                  {WHATSAPP_DISPLAY}
                </ExternalLink>
                <p className="flex-1 text-sm text-muted">
                  Nuestro WhatsApp oficial. Es el canal más rápido para ventas, soporte y facturas.
                </p>
                <ExternalLink href={waLink("contacto")} className={`${buttonClass("primary")} mt-2 self-start`}>
                  Abrir WhatsApp
                </ExternalLink>
              </article>
              <article className={`${cardClass} flex flex-col gap-2.5 p-7`}>
                <div className="grid size-[52px] place-items-center rounded-pill bg-badge-bg text-badge-text">
                  <Icon d={ICONS.phone} />
                </div>
                <h2 className="mt-2 text-lg font-semibold text-muted">Llámanos</h2>
                <a href={`tel:${PBX_TEL}`} className={channelValueClass}>
                  {PBX_DISPLAY}
                </a>
                <p className="flex-1 text-sm text-muted">Línea PBX.</p>
                <a href={`tel:${PBX_TEL}`} className={`${buttonClass("ghost")} mt-2 self-start`}>
                  Llamar
                </a>
              </article>
              <article className={`${cardClass} flex flex-col gap-2.5 p-7`}>
                <div className="grid size-[52px] place-items-center rounded-pill bg-badge-bg text-badge-text">
                  <Icon d={ICONS.mail} />
                </div>
                <h2 className="mt-2 text-lg font-semibold text-muted">Escríbenos un correo</h2>
                <a href={`mailto:${EMAIL}`} className={channelValueClass}>
                  {EMAIL}
                </a>
                <p className="flex-1 text-sm text-muted">Para trámites que necesiten un registro escrito.</p>
                <a href={`mailto:${EMAIL}`} className={`${buttonClass("ghost")} mt-2 self-start`}>
                  Enviar correo
                </a>
              </article>
            </div>

            {/* Aviso antifraude (RESUMEN §5). */}
            <p role="note" className="mt-5 flex items-start gap-2.5 text-sm text-muted">
              <Icon d={ICONS.shield} className="mt-0.5 size-4 text-accent-text" />
              <span>
                <strong className="font-semibold text-text">Nuestro único WhatsApp oficial es el{" "}
                  <span className="whitespace-nowrap">{WHATSAPP_DISPLAY}</span>.
                </strong>{" "}
                iWana nunca te pedirá claves, códigos del banco ni datos de tarjeta.
              </span>
            </p>

            <div
              role="group"
              aria-label="Escríbenos según tu motivo"
              className={`${cardClass} mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 px-7 py-6`}
            >
              <strong className="mr-1 font-bold">¿Por qué nos escribes?</strong>
              <ExternalLink href={waLink("contratar")} className={chipClass}>
                <Icon d={ICONS.home} className="size-4 text-accent-text" />
                Quiero contratar
              </ExternalLink>
              <ExternalLink href={waLink("falla")} className={chipClass}>
                <Icon d={ICONS.wrench} className="size-4 text-accent-text" />
                Tengo una falla
              </ExternalLink>
              <ExternalLink href={waLink("factura")} className={chipClass}>
                <Icon d={ICONS.receipt} className="size-4 text-accent-text" />
                Mi factura
              </ExternalLink>
              <Link href={ROUTES.pagar} className={chipClass}>
                <Icon d={ICONS.card} className="size-4 text-accent-text" />
                Pagar factura
              </Link>
              <Link href={ROUTES.test} className={chipClass}>
                <Icon d={ICONS.gauge} className="size-4 text-accent-text" />
                Test de velocidad
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted">
              Los datos que nos compartas por estos canales se tratarán según nuestra{" "}
              <Link href={ROUTES.privacidad} className="font-semibold text-accent-text">
                Política de tratamiento de datos
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="puntos" className="scroll-mt-20 py-22">
          <div className="wrap">
            <div className="mb-10">
              <Eyebrow>Puntos de atención</Eyebrow>
              <h2 className="mt-3 text-[clamp(1.75rem,1.2rem+1.8vw,2.25rem)] font-bold leading-[1.15] tracking-[-.024em]">
                Visítanos en la región.
              </h2>
            </div>
            <div className="grid gap-6 min-[960px]:grid-cols-3">
              {OFFICES.map((office) => (
                <OfficeCard key={office.name} office={office} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg-alt py-18">
          <div className="wrap">
            <div className={`${cardClass} grid items-center gap-6 p-9 min-[900px]:grid-cols-[minmax(0,1fr)_auto]`}>
              <div>
                <Eyebrow>Cobertura</Eyebrow>
                <h2 className="mt-3 text-2xl font-bold tracking-[-.02em]">
                  ¿Aún no eres cliente? Mira si llegamos a tu zona.
                </h2>
                <div className="mt-[18px] grid gap-3.5">
                  <TownGroup title="Todo el municipio" towns={COVERAGE.municipios} rural={false} />
                  <TownGroup title="Zonas rurales" towns={COVERAGE.rurales} rural />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <ExternalLink href={waLink("viabilidad")} className={buttonClass("primary")}>
                  Ver si llegamos a mi zona
                </ExternalLink>
                <Link href="/#cobertura" className="font-semibold text-accent-text">
                  Ver el mapa de cobertura
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function TownGroup({ title, towns, rural }: { title: string; towns: readonly string[]; rural: boolean }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[.1em] text-muted">{title}</div>
      <ul className="m-0 mt-2 flex list-none flex-wrap gap-2 p-0">
        {towns.map((town) => (
          <li
            key={town}
            className="inline-flex items-center gap-2 rounded-pill bg-card-2 px-3.5 py-1.5 text-sm font-semibold"
          >
            <i
              aria-hidden="true"
              className={`size-2.5 rounded-full border-[1.5px] ${
                rural ? "border-dashed border-accent-text bg-transparent" : "border-text bg-iwana-secondary"
              }`}
            />
            {town}
          </li>
        ))}
      </ul>
    </div>
  );
}
