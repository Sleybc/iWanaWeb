import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SpeedTestMeter } from "@/components/SpeedTestMeter";
import { buttonClass, cardClass, Eyebrow, Icon, SectionHead } from "@/components/ui";
import { PBX_DISPLAY, PBX_TEL, ROUTES, waLink } from "@/lib/constants";
import { ICONS } from "@/lib/icons";

// Fuente: diseno/claude-design/Test.dc.html.

export const metadata: Metadata = {
  title: "Test de velocidad",
  description: "Mide la velocidad de tu internet de iWana desde tu celular, tablet o computador.",
};

const TIPS = [
  { icon: ICONS.plug, title: "Si puedes, usa cable", text: "Conecta el computador al router con cable de red." },
  { icon: ICONS.wifi, title: "Con Wi-Fi, mide cerca del router", text: "Paredes y distancia bajan la señal del Wi-Fi." },
  { icon: ICONS.pause, title: "Pausa lo demás", text: "Detén descargas, videos y otros equipos mientras mides." },
];

const READINGS = [
  { icon: ICONS.download, title: "Descarga", text: "Qué tan rápido recibes: páginas, videos, series y descargas." },
  {
    icon: ICONS.upload,
    title: "Subida",
    // RESUMEN §3, decisión 8: subida igual a la mitad de la bajada.
    text: "Qué tan rápido envías: videollamadas, fotos y archivos. En tu plan es la mitad de tu velocidad de bajada.",
  },
  {
    icon: ICONS.clock,
    title: "Ping",
    text: "El tiempo de respuesta de tu conexión. Mientras más bajo, mejor para videollamadas y juegos.",
  },
];

const LOW_STEPS = [
  {
    title: "Reinicia el router",
    text: "Apágalo, espera un momento y vuelve a encenderlo. Luego mide de nuevo con cable o junto al router.",
  },
  { title: "Toma una captura", text: "Si sigue bajo, guarda una captura de pantalla del resultado." },
  { title: "Envíanosla", text: "Escríbenos por WhatsApp y adjunta la captura. Te ayudamos a revisar tu servicio." },
];

export default function TestPage() {
  return (
    <>
      <Header current="test" />
      <main>
        <section className="bg-bg-alt pt-10 pb-22 lg:pt-12 lg:pb-26">
          <div className="wrap">
            <nav aria-label="Ruta" className="flex items-center gap-2 text-[13px] text-muted">
              <Link href={ROUTES.inicio} className="no-underline hover:underline">
                Inicio
              </Link>
              <span aria-hidden="true">/</span>
              <span>Test de velocidad</span>
            </nav>
            <div className="mt-7">
              <Eyebrow>Clientes</Eyebrow>
            </div>
            <h1 className="mt-4 text-[clamp(2.25rem,1.4rem+3.4vw,3.5rem)] font-bold leading-[1.04] tracking-[-.035em]">
              Mide tu <em className="not-italic text-accent-text">velocidad.</em>
            </h1>
            <p className="mt-3.5 max-w-[620px] text-[1.0625rem] text-muted">
              Revisa cómo está funcionando tu internet de iWana desde tu celular, tablet o computador.
            </p>

            <div className="mt-9 grid items-start gap-7 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-10">
              <aside className={`${cardClass} p-7`} aria-labelledby="tips-title">
                <h2 id="tips-title" className="text-xl font-bold">
                  Para medir bien
                </h2>
                <ul className="m-0 mt-[18px] grid list-none gap-3.5 p-0">
                  {TIPS.map((tip) => (
                    <li key={tip.title} className="flex items-start gap-3.5">
                      <div className="grid size-11 shrink-0 place-items-center rounded-pill bg-badge-bg text-badge-text">
                        <Icon d={tip.icon} />
                      </div>
                      <div>
                        <strong className="block font-semibold">{tip.title}</strong>
                        <span className="block text-sm text-muted">{tip.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div
                  role="note"
                  className="mt-5 flex items-start gap-3 rounded-control border border-warn-line bg-warn-bg px-4 py-3.5 text-sm text-warn-text"
                >
                  <Icon d={ICONS.warning} className="mt-0.5 size-4" />
                  <span>
                    Si tu celular está usando datos móviles, la medición no corresponde a tu servicio de iWana.
                    Conéctate primero a tu Wi-Fi.
                  </span>
                </div>
              </aside>

              <SpeedTestMeter />
            </div>
          </div>
        </section>

        <section className="py-22">
          <div className="wrap">
            <SectionHead eyebrow="Tu resultado" title="¿Cómo leer tu resultado?" />
            <div className="grid gap-5 min-[900px]:grid-cols-3">
              {READINGS.map((r) => (
                <article key={r.title} className={`${cardClass} p-7`}>
                  <div className="grid size-[52px] place-items-center rounded-pill bg-badge-bg text-badge-text">
                    <Icon d={r.icon} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{r.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{r.text}</p>
                </article>
              ))}
            </div>
            <div className={`${cardClass} mt-6 flex flex-wrap items-center justify-between gap-4 px-7 py-6`}>
              {/* RESUMEN §3, decisión 6: la velocidad va en el contrato que se entrega en la visita. */}
              <p className="max-w-[720px]">
                <strong className="font-bold">Compara con tu plan.</strong> Revisa tu resultado contra la velocidad
                contratada que aparece en tu contrato, el que recibes en la visita de viabilidad.
              </p>
              <ExternalLink href={waLink("plan")} className={buttonClass("ghost")}>
                ¿No la tienes? Pregúntanos
              </ExternalLink>
            </div>
          </div>
        </section>

        <section className="bg-deep py-20 text-white">
          <div className="wrap">
            <h2 className="text-[clamp(1.75rem,1.2rem+1.8vw,2.25rem)] font-bold tracking-[-.024em]">¿Te salió bajo?</h2>
            <p className="mt-2.5 text-[1.0625rem] text-iwana-primary-200">Antes de reportarlo, haz esto:</p>
            <ol className="m-0 mt-9 grid list-none gap-4 p-0 min-[900px]:grid-cols-3">
              {LOW_STEPS.map((step, i) => (
                <li key={step.title} className="rounded-surface border border-white/10 bg-white/5 p-6">
                  <div className="grid size-10 place-items-center rounded-pill bg-iwana-secondary font-bold text-iwana-primary">
                    {i + 1}
                  </div>
                  <h3 className="mt-3.5 text-lg font-bold">{step.title}</h3>
                  <p className="mt-1.5 text-[15px] text-iwana-primary-200">{step.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <ExternalLink href={waLink("velocidadBaja")} className={buttonClass("lime")}>
                <Icon d={ICONS.whatsapp} className="size-4" />
                Reportar por WhatsApp
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
