import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { buttonClass, cardClass, Eyebrow, Icon, SectionHead, SrOnly } from "@/components/ui";
import {
  COLLECTOR_NIT,
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
    title: "Guarda el comprobante",
    text: "Al terminar, tu banco te da un comprobante. Guárdalo por si necesitas soporte.",
  },
];

const linkClass = "font-semibold text-accent-text";

export default function PagarPage() {
  return (
    <>
      <Header current="pagar" />
      <main>
        <PayHero />

        <section className="py-22">
          <div className="wrap">
            <SectionHead eyebrow="Cómo pagar" title="Tres pasos y listo." />
            <ol className="m-0 grid list-none gap-5 p-0 min-[900px]:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.title} className={`${cardClass} p-7`}>
                  <div className="grid size-11 place-items-center rounded-pill bg-cta font-bold text-cta-text">
                    {i + 1}
                  </div>
                  <h3 className="mt-[18px] text-[1.1875rem] font-bold">{step.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-bg-alt py-18">
          <div className="wrap">
            <SafePayment />
          </div>
        </section>

        <section id="puntos" className="scroll-mt-20 py-22">
          <div className="wrap">
            <SectionHead
              eyebrow="Otras formas de pago"
              title="También puedes pagar en persona."
              lead="Acércate a cualquiera de nuestros puntos de atención."
            />
            <div className="grid gap-5 min-[900px]:grid-cols-3">
              {OFFICES.map((office) => (
                <article key={office.name} className={`${cardClass} flex flex-col p-6`}>
                  <h3 className="flex items-center gap-2.5 text-lg font-bold">
                    <Icon className="size-4 text-accent-text">
                      <path d={ICONS.pin} />
                      <circle cx="12" cy="10" r="3" />
                    </Icon>
                    {office.name}
                  </h3>
                  <address className="mt-2 flex-1 text-[15px] not-italic text-muted">
                    {office.address}
                    {office.hours
                      .filter((h) => h.times.length > 0)
                      .map((h) => (
                        <span key={h.days}>
                          <br />
                          {h.days}, {h.times.join(" y ")}
                        </span>
                      ))}
                  </address>
                  <ExternalLink href={office.mapUrl} className={`${buttonClass("ghost", "sm")} mt-[18px] self-start`}>
                    Cómo llegar
                    <SrOnly>a la sede de {office.name} (se abre en otra pestaña)</SrOnly>
                  </ExternalLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-deep py-18 text-white">
          <div className="wrap flex flex-col gap-6 min-[960px]:flex-row min-[960px]:items-center min-[960px]:justify-between">
            <div>
              <h2 className="text-[clamp(1.75rem,1.2rem+1.8vw,2.25rem)] font-bold tracking-[-.024em]">
                ¿Ya pagaste y no se refleja?
              </h2>
              <p className="mt-2.5 max-w-[600px] text-[1.0625rem] text-iwana-primary-200">
                Los pagos en línea se reflejan en el transcurso del día. Si ya pasó ese tiempo, escríbenos por
                WhatsApp y envíanos el comprobante de tu banco. Te ayudamos a revisarlo. No envíes claves ni datos de
                tarjeta por el chat.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ExternalLink href={waLink("pago")} className={buttonClass("lime")}>
                <Icon d={ICONS.whatsapp} className="size-4" />
                Escribir por WhatsApp
              </ExternalLink>
              <a href={`tel:${PBX_TEL}`} className={buttonClass("onnavy")}>
                PBX {PBX_DISPLAY}
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
    <section className="bg-bg-alt pt-10 pb-20 lg:pt-12 lg:pb-26">
      <div className="wrap">
        <nav aria-label="Ruta" className="flex items-center gap-2 text-[13px] text-muted">
          <Link href={ROUTES.inicio} className="no-underline hover:underline">
            Inicio
          </Link>
          <span aria-hidden="true">/</span>
          <span>Pagar factura</span>
        </nav>
        <div className="mt-7 grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-18">
          <div>
            <Eyebrow>Clientes</Eyebrow>
            <h1 className="mt-4 text-[clamp(2.25rem,1.4rem+3.4vw,3.5rem)] font-bold leading-[1.04] tracking-[-.035em]">
              Paga tu factura <em className="not-italic text-accent-text">en línea.</em>
            </h1>
            <p className="mt-3.5 max-w-[620px] text-[1.0625rem] text-muted">
              Paga con PSE o tarjeta de crédito, sin ir a la oficina.
            </p>
            <div className="mt-[30px] flex flex-col items-start gap-3">
              <ExternalLink href={DAVIVIENDA_PSE_URL} className={buttonClass("primary")}>
                Ir a pagar en línea
                <Icon d={ICONS.external} className="size-4" />
                <SrOnly>(se abre en otra pestaña)</SrOnly>
              </ExternalLink>
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

/** Ilustración decorativa del flujo de pago; aria-hidden como en el lienzo. */
function PaymentFlow() {
  const nodes = [
    { icon: ICONS.receipt, label: "Tu factura", sub: "iWana", lime: false },
    { icon: ICONS.bank, label: "PSE", sub: "Cualquier banco", lime: true },
    { icon: ICONS.check, label: "Comprobante", sub: "Tu banco", lime: false },
  ];
  return (
    <div className={`${cardClass} relative overflow-hidden p-7 shadow-card-soft`} aria-hidden="true">
      <div className="grid grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)_40px_minmax(0,1fr)] items-center">
        {nodes.map((n, i) => (
          <FlowNode key={n.label} {...n} arrow={i < nodes.length - 1} />
        ))}
      </div>
      <div className="mt-6 overflow-hidden rounded-control border border-line bg-card">
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
      <div className="flex flex-col items-center gap-2.5 text-center">
        <div
          className={`grid size-16 place-items-center rounded-pill border ${
            lime ? "border-transparent bg-badge-bg text-badge-text" : "border-line bg-card-2 text-text"
          }`}
        >
          <Icon d={icon} className="size-[26px]" />
        </div>
        <div className="text-[13px] font-bold">{label}</div>
        <div className="text-xs leading-[1.35] text-muted">{sub}</div>
      </div>
      {arrow ? (
        <div className="grid place-items-center text-accent-text">
          <Icon d={ICONS.arrowRight} />
        </div>
      ) : null}
    </>
  );
}

function SafePayment() {
  const items = [
    <>
      <strong className="font-semibold">iWana no ve ni guarda tus datos bancarios.</strong> El pago lo procesa
      Davivienda.
    </>,
    <>
      <strong className="font-semibold">En el portal verás el comercio IWANA SAS</strong> (NIT {COLLECTOR_NIT}): es
      la empresa con la que recaudamos tus pagos.
    </>,
    <>
      <strong className="font-semibold">Revisa la dirección</strong> antes de pagar: debe decir{" "}
      <strong className="font-semibold">https://{DAVIVIENDA_HOST}</strong>. Lo que va entre https:// y la siguiente
      barra debe terminar exactamente en <strong className="font-semibold">.davivienda.com</strong>.
    </>,
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
    <div className={`${cardClass} grid items-start gap-7 p-9 min-[900px]:grid-cols-[auto_minmax(0,1fr)]`}>
      <div className="grid size-16 place-items-center rounded-pill bg-badge-bg text-badge-text">
        <Icon d={ICONS.shield} className="size-7" />
      </div>
      <div>
        <h2 className="text-2xl font-bold tracking-[-.02em]">Paga con tranquilidad</h2>
        <ul className="m-0 mt-4 grid list-none gap-3 p-0">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Icon d={ICONS.check} className="mt-[3px] size-4 text-accent-text" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
