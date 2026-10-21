"use client";

import { useState } from "react";
import { COVERAGE, type TownName, waLink, waTownLink } from "@/lib/constants";
import { ICONS } from "@/lib/icons";
import { ExternalLink } from "../ExternalLink";
import { buttonClass, cardClass, Icon } from "../ui";

// Mapa esquemático y buscador de cobertura (lienzo Main.dc.html, «Cobertura»).
// Las posiciones son un esquema, no a escala, como dice el propio mapa.
const TOWNS: { name: TownName; short: string; pos: string }[] = [
  { name: "El Colegio", short: "El Colegio", pos: "left-[52%] top-[54%]" },
  { name: "Tena", short: "Tena", pos: "left-[68%] top-[21%]" },
  { name: "San Antonio del Tequendama", short: "San Antonio", pos: "left-[85%] top-[40%]" },
  { name: "La Mesa", short: "La Mesa", pos: "left-[42%] top-[27%]" },
  { name: "Anapoima", short: "Anapoima", pos: "left-[17%] top-[52%]" },
  { name: "Viotá", short: "Viotá", pos: "left-[28%] top-[80%]" },
];

const isFull = (town: TownName) => (COVERAGE.municipios as readonly string[]).includes(town);
const kindLabel = (town: TownName) => (isFull(town) ? "Zona urbana y rural" : "Zonas rurales");

const fullCore = "border-2 border-text bg-iwana-secondary";
const ruralCore =
  "border-2 border-dashed border-accent-text bg-[repeating-linear-gradient(45deg,var(--accent)_0_2px,transparent_2px_5px)]";

export function CoverageFinder() {
  const [selected, setSelected] = useState<TownName | null>(null);

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
      <div className={`${cardClass} flex flex-col p-5 min-[640px]:p-7 lg:order-2`}>
        <h3 className="text-xl font-bold">Consulta tu municipio</h3>
        <p className="mt-1.5 text-[15px] text-muted">Elige un municipio para revisar dónde prestamos servicio.</p>
        <ul className="m-0 mt-[18px] grid list-none gap-2 p-0">
          {TOWNS.map((t, i) => {
            const on = t.name === selected;
            return (
              <li key={t.name}>
                <button
                  type="button"
                  aria-expanded={on}
                  aria-controls={`cobertura-municipio-${i}`}
                  onClick={() => setSelected(on ? null : t.name)}
                  className={`flex min-h-[52px] w-full cursor-pointer items-center justify-between gap-3 rounded-control border px-4 py-2.5 text-left font-semibold text-text transition-colors ${
                    on ? "border-sel-border bg-sel-bg" : "border-line bg-card hover:border-control hover:bg-bg-alt"
                  }`}
                >
                  <span>{t.name}</span>
                  <span className="inline-flex max-w-[110px] shrink-0 items-center gap-1.5 text-right text-xs font-semibold text-muted">
                    {kindLabel(t.name)}
                    <Icon d="m9 18 6-6-6-6" className={`size-4 shrink-0 transition-transform ${on ? "rotate-90" : ""}`} />
                  </span>
                </button>
                <div id={`cobertura-municipio-${i}`} aria-live="polite">
                  {on && (
                    <div className="mt-2 rounded-control bg-card-2 p-4">
                      <p className="text-[15px] text-muted">
                        {isFull(t.name)
                          ? `Tenemos presencia en la zona urbana y rural de ${t.name}. Revisamos tu ubicación para confirmar cómo podemos conectarte.`
                          : `Atendemos algunas zonas rurales de ${t.name}. Cuéntanos tu vereda para revisar la disponibilidad.`}
                      </p>
                      <ExternalLink href={waTownLink(t.name)} className={`${buttonClass("primary")} mt-4 w-full`}>
                        <Icon d={ICONS.whatsapp} className="size-4" />
                        Confirmar mi cobertura
                      </ExternalLink>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-sm text-muted">
          ¿No encuentras tu municipio?{" "}
          <ExternalLink href={waLink("viabilidad")} className="font-bold text-accent-text">
            Consulta tu ubicación por WhatsApp
          </ExternalLink>
        </p>
      </div>
      <div className={`${cardClass} relative p-5 lg:order-1`}>
        <div className="relative aspect-[7/6] w-full overflow-hidden rounded-control bg-map-bg">
          <svg viewBox="0 0 700 600" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 size-full">
            <g fill="none" stroke="var(--contour)" strokeWidth="1.5">
              <path d="M-20 120 C120 80 220 160 360 120 C500 80 600 140 720 100" />
              <path d="M-20 200 C140 150 240 240 380 200 C520 160 610 230 720 190" />
              <path d="M-20 290 C110 250 260 330 400 290 C540 250 620 320 720 280" />
              <path d="M-20 380 C150 340 260 420 410 380 C560 340 630 400 720 370" />
              <path d="M-20 470 C130 430 270 510 420 470 C570 430 640 490 720 460" />
              <path d="M-20 560 C140 520 280 590 430 555 C580 520 650 570 720 550" />
            </g>
            <path
              d="M120 600 C170 520 230 470 300 420 C360 378 420 360 470 300 C510 252 560 220 620 160"
              fill="none"
              stroke="var(--color-iwana-primary-400)"
              strokeWidth="3"
              opacity="0.35"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute top-3.5 left-4 text-[11px] font-bold tracking-[.14em] text-muted">
            CUNDINAMARCA · TEQUENDAMA
          </span>
          <span className="absolute right-4 bottom-3 text-[11px] text-muted">Esquema, no a escala</span>
          {TOWNS.map((t) => {
            const on = t.name === selected;
            return (
              <button
                key={t.name}
                type="button"
                aria-pressed={on}
                aria-label={`${t.name}: ${kindLabel(t.name).toLowerCase()}`}
                onClick={() => setSelected(t.name)}
                className={`group absolute flex -translate-x-1/2 -translate-y-[26px] cursor-pointer flex-col items-center gap-1.5 border-0 bg-transparent p-1 text-text ${t.pos}`}
              >
                <span
                  className={`grid size-11 place-items-center rounded-full transition-[background-color,transform] duration-200 ${
                    on ? "scale-110 bg-sel-bg ring-2 ring-sel-border" : "group-hover:bg-badge-bg"
                  }`}
                >
                  <span className={`size-5 rounded-full ${isFull(t.name) ? fullCore : ruralCore}`} />
                </span>
                <span
                  className={`rounded-pill px-2.5 py-0.5 text-[13px] font-semibold shadow-card ${
                    on ? "bg-cta text-cta-text" : "bg-card"
                  }`}
                >
                  {t.short}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-3.5 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted">
          <span className="inline-flex items-center gap-2">
            <i aria-hidden="true" className="size-3 rounded-full border-[1.5px] border-text bg-iwana-secondary" />
            Zona urbana y rural
          </span>
          <span className="inline-flex items-center gap-2">
            <i aria-hidden="true" className="size-3 rounded-full border-[1.5px] border-dashed border-accent-text" />
            Zonas rurales
          </span>
        </div>
      </div>

    </div>
  );
}
