import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { buttonClass, cardClass, Eyebrow, Icon, Pending } from "@/components/ui";
import { COLLECTOR_NIT, EMAIL, HOSTING_PROVIDER, LEGAL_NAME, NIT, OFFICES, PBX_DISPLAY, POLICY, ROUTES } from "@/lib/constants";
import { ICONS } from "@/lib/icons";

// Fuente: diseno/claude-design/Privacidad.dc.html (Ley 1581 de 2012 y Decreto
// 1377 de 2013). Los datos que faltan en la política (RESUMEN §6) se muestran
// como marcadores visibles hasta que iWana los complete.

export const metadata: Metadata = {
  title: "Política de tratamiento de datos",
  description: `Cómo ${LEGAL_NAME} trata tus datos personales, tus derechos y cómo ejercerlos.`,
};

const RESPONSIBLE = LEGAL_NAME.toUpperCase();
const office = OFFICES[0];

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
    title: "Clientes, proveedores y aliados comerciales",
    text: "Cumplir el contrato y el servicio, cumplir deberes legales, contables y regulatorios, comunicarnos contigo y hacer análisis y mercadeo.",
  },
  {
    icon: ICONS.users,
    title: "Clientes y proveedores potenciales",
    text: "Comunicaciones comerciales, estudios de mercado y promoción de servicios.",
  },
  {
    icon: ICONS.briefcase,
    title: "Empleados, contratistas y aspirantes",
    text: "Administrar la relación laboral o contractual, cumplir deberes legales y de seguridad social, y proteger la seguridad de las personas y bienes.",
  },
  { icon: ICONS.calendar, title: "Participantes en eventos", text: "Comunicaciones comerciales, análisis y mercadeo." },
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
const checkItem = <Icon d={ICONS.check} className="mt-[5px] size-4 text-accent-text" />;

function ValidFrom() {
  return (
    <>
      {POLICY.validFromDay ? `${POLICY.validFromDay} de ` : null}
      {POLICY.validFrom}
      {POLICY.validFromDay ? null : (
        <>
          {" "}
          <Pending>DÍA</Pending>
        </>
      )}
    </>
  );
}

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-alt pt-10 pb-14">
          <div className="wrap">
            <nav aria-label="Ruta" className="flex items-center gap-2 text-[13px] text-muted print:hidden">
              <Link href={ROUTES.inicio} className="no-underline hover:underline">
                Inicio
              </Link>
              <span aria-hidden="true">/</span>
              <span>Política de datos</span>
            </nav>
            <div className="mt-7">
              <Eyebrow>Legal</Eyebrow>
            </div>
            <h1 className="mt-4 max-w-[820px] text-[clamp(2rem,1.3rem+2.8vw,3rem)] font-bold leading-[1.08] tracking-[-.03em]">
              Política de tratamiento de datos personales
            </h1>
            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted">
              <MetaChip label="Responsable">{RESPONSIBLE}</MetaChip>
              <MetaChip label="NIT">{NIT}</MetaChip>
              <MetaChip label="Vigente desde">
                <ValidFrom />
              </MetaChip>
              <MetaChip label="Aprobada por">
                {POLICY.approvedBy ?? <Pending>NOMBRE DEL REPRESENTANTE LEGAL</Pending>}
              </MetaChip>
            </div>
          </div>
        </section>

        <div className="wrap grid gap-8 pt-12 pb-24 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 print:block">
          <nav
            aria-label="En esta página"
            className={`${cardClass} self-start px-[22px] py-5 lg:sticky lg:top-24 print:hidden`}
          >
            <div className="text-xs font-bold uppercase tracking-[.12em] text-muted">En esta página</div>
            <ol className="m-0 mt-3 grid list-none gap-0.5 p-0">
              {TOC.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block rounded-xl px-3 py-2 text-sm font-medium leading-[1.35] no-underline hover:bg-bg-alt"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="max-w-[760px]">
            <section
              id="resumen"
              aria-labelledby="resumen-t"
              className={`${cardClass} scroll-mt-24 px-8 py-7 shadow-card-soft`}
            >
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <h2 id="resumen-t" className="text-[1.375rem] font-bold">
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
                  <span>Los usamos solo para las finalidades que explicamos en esta política.</span>
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
              <dl className={`${cardClass} m-0 mt-[18px] px-6 py-1`}>
                <Fact label="Razón social">{RESPONSIBLE}</Fact>
                <Fact label="NIT">{NIT}</Fact>
                <Fact label="Dirección">
                  {office.address}, {office.town}, Cundinamarca
                </Fact>
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
              <div className="mt-[18px] grid gap-3 min-[700px]:grid-cols-2">
                {RIGHTS.map((r) => (
                  <div key={r.title} className="flex items-start gap-3 rounded-control bg-card-2 px-5 py-[18px] leading-normal">
                    <Icon className="mt-0.5 text-accent-text">{r.icon}</Icon>
                    <div>
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
                {POLICY.claimsAddress ?? <Pending>CONFIRMAR: {POLICY.claimsAddressToConfirm}</Pending>}. Indica tu
                nombre, tu documento, lo que pides, tu dirección y los documentos que quieras hacer valer.
              </p>
              <div className="mt-[18px] grid gap-4 min-[700px]:grid-cols-2">
                {PROCEDURES.map((proc) => (
                  <article key={proc.title} className={`${cardClass} p-6`}>
                    <h3 className="text-lg font-bold">{proc.title}</h3>
                    <div className="mt-2.5 text-[2rem] font-bold leading-none tracking-[-.03em]">
                      {proc.days} <small className="text-sm font-medium tracking-normal text-muted">días hábiles</small>
                    </div>
                    <p className="mt-2.5 text-[15px] leading-[1.55] text-muted">{proc.text}</p>
                  </article>
                ))}
              </div>
              <div className="mt-[18px] flex items-start gap-3 rounded-control bg-card-2 px-5 py-[18px] leading-[1.55]">
                <Icon className="mt-[3px] text-accent-text">{infoIcon}</Icon>
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
                  <strong>Salud y huella dactilar:</strong> solo de empleados, contratistas y visitantes, para su
                  bienestar y seguridad.
                </li>
                <li>
                  <strong>Menores de edad:</strong> solo hijos o personas a cargo de nuestros empleados y contratistas,
                  para actividades de bienestar, respetando su interés superior.
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
                servicios. Los pagos en línea se recaudan a nombre de <strong>iWana S.A.S.</strong> (NIT{" "}
                {COLLECTOR_NIT}), la empresa con la que recaudamos, a través de ese portal; ni {LEGAL_NAME} ni iWana
                S.A.S. ven ni guardan tus datos bancarios. El mensaje de WhatsApp va prellenado sin datos personales. Lo que nos escribas, y tu
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
              <div className={`${cardClass} mt-[18px] flex flex-wrap items-center justify-between gap-4 p-6`}>
                <div className="flex items-center gap-3.5">
                  <div className="grid size-[52px] shrink-0 place-items-center rounded-pill bg-cta text-cta-text">
                    <Icon d={ICONS.fileDown} />
                  </div>
                  <div>
                    <strong className="block font-bold">Política de Privacidad y Tratamiento de Datos Personales</strong>
                    <span className="block text-sm text-muted">
                      PDF · {POLICY.pdfPages} páginas · firmada por el representante legal{" "}
                      {POLICY.approvedBy ? null : <Pending>PENDIENTE</Pending>}
                    </span>
                  </div>
                </div>
                {/* Sin PDF firmado en el dominio todavía (RESUMEN §6 y §8.4): no se enlaza el OneDrive personal. */}
                {POLICY.pdfUrl ? (
                  <a href={POLICY.pdfUrl} className={`${buttonClass("ghost")} print:hidden`} download>
                    Descargar PDF
                  </a>
                ) : (
                  <span className="text-sm text-muted print:hidden">
                    <Pending>PDF firmado pendiente</Pending>
                  </span>
                )}
              </div>
              <div className="overflow-x-auto">
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
                      <td className="border-b border-line px-2.5 py-3">Versión inicial.</td>
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
    <span className="inline-flex flex-wrap items-center gap-2 rounded-pill border border-line bg-card px-3.5 py-1">
      {label} <strong className="font-semibold text-text">{children}</strong>
    </span>
  );
}

function Part({ id, n, title, children }: { id: string; n: number; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mt-14 scroll-mt-24">
      <h2 className="flex items-baseline gap-3.5 text-[1.625rem] font-bold leading-[1.2] tracking-[-.02em]">
        <span className="text-[.75em] font-semibold text-accent-text">{n}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-line-soft py-3.5 last:border-b-0">
      <dt className="text-muted">{label}</dt>
      <dd className="m-0 text-right font-semibold">{children}</dd>
    </div>
  );
}

function BorderedItem({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-control border border-line px-4 py-3.5 leading-normal">
      <Icon className="mt-0.5 size-4 text-accent-text">{icon}</Icon>
      <span>
        <strong className="block font-semibold">{title}</strong>
        <span className="block text-sm text-muted">{text}</span>
      </span>
    </div>
  );
}
