// Ajustes a out/ después de `next build`.
//
// Next 16 exporta los datos de prefetch de cada página como
// `<ruta>/__next.<segmento>/__PAGE__.txt`, pero el cliente los pide como
// `<ruta>/__next.<segmento>.__PAGE__.txt`. Sin servidor que traduzca, esas
// peticiones dan 404 y la navegación pierde el prefetch. Se copia cada archivo
// también con el nombre que pide el cliente.
import { copyFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = new URL("../out/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

let count = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (!statSync(path).isDirectory()) continue;
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
