import type { Metadata } from "next";
import { FaqPageContent } from "@/components/faq-page";

export const metadata: Metadata = {
  title: "Preguntas frecuentes — darc.barcelona | Máster UAB",
  description:
    "Respuestas a las preguntas más habituales sobre el Máster en Dirección de Arte y Comunicación de la UAB. Admisión, precio, horarios, idioma y más.",
};

export default function FaqPage() {
  return <FaqPageContent />;
}
