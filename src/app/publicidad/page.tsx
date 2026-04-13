import type { Metadata } from "next";
import { AreaPageContent } from "@/components/area-page";

export const metadata: Metadata = {
  title: "Publicidad — Dirección de Arte en Publicidad | darc.barcelona",
  description:
    "La dupla creativa empieza aquí. Módulo de dirección de arte en publicidad del Máster en Dirección de Arte y Comunicación de la UAB.",
};

export default function PublicidadPage() {
  return <AreaPageContent slug="publicidad" />;
}
