import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = { title: "Test de velocidad" };

export default function Page() {
  return <PagePlaceholder title="Test de velocidad" source="Test.dc.html" current="test" />;
}
