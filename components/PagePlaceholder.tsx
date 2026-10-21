import { Footer } from "./Footer";
import { Header } from "./Header";

/** Página aún no implementada desde el lienzo. Se reemplaza al migrar cada .dc.html. */
export function PagePlaceholder({ title, source, current }: { title: string; source: string; current?: string }) {
  return (
    <>
      <Header current={current} />
      <main className="wrap py-24">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-muted">En construcción a partir de {source}.</p>
      </main>
      <Footer />
    </>
  );
}
