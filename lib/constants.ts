// Datos verificados (RESUMEN §4). No se editan desde un CMS: cualquier cambio
// pasa por revisión de código. No agregar datos que no estén en RESUMEN.md.

/** Portal PSE de Davivienda, copiado tal cual (con el %20). */
export const DAVIVIENDA_PSE_URL = "https://portalpagos.davivienda.com/#/comercio/15730/%20IWANA%20SAS";
export const DAVIVIENDA_HOST = "portalpagos.davivienda.com";

/** Medidor de Ookla; se carga solo al hacer clic (RESUMEN §3, decisión 11). */
export const SPEEDTEST_URL = "https://iwn.speedtestcustom.com/";

export const WHATSAPP_NUMBER = "573112840141";
export const WHATSAPP_DISPLAY = "311 284 0141";
export const PBX_TEL = "+576014954488";
export const PBX_DISPLAY = "(601) 495 4488";
export const EMAIL = "info@iwana.co";
/**
 * Empresa que presta el servicio de internet y recauda en el portal de
 * Davivienda (comercio «IWANA SAS»). Iwana Network S.A.S. ya solo atiende
 * clientes corporativos y no aparece en este sitio (RESUMEN §4, 2026-10-21).
 */
export const LEGAL_NAME = "Iwana S.A.S.";
export const NIT = "901.870.583-2";
/** Domicilio registrado en el portal de Davivienda («CL 86 C BIS 110 C 18, Bogotá D.C.»). */
export const LEGAL_ADDRESS = "Calle 86 C Bis # 110 C 18, Bogotá D.C.";
/** Alojamiento del sitio (RESUMEN §8.2); se declara en la Política de datos. */
export const HOSTING_PROVIDER = "Hostinger";
/** Plan más económico (Básico), RESUMEN §3, decisión 8. */
export const PRICE_FROM = "$55.000";

export const WA_TEXT = {
  visita: "Hola, quiero solicitar una visita para revisar la disponibilidad del servicio en mi ubicación.",
  pago: "Hola, necesito ayuda con mi pago.",
  comprobante: "Hola, quiero enviar el comprobante para registrar mi pago.",
  plan: "Hola, quiero saber la velocidad de mi plan.",
  velocidadBaja: "Hola, mi velocidad medida fue baja.",
  contacto: "Hola, quiero comunicarme con iWana.",
  contratar: "Hola, quiero contratar el servicio de internet de iWana.",
  falla: "Hola, soy cliente de iWana y tengo una falla en mi servicio.",
  factura: "Hola, tengo una pregunta sobre mi factura.",
  viabilidad: "Hola, quiero saber si iWana llega a mi zona.",
  vereda: "Hola, quiero saber si iWana llega a mi vereda.",
  info: "Hola, quiero información sobre el internet de iWana.",
  soporte: "Hola, soy cliente de iWana y necesito soporte con mi servicio.",
} as const;

/**
 * Enlace a WhatsApp con un texto prellenado fijo. Solo acepta motivos de
 * WA_TEXT, para que nunca viajen datos personales (RESUMEN §3, decisión 13).
 */
export function waLink(motivo: keyof typeof WA_TEXT): string {
  return waUrl(WA_TEXT[motivo]);
}

function waUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export type OfficeHours = {
  days: string;
  /** Franjas del día; vacío = cerrado. */
  times: string[];
};

export type Office = {
  name: string;
  address: string;
  /** Municipio, para la dirección completa (Contacto). */
  town: string;
  hours: OfficeHours[];
  mapUrl: string;
};

const TENA_HOURS: OfficeHours[] = [
  { days: "Lunes y viernes", times: ["8:00 a. m. – 5:00 p. m."] },
  { days: "Martes a jueves", times: ["8:00 a. m. – 4:00 p. m."] },
  { days: "Sábado", times: ["8:00 a. m. – 1:00 p. m."] },
  { days: "Domingo", times: [] },
];

export const OFFICES: Office[] = [
  {
    name: "El Colegio",
    address: "Carrera 7 # 8-55",
    town: "El Colegio",
    // Entre semana, el mismo horario de Tena (confirmado por iWana el 2026-10-21).
    hours: [
      { days: "Lunes y viernes", times: ["8:00 a. m. – 5:00 p. m."] },
      { days: "Martes a jueves", times: ["8:00 a. m. – 4:00 p. m."] },
      { days: "Sábado", times: ["8:00 a. m. – 5:00 p. m."] },
      { days: "Domingos y festivos", times: ["8:00 a. m. – 1:00 p. m.", "2:00 – 5:00 p. m."] },
    ],
    mapUrl: "https://maps.app.goo.gl/NmAoER9qNzfAhccd9",
  },
  {
    name: "San Antonio del Tequendama",
    address: "Carrera 5 # 4A-01, piso 2",
    town: "San Antonio del Tequendama",
    // El mismo horario de Tena (confirmado por iWana el 2026-10-21).
    hours: TENA_HOURS,
    mapUrl: "https://maps.app.goo.gl/kiLzE1zvrhB4CBrG6",
  },
  {
    name: "Tena",
    address: "IPM, Calle 2, vía Tena / La Gran Vía # 5-76",
    town: "Tena",
    hours: TENA_HOURS,
    mapUrl: "https://maps.app.goo.gl/hY2PKKsq5CVkTshP7",
  },
];

/**
 * Política de tratamiento de datos (RESUMEN §6). `null` = pendiente: la página
 * lo muestra como marcador visible hasta que iWana lo complete.
 */
export const POLICY = {
  version: "1",
  /**
   * Fecha de entrada en vigencia de la política de Iwana S.A.S. El PDF de 2023
   * es de Iwana Network S.A.S. y no aplica a este sitio (RESUMEN §6).
   */
  validFrom: "21 de octubre de 2026" as string | null,
  /** Dirección para solicitudes escritas: la oficina de El Colegio (confirmado el 2026-10-21). */
  claimsAddress: "la oficina de El Colegio, Carrera 7 # 8-55, El Colegio (Cundinamarca)" as string | null,
  /** PDF de la política en el propio dominio (p. ej. /legal/politica-datos-v1.pdf). */
  pdfUrl: "/legal/politica-datos-v1.pdf" as string | null,
  pdfPages: 8 as number | null,
};

/** Cobertura (RESUMEN §4). */
export const COVERAGE = {
  municipios: ["El Colegio", "Tena", "San Antonio del Tequendama"],
  rurales: ["La Mesa", "Anapoima", "Viotá"],
} as const;

export type TownName = (typeof COVERAGE.municipios)[number] | (typeof COVERAGE.rurales)[number];

/** WhatsApp para confirmar cobertura en un municipio: texto fijo por municipio, sin datos personales. */
export function waTownLink(town: TownName): string {
  const full = (COVERAGE.municipios as readonly string[]).includes(town);
  return waUrl(
    full
      ? `Hola, quiero confirmar la cobertura de iWana en ${town}.`
      : `Hola, quiero confirmar si iWana llega a mi vereda en ${town}.`,
  );
}

/**
 * Planes por perfil de uso, sin velocidad (RESUMEN §3, decisiones 6 y 8).
 * Todos incluyen internet ilimitado, zona Wi-Fi, conexión segura y una carga
 * igual a la mitad de la descarga. El punto cableado solo va en Medio y Alto
 * (confirmado por iWana el 2026-10-21).
 */
export const PLANS = [
  { name: "Plan Básico", price: "$55.000", title: "Lo esencial", wiredPoint: false, technology: "Fibra o Radio Enlace" },
  { name: "Plan Básico +", price: "$65.000", title: "Un paso más", wiredPoint: false, technology: "Fibra Óptica" },
  { name: "Plan Medio", price: "$79.000", title: "Para toda la familia", popular: true, wiredPoint: true, technology: "Fibra o Radio Enlace" },
  { name: "Plan Alto", price: "$100.000", title: "Hogares muy conectados y negocios", wiredPoint: true, technology: "Fibra o Radio Enlace" },
] as const;

export type PlanName = (typeof PLANS)[number]["name"];

export function waPlanLink(plan: PlanName): string {
  return waUrl(`Hola, quiero el ${plan}.`);
}

export const INTEREST_LINKS = [
  {
    label: "En TIC confío",
    href: "https://www.mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Preguntas-frecuentes/15261:En-TIC-Confio",
  },
  { label: "Delitos informáticos", href: "https://www.policia.gov.co/denuncia-virtual/delitos-informaticos" },
  { label: "Te protejo", href: "https://teprotejocolombia.org/" },
] as const;

/**
 * Accesos del equipo de iWana (página /corporativo/, sin enlace en el menú y
 * fuera de los buscadores). Tomados de iwana.co/index.php/corporativo/ el
 * 2026-10-21. Cada portal tiene su propio inicio de sesión: aquí solo hay enlaces.
 */
export const INTERNAL_PORTALS = [
  { name: "Siigo", description: "Contabilidad y facturación electrónica", href: "https://siigonube.siigo.com/" },
  { name: "WispHub", description: "Gestión de clientes y del servicio", href: "https://wisphub.io/" },
  { name: "Correo", description: "Correo corporativo (Outlook)", href: "https://outlook.office.com/mail/" },
  { name: "UISP", description: "Red de Radio Enlace (Ubiquiti)", href: "https://190.0.241.109/" },
  { name: "AdminOLT", description: "Red de Fibra Óptica (OLT)", href: "https://iwananetwork.adminolt.com/accounts/login/" },
] as const;

/** Rutas del sitio. Los slugs los fija la implementación; el lienzo solo enlaza archivos. */
export const ROUTES = {
  inicio: "/",
  pagar: "/pagar/",
  test: "/test-de-velocidad/",
  contacto: "/contacto/",
  empresa: "/empresa/",
  privacidad: "/privacidad/",
  corporativo: "/corporativo/",
} as const;
