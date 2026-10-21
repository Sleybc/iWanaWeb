"use client";

import { useState } from "react";
import { PLANS, waPlanLink } from "@/lib/constants";
import { ICONS } from "@/lib/icons";
import { ExternalLink } from "../ExternalLink";
import { buttonClass, cardClass, Icon } from "../ui";

// Explorador de planes por perfil de uso (lienzo Main.dc.html, «Planes»). Sin
// velocidades (RESUMEN §3, decisión 6): cada uso indica desde qué plan alcanza.
const USES = [
  {
    label: "Navegar, redes y WhatsApp",
    min: 0,
    d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z",
  },
  {
    label: "Clases y trámites en línea",
    min: 0,
    d: "M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2ZM22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7Z",
  },
  { label: "Video en calidad estándar", min: 0, d: "M3 5h18v14H3ZM10 9l5 3-5 3Z" },
  { label: "Series en un televisor", min: 1, d: "M3 7h18v11H3ZM8 21h8M9 3l3 4 3-4" },
  { label: "Videollamadas de vez en cuando", min: 1, d: "M15 10l5-3v10l-5-3ZM3 6h12v12H3Z" },
  {
    label: "Varias personas a la vez",
    min: 2,
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
  { label: "Streaming en más de una pantalla", min: 2, d: "M2 4h13v9H2ZM9 13v4h13V8h-7M6 13v3M4 16h4" },
  {
    label: "Teletrabajo y clases con videollamada",
    min: 2,
    d: "M4 7h16v13H4ZM9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M4 13h16",
  },
  { label: "Muchos equipos a la vez", min: 3, d: "M4 5h12v9H4ZM2 18h16M19 8h3v12h-3Z" },
  {
    label: "Video en alta definición en varias pantallas",
    min: 3,
    d: "M3 5h18v14H3ZM7 9v6M7 12h4M11 9v6M14 9h2a3 3 0 0 1 0 6h-2Z",
  },
  {
    label: "Cámaras de seguridad",
    min: 3,
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3ZM12 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z",
  },
  {
    label: "Envío de archivos pesados",
    min: 3,
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8ZM14 2v6h6M12 18v-6M9 15l3-3 3 3",
  },
];

const INCLUDED = [
  ["Internet", "Ilimitado"],
  ["Zona Wi-Fi", "Incluida"],
  ["Conexión segura", "Incluida"],
  ["Punto cableado", "1"],
  ["Subida", "La mitad de tu bajada"],
  ["Tecnología", "Fibra o Radio Enlace"],
] as const;

export function PlanExplorer() {
  // El lienzo abre con el Plan Medio (el popular) seleccionado.
  const [selected, setSelected] = useState(2);
  const plan = PLANS[selected];
  const count = USES.filter((u) => u.min <= selected).length;

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
              className={`relative cursor-pointer rounded-control border p-5 text-left transition-[border-color,background-color,box-shadow] duration-200 ${
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
              <span className="mt-2.5 block text-[clamp(1.5rem,1.2rem+1vw,2rem)] font-bold leading-none tracking-[-.03em]">
                {p.price} <small className="text-[13px] font-medium tracking-normal text-muted">/ mes</small>
              </span>
              <span className="mt-2 block text-sm text-muted">{p.title}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid items-start gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
        <div className={`${cardClass} p-7`}>
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold">Con el {plan.name} puedes</h3>
            <span className="text-sm text-muted">{count} de 12 usos</span>
          </div>
          <ul className="m-0 grid list-none grid-cols-2 gap-2.5 p-0 min-[640px]:grid-cols-3 min-[1200px]:grid-cols-4">
            {USES.map((u) => {
              const on = u.min <= selected;
              return (
                <li
                  key={u.label}
                  className={`flex min-h-[118px] flex-col gap-2.5 rounded-control border border-line-soft px-3.5 py-4 transition-[opacity,background-color] duration-200 ${
                    on ? "bg-card-2" : "bg-transparent opacity-50"
                  }`}
                >
                  <div
                    className={`grid size-10 place-items-center rounded-pill ${
                      on ? "bg-badge-bg text-badge-text" : "border border-dashed border-control text-muted"
                    }`}
                  >
                    <Icon d={u.d} />
                  </div>
                  <div className="text-sm leading-[1.3] font-semibold">{u.label}</div>
                  <div className="text-xs text-muted">{on ? "Incluido" : `Desde el ${PLANS[u.min].name}`}</div>
                </li>
              );
            })}
          </ul>
        </div>

        <aside aria-live="polite" className={`${cardClass} p-7 shadow-card-soft lg:sticky lg:top-24`}>
          <div className="text-xs font-bold uppercase tracking-[.12em] text-muted">{plan.name}</div>
          <div className="mt-2.5 text-5xl leading-none font-bold tracking-[-.04em]">
            {plan.price} <small className="text-[15px] font-medium tracking-normal text-muted">/ mes</small>
          </div>
          <div className="mt-2.5 text-lg font-semibold">{plan.title}</div>
          <dl className="m-0 mt-5 border-t border-line-soft">
            {INCLUDED.map(([k, v]) => (
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
