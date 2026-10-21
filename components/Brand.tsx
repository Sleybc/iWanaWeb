import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export function Brand() {
  return (
    <Link href={ROUTES.inicio} aria-label="iWana, ir al inicio" className="flex items-center gap-3 no-underline">
      {/* El isotipo va sobre blanco también en oscuro, como en el lienzo. */}
      <span className="grid size-[42px] place-items-center overflow-hidden rounded-pill border border-line-soft bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element -- exportación estática sin optimizador */}
        <img src="/logo-iwana.png" alt="" width={34} height={34} className="size-[34px] object-contain" />
      </span>
      <span className="text-2xl font-bold tracking-[-.02em]">
        <span className="text-accent-text">i</span>Wana
      </span>
    </Link>
  );
}
