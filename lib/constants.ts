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

export const WA_TEXT = {
  general: "Hola, quiero solicitar el servicio de internet de iWana.",
  pago: "Hola, necesito ayuda con mi pago.",
} as const;

/**
 * Enlace a WhatsApp con un texto prellenado fijo. Solo acepta motivos de
 * WA_TEXT, para que nunca viajen datos personales (RESUMEN §3, decisión 13).
 */
export function waLink(motivo: keyof typeof WA_TEXT): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_TEXT[motivo])}`;
}

export type Office = {
  name: string;
  address: string;
  hours: string[];
  mapUrl: string;
};

export const OFFICES: Office[] = [
  {
    name: "El Colegio",
    address: "Carrera 7 # 8-55",
    hours: [
      "Lunes a sábado, 8:00 a. m. – 5:00 p. m.",
      "Domingos y festivos, 8:00 a. m. – 1:00 p. m. y 2:00 – 5:00 p. m.",
    ],
    mapUrl: "https://maps.app.goo.gl/NmAoER9qNzfAhccd9",
  },
  {
    name: "San Antonio del Tequendama",
    address: "Carrera 5 # 4A-01, piso 2",
    hours: [
      "Lunes a viernes, 8:00 a. m. – 1:00 p. m. y 2:00 – 5:00 p. m.",
      "Sábado, 8:00 a. m. – 1:00 p. m.",
    ],
    mapUrl: "https://maps.app.goo.gl/kiLzE1zvrhB4CBrG6",
  },
  {
    name: "Tena",
    address: "IPM, Calle 2, vía Tena / La Gran Vía # 5-76",
    hours: [
      "Lunes y viernes, 8:00 a. m. – 5:00 p. m.",
      "Martes a jueves, 8:00 a. m. – 4:00 p. m.",
      "Sábado, 8:00 a. m. – 1:00 p. m.",
    ],
    mapUrl: "https://maps.app.goo.gl/hY2PKKsq5CVkTshP7",
  },
];

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
