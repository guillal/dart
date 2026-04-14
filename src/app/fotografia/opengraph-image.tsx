import { generateOGImage, OG_SIZE } from "@/lib/og";

export const alt = "Fotografía — Máster en Dirección de Arte y Comunicación";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    eyebrow: "03 — Fotografía",
    title: "Dirige la imagen",
    subtitle: "Dirección de arte en fotografía",
    accent: "03",
  });
}
