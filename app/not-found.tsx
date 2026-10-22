import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { buttonClass, Eyebrow, Icon, SrOnly } from "@/components/ui";
import { ROUTES, waLink } from "@/lib/constants";
import { ICONS } from "@/lib/icons";

// Página 404 propia. Sin ella, Next agrega su título por defecto («404: This
// page could not be found.») junto al del layout. El lienzo no la incluye, así
// que sigue el patrón de cabecera de las subpáginas y lleva a los recorridos
// principales del visitante. El .htaccess la sirve con `ErrorDocument 404`.

export const metadata: Metadata = {
  // Next ya agrega <meta name="robots" content="noindex"> en esta página.
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-alt pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24">
          <div className="wrap">
            <Eyebrow>Error 404</Eyebrow>
            <h1 className="mt-5 text-[clamp(2.5rem,1.4rem+4.2vw,4.25rem)] font-bold leading-[1.02] tracking-[-.035em] text-balance">
              Esta página <em className="not-italic text-accent-text">no existe.</em>
            </h1>
            <p className="mt-[22px] max-w-[600px] text-[1.1875rem] text-muted">
              Puede que el enlace esté mal escrito o que la página haya cambiado de dirección. Desde aquí puedes seguir.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[640px]:flex-row min-[640px]:flex-wrap">
              <Link href={ROUTES.inicio} className={`${buttonClass("primary")} w-full min-[640px]:w-auto`}>
                <Icon d={ICONS.home} className="size-4" />
                Ir al inicio
              </Link>
              <Link href={ROUTES.pagar} className={`${buttonClass("ghost")} w-full min-[640px]:w-auto`}>
                Paga tu factura
              </Link>
              <Link href={ROUTES.test} className={`${buttonClass("ghost")} w-full min-[640px]:w-auto`}>
                Test de velocidad
              </Link>
              <ExternalLink href={waLink("soporte")} className={`${buttonClass("ghost")} w-full min-[640px]:w-auto`}>
                <Icon d={ICONS.whatsapp} className="size-4" />
                Escríbenos por WhatsApp
                <SrOnly>(se abre en otra pestaña)</SrOnly>
              </ExternalLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
