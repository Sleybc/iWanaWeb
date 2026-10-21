import type { Office } from "@/lib/constants";
import { ICONS } from "@/lib/icons";
import { ExternalLink } from "./ExternalLink";
import { buttonClass, cardClass, Icon } from "./ui";

/** Sede con dirección, horario por día y enlace a Google Maps (Contacto e Inicio). */
export function OfficeCard({ office }: { office: Office }) {
  return (
    <article className={`${cardClass} flex flex-col overflow-hidden`}>
      <div className="flex items-center gap-3 px-5 pt-5 min-[640px]:gap-3.5 min-[640px]:px-6 min-[640px]:pt-6">
        <div className="grid size-11 shrink-0 min-[640px]:size-12 place-items-center rounded-pill bg-badge-bg text-badge-text">
          <Icon>
            <path d={ICONS.pin} />
            <circle cx="12" cy="10" r="3" />
          </Icon>
        </div>
        <h3 className="text-xl font-bold leading-[1.2]">{office.name}</h3>
      </div>
      <address className="px-5 pt-3 text-[15px] min-[640px]:px-6 min-[640px]:pt-3.5 not-italic text-muted">
        <span className="block font-medium text-text">{office.address}</span>
        <span className="mt-1 block text-sm">{office.town}, Cundinamarca</span>
      </address>
      <dl className="mx-5 mt-3.5 grid min-[640px]:mx-6 min-[640px]:mt-[18px] flex-1 grid-cols-[auto_1fr] content-start border-t border-line-soft">
        {office.hours.map((h) => (
          <div key={h.days} className="contents">
            <dt className="border-b border-line-soft py-2 pr-3 min-[640px]:py-2.5 min-[640px]:pr-4 text-sm font-semibold">{h.days}</dt>
            <dd className="m-0 border-b border-line-soft py-2 text-right min-[640px]:py-2.5 text-sm text-muted">
              {h.times.length === 0
                ? "Cerrado"
                : h.times.map((t, i) => (
                    <span key={t}>
                      {i > 0 ? <br /> : null}
                      {t}
                    </span>
                  ))}
            </dd>
          </div>
        ))}
      </dl>
      <ExternalLink href={office.mapUrl} className={`${buttonClass("ghost")} mx-5 mt-4 mb-5 self-stretch min-[640px]:mx-6 min-[640px]:mt-5 min-[640px]:mb-6 min-[640px]:self-start`}>
        <Icon d={ICONS.pin} className="size-4" />
        Cómo llegar
        <span className="sr-only">a la sede de {office.name} (se abre en otra pestaña)</span>
      </ExternalLink>
    </article>
  );
}
