import type { NextConfig } from "next";

// Exportación estática (RESUMEN §3, decisión 14). Las cabeceras de seguridad
// van en el hosting: con output 'export' la opción `headers` no se aplica.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
