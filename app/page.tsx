import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalLink } from "@/components/ExternalLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CoverageFinder } from "@/components/home/CoverageFinder";
import { HeroLandscape, HeroLandscapeMobile } from "@/components/home/HeroLandscape";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PlanExplorer } from "@/components/home/PlanExplorer";
import { OfficeCard } from "@/components/OfficeCard";
import { buttonClass, cardClass, Eyebrow, Icon } from "@/components/ui";
import { COVERAGE, OFFICES, PBX_DISPLAY, PBX_TEL, ROUTES, waLink } from "@/lib/constants";
import { ICONS } from "@/lib/icons";

// Fuente: diseno/claude-design/Main.dc.html. Portada sin tarjetas ni rótulo de
// provincia (RESUMEN §3, decisión 9) y sin velocidades (decisión 6).

export const metadata: Metadata = {
  title: { absolute: "iWana — Internet en el Tequendama" },
  description:
    "Internet estable para tu casa, finca y negocio en el pueblo y en el campo del Tequendama. Fibra Óptica o Radio Enlace con la misma mensualidad.",
};

const townCount = COVERAGE.municipios.length + COVERAGE.rurales.length;

const h2Class = "mt-3.5 text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-.028em]";
const leadClass = "mt-4 max-w-[620px] text-[1.0625rem] text-muted";
const secClass = "scroll-mt-20 py-14 lg:py-18";
const iconCircle = "grid shrink-0 place-items-center rounded-pill bg-badge-bg text-badge-text";

const FACTS: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: (
      <>
        <path d={ICONS.pin} />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    title: `${townCount} municipios`,
    text: "en la provincia del Tequendama",
  },
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
  { icon: <path d={ICONS.check} />, title: "Misma mensualidad", text: "con cualquiera de las dos" },
  { icon: <path d={ICONS.home} />, title: `${OFFICES.length} puntos de atención`, text: "El Colegio, San Antonio y Tena" },
];

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "¿Cómo solicito el servicio?",
    a: "Contáctanos por WhatsApp, teléfono o en un punto de atención para agendar una visita sin costo. Revisamos tu ubicación y te confirmamos cómo podemos conectarte.",
  },
  {
    q: "¿La mensualidad cambia entre fibra y radio enlace?",
    a: "Los planes disponibles en ambas tecnologías mantienen la misma mensualidad. Por ahora, el Plan Básico + solo está disponible en Fibra Óptica.",
  },
  {
    q: "¿La instalación tiene costo?",
    a: "Puede tener un costo según tu ubicación y la instalación requerida. Te confirmamos el valor, si aplica, en la visita de viabilidad, antes de contratar.",
  },
  {
    q: "¿Cuándo instalan mi servicio?",
    a: "Después de confirmar la viabilidad y aceptar las condiciones, acordamos contigo la fecha de instalación.",
  },
  {
    q: "¿Qué velocidad tendrá mi plan?",
    a: "Depende del plan y de la tecnología disponible en tu ubicación. Te la confirmamos por escrito durante la visita de viabilidad.",
  },
  {
    q: "¿Cómo pago mi factura?",
    a: (
      <>
        Puedes consultar y pagar tu factura en el{" "}
        <Link href={ROUTES.pagar} className="font-bold text-accent-text">Portal de pagos</Link>{" "}
        o pagar en nuestros{" "}
        <a href="#puntos" className="font-bold text-accent-text">puntos de atención</a>.
      </>
    ),
  },
  {
    q: "¿Qué hago si tengo una falla?",
    a: (
      <>
        Escríbenos por{" "}
        <ExternalLink href={waLink("soporte")} className="font-bold text-accent-text">WhatsApp</ExternalLink>{" "}
        o llámanos al{" "}
        <a href={`tel:${PBX_TEL}`} className="font-bold text-accent-text">{PBX_DISPLAY}</a>{" "}
        para revisar tu servicio.
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Header variant="home" />
      <main>
        <section
          id="inicio"
          className="relative overflow-hidden bg-linear-to-b from-[var(--sky-top)] to-[var(--sky-bottom)] to-62% text-hero-text xl:h-[760px]"
        >
          {/* Escritorio: el paisaje es el fondo de la sección (propuesta A del lienzo). */}
          <HeroLandscape idPrefix="hl" className="absolute inset-0 hidden size-full xl:block" />
          <div className="wrap relative pt-12 md:pt-16 xl:pt-24">
            <h1 className="mt-5 max-w-[820px] text-[clamp(2.5rem,1.4rem+4.2vw,4.25rem)] font-bold leading-[1.02] tracking-[-.035em]">
              Internet estable para tu casa, <em className="not-italic text-accent-text">finca y negocio.</em>
            </h1>
            <p className="mt-[22px] max-w-[600px] text-[1.1875rem] text-hero-muted">
              Fibra Óptica o Radio Enlace con la misma mensualidad, atención y soporte locales.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#planes" className={buttonClass("primary")}>
                Ver planes
                <Icon d={ICONS.arrowRight} className="size-4" />
              </a>
              <ExternalLink href={waLink("info")} className={buttonClass("ghost")}>
                <Icon d={ICONS.whatsapp} className="size-4" />
                Escríbenos por WhatsApp
              </ExternalLink>
            </div>
          </div>
          {/* Tableta: la misma escena, recortada al pueblo y la colina, debajo del texto. */}
          <HeroLandscape
            idPrefix="ht"
            viewBox="480 300 960 460"
            preserveAspectRatio="xMidYMax meet"
            className="mt-10 hidden w-full md:block xl:hidden"
          />
          {/* Celular: composición propia, siempre con la antena y el pueblo a la vista. */}
          <HeroLandscapeMobile className="mt-7 block w-full md:hidden" />
        </section>

        <div className="wrap">
          <div
            className={`${cardClass} relative z-[2] mt-3 grid md:-mt-16 overflow-hidden shadow-card-soft min-[640px]:grid-cols-2 min-[1100px]:grid-cols-4`}
          >
            {FACTS.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3.5 border-b border-line-soft p-6 last:border-b-0 min-[640px]:border-r min-[1100px]:border-b-0 min-[1100px]:last:border-r-0"
              >
                <div className={`${iconCircle} size-11`}>
                  <Icon>{f.icon}</Icon>
                </div>
                <div>
                  <strong className="block text-lg font-bold tracking-[-.01em]">{f.title}</strong>
                  <span className="text-sm text-muted">{f.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section id="clientes" aria-labelledby="clientes-titulo" className="pt-14 pb-14">
          <div className="wrap">
            <div className="mb-8">
              <Eyebrow>Clientes</Eyebrow>
              <h2 id="clientes-titulo" className={h2Class}>
                ¿Ya eres cliente iWana?
              </h2>
            </div>
            <div className="grid gap-5 min-[900px]:grid-cols-3">
              <ClientCard
                main
                icon={<path d={ICONS.card} />}
                title="Paga tu factura"
                text="Consulta tu factura y paga en línea."
              >
                <Link href={ROUTES.pagar} className={`${buttonClass("primary")} mt-2 w-full min-[640px]:w-auto min-[640px]:self-start`}>
                  Pagar mi factura
                  <Icon d={ICONS.arrowRight} className="size-4" />
                </Link>
              </ClientCard>
              <ClientCard
                icon={<path d={ICONS.headset} />}
                title="¿Necesitas ayuda?"
                text="Escríbenos por WhatsApp para revisar tu servicio."
              >
                <ExternalLink href={waLink("soporte")} className={`${buttonClass("ghost")} mt-2 w-full min-[640px]:w-auto min-[640px]:self-start`}>
                  <Icon d={ICONS.whatsapp} className="size-4" />
                  Pedir soporte
                </ExternalLink>
              </ClientCard>
              <ClientCard
                icon={<path d={ICONS.gauge} />}
                title="Mide tu velocidad"
                text="Comprueba la velocidad de tu conexión."
              >
                <Link href={ROUTES.test} className={`${buttonClass("ghost")} mt-2 w-full min-[640px]:w-auto min-[640px]:self-start`}>
                  Medir velocidad
                </Link>
              </ClientCard>
            </div>
          </div>
        </section>

        <section id="como-funciona" className={`${secClass} bg-deep text-white`}>
          <div className="wrap">
            <HowItWorks />
          </div>
        </section>

        <section id="tecnologias" className={secClass}>
          <div className="wrap">
            <SecHead
              eyebrow="Tecnologías"
              title="Dos formas de conectarte, la misma mensualidad."
              lead="Usamos la tecnología que mejor funcione en tu ubicación. Tú eliges el plan; nosotros revisamos cómo llevarte la conexión."
            />
            <div className="grid gap-6 min-[900px]:grid-cols-2">
              <TechCard
                art={<FiberArt />}
                title="Fibra Óptica"
                text="La señal viaja por un cable de fibra hasta tu casa. Es la opción donde nuestra red de fibra ya pasa cerca."
                specs={[
                  ["Cómo llega", "Por cable de fibra"],
                  ["Dónde la usamos", "Donde la red ya pasa cerca"],
                  ["Mensualidad", "La misma del plan"],
                ]}
              />
              <TechCard
                art={<RadioArt />}
                title="Radio Enlace"
                text="La señal llega por aire, de una antena nuestra a una antena instalada en tu predio. Es la opción para veredas y fincas donde el cable no llega."
                specs={[
                  ["Cómo llega", "Por aire, de antena a antena"],
                  ["Dónde la usamos", "Veredas y fincas"],
                  ["Mensualidad", "La misma del plan"],
                ]}
              />
            </div>
            <div className={`${cardClass} mt-6 flex flex-wrap items-center justify-between gap-5 px-8 py-7`}>
              <div>
                <strong className="block text-xl tracking-[-.01em]">Te ayudamos a elegir.</strong>
                <p className="mt-1 max-w-[640px] text-muted">
                  En la visita de viabilidad confirmamos qué tecnología podemos instalar y te explicamos las condiciones
                  y el valor de la instalación, si aplica, antes de que decidas contratar.
                </p>
              </div>
              <a href="#cobertura" className={buttonClass("primary")}>
                Consultar mi zona
              </a>
            </div>
          </div>
        </section>

        <section id="planes" className={`${secClass} bg-bg-alt`}>
          <div className="wrap">
            <SecHead
              eyebrow="Planes"
              title="¿Qué plan necesitas?"
              lead="Encuentra el plan que mejor se adapte a tu uso de internet. Los planes disponibles en ambas tecnologías mantienen la misma mensualidad."
            />
            <PlanExplorer />
          </div>
        </section>

        <section id="cobertura" className={secClass}>
          <div className="wrap">
            <SecHead
              eyebrow="Cobertura"
              title="¿Llegamos a tu zona?"
              lead="Selecciona tu municipio. Confirmamos la disponibilidad en tu dirección o vereda."
            />
            <CoverageFinder />
          </div>
        </section>

        <section id="preguntas" className={`${secClass} bg-bg-alt`}>
          <div className="wrap grid items-start gap-7 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:grid-rows-[auto_1fr] lg:gap-x-20">
            <div>
              <Eyebrow>Preguntas frecuentes</Eyebrow>
              <h2 className={h2Class}>Resolvemos tus dudas.</h2>
            </div>
            <div className="grid gap-3 lg:col-start-2 lg:row-start-1 lg:row-span-2">
              {FAQ.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-surface border border-line-soft bg-card shadow-xs transition-[border-color,box-shadow] duration-200 hover:border-iwana-secondary/30 open:border-iwana-primary/20 open:shadow-card-hi dark:shadow-none dark:open:border-iwana-neutral-950"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[1.0625rem] font-bold [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <Icon
                      d="M12 5v14M5 12h14"
                      className="text-accent-text transition-transform duration-200 group-open:rotate-45"
                    />
                  </summary>
                  <div className="px-6 pb-[22px] text-muted">{item.a}</div>
                </details>
              ))}
            </div>
              <div className={`${cardClass} p-6 lg:col-start-1 lg:row-start-2`}>
                <strong className="block text-lg">¿Tienes otra pregunta?</strong>
                <p className="mt-1.5 text-[15px] text-muted">Escríbenos por WhatsApp o llámanos al{" "}<a href={`tel:${PBX_TEL}`} className="font-semibold text-accent-text">{PBX_DISPLAY}</a>.</p>
                <ExternalLink href={waLink("contacto")} className={`${buttonClass("ghost")} mt-4 w-full min-[640px]:w-auto`}>
                  <Icon d={ICONS.whatsapp} className="size-4" />
                  Escríbenos
                </ExternalLink>
              </div>
          </div>
        </section>

        <section id="puntos" className={secClass}>
          <div className="wrap">
            <SecHead eyebrow="Puntos de atención" title="Visítanos." lead="Solicita tu servicio, paga tu factura o recibe orientación en nuestros puntos de atención." />
            <div className="grid gap-6 min-[960px]:grid-cols-3">
              {OFFICES.map((office) => (
                <OfficeCard key={office.name} office={office} />
              ))}
            </div>
          </div>
        </section>

        <section id="conectate" className="relative overflow-hidden bg-deep py-16 text-white">
          <svg
            viewBox="0 0 1440 300"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-3/5 w-full"
          >
            <path
              d="M0 200 L140 150 L280 180 L430 110 L580 160 L740 90 L900 150 L1060 100 L1220 150 L1440 120"
              fill="none"
              stroke="rgb(255 255 255 / 10%)"
              strokeWidth="2"
            />
            <path
              d="M0 250 C200 210 380 240 560 214 C720 192 880 232 1040 200 C1180 172 1300 186 1440 180"
              fill="none"
              stroke="rgb(165 195 48 / 35%)"
              strokeWidth="2"
            />
          </svg>
          <div className="wrap relative flex flex-col gap-7 min-[960px]:flex-row min-[960px]:items-center min-[960px]:justify-between">
            <div>
              <h2 className="max-w-[640px] text-[clamp(2rem,1.3rem+2.4vw,3rem)] font-bold leading-[1.05] tracking-[-.03em]">
                Conéctate con iWana.
              </h2>
              <p className="mt-3 max-w-[620px] text-lg text-iwana-primary-200">Cuéntanos dónde estás y solicita una visita sin costo. Revisamos cómo podemos conectarte.</p>
            </div>
            <div className="flex flex-col gap-3 min-[640px]:flex-row min-[640px]:flex-wrap min-[960px]:shrink-0">
              <ExternalLink href={waLink("visita")} className={`${buttonClass("lime")} w-full min-[640px]:w-auto`}>
                <Icon d={ICONS.whatsapp} className="size-4" />
                Solicitar por WhatsApp
              </ExternalLink>
              <a href={`tel:${PBX_TEL}`} className={`${buttonClass("onnavy")} w-full min-[640px]:w-auto`}>
                <Icon d={ICONS.phone} className="size-4" />
                Llamar al {PBX_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SecHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="mb-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={h2Class}>{title}</h2>
      {lead ? <p className={leadClass}>{lead}</p> : null}
    </div>
  );
}

function ClientCard({
  icon,
  title,
  text,
  main = false,
  children,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  main?: boolean;
  children: ReactNode;
}) {
  return (
    <article className={`${cardClass} flex flex-col gap-2 p-5 min-[640px]:gap-3 min-[640px]:p-7`}>
      <div
        className={`grid size-11 min-[640px]:size-[52px] place-items-center rounded-pill ${
          main ? "bg-cta text-cta-text" : "bg-badge-bg text-badge-text"
        }`}
      >
        <Icon>{icon}</Icon>
      </div>
      <h3 className="mt-1.5 text-xl font-bold tracking-[-.01em]">{title}</h3>
      <p className="flex-1 text-[15px] text-muted">{text}</p>
      {children}
    </article>
  );
}

function TechCard({
  art,
  title,
  text,
  specs,
}: {
  art: ReactNode;
  title: string;
  text: string;
  specs: [string, string][];
}) {
  return (
    <article className={`${cardClass} flex flex-col overflow-hidden`}>
      <div className="mx-3 mt-3 aspect-[14/5] overflow-hidden rounded-control bg-card-2 min-[640px]:aspect-auto min-[640px]:h-[200px]">{art}</div>
      <div className="px-7 pt-7 pb-2">
        <h3 className="text-2xl font-bold tracking-[-.02em]">{title}</h3>
        <p className="mt-2.5 text-muted">{text}</p>
      </div>
      <dl className="mx-7 mt-5 mb-7 border-t border-line-soft">
        {specs.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 border-b border-line-soft py-3 text-[15px]">
            <dt className="text-muted">{k}</dt>
            <dd className="m-0 text-right font-semibold">{v}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

const LIME = "var(--color-iwana-secondary)";

function FiberArt() {
  const cable = "M40 140 C140 132 220 140 300 134 C360 130 400 128 440 126";
  return (
    <svg viewBox="0 0 560 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true" className="size-full">
      <path d="M0 150 C120 140 220 150 340 142 C430 136 500 142 560 138 L560 200 L0 200 Z" fill="var(--line)" />
      <path d={cable} stroke={LIME} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d={cable} stroke="var(--text)" strokeWidth="1" strokeDasharray="1 10" strokeLinecap="round" fill="none" opacity="0.5" />
      <circle cx="40" cy="140" r="9" fill="var(--text)" />
      <circle cx="40" cy="140" r="4" fill={LIME} />
      <path d="M430 126 L470 92 L510 126 V160 H430 Z" fill="var(--card)" stroke="var(--text)" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="458" y="134" width="22" height="26" fill="var(--text)" opacity="0.15" />
      <text x="40" y="58" fontFamily="var(--font-sans)" fontSize="13" fontWeight="700" letterSpacing="2" fill="var(--muted)">
        RED DE FIBRA  →  TU CASA
      </text>
    </svg>
  );
}

function RadioArt() {
  return (
    <svg viewBox="0 0 560 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true" className="size-full">
      <path
        d="M0 160 C90 120 160 100 230 118 C300 136 360 150 420 132 C480 114 520 120 560 128 L560 200 L0 200 Z"
        fill="var(--line)"
      />
      <g stroke="var(--text)" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <path d="M86 132 L104 50 L122 132 M92 104 L116 104 M97 80 L111 80" />
        <path d="M88 46 a20 20 0 0 0 0 22 M120 46 a20 20 0 0 1 0 22" />
      </g>
      <g stroke={LIME} strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M140 40 a40 40 0 0 1 0 36" />
        <path d="M158 28 a62 62 0 0 1 0 60" opacity="0.6" />
        <path d="M176 16 a84 84 0 0 1 0 84" opacity="0.35" />
      </g>
      <path d="M190 58 L420 98" stroke={LIME} strokeWidth="1.5" strokeDasharray="4 8" fill="none" />
      <path d="M400 128 L436 98 L472 128 V156 H400 Z" fill="var(--card)" stroke="var(--text)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M436 98 V82 M428 82 h16" stroke="var(--text)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <text x="250" y="186" fontFamily="var(--font-sans)" fontSize="13" fontWeight="700" letterSpacing="2" fill="var(--muted)">
        ANTENA  →  TU FINCA
      </text>
    </svg>
  );
}
