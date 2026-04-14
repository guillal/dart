import { generateOGImage, OG_SIZE } from "@/lib/og";

export const alt = "Preguntas frecuentes — darc.barcelona";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    eyebrow: "Preguntas frecuentes",
    title: "Todo lo que necesitas saber",
    subtitle: "Admisión, precio, idioma, horarios",
    accent: "?",
  });
}
