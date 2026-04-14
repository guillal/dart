import { generateOGImage, OG_SIZE } from "@/lib/og";

export const alt = "darc.barcelona — Máster en Dirección de Arte y Comunicación | UAB";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    eyebrow: "Máster universitario",
    title: "Dirección de Arte y Comunicación",
    subtitle: "60 ECTS · 3ª edición · UAB Barcelona",
  });
}
