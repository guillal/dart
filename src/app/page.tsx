import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ProgramAreas } from "@/components/program-areas";
import { Curriculum } from "@/components/curriculum";
import { Methodology } from "@/components/methodology";
import { Testimonials } from "@/components/testimonials";
import { Rankings } from "@/components/rankings";
import { Barcelona } from "@/components/barcelona";
import { Faculty } from "@/components/faculty";
import { Admission } from "@/components/admission";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProgramAreas />
        <Methodology />
        <Curriculum />
        <Testimonials />
        <Rankings />
        <Barcelona />
        <Faculty />
        <Admission />
      </main>
      <Footer />
    </>
  );
}
