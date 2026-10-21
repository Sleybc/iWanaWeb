import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalLink } from "@/components/ExternalLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { buttonClass, cardClass, Eyebrow, Icon, SectionHead } from "@/components/ui";
import {
  COVERAGE,
  EMAIL,
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
  description: "iWana lleva internet a hogares, fincas y negocios del Tequendama, con Fibra Óptica o Radio Enlace al mismo precio.",
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
    title: "2 tecnologías, un precio",
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
    text: "Un técnico revisa tu ubicación y define la tecnología que mejor funciona allí.",
  },
  { title: "Instalación", text: "Instalamos tu servicio en la fecha que acordemos contigo." },
];

const iconCircle = "grid shrink-0 place-items-center rounded-pill bg-badge-bg text-badge-text";

export default function EmpresaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-bg-alt pt-10">
          <div className="wrap">
            <nav aria-label="Ruta" className="flex items-center gap-2 text-[13px] text-muted">
              <Link href={ROUTES.inicio} className="no-underline hover:underline">
                Inicio
              </Link>
              <span aria-hidden="true">/</span>
              <span>Nuestra empresa</span>
            </nav>
            <div className="relative mt-7 grid items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] lg:gap-16">
              <div className="pb-10">
                <Eyebrow>Nuestra empresa</Eyebrow>
                <h1 className="mt-4 text-[clamp(2.25rem,1.4rem+3.4vw,3.5rem)] font-bold leading-[1.04] tracking-[-.035em]">
                  Internet para el Tequendama:{" "}
                  <em className="not-italic text-accent-text">hogares, fincas y negocios.</em>
                </h1>
                <p className="mt-6 max-w-[560px] border-l-[3px] border-accent pl-5 text-xl font-medium leading-[1.45]">
                  Creemos que la tecnología debe servir para acercar a las personas.
                </p>
              </div>
              <div className={`${cardClass} relative z-[2] -mb-14 px-6 py-2 shadow-card-soft`}>
                {FACTS.map((fact) => (
                  <div
                    key={fact.title}
                    className="flex items-center gap-3.5 border-b border-line-soft py-4 last:border-b-0"
                  >
                    <div className={`${iconCircle} size-11`}>
                      <Icon>{fact.icon}</Icon>
                    </div>
                    <div>
                      <strong className="block text-[1.0625rem] font-bold">{fact.title}</strong>
                      <span className="block text-sm text-muted">{fact.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <svg className="mt-10 block h-[120px] w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
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

        <section className="pt-24 pb-14">
          <div className="wrap">
            <SectionHead eyebrow="Dónde estamos" title="En el pueblo y en el campo." />
            <div className="grid gap-6 min-[900px]:grid-cols-2">
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

        <section className="bg-bg-alt py-14">
          <div className="wrap">
            <SectionHead
              eyebrow="Lo que hacemos"
              title="Internet estable, con atención cercana."
              lead="Llegamos con Fibra Óptica o Radio Enlace, según tu ubicación, y al mismo precio."
            />
            <div className="grid gap-5 min-[900px]:grid-cols-3">
              {TILES.map((tile) => (
                <article key={tile.title} className={`${cardClass} p-7`}>
                  <div className={`${iconCircle} size-[52px]`}>
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

        <section className="py-14">
          <div className="wrap">
            <SectionHead eyebrow="Cómo contratar" title="Tres pasos para conectarte." />
            <ol className="m-0 grid list-none gap-5 p-0 min-[900px]:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.title} className={`${cardClass} p-7`}>
                  <div className="grid size-11 place-items-center rounded-pill bg-cta font-bold text-cta-text">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 text-[1.1875rem] font-bold">{step.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
            <div className={`${cardClass} mt-6 flex flex-wrap items-center justify-between gap-4 px-7 py-6`}>
              <div>
                <strong className="text-lg">Planes desde {PRICE_FROM} al mes</strong>
                <span className="block text-[15px] text-muted">
                  Internet ilimitado, mismo precio con Fibra Óptica o Radio Enlace.
                </span>
              </div>
              <Link href="/#planes" className={buttonClass("ghost")}>
                Ver planes
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-bg-alt py-14">
          <div className="wrap">
            <div className="mb-6">
              <Eyebrow>Datos de la empresa</Eyebrow>
            </div>
            <dl className={`${cardClass} m-0 grid px-7 py-2`}>
              <CompanyRow label="Razón social">{LEGAL_NAME.toUpperCase()}</CompanyRow>
              <CompanyRow label="NIT">{NIT}</CompanyRow>
              <CompanyRow label="WhatsApp oficial">{WHATSAPP_DISPLAY}</CompanyRow>
              <CompanyRow label="Línea PBX">{PBX_DISPLAY}</CompanyRow>
              <CompanyRow label="Correo">{EMAIL}</CompanyRow>
              <CompanyRow label="Puntos de atención">
                <Link href={`${ROUTES.contacto}#puntos`} className="font-semibold text-accent-text">
                  Ver direcciones y horarios
                </Link>
              </CompanyRow>
            </dl>
          </div>
        </section>

        <section className="bg-deep py-14 text-white">
          <div className="wrap flex flex-col gap-6 min-[960px]:flex-row min-[960px]:items-center min-[960px]:justify-between">
            <div>
              <h2 className="text-[clamp(1.75rem,1.2rem+1.8vw,2.5rem)] font-bold tracking-[-.024em]">
                ¿Quieres conectarte con iWana?
              </h2>
              <p className="mt-2.5 text-[1.0625rem] text-iwana-primary-200">
                Escríbenos y agendamos tu visita de viabilidad.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ExternalLink href={waLink("contratar")} className={buttonClass("lime")}>
                <Icon d={ICONS.whatsapp} className="size-4" />
                Quiero contratar
              </ExternalLink>
              <Link href={ROUTES.contacto} className={buttonClass("onnavy")}>
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
    <article className={`${cardClass} p-7`}>
      <h3 className="flex items-center gap-2.5 text-xl font-bold">
        <i
          aria-hidden="true"
          className={`size-2.5 rounded-full border-[1.5px] ${
            rural ? "border-dashed border-accent-text bg-transparent" : "border-text bg-iwana-secondary"
          }`}
        />
        {title}
      </h3>
      <p className="mt-1.5 text-[15px] text-muted">{text}</p>
      <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0">
        {towns.map((town) => (
          <li key={town} className="rounded-pill bg-card-2 px-3.5 py-1.5 text-sm font-semibold">
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
      <Icon className="mt-[3px] size-4 text-accent-text">{infoIcon}</Icon>
      <span>{children}</span>
    </p>
  );
}

function CompanyRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-b border-line-soft py-4 last:border-b-0">
      <dt className="text-muted">{label}</dt>
      <dd className="m-0 text-right font-semibold">{children}</dd>
    </div>
  );
}
