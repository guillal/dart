import { generateOGImage, OG_SIZE } from "@/lib/og";

export const alt = "Branding — Máster en Dirección de Arte y Comunicación";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    eyebrow: "02 — Branding",
    title: "De la idea a la identidad",
    subtitle: "Dirección de arte y branding",
    accent: "02",
  });
}
