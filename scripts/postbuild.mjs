// Ajustes a out/ después de `next build`.
//
// 1. Next 16 exporta los datos de prefetch de cada página como
//    `<ruta>/__next.<segmento>/__PAGE__.txt`, pero el cliente los pide como
//    `<ruta>/__next.<segmento>.__PAGE__.txt`. Sin servidor que traduzca, esas
//    peticiones dan 404 y la navegación pierde el prefetch. Se copia cada
//    archivo también con el nombre que pide el cliente.
// 2. Se escribe out/.htaccess con las cabeceras de seguridad y las redirecciones
//    301 del WordPress anterior (RESUMEN §3, decisión 16; §5; §8, punto 6). La
//    CSP lleva el hash de cada script en línea de Next, que cambia en cada
//    compilación; por eso el archivo se genera aquí y no se edita a mano.
import { createHash } from "node:crypto";
import { copyFileSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = new URL("../out/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

const SPEEDTEST_ORIGIN = "https://iwn.speedtestcustom.com";

// Slug de /index.php/<slug>/ del WordPress anterior → página nueva (RESUMEN §8, punto 6).
const REDIRECTS = [
  ["about", "/empresa/"],
  ["politicadp", "/privacidad/"],
  ["portal", "/pagar/"],
  ["test", "/test-de-velocidad/"],
  ["contact", "/contacto/"],
  ["corporativo", "/corporativo/"],
];

let count = 0;
const htmlFiles = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (!statSync(path).isDirectory()) {
      if (name.endsWith(".html")) htmlFiles.push(path);
      continue;
    }
    if (name.startsWith("__next.")) {
      for (const file of readdirSync(path)) {
        const src = join(path, file);
        if (statSync(src).isFile()) {
          copyFileSync(src, join(dir, `${name}.${file}`));
          count++;
        }
      }
    } else {
      walk(path);
    }
  }
}

walk(OUT);
console.log(`postbuild: ${count} archivos de prefetch copiados con el nombre que pide el cliente.`);

// Hash de cada <script> sin src. El navegador calcula el hash sobre el texto
// tal cual aparece entre las etiquetas, así que se usa el contenido crudo.
const hashes = new Set();
const inlineScript = /<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g;
for (const file of htmlFiles) {
  for (const [, body] of readFileSync(file, "utf8").matchAll(inlineScript)) {
    if (body) hashes.add(`'sha256-${createHash("sha256").update(body, "utf8").digest("base64")}'`);
  }
}

const csp = [
  "default-src 'self'",
  `script-src 'self' ${[...hashes].sort().join(" ")}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  `frame-src ${SPEEDTEST_ORIGIN}`,
  "frame-ancestors 'none'",
  "form-action 'none'",
  "base-uri 'none'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const htaccess = `# Generado por scripts/postbuild.mjs en cada \`next build\`. No editar a mano:
# los hashes de la CSP cambian con cada compilación.

Options -Indexes
ErrorDocument 404 /404.html

<IfModule mod_headers.c>
  Header always set Content-Security-Policy "${csp}"
  Header always set Strict-Transport-Security "max-age=31536000"
  Header always set X-Frame-Options "DENY"
  Header always set X-Content-Type-Options "nosniff"
  # Nunca no-referrer: el medidor de Ookla solo se dibuja si recibe el dominio.
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=()"

  # Los archivos de _next/static llevan hash en el nombre; el HTML se revalida
  # para que una publicación nueva se vea sin esperar a que expire la caché.
  <FilesMatch "\\.(js|css|woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.(html|txt)$">
    Header set Cache-Control "public, max-age=0, must-revalidate"
  </FilesMatch>
</IfModule>

# Redirecciones desde las URL del WordPress anterior.
${REDIRECTS.map(([from, to]) => `RedirectMatch 301 ^/index\\.php/${from}/?$ ${to}`).join("\n")}
`;

writeFileSync(join(OUT, ".htaccess"), htaccess);
console.log(`postbuild: .htaccess escrito con ${hashes.size} hashes de scripts en línea y ${REDIRECTS.length} redirecciones.`);
