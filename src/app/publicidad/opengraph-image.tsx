import { generateOGImage, OG_SIZE } from "@/lib/og";

export const alt = "Publicidad — Máster en Dirección de Arte y Comunicación";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    eyebrow: "01 — Publicidad",
    title: "La dupla creativa empieza aquí",
    subtitle: "Dirección de arte en publicidad",
    accent: "01",
  });
}
