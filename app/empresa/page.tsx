import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalLink } from "@/components/ExternalLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { buttonClass, cardClass, Eyebrow, Icon } from "@/components/ui";
import {
  COVERAGE,
  EMAIL,
  LEGAL_ADDRESS,
  LEGAL_NAME,
  NIT,
  OFFICES,
  PBX_DISPLAY,
  PRICE_FROM,
  ROUTES,
  WHATSAPP_DISPLAY,
  waLink,
} from "@/lib/constants";
import { ICONS } from "@/lib/icons";

// Fuente: diseno/claude-design/Empresa.dc.html. Solo hechos verificables
// (RESUMEN §3, decisión 7): sin cifras de clientes, años ni testimonios.

export const metadata: Metadata = {
  title: "Nuestra empresa",
  description: "Internet para hogares, fincas y negocios del Tequendama. Fibra Óptica o Radio Enlace con la misma mensualidad y atención cercana.",
};

const townCount = COVERAGE.municipios.length + COVERAGE.rurales.length;

const pinIcon = (
  <>
    <path d={ICONS.pin} />
    <circle cx="12" cy="10" r="3" />
  </>
);

const infoIcon = (
  <>
    <circle cx="12" cy="12" r="10" />
    <path d={ICONS.info} />
  </>
);

const FACTS: { icon: ReactNode; title: string; text: string }[] = [
  { icon: pinIcon, title: `${townCount} municipios`, text: "en la provincia del Tequendama" },
  {
    icon: (
      <>
        <path d={ICONS.antenna} />
        <circle cx="12" cy="9" r="2" />
      </>
    ),
    title: "2 tecnologías",
    text: "Fibra Óptica y Radio Enlace",
  },
  {
    icon: <path d={ICONS.home} />,
    title: `${OFFICES.length} puntos de atención`,
    text: "El Colegio, San Antonio y Tena",
  },
];

const TILES: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <path d={ICONS.wifi} />,
    title: "Internet ilimitado",
    text: "Para tu casa, tu finca o tu negocio, con zona Wi-Fi incluida.",
  },
  {
    icon: <path d={ICONS.headset} />,
    title: "Soporte que responde",
    text: "Te atendemos por WhatsApp y por nuestra línea PBX.",
  },
  {
    icon: pinIcon,
    title: "Atención en persona",
    text: "Tres puntos de atención en El Colegio, San Antonio del Tequendama y Tena.",
  },
];

const STEPS = [
  { title: "Escríbenos", text: "Cuéntanos dónde estás por WhatsApp, por teléfono o en un punto de atención." },
  {
    title: "Visita de viabilidad",
    text: "Un técnico revisa tu ubicación, confirma qué tecnología podemos instalar y te explica las condiciones y el valor de la instalación, si aplica, antes de que decidas contratar.",
  },
  { title: "Instalación", text: "Instalamos tu servicio en la fecha que acordemos contigo." },
];

const iconCircle = "grid shrink-0 place-items-center rounded-pill bg-badge-bg text-badge-text";

export default function EmpresaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-bg-alt pt-6 sm:pt-10 lg:pt-12">
          <div className="wrap">
            <nav aria-label="Ruta" className="flex items-center gap-2 text-[13px] text-muted">
              <Link href={ROUTES.inicio} className="no-underline hover:underline">
                Inicio
              </Link>
              <span aria-hidden="true">/</span>
              <span>Nuestra empresa</span>
            </nav>
            <div className="relative mt-6 grid items-center gap-7 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,.8fr)] lg:gap-12">
              <div className="min-w-0">
                <Eyebrow>Nuestra empresa</Eyebrow>
                <h1 className="mt-5 text-[clamp(2.5rem,1.4rem+4.2vw,4.25rem)] font-bold leading-[1.02] tracking-[-.035em]">
                  Internet para el Tequendama:{" "}
                  <em className="not-italic text-accent-text">hogares, fincas y negocios.</em>
                </h1>
                <p className="mt-[22px] max-w-[600px] text-[1.1875rem] text-muted">
                  Creemos que la tecnología debe servir para acercar a las personas.
                </p>
              </div>
              <div className={`${cardClass} min-w-0 px-5 py-2 min-[640px]:px-7`}>
                {FACTS.map((fact) => (
                  <div
                    key={fact.title}
                    className="flex items-center gap-3.5 border-b border-line-soft py-4 last:border-b-0"
                  >
                    <div className={`${iconCircle} size-11`}>
                      <Icon>{fact.icon}</Icon>
                    </div>
                    <div className="min-w-0">
                      <strong className="block text-[1.0625rem] font-bold">{fact.title}</strong>
                      <span className="block text-sm text-muted">{fact.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <svg className="mt-6 block h-12 w-full min-[640px]:h-20 lg:mt-10" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M0 70 C200 30 360 60 540 44 C720 28 880 70 1060 50 C1220 34 1340 46 1440 40 L1440 120 L0 120 Z"
              fill="var(--line-soft)"
            />
            <path d="M0 96 C240 72 480 90 720 80 C960 70 1200 88 1440 76 L1440 120 L0 120 Z" fill="var(--bg)" />
            <path
              d="M0 96 C240 72 480 90 720 80 C960 70 1200 88 1440 76"
              fill="none"
              stroke="var(--color-iwana-secondary)"
              strokeWidth="2"
              strokeDasharray="2 8"
              strokeLinecap="round"
            />
          </svg>
        </section>

        <section className="py-14 lg:py-18">
          <div className="wrap">
            <SectionHead eyebrow="Dónde estamos" title="En el pueblo y en el campo." />
            <div className="grid gap-6 min-[960px]:grid-cols-2">
              <WhereCard title="Todo el municipio" text="Casco urbano y zona rural." towns={COVERAGE.municipios} rural={false} />
              <WhereCard
                title="Zonas rurales"
                text="Llegamos a varias veredas; confirmamos cada caso."
                towns={COVERAGE.rurales}
                rural
              />
            </div>
            <Note>
              ¿Tu vereda no aparece?{" "}
              <ExternalLink href={waLink("vereda")} className="font-semibold text-accent-text">
                Escríbenos y la revisamos.
              </ExternalLink>
            </Note>
          </div>
        </section>

        <section className="bg-bg-alt py-14 lg:py-18">
          <div className="wrap">
            <SectionHead
              eyebrow="Lo que hacemos"
              title="Internet estable, con atención cercana."
              lead="Según tu ubicación, llegamos con Fibra Óptica o Radio Enlace. La mensualidad de tu plan es la misma."
            />
            <div className="grid gap-6 min-[960px]:grid-cols-3">
              {TILES.map((tile) => (
                <article key={tile.title} className={`${cardClass} min-w-0 p-5 min-[640px]:p-7`}>
                  <div className={`${iconCircle} size-11 min-[640px]:size-[52px]`}>
                    <Icon>{tile.icon}</Icon>
                  </div>
                  <h3 className="mt-4 text-[1.1875rem] font-bold">{tile.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{tile.text}</p>
                </article>
              ))}
            </div>
            {/* RESUMEN §3, decisión 6: la velocidad queda en el contrato que se entrega en la visita. */}
            <Note>En la visita de viabilidad te confirmamos por escrito la tecnología y la velocidad de tu conexión.</Note>
          </div>
        </section>

        <section className="py-14 lg:py-18">
          <div className="wrap">
            <SectionHead eyebrow="Cómo contratar" title="Tres pasos para conectarte." />
            <ol className="m-0 grid list-none gap-6 p-0 min-[960px]:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.title} className={`${cardClass} min-w-0 p-5 min-[640px]:p-7`}>
                  <div className={`${iconCircle} size-11 font-bold tabular-nums`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-[1.1875rem] font-bold">{step.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
            <div className={`${cardClass} mt-6 flex flex-col items-stretch gap-4 p-5 min-[640px]:flex-row min-[640px]:items-center min-[640px]:justify-between min-[640px]:px-7 min-[640px]:py-6`}>
              <div className="min-w-0">
                <strong className="text-lg">Planes desde {PRICE_FROM} al mes</strong>
                <span className="block text-[15px] text-muted">
                  Internet ilimitado, con la misma mensualidad en Fibra Óptica o Radio Enlace.
                </span>
              </div>
              <Link href="/#planes" className={`${buttonClass("ghost")} w-full min-[640px]:w-auto min-[640px]:shrink-0`}>
                Ver planes
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-bg-alt py-14 lg:py-18">
          <div className="wrap">
            {/* Identificación del proveedor (Ley 1480 de 2011): visible pero plegada para no recargar la página. */}
            <details className={`${cardClass} group`}>
              <summary className="flex cursor-pointer list-none flex-col items-start gap-4 p-5 min-[640px]:flex-row min-[640px]:items-center min-[640px]:justify-between min-[640px]:px-7 [&::-webkit-details-marker]:hidden">
                <span className="min-w-0">
                  <Eyebrow>Datos de la empresa</Eyebrow>
                  <span className="mt-2 block font-semibold">
                    {LEGAL_NAME} · NIT {NIT}
                  </span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold text-accent-text">
                  <span className="group-open:hidden">Ver datos</span>
                  <span className="hidden group-open:inline">Ocultar</span>
                  <Icon d="m6 9 6 6 6-6" className="size-4 transition-transform duration-200 group-open:rotate-180" />
                </span>
              </summary>
              <dl className="m-0 grid border-t border-line-soft px-5 py-2 min-[640px]:px-7">
                <CompanyRow label="Razón social">{LEGAL_NAME.toUpperCase()}</CompanyRow>
                <CompanyRow label="NIT">{NIT}</CompanyRow>
                <CompanyRow label="Dirección">{LEGAL_ADDRESS}</CompanyRow>
                <CompanyRow label="Correo">{EMAIL}</CompanyRow>
                <CompanyRow label="WhatsApp oficial">{WHATSAPP_DISPLAY}</CompanyRow>
                <CompanyRow label="Línea PBX">{PBX_DISPLAY}</CompanyRow>
                <CompanyRow label="Puntos de atención">
                  <Link href={`${ROUTES.contacto}#puntos`} className="font-semibold text-accent-text">
                    Ver direcciones y horarios
                  </Link>
                </CompanyRow>
              </dl>
            </details>
          </div>
        </section>

        <section className="bg-deep py-16 text-white">
          <div className="wrap flex flex-col gap-7 min-[960px]:flex-row min-[960px]:items-center min-[960px]:justify-between">
            <div className="min-w-0">
              <h2 className="max-w-[640px] text-[clamp(2rem,1.3rem+2.4vw,3rem)] font-bold leading-[1.05] tracking-[-.03em] text-balance">
                ¿Quieres contratar nuestro servicio?
              </h2>
              <p className="mt-3 max-w-[620px] text-lg text-iwana-primary-200">
                Escríbenos y agendamos tu visita de viabilidad.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[640px]:flex-row min-[640px]:flex-wrap min-[960px]:shrink-0">
              <ExternalLink href={waLink("contratar")} className={`${buttonClass("lime")} w-full min-[640px]:w-auto`}>
                <Icon d={ICONS.whatsapp} className="size-4" />
                Quiero contratar
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

function WhereCard({ title, text, towns, rural }: { title: string; text: string; towns: readonly string[]; rural: boolean }) {
  return (
    <article className={`${cardClass} min-w-0 p-5 min-[640px]:p-7`}>
      <h3 className="flex items-center gap-2.5 text-xl font-bold">
        <i
          aria-hidden="true"
          className={`size-2.5 shrink-0 rounded-full border-[1.5px] ${
            rural ? "border-dashed border-accent-text bg-transparent" : "border-text bg-iwana-secondary"
          }`}
        />
        {title}
      </h3>
      <p className="mt-1.5 text-[15px] text-muted">{text}</p>
      <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0">
        {towns.map((town) => (
          <li key={town} className="min-w-0 max-w-full break-words rounded-pill bg-card-2 px-3.5 py-1.5 text-sm font-semibold">
            {town}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Note({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 flex max-w-[760px] items-start gap-2.5 text-[15px] text-muted">
      <Icon className="mt-[3px] size-4 shrink-0 text-accent-text">{infoIcon}</Icon>
      <span>{children}</span>
    </p>
  );
}

function CompanyRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid min-w-0 gap-1.5 border-b border-line-soft py-4 last:border-b-0 min-[640px]:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] min-[640px]:gap-6">
      <dt className="text-muted">{label}</dt>
      <dd className="m-0 min-w-0 break-words font-semibold min-[640px]:text-right">{children}</dd>
    </div>
  );
}

function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="mb-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3.5 text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-.028em]">
        {title}
      </h2>
      {lead ? <p className="mt-3.5 max-w-[620px] text-[1.0625rem] text-muted">{lead}</p> : null}
    </div>
  );
}
