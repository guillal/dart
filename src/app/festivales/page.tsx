import type { Metadata } from "next";
import { FestivalsPageContent } from "@/components/festivals-page";

export const metadata: Metadata = {
  title: "Festivales creativos en Barcelona — darc.barcelona",
  description:
    "OFFF, Sónar, Primavera Sound, Barcelona Design Week y más. Los festivales de creatividad, diseño y cultura visual que hacen de Barcelona una capital creativa.",
};

export default function FestivalesPage() {
  return <FestivalsPageContent />;
}
