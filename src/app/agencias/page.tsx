import type { Metadata } from "next";
import { AgenciesPageContent } from "@/components/agencies-page";

export const metadata: Metadata = {
  title: "Agencias creativas en Barcelona — darc.barcelona",
  description:
    "200+ agencias creativas, estudios de diseño y productoras audiovisuales en Barcelona. El ecosistema profesional que rodea al Máster en Dirección de Arte de la UAB.",
};

export default function AgenciasPage() {
  return <AgenciesPageContent />;
}
