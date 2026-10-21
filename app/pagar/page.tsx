import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OfficeCard } from "@/components/OfficeCard";
import { buttonClass, cardClass, Eyebrow, Icon, SrOnly } from "@/components/ui";
import {
  DAVIVIENDA_HOST,
  DAVIVIENDA_PSE_URL,
  OFFICES,
  PBX_DISPLAY,
  PBX_TEL,
  ROUTES,
  WHATSAPP_DISPLAY,
  waLink,
} from "@/lib/constants";
import { ICONS } from "@/lib/icons";

// Fuente: diseno/claude-design/Pagos.dc.html. Sin scripts de terceros en esta
// página (RESUMEN §5): ni analítica, ni chats, ni administradores de etiquetas.

export const metadata: Metadata = {
  title: "Paga tu factura",
  description: "Paga tu factura de iWana con PSE o tarjeta de crédito, en el portal seguro de Davivienda.",
};

const STEPS = [
  {
    // Flujo del portal confirmado por iWana (RESUMEN §7.1).
    title: "Consulta con tu cédula",
    text: "En el portal escribe el número de identificación del titular del servicio y toca «Consultar». Aparece tu factura pendiente.",
  },
  {
    title: "Elige cómo pagar",
    text: "Marca la factura y toca «Pagar». Elige PSE o tarjeta de crédito, completa los datos, acepta los términos y confirma.",
  },
  {
    title: "Envía el comprobante",
    text: "Al terminar, envíanos el comprobante por WhatsApp. Así, la asistente virtual o un asesor podrá registrar tu pago más rápido.",
  },
];

const linkClass = "font-semibold text-accent-text";

export default function PagarPage() {
  return (
    <>
      <Header current="pagar" />
      <main>
        <PayHero />

        <section className="py-14 lg:py-18">
          <div className="wrap">
            <div className="mb-10">
              <Eyebrow>Cómo pagar</Eyebrow>
              <h2 className="mt-3.5 text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-.028em]">
                Tres pasos y listo.
              </h2>
            </div>
            <ol className="m-0 grid list-none gap-6 p-0 min-[960px]:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.title} className={`${cardClass} flex flex-col items-start p-5 min-[640px]:p-7`}>
                  <div className="grid size-11 shrink-0 place-items-center rounded-pill bg-cta font-bold text-cta-text">
                    <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <SrOnly>Paso {i + 1}</SrOnly>
                  </div>
                  <h3 className="mt-[18px] text-xl font-bold tracking-[-.01em]">{step.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{step.text}</p>
                  {i === 2 && (
                    <ExternalLink
                      href={waLink("comprobante")}
                      className={`${buttonClass("ghost", "sm")} mt-5 w-full min-[640px]:w-auto`}
                    >
                      <Icon d={ICONS.whatsapp} className="size-4 shrink-0" />
                      Enviar comprobante
                      <SrOnly>por WhatsApp (se abre en otra pestaña)</SrOnly>
                    </ExternalLink>
                  )}
                </li>
              ))}
            </ol>
            <div className="mt-7">
              <PayButton fullWidthOnMobile />
            </div>
          </div>
        </section>

        <section className="bg-bg-alt py-14 lg:py-18">
          <div className="wrap">
            <SafePayment />
          </div>
        </section>

        <section id="puntos" className="scroll-mt-20 py-14 lg:py-18">
          <div className="wrap">
            <div className="mb-10">
              <Eyebrow>Otras formas de pago</Eyebrow>
              <h2 className="mt-3.5 text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-.028em]">
                Paga en nuestros puntos de atención
              </h2>
              <p className="mt-4 max-w-[620px] text-[1.0625rem] text-muted">
                Consulta la dirección y los horarios de tu sede más cercana.
              </p>
            </div>
            <div className="grid gap-6 min-[960px]:grid-cols-3">
              {OFFICES.map((office) => (
                <OfficeCard key={office.name} office={office} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-deep py-16 text-white">
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
            <div className="min-w-0">
              <h2 className="max-w-[640px] text-[clamp(2rem,1.3rem+2.4vw,3rem)] font-bold leading-[1.05] tracking-[-.03em]">
                ¿Ya pagaste y no se refleja?
              </h2>
              <p className="mt-3 max-w-[620px] text-lg text-iwana-primary-200">
                Los pagos en línea se reflejan en el transcurso del día. Si ya pasó ese tiempo, escríbenos por
                WhatsApp y envíanos el comprobante de tu banco. Te ayudamos a revisarlo.
              </p>
              <p className="mt-3 max-w-[620px] text-lg text-iwana-primary-200">
                No envíes claves ni datos de tarjeta por el chat.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[640px]:flex-row min-[640px]:flex-wrap min-[960px]:shrink-0">
              <ExternalLink href={waLink("pago")} className={`${buttonClass("lime")} w-full min-[640px]:w-auto`}>
                <Icon d={ICONS.whatsapp} className="size-4" />
                Escribir por WhatsApp
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

function PayHero() {
  return (
    <section className="bg-bg-alt pt-6 pb-8 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-18">
      <div className="wrap">
        <nav aria-label="Ruta" className="flex items-center gap-2 text-[13px] text-muted">
          <Link href={ROUTES.inicio} className="no-underline hover:underline">
            Inicio
          </Link>
          <span aria-hidden="true">/</span>
          <span>Pagar factura</span>
        </nav>
        <div className="mt-6 grid items-center gap-7 sm:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-18">
          <div>
            <Eyebrow>Clientes</Eyebrow>
            <h1 className="mt-5 text-[clamp(2.5rem,1.4rem+4.2vw,4.25rem)] font-bold leading-[1.02] tracking-[-.035em]">
              Paga tu factura <em className="not-italic text-accent-text">en línea.</em>
            </h1>
            <p className="mt-[22px] max-w-[600px] text-[1.1875rem] text-muted">
              Paga con PSE o tarjeta de crédito, sin ir a la oficina.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <p className="text-sm text-muted">Ten a mano el número de identificación del titular.</p>
              <PayButton fullWidthOnMobile />
              <span className="inline-flex items-start gap-2 text-sm text-muted">
                <Icon d={ICONS.lock} className="mt-[3px] size-4 text-accent-text" />
                <span>
                  Se abre en otra pestaña, en el portal seguro de Davivienda:{" "}
                  <code className="inline-block rounded-pill border border-line bg-card px-2.5 py-0.5 font-sans font-semibold text-text">
                    {DAVIVIENDA_HOST}
                  </code>
                </span>
              </span>
              <p className="mt-1.5 text-sm text-muted">
                ¿No abre el portal? Intenta más tarde o{" "}
                <a className={linkClass} href="#puntos">
                  paga en un punto de atención
                </a>
                .
              </p>
            </div>
          </div>
          <PaymentFlow />
        </div>
      </div>
    </section>
  );
}

function PayButton({ fullWidthOnMobile = false }: { fullWidthOnMobile?: boolean }) {
  return (
    <ExternalLink
      href={DAVIVIENDA_PSE_URL}
      className={`${buttonClass("primary")}${fullWidthOnMobile ? " w-full min-[640px]:w-auto" : ""}`}
    >
      Ir a pagar en línea
      <Icon d={ICONS.external} className="size-4" />
      <SrOnly>(se abre en otra pestaña)</SrOnly>
    </ExternalLink>
  );
}

/** Ilustración decorativa del flujo de pago; aria-hidden como en el lienzo. */
function PaymentFlow() {
  const nodes = [
    { icon: ICONS.receipt, label: "Tu factura", sub: "iWana", lime: false },
    { icon: ICONS.card, label: "PSE o tarjeta", sub: "de crédito", lime: true },
    { icon: ICONS.whatsapp, label: "Envía el comprobante", sub: "Por WhatsApp", lime: false },
  ];
  return (
    <div className={`${cardClass} relative overflow-hidden p-4 shadow-card-soft sm:p-7`} aria-hidden="true">
      <div className="grid grid-cols-[minmax(0,1fr)_16px_minmax(0,1fr)_16px_minmax(0,1fr)] items-start sm:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)_40px_minmax(0,1fr)]">
        {nodes.map((n, i) => (
          <FlowNode key={n.label} {...n} arrow={i < nodes.length - 1} />
        ))}
      </div>
      <div className="mt-6 hidden overflow-hidden rounded-control border border-line bg-card lg:block">
        <div className="flex items-center gap-2.5 border-b border-line bg-card-2 px-3.5 py-2.5 text-[13px]">
          <span className="flex gap-1.5">
            {[0, 1, 2].map((k) => (
              <i key={k} className="size-[9px] rounded-full bg-line" />
            ))}
          </span>
          <span className="flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden rounded-pill border border-line bg-card px-3 py-1 font-semibold text-ellipsis whitespace-nowrap">
            <Icon d={ICONS.lock} className="size-4 text-accent-text" />
            {DAVIVIENDA_HOST}
          </span>
        </div>
        <div className="grid gap-2.5 px-4 py-[18px]">
          {/* Clases y no style en línea, para que la CSP pueda quedar en style-src 'self'. */}
          {["w-[55%]", "w-[85%]", "w-[70%]"].map((w) => (
            <div key={w} className={`h-3 rounded-pill bg-skeleton ${w}`} />
          ))}
        </div>
        <div className="px-4 pb-4 text-center text-xs text-muted">Así se ve la dirección correcta en tu navegador</div>
      </div>
    </div>
  );
}

function FlowNode({ icon, label, sub, lime, arrow }: { icon: string; label: string; sub: string; lime: boolean; arrow: boolean }) {
  return (
    <>
      <div className="flex min-w-0 flex-col items-center gap-1.5 text-center sm:gap-2.5">
        <div
          className={`grid size-11 place-items-center rounded-pill border sm:size-16 ${
            lime ? "border-transparent bg-badge-bg text-badge-text" : "border-line bg-card-2 text-text"
          }`}
        >
          <Icon d={icon} className="size-[26px]" />
        </div>
        <div className="text-[13px] font-bold">{label}</div>
        <div className="text-xs leading-[1.35] text-muted">{sub}</div>
      </div>
      {arrow ? (
        <div className="grid self-center place-items-center text-accent-text">
          <Icon d={ICONS.arrowRight} />
        </div>
      ) : null}
    </>
  );
}

function SafePayment() {
  const items = [
    <>
      <strong className="font-semibold">Tu clave solo se escribe en la página de tu banco,</strong> cuando PSE te
      lleva allí.
    </>,
    <>
      <strong className="font-semibold">Nunca te pediremos</strong> tu clave bancaria, códigos de tu banco ni datos
      de tarjeta, por ningún canal. Tampoco pedimos pagos a cuentas personales.
    </>,
    <>
      <strong className="font-semibold">Nuestro WhatsApp oficial es {WHATSAPP_DISPLAY}.</strong> Si alguien te
      escribe desde otro número en nombre de iWana, no respondas y avísanos.
    </>,
  ];
  return (
    <>
      <div className="mb-10">
        <Eyebrow>Pago seguro</Eyebrow>
        <h2 className="mt-3.5 text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-.028em]">
          Paga con tranquilidad
        </h2>
        <p className="mt-4 max-w-[620px] text-[1.0625rem] text-muted">
          Davivienda procesa el pago. iWana no ve ni guarda tus datos bancarios.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 min-[900px]:grid-cols-2">
          <article className={`${cardClass} min-w-0 p-5 min-[640px]:p-7`}>
            <div className="grid size-11 place-items-center rounded-pill bg-badge-bg text-badge-text min-[640px]:size-[52px]">
              <Icon d={ICONS.lock} />
            </div>
            <h3 className="mt-3.5 text-xl font-bold tracking-[-.01em]">Revisa la dirección del portal</h3>
            <p className="mt-3 break-words font-semibold text-accent-text">https://{DAVIVIENDA_HOST}</p>
            <p className="mt-2 text-[15px] text-muted">
              Lo que va entre https:// y la siguiente barra debe terminar exactamente en{" "}
              <strong className="font-semibold text-text">.davivienda.com</strong>.
            </p>
          </article>
          <article className={`${cardClass} min-w-0 p-5 min-[640px]:p-7`}>
            <div className="grid size-11 place-items-center rounded-pill bg-badge-bg text-badge-text min-[640px]:size-[52px]">
              <Icon d={ICONS.shield} />
            </div>
            <h3 className="mt-3.5 text-xl font-bold tracking-[-.01em]">Confirma el comercio</h3>
            <p className="mt-3 font-bold text-accent-text">IWANA SAS</p>
            <p className="mt-2 text-[15px] text-muted">Es la empresa que te presta el servicio.</p>
          </article>
        </div>
        <ul className="m-0 mt-7 grid list-none gap-4 p-0 text-[15px]">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Icon d={ICONS.check} className="mt-[3px] size-4 shrink-0 text-accent-text" />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>
    </>
  );
}
