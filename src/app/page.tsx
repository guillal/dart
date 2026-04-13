import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ProgramAreas } from "@/components/program-areas";
import { Curriculum } from "@/components/curriculum";
import { Methodology } from "@/components/methodology";
import { Testimonials } from "@/components/testimonials";
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
        <Faculty />
        <Admission />
      </main>
      <Footer />
    </>
  );
}
