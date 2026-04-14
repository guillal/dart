import { generateOGImage, OG_SIZE } from "@/lib/og";

export const alt = "Agencias creativas en Barcelona — darc.barcelona";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    eyebrow: "Barcelona",
    title: "Agencias creativas en Barcelona",
    subtitle: "McCann, DDB, TBWA, *S,C,P,F… y más",
    accent: "200+",
  });
}
