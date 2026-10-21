import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = { title: "Contacto" };

export default function Page() {
  return <PagePlaceholder title="Contacto" source="Contacto.dc.html" />;
}
