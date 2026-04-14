import { generateOGImage, OG_SIZE } from "@/lib/og";

export const alt = "Audiovisual — Máster en Dirección de Arte y Comunicación";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    eyebrow: "04 — Audiovisual",
    title: "Del guion al set",
    subtitle: "Dirección de arte audiovisual",
    accent: "04",
  });
}
