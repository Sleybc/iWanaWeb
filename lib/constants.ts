// Datos verificados (RESUMEN §4). No se editan desde un CMS: cualquier cambio
// pasa por revisión de código. No agregar datos que no estén en RESUMEN.md.

/** Portal PSE de Davivienda, copiado tal cual (con el %20). */
export const DAVIVIENDA_PSE_URL = "https://portalpagos.davivienda.com/#/comercio/15730/%20IWANA%20SAS";
export const DAVIVIENDA_HOST = "portalpagos.davivienda.com";
/** Comercio que recauda en el portal: iWana S.A.S. (RESUMEN §4), distinto de Iwana Network S.A.S. */
export const COLLECTOR_NIT = "901.870.583-2";

/** Medidor de Ookla; se carga solo al hacer clic (RESUMEN §3, decisión 11). */
export const SPEEDTEST_URL = "https://iwn.speedtestcustom.com/";

export const WHATSAPP_NUMBER = "573112840141";
export const WHATSAPP_DISPLAY = "311 284 0141";
export const PBX_TEL = "+576014954488";
export const PBX_DISPLAY = "(601) 495 4488";
export const EMAIL = "info@iwana.co";
export const LEGAL_NAME = "Iwana Network S.A.S.";
export const NIT = "900.666.794-2";
/** Plan más económico (Básico), RESUMEN §3, decisión 8. */
export const PRICE_FROM = "$55.000";

export const WA_TEXT = {
  pago: "Hola, necesito ayuda con mi pago.",
  plan: "Hola, quiero saber la velocidad de mi plan.",
  velocidadBaja: "Hola, mi velocidad medida fue baja.",
  contacto: "Hola, quiero comunicarme con iWana.",
  contratar: "Hola, quiero contratar el servicio de internet de iWana.",
  falla: "Hola, soy cliente de iWana y tengo una falla en mi servicio.",
  factura: "Hola, tengo una pregunta sobre mi factura.",
  viabilidad: "Hola, quiero saber si iWana llega a mi zona.",
  vereda: "Hola, quiero saber si iWana llega a mi vereda.",
} as const;

/**
 * Enlace a WhatsApp con un texto prellenado fijo. Solo acepta motivos de
 * WA_TEXT, para que nunca viajen datos personales (RESUMEN §3, decisión 13).
 */
export function waLink(motivo: keyof typeof WA_TEXT): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_TEXT[motivo])}`;
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

export const OFFICES: Office[] = [
  {
    name: "El Colegio",
    address: "Carrera 7 # 8-55",
    town: "El Colegio",
    hours: [
      { days: "Lunes a sábado", times: ["8:00 a. m. – 5:00 p. m."] },
      { days: "Domingos y festivos", times: ["8:00 a. m. – 1:00 p. m.", "2:00 – 5:00 p. m."] },
    ],
    mapUrl: "https://maps.app.goo.gl/NmAoER9qNzfAhccd9",
  },
  {
    name: "San Antonio del Tequendama",
    address: "Carrera 5 # 4A-01, piso 2",
    town: "San Antonio del Tequendama",
    hours: [
      { days: "Lunes a viernes", times: ["8:00 a. m. – 1:00 p. m.", "2:00 – 5:00 p. m."] },
      { days: "Sábado", times: ["8:00 a. m. – 1:00 p. m."] },
    ],
    mapUrl: "https://maps.app.goo.gl/kiLzE1zvrhB4CBrG6",
  },
  {
    name: "Tena",
    address: "IPM, Calle 2, vía Tena / La Gran Vía # 5-76",
    town: "Tena",
    hours: [
      { days: "Lunes y viernes", times: ["8:00 a. m. – 5:00 p. m."] },
      { days: "Martes a jueves", times: ["8:00 a. m. – 4:00 p. m."] },
      { days: "Sábado", times: ["8:00 a. m. – 1:00 p. m."] },
      { days: "Domingo", times: [] },
    ],
    mapUrl: "https://maps.app.goo.gl/hY2PKKsq5CVkTshP7",
  },
];

/** Cobertura (RESUMEN §4). */
export const COVERAGE = {
  municipios: ["El Colegio", "Tena", "San Antonio del Tequendama"],
  rurales: ["La Mesa", "Anapoima", "Viotá"],
} as const;

export const INTEREST_LINKS = [
  {
    label: "En TIC confío",
    href: "https://www.mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Preguntas-frecuentes/15261:En-TIC-Confio",
  },
  { label: "Delitos informáticos", href: "https://www.policia.gov.co/denuncia-virtual/delitos-informaticos" },
  { label: "Te protejo", href: "https://teprotejocolombia.org/" },
] as const;

/** Rutas del sitio. Los slugs los fija la implementación; el lienzo solo enlaza archivos. */
export const ROUTES = {
  inicio: "/",
  pagar: "/pagar/",
  test: "/test-de-velocidad/",
  contacto: "/contacto/",
  empresa: "/empresa/",
  privacidad: "/privacidad/",
} as const;
