"use client";

import { useState } from "react";
import { PBX_DISPLAY, WHATSAPP_DISPLAY } from "@/lib/constants";
import { ICONS } from "@/lib/icons";
import { Eyebrow, Icon } from "../ui";

// Un mismo proceso: lista completa en móvil y anillo interactivo en computador.
const STEPS = [
  {
    short: "Solicitud",
    title: "Cuéntanos dónde estás",
    desc: "Contáctanos por WhatsApp, teléfono o en un punto de atención para agendar la visita.",
    tip: "Ten a mano la dirección o el nombre de tu vereda.",
    icon: ICONS.whatsapp,
  },
  {
    short: "Viabilidad",
    title: "Revisamos cómo conectarte",
    desc: "Visitamos tu predio sin costo y confirmamos la tecnología, el plan y las condiciones de instalación.",
    // RESUMEN §3, decisión 6: la velocidad queda en el contrato que se entrega en la visita.
    tip: "Te confirmamos por escrito la velocidad y el valor de instalación, si aplica, antes de contratar.",
    icon: `${ICONS.pin}M12 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z`,
  },
  {
    short: "Instalación",
    title: "Acordamos la fecha contigo",
    desc: "Una vez aceptes las condiciones, agendamos e instalamos tu servicio.",
    tip: "Coordinamos contigo la fecha de instalación.",
    icon: ICONS.wrench,
  },
  {
    short: "Conexión",
    title: "Empiezas a navegar",
    desc: "Tu servicio queda activo para que disfrutes de internet ilimitado y tu zona Wi-Fi.",
    tip: "",
    icon: ICONS.wifi,
  },
  {
    short: "Soporte",
    title: "Seguimos contigo",
    desc: "Te atendemos por WhatsApp, teléfono y en nuestros puntos de atención.",
    tip: `WhatsApp ${WHATSAPP_DISPLAY} · PBX ${PBX_DISPLAY}.`,
    icon: ICONS.headset,
  },
];

// Posición de cada nodo sobre el anillo, en % del contenedor (clases, sin style en línea).
const NODE_POS = [
  "left-[50%] top-[9%]",
  "left-[89%] top-[37.5%]",
  "left-[74%] top-[83%]",
  "left-[26%] top-[83%]",
  "left-[11%] top-[37.5%]",
];

const RADIUS = 168;
const CIRC = 2 * Math.PI * RADIUS;

export function HowItWorks() {
  const [step, setStep] = useState(0);
  const cur = STEPS[step];
  const num = `0${step + 1}`;
  const arc = `${(((step + 1) / STEPS.length) * CIRC).toFixed(1)} ${CIRC.toFixed(1)}`;

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div className="relative mx-auto hidden aspect-square w-[min(420px,100%)] lg:block">
        <svg viewBox="0 0 420 420" aria-hidden="true" className="absolute inset-0 size-full">
          <circle cx="210" cy="210" r={RADIUS} fill="none" stroke="rgb(255 255 255 / 12%)" strokeWidth="2" />
          <circle
            cx="210"
            cy="210"
            r={RADIUS}
            fill="none"
            stroke="var(--color-iwana-secondary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={arc}
            transform="rotate(-90 210 210)"
            className="transition-[stroke-dasharray] duration-300"
          />
        </svg>
        <div className="absolute inset-[22%] flex flex-col items-center justify-center rounded-full border border-white/8 bg-white/4 text-center">
          <div className="text-[clamp(2.25rem,1.6rem+2vw,3.25rem)] leading-none font-light tracking-[-.03em]">
            {num}
            <span className="text-[.4em] font-medium text-iwana-primary-300">/05</span>
          </div>
          <div className="mt-2 text-xs font-bold uppercase tracking-[.14em] text-iwana-secondary">{cur.short}</div>
        </div>
        {STEPS.map((s, i) => {
          const on = i === step;
          const done = i < step;
          return (
            <button
              key={s.short}
              type="button"
              aria-label={`Paso ${i + 1}: ${s.short}`}
              aria-pressed={on}
              onClick={() => setStep(i)}
              className={`absolute -mt-8 -ml-8 grid size-16 cursor-pointer place-items-center rounded-full border-[1.5px] transition-[background-color,color,border-color,transform] duration-200 ${NODE_POS[i]} ${
                on
                  ? "scale-[1.08] border-white bg-white text-iwana-primary"
                  : done
                    ? "border-iwana-secondary bg-deep text-iwana-secondary"
                    : "border-white/25 bg-deep text-iwana-primary-200 hover:border-iwana-secondary hover:text-white"
              }`}
            >
              <Icon d={s.icon} className="size-[26px]" />
            </button>
          );
        })}
      </div>

      <div>
        <span className="[&>span]:text-iwana-primary-200">
          <Eyebrow>Cómo funciona</Eyebrow>
        </span>
        <h2 className="mt-3.5 text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-.028em]">
          Te conectamos y seguimos contigo.
        </h2>
        <ol className="mt-8 ml-5 list-none border-l border-white/15 p-0 lg:hidden">
          {STEPS.map((s, i) => (
            <li key={s.short} className="relative pb-7 pl-9 last:pb-0">
              <span className="absolute -left-5 top-0 grid size-10 place-items-center rounded-full border border-iwana-secondary/30 bg-deep text-sm font-bold text-iwana-secondary">
                <span aria-hidden="true">0{i + 1}</span>
                <span className="sr-only">Paso {i + 1}</span>
              </span>
              <div className="pt-0.5 text-xs font-bold uppercase tracking-[.12em] text-iwana-secondary">{s.short}</div>
              <h3 className="mt-1.5 text-xl font-bold leading-tight">{s.title}</h3>
              <p className="mt-2 text-base text-iwana-primary-200">{s.desc}</p>
              {i === 1 && (
                <p className="mt-3 rounded-control border border-white/10 bg-white/5 p-3 text-sm text-iwana-primary-100">{s.tip}</p>
              )}
            </li>
          ))}
        </ol>
        <div className="mt-10 hidden lg:block" aria-live="polite">
          <div className="text-xs font-bold uppercase tracking-[.14em] text-iwana-secondary">
            Paso {num} · {cur.short}
          </div>
          <h3 className="mt-3 text-[clamp(1.75rem,1.3rem+1.5vw,2.25rem)] font-bold tracking-[-.02em]">{cur.title}</h3>
          <p className="mt-3.5 max-w-[520px] text-lg text-iwana-primary-200">{cur.desc}</p>
          {cur.tip && <div className="mt-7 flex max-w-[520px] items-start gap-3 rounded-control border border-white/10 bg-white/5 px-[18px] py-4 text-[15px] text-iwana-primary-100">
            <Icon className="mt-0.5 text-iwana-secondary">
              <circle cx="12" cy="12" r="10" />
              <path d={ICONS.info} />
            </Icon>
            <span>{cur.tip}</span>
          </div>}
        </div>
        <div className="mt-8 hidden flex-wrap gap-2 lg:flex">
          {STEPS.map((s, i) => {
            const on = i === step;
            return (
              <button
                key={s.short}
                type="button"
                aria-pressed={on}
                onClick={() => setStep(i)}
                className={`min-h-11 cursor-pointer rounded-pill border px-4 py-2 text-sm font-semibold ${
                  on
                    ? "border-white bg-white text-iwana-primary"
                    : "border-white/25 bg-transparent text-iwana-primary-200 hover:border-white hover:text-white"
                }`}
              >
                0{i + 1} {s.short}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
