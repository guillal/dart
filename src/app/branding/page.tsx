import type { Metadata } from "next";
import { AreaPageContent } from "@/components/area-page";

export const metadata: Metadata = {
  title: "Branding — Dirección de Arte y Branding | darc.barcelona",
  description:
    "De la idea a la identidad. Módulo de branding e identidad visual del Máster en Dirección de Arte y Comunicación de la UAB.",
};

export default function BrandingPage() {
  return <AreaPageContent slug="branding" />;
}
