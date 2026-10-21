import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = { title: "Nuestra empresa" };

export default function Page() {
  return <PagePlaceholder title="Nuestra empresa" source="Empresa.dc.html" />;
}
