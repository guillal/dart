import type { Metadata } from "next";
import { AreaPageContent } from "@/components/area-page";

export const metadata: Metadata = {
  title: "Audiovisual — Dirección de Arte Audiovisual | darc.barcelona",
  description:
    "Del guion al set. Módulo de dirección de arte audiovisual del Máster en Dirección de Arte y Comunicación de la UAB.",
};

export default function AudiovisualPage() {
  return <AreaPageContent slug="audiovisual" />;
}
