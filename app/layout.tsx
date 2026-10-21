import type { Metadata } from "next";
import localFont from "next/font/local";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

// Exo 2 alojada en el propio dominio: Google Fonts no recibe la IP del visitante (RESUMEN §5).
const exo2 = localFont({
  src: [
    { path: "./fonts/exo2-latin.woff2", weight: "300 800", style: "normal" },
    { path: "./fonts/exo2-italic-latin.woff2", weight: "300 800", style: "italic" },
  ],
  variable: "--font-exo-2",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iwana.co"),
  title: {
    default: "iWana — Internet para tu casa, finca y negocio",
    template: "iWana — %s",
  },
  description:
    "Internet estable en el pueblo y en el campo de la provincia del Tequendama, Cundinamarca.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CO" data-theme="system" className={exo2.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
