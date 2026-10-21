import type { Office } from "@/lib/constants";
import { ICONS } from "@/lib/icons";
import { ExternalLink } from "./ExternalLink";
import { buttonClass, cardClass, Icon } from "./ui";

/** Sede con dirección, horario por día y enlace a Google Maps (Contacto e Inicio). */
export function OfficeCard({ office }: { office: Office }) {
  return (
    <article className={`${cardClass} flex flex-col overflow-hidden`}>
      <div className="flex items-center gap-3.5 px-6 pt-6">
        <div className="grid size-12 shrink-0 place-items-center rounded-pill bg-badge-bg text-badge-text">
          <Icon>
            <path d={ICONS.pin} />
            <circle cx="12" cy="10" r="3" />
          </Icon>
        </div>
        <h3 className="text-xl font-bold leading-[1.2]">{office.name}</h3>
      </div>
      <address className="px-6 pt-3.5 text-[15px] not-italic text-muted">
        {office.address}, {office.town}, Cundinamarca
      </address>
      <dl className="mx-6 mt-[18px] grid flex-1 grid-cols-[auto_1fr] content-start border-t border-line-soft">
        {office.hours.map((h) => (
          <div key={h.days} className="contents">
            <dt className="border-b border-line-soft py-2.5 pr-4 text-sm font-semibold">{h.days}</dt>
            <dd className="m-0 border-b border-line-soft py-2.5 text-right text-sm text-muted">
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
      <ExternalLink href={office.mapUrl} className={`${buttonClass("ghost")} m-6 mt-5 self-start`}>
        Cómo llegar
        <span className="sr-only">a la sede de {office.name} (se abre en otra pestaña)</span>
      </ExternalLink>
    </article>
  );
}
