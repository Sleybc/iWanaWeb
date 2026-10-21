"use client";

import { useState } from "react";
import { PLANS, waPlanLink } from "@/lib/constants";
import { ICONS } from "@/lib/icons";
import { ExternalLink } from "../ExternalLink";
import { buttonClass, cardClass, Icon } from "../ui";

// Perfiles orientativos de uso. Cámaras recomendadas desde el Plan Medio.
const USES: { label: string; d: string; minPlan?: number }[] = [
  { label: "Navegar, redes y WhatsApp", d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" },
  { label: "Estudiar y hacer trámites en línea", d: "M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2ZM22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7Z" },
  { label: "Ver videos y series", d: "M3 7h18v11H3ZM8 21h8M9 3l3 4 3-4" },
  { label: "Hacer videollamadas", d: "M15 10l5-3v10l-5-3ZM3 6h12v12H3Z" },
  { label: "Compartir la conexión en casa", d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
  { label: "Trabajar desde casa", d: "M4 7h16v13H4ZM9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M4 13h16" },
  { label: "Cámaras de seguridad", minPlan: 2, d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3ZM12 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" },
  { label: "Enviar y recibir archivos", d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8ZM14 2v6h6M12 18v-6M9 15l3-3 3 3" },
];

const RECOMMENDATIONS = [
  "Para quienes buscan una conexión para las actividades cotidianas, con pocas tareas al mismo tiempo.",
  "Para quienes combinan navegación, videos y videollamadas en su día a día.",
  "Para familias que comparten la conexión para estudiar, trabajar y entretenerse.",
  "Para hogares y negocios con un uso más intenso de la conexión. Revisamos contigo las actividades y los equipos que necesitas conectar.",
];

function included(wiredPoint: boolean, technology: string): [string, string][] {
  return [
    ["Internet", "Ilimitado"],
    ["Zona Wi-Fi", "Incluida"],
    ["Conexión segura", "Incluida"],
    ["Punto cableado", wiredPoint ? "1" : "No incluido"],
    ["Carga", "La mitad de tu descarga"],
    ["Tecnología", technology],
  ];
}

export function PlanExplorer() {
  // El lienzo abre con el Plan Medio (el popular) seleccionado.
  const [selected, setSelected] = useState(2);
  const plan = PLANS[selected];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 min-[900px]:grid-cols-4">
        {PLANS.map((p, i) => {
          const on = i === selected;
          return (
            <button
              key={p.name}
              type="button"
              aria-pressed={on}
              onClick={() => setSelected(i)}
              className={`relative cursor-pointer rounded-control border p-3 text-left max-[359px]:px-2 min-[640px]:p-5 transition-[border-color,background-color,box-shadow] duration-200 ${
                on
                  ? "border-sel-border bg-sel-bg text-sel-text shadow-card-hi"
                  : "border-line bg-card text-text hover:border-control hover:bg-bg-alt"
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[.1em] text-muted">{p.name}</span>
              {"popular" in p ? (
                <span className="absolute top-4 right-4 inline-flex items-center rounded-pill bg-badge-bg px-2.5 py-0.5 text-xs font-medium text-badge-text">
                  Popular
                </span>
              ) : null}
              <span className="mt-2.5 flex flex-nowrap items-baseline gap-1 whitespace-nowrap max-[359px]:gap-0.5 text-[clamp(1.125rem,6vw,1.625rem)] font-bold leading-none tracking-[-.03em] min-[640px]:text-[clamp(1.5rem,1.2rem+1vw,2rem)]">
                {p.price} <small className="text-[10px] font-medium tracking-normal text-muted min-[640px]:text-[13px]">/ mes</small>
              </span>
              <span className="mt-2 block text-sm text-muted">{p.title}</span>
              {p.technology === "Fibra Óptica" && (
                <span className="mt-2 block text-xs font-semibold text-accent-text">Solo Fibra Óptica</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid items-start gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
        <div className={`${cardClass} p-7`}>
          <div className="mb-5" aria-live="polite">
            <h3 className="text-xl font-bold">{plan.name}: recomendado para…</h3>
            <p className="mt-3 text-muted">{RECOMMENDATIONS[selected]}</p>
          </div>
          <p className="mb-4 text-sm font-semibold">Cuéntanos qué haces en internet</p>
          <ul className="m-0 grid list-none grid-cols-2 gap-2.5 p-0 min-[640px]:grid-cols-3 min-[1200px]:grid-cols-4">
            {USES.map((u) => (
              <li key={u.label} className={`flex flex-col gap-2.5 rounded-control border border-line-soft px-3.5 py-4 ${selected < (u.minPlan ?? 0) ? "bg-transparent opacity-50" : "bg-card-2"}`}>
                <div className="grid size-10 place-items-center rounded-pill bg-badge-bg text-badge-text">
                  <Icon d={u.d} />
                </div>
                <div className="text-sm leading-[1.3] font-semibold">{u.label}</div>
                {u.minPlan !== undefined && (
                  <div className="text-xs text-muted">{selected < u.minPlan ? "Desde el Plan Medio" : "Recomendado"}</div>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">El plan ideal depende de tu conexión y del uso simultáneo. Lo confirmamos contigo en la visita de viabilidad.</p>
        </div>

        <aside aria-live="polite" className={`${cardClass} p-7 shadow-card-soft lg:sticky lg:top-24`}>
          <div className="text-xs font-bold uppercase tracking-[.12em] text-muted">{plan.name}</div>
          <div className="mt-2.5 text-5xl leading-none font-bold tracking-[-.04em]">
            {plan.price} <small className="text-[15px] font-medium tracking-normal text-muted">/ mes</small>
          </div>
          <div className="mt-2.5 text-lg font-semibold">{plan.title}</div>
          <dl className="m-0 mt-5 border-t border-line-soft">
            {included(plan.wiredPoint, plan.technology).map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-line-soft py-3 text-[15px]">
                <dt className="text-muted">{k}</dt>
                <dd className="m-0 text-right font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
          <ExternalLink href={waPlanLink(plan.name)} className={`${buttonClass("primary")} mt-[22px] w-full`}>
            Solicitar {plan.name}
          </ExternalLink>
          <p className="mt-[18px] flex items-start gap-2.5 text-sm text-muted">
            <Icon className="mt-0.5 size-4 text-accent-text">
              <circle cx="12" cy="12" r="10" />
              <path d={ICONS.info} />
            </Icon>
            <span>
              La velocidad depende de la tecnología disponible en tu ubicación. Te la confirmamos por escrito en la
              visita de viabilidad, antes de instalar.
            </span>
          </p>
        </aside>
      </div>
    </>
  );
}
