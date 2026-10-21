"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ROUTES, SPEEDTEST_URL } from "@/lib/constants";
import { ICONS } from "@/lib/icons";
import { ExternalLink } from "./ExternalLink";
import { buttonClass, cardClass, Icon } from "./ui";

type MeterState = "idle" | "loading" | "ready" | "error";

// Si el iframe no termina de cargar en este tiempo, se muestra el estado de error del lienzo.
const LOAD_TIMEOUT_MS = 15000;

const SPEEDTEST_HOST = new URL(SPEEDTEST_URL).host;

const frameClass =
  "relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-control bg-card-2 px-4 py-7 text-center min-[640px]:min-h-[460px] min-[640px]:px-6 min-[640px]:py-9";
const titleClass = "mt-2 text-[1.375rem] font-bold tracking-[-.01em]";
const textClass = "mt-2 max-w-[420px] text-sm text-muted";

/**
 * Medidor de Ookla. El iframe solo se monta después del clic, para que Ookla
 * no reciba la IP del visitante antes de que lo pida (RESUMEN §3, decisión 11).
 * Atributos del iframe según RESUMEN §5.
 */
export function SpeedTestMeter() {
  const [state, setState] = useState<MeterState>("idle");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (state !== "loading") return;
    const timer = window.setTimeout(() => setState("error"), LOAD_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [state, attempt]);

  function start() {
    setAttempt((n) => n + 1);
    setState("loading");
  }

  return (
    <div className={`${cardClass} min-w-0 p-3 shadow-card-soft`}>
      {state === "idle" ? (
        <div className={frameClass}>
          <Gauge />
          <h2 className={titleClass}>¿Listo para medir?</h2>
          <p className={textClass}>
            La medición la hace Ookla Speedtest, un servicio externo. Al iniciar se carga su medidor y Ookla recibe la
            dirección IP de tu conexión para hacer la prueba.{" "}
            <Link href={`${ROUTES.privacidad}#web`} className="font-semibold text-accent-text">
              Más información
            </Link>
            .
          </p>
          <button type="button" onClick={start} className={`${buttonClass("primary")} mt-[22px] w-full min-[640px]:w-auto`}>
            <Icon d={ICONS.play} className="size-4" />
            Iniciar medición
          </button>
        </div>
      ) : null}

      {state === "loading" || state === "ready" ? (
        <div className="overflow-hidden rounded-control bg-card-2">
          <div className="m-3 flex flex-wrap items-center gap-2 rounded-control border border-line bg-card px-3 py-2 text-[13px] font-semibold min-[640px]:rounded-pill">
            <Icon d={ICONS.lock} className="size-4 shrink-0 text-accent-text" />
            <span className="min-w-0 break-words">{SPEEDTEST_HOST}</span>
            <span className="text-[11px] font-semibold uppercase tracking-[.08em] text-muted min-[640px]:ml-auto">
              {state === "loading" ? "Cargando…" : "Medidor Ookla"}
            </span>
          </div>
          {/* sandbox mínimo: sin allow-top-navigation, allow-forms ni allow-popups (RESUMEN §5).
              Ookla solo dibuja el medidor si el dominio del referrer está en «Embedded Test URLs» de su
              panel: no cambiar referrerPolicy a no-referrer. Alto de 650 px, el de su código de inserción. */}
          <iframe key={attempt} sandbox="allow-scripts allow-same-origin" allow="" referrerPolicy="strict-origin-when-cross-origin"
            src={SPEEDTEST_URL}
            title="Medidor de velocidad de internet de Ookla"
            onLoad={() => setState("ready")}
            className="block h-[650px] w-full border-0"
          />
        </div>
      ) : null}

      {state === "error" ? (
        <div className={frameClass} role="alert">
          <div className="grid size-16 place-items-center rounded-pill bg-warn-bg text-warn-text">
            <Icon d={ICONS.warning} className="size-7" />
          </div>
          <h2 className={`${titleClass} mt-[18px]`}>El medidor no cargó</h2>
          <p className={textClass}>
            Puede ser tu conexión o un bloqueador del navegador. Ábrelo en una ventana aparte o inténtalo de nuevo.
          </p>
          <div className="mt-[22px] flex w-full flex-col justify-center gap-2.5 min-[640px]:w-auto min-[640px]:flex-row min-[640px]:flex-wrap">
            <ExternalLink href={SPEEDTEST_URL} className={`${buttonClass("primary")} whitespace-normal`}>
              Abrir en otra ventana
            </ExternalLink>
            <button type="button" onClick={start} className={`${buttonClass("ghost")} whitespace-normal`}>
              Intentar de nuevo
            </button>
          </div>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-2 pt-3.5 pb-1 text-sm text-muted">
        <span>
          ¿No carga?{" "}
          <ExternalLink href={SPEEDTEST_URL} className="font-semibold text-accent-text">
            Ábrelo en una ventana aparte
          </ExternalLink>
        </span>
        <span>Medición de Ookla Speedtest</span>
      </div>
    </div>
  );
}

/** Indicador decorativo del estado de espera. */
function Gauge() {
  return (
    <svg className="w-[min(320px,100%)]" viewBox="0 0 320 180" aria-hidden="true">
      <path d="M30 160 A130 130 0 0 1 290 160" fill="none" stroke="var(--gauge-track)" strokeWidth="16" strokeLinecap="round" />
      <path
        d="M30 160 A130 130 0 0 1 160 30"
        fill="none"
        stroke="var(--color-iwana-secondary)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeDasharray="4 10"
      />
      <path d="M160 160 L222 76" stroke="var(--text)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="160" cy="160" r="12" fill="var(--text)" />
      <circle cx="160" cy="160" r="5" fill="var(--color-iwana-secondary)" />
    </svg>
  );
}
