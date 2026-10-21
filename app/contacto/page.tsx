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
  "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-pill border border-sec-border bg-sec-bg px-[18px] text-[15px] font-semibold text-sec-text no-underline transition-colors hover:border-sec-hover-border hover:bg-sec-hover-bg hover:text-sec-text min-[640px]:w-auto";
const channelValueClass =
  "break-words text-[clamp(1.375rem,1.1rem+.9vw,1.75rem)] font-bold tracking-[-.02em] no-underline hover:underline";

export default function ContactoPage() {
  return (
    <>
      <Header current="contacto" />
      <main>
        <section className="bg-bg-alt pt-6 pb-14 sm:pt-10 lg:pt-12 lg:pb-18">
          <div className="wrap">
            <nav aria-label="Ruta" className="flex items-center gap-2 text-[13px] text-muted">
              <Link href={ROUTES.inicio} className="no-underline hover:underline">
                Inicio
              </Link>
              <span aria-hidden="true">/</span>
              <span>Contacto</span>
            </nav>
            <div className="mt-6">
              <Eyebrow>Contacto</Eyebrow>
            </div>
            <h1 className="mt-5 text-[clamp(2.5rem,1.4rem+4.2vw,4.25rem)] font-bold leading-[1.02] tracking-[-.035em]">
              Estamos para <em className="not-italic text-accent-text">ayudarte.</em>
            </h1>
            <p className="mt-[22px] max-w-[600px] text-[1.1875rem] text-muted">
              Escríbenos, llámanos o visítanos en el punto de atención más cercano.
            </p>

            <div className="mt-8 grid gap-6 min-[960px]:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,1fr)]">
              <article className="flex min-w-0 flex-col gap-2.5 rounded-surface border border-card-border bg-card p-5 shadow-card-hi min-[640px]:p-7">
                <div className="grid size-11 place-items-center rounded-pill bg-cta text-cta-text min-[640px]:size-[52px]">
                  <Icon d={ICONS.whatsapp} />
                </div>
                <h2 className="mt-2 text-lg font-semibold text-muted">Escríbenos por WhatsApp</h2>
                <ExternalLink href={waLink("contacto")} className={channelValueClass}>
                  {WHATSAPP_DISPLAY}
                </ExternalLink>
                <p className="flex-1 text-sm text-muted">
                  Nuestro WhatsApp oficial. Es el canal más rápido para ventas, soporte y facturas.
                </p>
                <ExternalLink href={waLink("contacto")} className={`${buttonClass("primary")} mt-2 w-full min-[640px]:w-auto min-[640px]:self-start`}>
                  Abrir WhatsApp
                </ExternalLink>
              </article>
              <article className={`${cardClass} flex min-w-0 flex-col gap-2.5 p-5 min-[640px]:p-7`}>
                <div className="grid size-11 place-items-center rounded-pill bg-badge-bg text-badge-text min-[640px]:size-[52px]">
                  <Icon d={ICONS.phone} />
                </div>
                <h2 className="mt-2 text-lg font-semibold text-muted">Llámanos</h2>
                <a href={`tel:${PBX_TEL}`} className={channelValueClass}>
                  {PBX_DISPLAY}
                </a>
                <p className="flex-1 text-sm text-muted">Línea PBX.</p>
                <a href={`tel:${PBX_TEL}`} className={`${buttonClass("ghost")} mt-2 w-full min-[640px]:w-auto min-[640px]:self-start`}>
                  Llamar
                </a>
              </article>
              <article className={`${cardClass} flex min-w-0 flex-col gap-2.5 p-5 min-[640px]:p-7`}>
                <div className="grid size-11 place-items-center rounded-pill bg-badge-bg text-badge-text min-[640px]:size-[52px]">
                  <Icon d={ICONS.mail} />
                </div>
                <h2 className="mt-2 text-lg font-semibold text-muted">Escríbenos un correo</h2>
                <a href={`mailto:${EMAIL}`} className={channelValueClass}>
                  {EMAIL}
                </a>
                <p className="flex-1 text-sm text-muted">Para trámites que necesiten un registro escrito.</p>
                <a href={`mailto:${EMAIL}`} className={`${buttonClass("ghost")} mt-2 w-full min-[640px]:w-auto min-[640px]:self-start`}>
                  Enviar correo
                </a>
              </article>
            </div>

            {/* Aviso antifraude (RESUMEN §5). */}
            <p role="note" className="mt-5 flex items-start gap-2.5 text-sm text-muted">
              <Icon d={ICONS.shield} className="mt-0.5 size-4 shrink-0 text-accent-text" />
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
              className={`${cardClass} mt-7 flex flex-col items-stretch gap-3 p-5 min-[640px]:flex-row min-[640px]:flex-wrap min-[640px]:items-center min-[640px]:gap-x-4 min-[640px]:px-7 min-[640px]:py-6`}
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

        <section id="puntos" className="scroll-mt-20 py-14 lg:py-18">
          <div className="wrap">
            <div className="mb-10">
              <Eyebrow>Puntos de atención</Eyebrow>
              <h2 className="mt-3.5 text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-.028em]">
                Visítanos.
              </h2>
            </div>
            <div className="grid gap-6 min-[960px]:grid-cols-3">
              {OFFICES.map((office) => (
                <OfficeCard key={office.name} office={office} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-deep py-16 text-white">
          <div className="wrap">
            <div className="grid grid-cols-1 items-center gap-7 min-[960px]:grid-cols-[minmax(0,1fr)_auto] min-[960px]:gap-10">
              <div className="min-w-0">
                <span className="[&>span]:text-iwana-primary-200">
                  <Eyebrow>Cobertura</Eyebrow>
                </span>
                <h2 className="mt-3.5 max-w-[640px] text-[clamp(2rem,1.3rem+2.4vw,3rem)] font-bold leading-[1.05] tracking-[-.03em]">
                  ¿Llegamos a tu zona?
                </h2>
                <p className="mt-3 max-w-[620px] text-lg text-iwana-primary-200">
                  Si aún no eres cliente, consulta nuestra cobertura.
                </p>
                <div className="mt-[18px] grid gap-3.5">
                  <TownGroup title="Todo el municipio" towns={COVERAGE.municipios} rural={false} />
                  <TownGroup title="Zonas rurales" towns={COVERAGE.rurales} rural />
                </div>
              </div>
              <div className="flex min-w-0 flex-col items-start gap-3">
                <ExternalLink href={waLink("viabilidad")} className={`${buttonClass("lime")} w-full min-[640px]:w-auto`}>
                  <Icon d={ICONS.whatsapp} className="size-4 shrink-0" />
                  Consultar cobertura
                </ExternalLink>
                <Link href="/#cobertura" className="font-semibold text-white underline underline-offset-4 hover:text-iwana-primary-200">
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
      <div className="text-xs font-semibold uppercase tracking-[.1em] text-iwana-primary-200">{title}</div>
      <ul className="m-0 mt-2 flex list-none flex-wrap gap-2 p-0">
        {towns.map((town) => (
          <li
            key={town}
            className="inline-flex min-w-0 max-w-full items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-semibold text-white"
          >
            <i
              aria-hidden="true"
              className={`size-2.5 shrink-0 rounded-full border-[1.5px] ${
                rural ? "border-dashed border-iwana-secondary-400 bg-transparent" : "border-iwana-secondary bg-iwana-secondary"
              }`}
            />
            <span className="min-w-0 break-words">{town}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
