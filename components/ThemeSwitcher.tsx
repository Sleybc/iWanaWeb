"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY, type ThemeMode } from "@/lib/theme";

const MODES: { key: ThemeMode; label: string; d: string }[] = [
  { key: "system", label: "Tema del sistema", d: "M2 3h20v14H2ZM8 21h8M12 17v4" },
  {
    key: "light",
    label: "Modo claro",
    d: "M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41",
  },
  { key: "dark", label: "Modo oscuro", d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" },
];

// El tema vive en <html data-theme>, que el script del <head> ya fijó antes
// del pintado; el componente solo lo lee y lo cambia.
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function readMode(): ThemeMode {
  const current = document.documentElement.dataset.theme;
  return current === "light" || current === "dark" ? current : "system";
}

function setMode(next: ThemeMode) {
  document.documentElement.dataset.theme = next;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {}
  listeners.forEach((l) => l());
}

export function ThemeSwitcher() {
  const mode = useSyncExternalStore(subscribe, readMode, () => "system" as ThemeMode);

  return (
    <div
      role="group"
      aria-label="Tema de la página"
      className="inline-flex items-center gap-0.5 rounded-pill border border-line-soft bg-bg-alt p-[3px]"
    >
      {MODES.map((m) => {
        const on = m.key === mode;
        return (
          <button
            key={m.key}
            type="button"
            aria-pressed={on}
            aria-label={m.label}
            title={m.label}
            onClick={() => setMode(m.key)}
            className={`grid size-10 cursor-pointer place-items-center rounded-pill border-0 hover:text-text max-[360px]:size-8 ${
              on ? "bg-seg-on text-text shadow-card" : "bg-transparent text-muted"
            }`}
          >
            <svg className="ico size-4" viewBox="0 0 24 24" aria-hidden="true">
              <path d={m.d} />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
