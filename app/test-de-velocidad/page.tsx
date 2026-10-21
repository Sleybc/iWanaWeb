import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SpeedTestMeter } from "@/components/SpeedTestMeter";
import { buttonClass, cardClass, Eyebrow, Icon, SrOnly } from "@/components/ui";
import { PBX_DISPLAY, PBX_TEL, ROUTES, waLink } from "@/lib/constants";
import { ICONS } from "@/lib/icons";

// Fuente: diseno/claude-design/Test.dc.html.

export const metadata: Metadata = {
  title: "Test de velocidad",
  description: "Mide la velocidad de tu internet de iWana desde tu celular, tablet o computador.",
};

const TIPS = [
  { icon: ICONS.plug, title: "Si puedes, usa cable", text: "Conecta el computador al router con cable de red." },
  { icon: ICONS.wifi, title: "Con Wi-Fi, acércate al router", text: "Paredes y distancia bajan la señal del Wi-Fi." },
  { icon: ICONS.pause, title: "Pausa lo demás", text: "Detén descargas, videos y otros equipos mientras mides." },
];

const READINGS = [
  { icon: ICONS.download, title: "Descarga", text: "Qué tan rápido recibes: páginas, videos, series y descargas." },
  {
    icon: ICONS.upload,
    title: "Carga",
    // RESUMEN §3, decisión 8: carga igual a la mitad de la descarga.
    text: "Qué tan rápido envías: videollamadas, fotos y archivos. En tu plan es la mitad de tu velocidad de descarga.",
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
        <section className="bg-bg-alt pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-18">
          <div className="wrap">
            <nav aria-label="Ruta" className="flex items-center gap-2 text-[13px] text-muted">
              <Link href={ROUTES.inicio} className="no-underline hover:underline">
                Inicio
              </Link>
              <span aria-hidden="true">/</span>
              <span>Test de velocidad</span>
            </nav>
            <div className="mt-6">
              <Eyebrow>Clientes</Eyebrow>
            </div>
            <h1 className="mt-5 text-[clamp(2.5rem,1.4rem+4.2vw,4.25rem)] font-bold leading-[1.02] tracking-[-.035em]">
              Mide tu <em className="not-italic text-accent-text">velocidad.</em>
            </h1>
            <p className="mt-[22px] max-w-[600px] text-[1.1875rem] text-muted">
              Revisa cómo está funcionando tu internet de iWana desde tu celular, tablet o computador.
            </p>

            <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-10">
              <aside className={`${cardClass} min-w-0 p-5 min-[640px]:p-7`} aria-labelledby="tips-title">
                <h2 id="tips-title" className="text-xl font-bold tracking-[-.01em]">
                  Para medir bien
                </h2>
                <ul className="m-0 mt-4 grid list-none gap-3 p-0 min-[640px]:mt-[18px] min-[640px]:gap-3.5">
                  {TIPS.map((tip) => (
                    <li key={tip.title} className="flex items-start gap-3 min-[640px]:gap-3.5">
                      <div className="grid size-11 shrink-0 place-items-center rounded-pill bg-badge-bg text-badge-text">
                        <Icon d={tip.icon} />
                      </div>
                      <div className="min-w-0">
                        <strong className="block font-semibold">{tip.title}</strong>
                        <span className="block text-sm text-muted">{tip.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div
                  role="note"
                  className="mt-4 flex items-start gap-3 rounded-control border border-warn-line bg-warn-bg px-3 py-3 text-sm text-warn-text min-[640px]:mt-5 min-[640px]:px-4 min-[640px]:py-3.5"
                >
                  <Icon d={ICONS.warning} className="mt-0.5 size-4 shrink-0" />
                  <span>
                    Conéctate al Wi-Fi de iWana. Si usas datos móviles, estarás midiendo otra conexión.
                  </span>
                </div>
              </aside>

              <SpeedTestMeter />
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-18">
          <div className="wrap">
            <div className="mb-10">
              <Eyebrow>Tu resultado</Eyebrow>
              <h2 className="mt-3.5 text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-.028em]">
                ¿Cómo leer tu resultado?
              </h2>
            </div>
            <div className="grid gap-6 min-[960px]:grid-cols-3">
              {READINGS.map((r) => (
                <article key={r.title} className={`${cardClass} min-w-0 p-5 min-[640px]:p-7`}>
                  <div className="grid size-11 place-items-center rounded-pill bg-badge-bg text-badge-text min-[640px]:size-[52px]">
                    <Icon d={r.icon} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold tracking-[-.01em]">{r.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{r.text}</p>
                </article>
              ))}
            </div>
            <div className={`${cardClass} mt-6 flex flex-col items-start gap-5 p-5 min-[640px]:flex-row min-[640px]:flex-wrap min-[640px]:items-center min-[640px]:justify-between min-[640px]:p-7`}>
              {/* RESUMEN §3, decisión 6: la velocidad va en el contrato que se entrega en la visita. */}
              <p className="max-w-[720px]">
                <strong className="font-bold">Compara con tu plan.</strong> Revisa tu resultado contra la velocidad
                contratada que aparece en tu contrato, el que recibes en la visita de viabilidad.
              </p>
              <ExternalLink href={waLink("plan")} className={`${buttonClass("ghost", "sm")} w-full min-[640px]:w-auto`}>
                <Icon d={ICONS.whatsapp} className="size-4 shrink-0" />
                Consultar mi velocidad
              </ExternalLink>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-deep py-16 text-white">
          <svg viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-x-0 bottom-0 h-48 w-full">
            <path d="M0 200 L140 150 L280 180 L430 110 L580 160 L740 90 L900 150 L1060 100 L1220 150 L1440 120" fill="none" stroke="rgb(255 255 255 / 10%)" strokeWidth="2" />
            <path d="M0 250 C200 210 380 240 560 214 C720 192 880 232 1040 200 C1180 172 1300 186 1440 180" fill="none" stroke="rgb(165 195 48 / 35%)" strokeWidth="2" />
          </svg>
          <div className="wrap relative">
            <h2 className="max-w-[640px] text-[clamp(2rem,1.3rem+2.4vw,3rem)] font-bold leading-[1.05] tracking-[-.03em]">¿Te salió bajo?</h2>
            <p className="mt-3 text-lg text-iwana-primary-200">Antes de reportarlo, haz esto:</p>
            <ol className="m-0 mt-9 grid list-none gap-6 p-0 min-[960px]:grid-cols-3">
              {LOW_STEPS.map((step, i) => (
                <li key={step.title} className="rounded-surface border border-white/10 bg-white/5 p-5 min-[640px]:p-7">
                  <div className="grid size-11 place-items-center rounded-pill bg-iwana-secondary font-bold text-iwana-primary">
                    <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <SrOnly>Paso {i + 1}</SrOnly>
                  </div>
                  <h3 className="mt-3.5 text-xl font-bold tracking-[-.01em]">{step.title}</h3>
                  <p className="mt-1.5 text-[15px] text-iwana-primary-200">{step.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-col gap-3 min-[640px]:flex-row min-[640px]:flex-wrap">
              <ExternalLink href={waLink("velocidadBaja")} className={`${buttonClass("lime")} w-full min-[640px]:w-auto`}>
                <Icon d={ICONS.whatsapp} className="size-4" />
                Reportar por WhatsApp
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
