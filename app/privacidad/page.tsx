import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { buttonClass, cardClass, Eyebrow, Icon, Pending } from "@/components/ui";
import { EMAIL, HOSTING_PROVIDER, LEGAL_ADDRESS, LEGAL_NAME, NIT, PBX_DISPLAY, POLICY, ROUTES } from "@/lib/constants";
import { ICONS } from "@/lib/icons";

// Fuente: diseno/claude-design/Privacidad.dc.html (Ley 1581 de 2012 y Decreto
// 1377 de 2013). Los datos que faltan en la política (RESUMEN §6) se muestran
// como marcadores visibles hasta que iWana los complete.

export const metadata: Metadata = {
  title: "Política de tratamiento de datos",
  description: `Cómo ${LEGAL_NAME} trata tus datos personales, tus derechos y cómo ejercerlos.`,
};

const RESPONSIBLE = LEGAL_NAME.toUpperCase();

const TOC = [
  { id: "resumen", label: "En pocas palabras" },
  { id: "responsable", label: "1. Quién es el responsable" },
  { id: "finalidades", label: "2. Para qué usamos tus datos" },
  { id: "derechos", label: "3. Tus derechos" },
  { id: "ejercer", label: "4. Cómo ejercer tus derechos" },
  { id: "especiales", label: "5. Datos sensibles y de menores" },
  { id: "web", label: "6. Esta página web" },
  { id: "cambios", label: "7. Cambios a esta política" },
  { id: "documento", label: "8. Documento completo y versiones" },
];

const PURPOSES = [
  {
    icon: ICONS.home,
    title: "Clientes",
    text: "Hacer la visita de viabilidad y la instalación, cumplir el contrato, facturar y aplicar tus pagos, darte soporte, avisarte de mantenimientos y cambios, y cumplir los deberes legales y regulatorios del sector.",
  },
  {
    icon: ICONS.users,
    title: "Personas interesadas en el servicio",
    text: "Responder tu solicitud, revisar la cobertura y agendar la visita. Solo con una autorización aparte te enviamos información comercial.",
  },
  {
    icon: ICONS.briefcase,
    title: "Empleados, contratistas y aspirantes",
    text: "Seleccionar personal, administrar la relación laboral o contractual, pagar y cumplir los deberes de seguridad social y de seguridad y salud en el trabajo.",
  },
  {
    icon: ICONS.receipt,
    title: "Proveedores",
    text: "Contratar bienes y servicios, pagar y cumplir los deberes contables y tributarios.",
  },
];

const infoIcon = (
  <>
    <circle cx="12" cy="12" r="10" />
    <path d={ICONS.info} />
  </>
);

const RIGHTS: { icon: ReactNode; title: string; text: string }[] = [
  { icon: <path d={ICONS.eye} />, title: "Conocer", text: "Saber qué datos tuyos tenemos, gratis." },
  { icon: <path d={ICONS.pencil} />, title: "Actualizar y corregir", text: "Pedir que arreglemos datos incompletos o errados." },
  { icon: <path d={ICONS.fileCheck} />, title: "Pedir prueba de tu autorización", text: "Saber cuándo y cómo nos autorizaste." },
  { icon: infoIcon, title: "Ser informado", text: "Saber para qué usamos tus datos." },
  {
    icon: <path d={ICONS.trash} />,
    title: "Revocar y suprimir",
    text: "Retirar tu autorización y pedir que borremos tus datos, salvo que la ley nos obligue a conservarlos.",
  },
  {
    icon: <path d={ICONS.bank} />,
    title: "Quejarte ante la SIC",
    text: "Ante la Superintendencia de Industria y Comercio, después de hacer el trámite con nosotros.",
  },
];

const PROCEDURES = [
  {
    title: "Consulta",
    days: 10,
    text: "Para saber qué datos tenemos y cómo los usamos. Si no alcanzamos, te avisamos y respondemos en máximo 5 días hábiles más.",
  },
  {
    title: "Reclamo",
    days: 15,
    text: "Para corregir, actualizar o borrar datos, o si crees que incumplimos la ley. Si no alcanzamos, te avisamos y respondemos en máximo 8 días hábiles más.",
  },
];

const linkClass = "font-semibold text-accent-text";
const checkItem = <Icon d={ICONS.check} className="mt-[5px] size-4 shrink-0 text-accent-text" />;

function ValidFrom() {
  return <>{POLICY.validFrom ?? <Pending>CONFIRMAR: fecha de vigencia</Pending>}</>;
}

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-alt pt-6 pb-14 sm:pt-10 lg:pt-12 lg:pb-18">
          <div className="wrap">
            <nav aria-label="Ruta" className="flex items-center gap-2 text-[13px] text-muted print:hidden">
              <Link href={ROUTES.inicio} className="no-underline hover:underline">
                Inicio
              </Link>
              <span aria-hidden="true">/</span>
              <span>Política de datos</span>
            </nav>
            <div className="mt-6">
              <Eyebrow>Legal</Eyebrow>
            </div>
            <h1 className="mt-5 max-w-[1000px] text-[clamp(2.5rem,1.4rem+4.2vw,4.25rem)] font-bold leading-[1.02] tracking-[-.035em] text-balance">
              Política de tratamiento de datos personales
            </h1>
            <div className="mt-7 grid gap-3 text-sm text-muted min-[640px]:grid-cols-2 xl:grid-cols-4">
              <MetaChip label="Responsable">{RESPONSIBLE}</MetaChip>
              <MetaChip label="NIT">{NIT}</MetaChip>
              <MetaChip label="Vigente desde">
                <ValidFrom />
              </MetaChip>
              {/* Sin nombre de personas: la política identifica a la empresa, no a quien la aprueba. */}
              <MetaChip label="Versión">{POLICY.version}</MetaChip>
            </div>
          </div>
        </section>

        <div className="wrap grid gap-6 py-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:py-18 print:block">
          <details className={`${cardClass} group min-w-0 self-start lg:hidden print:hidden`}>
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold [&::-webkit-details-marker]:hidden">
              En esta página
              <Icon d="m6 9 6 6 6-6" className="size-4 shrink-0 text-accent-text transition-transform group-open:rotate-180" />
            </summary>
            <nav aria-label="En esta página" className="border-t border-line-soft px-2 py-3">
              <PolicyContents />
            </nav>
          </details>
          <nav
            aria-label="En esta página"
            className={`${cardClass} hidden min-w-0 self-start px-3 py-5 lg:sticky lg:top-24 lg:block print:hidden`}
          >
            <div className="mb-3 px-3 text-xs font-bold uppercase tracking-[.12em] text-muted">En esta página</div>
            <PolicyContents />
          </nav>

          <article className="min-w-0 max-w-[760px]">
            <section
              id="resumen"
              aria-labelledby="resumen-t"
              className={`${cardClass} scroll-mt-24 p-5 min-[640px]:p-7`}
            >
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <h2 id="resumen-t" className="text-[clamp(1.5rem,1.2rem+1vw,1.875rem)] font-bold leading-[1.1] tracking-[-.028em]">
                  En pocas palabras
                </h2>
                <span className="inline-flex items-center rounded-pill bg-badge-bg px-2.5 py-0.5 text-xs font-medium text-badge-text">
                  Resumen: no reemplaza el texto completo
                </span>
              </div>
              <ul className="m-0 mt-[18px] grid list-none gap-3 p-0">
                <li className="flex items-start gap-3">
                  {checkItem}
                  <span>
                    <strong>{RESPONSIBLE}</strong> es responsable de los datos personales que nos entregas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  {checkItem}
                  <span>
                    Los usamos solo para las finalidades que explicamos en esta política.{" "}
                    <strong>No vendemos ni cedemos tus datos.</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  {checkItem}
                  <span>
                    Puedes <strong>conocer, actualizar, corregir y pedir que borremos</strong> tus datos, y revocar tu
                    autorización.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  {checkItem}
                  <span>
                    Respondemos tus <strong>consultas en máximo 10 días hábiles</strong> y tus{" "}
                    <strong>reclamos en máximo 15 días hábiles</strong>, según la Ley 1581 de 2012.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  {checkItem}
                  <span>
                    Esta web <strong>no tiene formularios ni cookies propias</strong>. Nuestro proveedor de
                    alojamiento y, solo si lo inicias, el test de velocidad de Ookla reciben datos técnicos; te lo
                    explicamos en la sección 6.
                  </span>
                </li>
              </ul>
            </section>

            <Part id="responsable" n={1} title="Quién es el responsable">
              <p className="mt-3.5">El responsable del tratamiento de tus datos personales es:</p>
              <dl className={`${cardClass} m-0 mt-[18px] px-5 py-1 min-[640px]:px-7`}>
                <Fact label="Razón social">{RESPONSIBLE}</Fact>
                <Fact label="NIT">{NIT}</Fact>
                <Fact label="Dirección">{LEGAL_ADDRESS}</Fact>
                <Fact label="Correo">{EMAIL}</Fact>
                <Fact label="Teléfono">{PBX_DISPLAY}</Fact>
              </dl>
            </Part>

            <Part id="finalidades" n={2} title="Para qué usamos tus datos">
              <p className="mt-3.5">La política define, para cada base de datos, qué datos usamos y para qué. En resumen:</p>
              <div className="mt-3.5 grid gap-2.5">
                {PURPOSES.map((p) => (
                  <BorderedItem key={p.title} icon={<path d={p.icon} />} title={p.title} text={p.text} />
                ))}
              </div>
              <p className="mt-3.5">
                El detalle completo de cada finalidad está en el{" "}
                <a href="#documento" className={linkClass}>
                  documento oficial
                </a>
                .
              </p>
            </Part>

            <Part id="derechos" n={3} title="Tus derechos">
              <p className="mt-3.5">Como titular de tus datos tienes derecho a:</p>
              <div className="mt-[18px] grid gap-4 min-[700px]:grid-cols-2">
                {RIGHTS.map((r) => (
                  <div key={r.title} className="flex min-w-0 items-start gap-3 rounded-control bg-card-2 p-5 leading-normal">
                    <Icon className="mt-0.5 shrink-0 text-accent-text">{r.icon}</Icon>
                    <div className="min-w-0">
                      <strong className="block font-semibold">{r.title}</strong>
                      <span className="block text-sm text-muted">{r.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Part>

            <Part id="ejercer" n={4} title="Cómo ejercer tus derechos">
              <p className="mt-3.5">
                Tus solicitudes las atiende el <strong>área de servicio al cliente</strong>. Escríbenos a{" "}
                <a href={`mailto:${EMAIL}`} className={linkClass}>
                  {EMAIL}
                </a>
                , llámanos al {PBX_DISPLAY} o envía tu solicitud por escrito a{" "}
                {POLICY.claimsAddress ?? <Pending>CONFIRMAR: dirección para solicitudes escritas</Pending>}. Indica tu
                nombre, tu documento, lo que pides, tu dirección y los documentos que quieras hacer valer.
              </p>
              <div className="mt-[18px] grid gap-4 min-[700px]:grid-cols-2">
                {PROCEDURES.map((proc) => (
                  <article key={proc.title} className={`${cardClass} min-w-0 p-5 min-[640px]:p-7`}>
                    <h3 className="text-lg font-bold">{proc.title}</h3>
                    <div className="mt-2.5 text-[2rem] font-bold leading-none tracking-[-.03em]">
                      {proc.days} <small className="text-sm font-medium tracking-normal text-muted">días hábiles</small>
                    </div>
                    <p className="mt-2.5 text-[15px] leading-[1.55] text-muted">{proc.text}</p>
                  </article>
                ))}
              </div>
              <div className="mt-[18px] flex items-start gap-3 rounded-control bg-card-2 px-5 py-[18px] leading-[1.55]">
                <Icon className="mt-[3px] shrink-0 text-accent-text">{infoIcon}</Icon>
                <span>
                  Si a tu reclamo le falta información, te pediremos completarlo en los 5 días siguientes. Si pasan 2
                  meses sin que lo completes, entenderemos que desististe. Mientras lo atendemos, marcamos el dato como
                  «reclamo en trámite».
                </span>
              </div>
            </Part>

            <Part id="especiales" n={5} title="Datos sensibles y de menores">
              <p className="mt-3.5">
                No estás obligado a responder preguntas sobre datos sensibles ni sobre datos de niños, niñas y
                adolescentes, ni a autorizar su tratamiento.
              </p>
              <ul className="mt-3.5 grid list-disc gap-2 pl-[22px]">
                <li>
                  <strong>Clientes:</strong> no tratamos datos sensibles de nuestros clientes, como origen étnico,
                  salud, religión u orientación política.
                </li>
                <li>
                  <strong>Salud:</strong> solo de empleados y contratistas, para la seguridad social, las incapacidades y
                  la seguridad y salud en el trabajo.
                </li>
                <li>
                  <strong>Menores de edad:</strong> solo hijos de nuestros empleados, para afiliarlos a la seguridad
                  social y a beneficios, respetando su interés superior.
                </li>
              </ul>
            </Part>

            <Part id="web" n={6} title="Esta página web">
              <p className="mt-3.5">
                Este sitio es informativo: no tiene cuentas de usuario ni formularios y no instala cookies propias. Si
                eliges un tema (sistema, claro u oscuro), guardamos solo esa preferencia en tu navegador. No sale de tu
                equipo y puedes borrarla desde la configuración del navegador.
              </p>
              <p className="mt-3.5">
                La tipografía y todo el contenido se sirven desde nuestro propio dominio. Solo estos terceros reciben
                datos técnicos, como tu dirección IP y el tipo de navegador:
              </p>
              <div className="mt-3.5 grid gap-2.5">
                <BorderedItem
                  icon={<path d={ICONS.home} />}
                  title={`${HOSTING_PROVIDER} (alojamiento del sitio)`}
                  text="En cada visita. Recibe tu IP, la fecha y hora, la página que abres y tu navegador, en registros técnicos de seguridad."
                />
                <BorderedItem
                  icon={<path d={ICONS.gauge} />}
                  title="Ookla Speedtest"
                  text="Solo si tocas «Iniciar medición» en el test de velocidad. Recibe tu IP y los datos de la medición, y puede usar sus propias cookies o almacenamiento según su política."
                />
              </div>
              <p className="mt-3.5">
                Si usas los enlaces a <strong>WhatsApp</strong>, <strong>Google Maps</strong>, al{" "}
                <strong>portal de pagos de Davivienda</strong> (PSE o tarjeta de crédito) o a los sitios de interés del
                pie de página (MinTIC, Policía y Te protejo), sales de nuestro sitio y aplican las políticas de esos
                servicios. Los pagos en línea los recauda {LEGAL_NAME} a través de ese portal; no vemos ni guardamos tus
                datos bancarios. El mensaje de WhatsApp va prellenado sin datos personales. Lo que nos escribas, y tu
                número, los tratamos según esta política, solo para atender tu solicitud. Lo mismo aplica si nos llamas
                o nos escribes un correo.
              </p>
            </Part>

            <Part id="cambios" n={7} title="Cambios a esta política">
              <p className="mt-3.5">
                Si hacemos cambios importantes, te los informaremos antes de aplicarlos. Cada versión queda publicada con
                su fecha en la sección siguiente.
              </p>
            </Part>

            <Part id="documento" n={8} title="Documento completo y versiones">
              <div className={`${cardClass} mt-[18px] flex min-w-0 flex-col items-stretch gap-4 p-5 min-[640px]:p-7`}>
                <div className="flex min-w-0 items-start gap-3.5">
                  <div className="grid size-11 shrink-0 place-items-center rounded-pill bg-badge-bg text-badge-text min-[640px]:size-[52px]">
                    <Icon d={ICONS.fileDown} />
                  </div>
                  <div className="min-w-0">
                    <strong className="block font-bold">Política de tratamiento de datos personales</strong>
                    <span className="block text-sm text-muted">
                      PDF{POLICY.pdfPages ? ` · ${POLICY.pdfPages} páginas` : null} · versión {POLICY.version}
                    </span>
                  </div>
                </div>
                {/* Sin el PDF de la política en el dominio todavía (RESUMEN §6 y §8.4): no se enlaza el OneDrive personal. */}
                {POLICY.pdfUrl ? (
                  <a href={POLICY.pdfUrl} className={`${buttonClass("ghost")} w-full min-[640px]:w-auto min-[640px]:self-start print:hidden`} download>
                    Descargar PDF
                  </a>
                ) : (
                  <span className="text-sm text-muted print:hidden">
                    <Pending>PDF pendiente</Pending>
                  </span>
                )}
              </div>
              <dl className={`${cardClass} m-0 mt-[18px] px-5 py-1 min-[640px]:hidden print:hidden`}>
                <Fact label="Versión">{POLICY.version}</Fact>
                <Fact label="Vigente desde"><ValidFrom /></Fact>
                <Fact label="Cambios">Primera versión.</Fact>
              </dl>
              <div className="hidden overflow-x-auto min-[640px]:block print:block">
                <table className="mt-[18px] w-full border-collapse text-[15px]">
                  <thead>
                    <tr>
                      {["Versión", "Vigente desde", "Cambios"].map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="border-b border-line px-2.5 py-3 text-left text-xs font-bold uppercase tracking-[.1em] text-muted"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-line px-2.5 py-3">{POLICY.version}</td>
                      <td className="border-b border-line px-2.5 py-3">
                        <ValidFrom />
                      </td>
                      <td className="border-b border-line px-2.5 py-3">Primera versión.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Part>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

function MetaChip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="min-w-0 rounded-control border border-line bg-card p-4">
      <span className="block text-[13px]">{label}</span>
      <strong className="mt-1 block min-w-0 break-words font-semibold text-text">{children}</strong>
    </div>
  );
}

function Part({ id, n, title, children }: { id: string; n: number; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mt-14 scroll-mt-24 lg:mt-18">
      <h2 className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-3.5 text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-.028em]">
        <span className="text-base font-semibold tracking-normal text-muted tabular-nums">{String(n).padStart(2, "0")}</span>
        <span>{title}</span>
      </h2>
      {children}
    </section>
  );
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid min-w-0 gap-1.5 border-b border-line-soft py-4 last:border-b-0 min-[640px]:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] min-[640px]:gap-6">
      <dt className="text-muted">{label}</dt>
      <dd className="m-0 min-w-0 break-words font-semibold min-[640px]:text-right">{children}</dd>
    </div>
  );
}

function BorderedItem({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="flex min-w-0 items-start gap-3 rounded-control border border-line p-5 leading-normal">
      <Icon className="mt-0.5 size-4 shrink-0 text-accent-text">{icon}</Icon>
      <span className="min-w-0">
        <strong className="block font-semibold">{title}</strong>
        <span className="block text-sm text-muted">{text}</span>
      </span>
    </div>
  );
}

function PolicyContents() {
  return (
    <ol className="m-0 grid list-none gap-0.5 p-0">
      {TOC.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} className="flex min-h-11 items-center rounded-control px-3 py-2 text-sm font-medium leading-[1.35] no-underline hover:bg-bg-alt">
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );
}
