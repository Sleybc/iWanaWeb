import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = { title: "Política de datos" };

export default function Page() {
  return <PagePlaceholder title="Política de datos" source="Privacidad.dc.html" />;
}
