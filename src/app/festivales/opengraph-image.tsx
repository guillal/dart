import { generateOGImage, OG_SIZE } from "@/lib/og";

export const alt = "Festivales creativos en Barcelona — darc.barcelona";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    eyebrow: "Barcelona",
    title: "Festivales creativos en Barcelona",
    subtitle: "OFFF, Sónar, Primavera Sound, Design Week…",
    accent: "10+",
  });
}
