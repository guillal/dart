import type { Metadata } from "next";
import { AreaPageContent } from "@/components/area-page";

export const metadata: Metadata = {
  title: "Fotografía — Dirección de Arte en Fotografía | darc.barcelona",
  description:
    "Dirige la imagen. Módulo de fotografía y dirección de arte del Máster en Dirección de Arte y Comunicación de la UAB.",
};

export default function FotografiaPage() {
  return <AreaPageContent slug="fotografia" />;
}
