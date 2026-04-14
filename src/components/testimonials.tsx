"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const testimonials = [
  {
    quote: "Be bold or italic. Never regular.",
    name: "Juan Manuel Pelillo",
    role: "Director de Arte, Vampire Studio",
    url: "https://www.behance.net/juanmanuelpelillo",
  },
  {
    quote:
      "Si tienes un buen trabajo de dirección de Arte en la escena, ya tienes el 90% de la foto.",
    name: "Oriol Rojas",
    role: "Dirección de fotografía en ficción, documental, publicidad y videoclip",
    url: "https://rojodop.com",
  },
  {
    quote:
      "Las directoras y directores de arte no sólo damos forma a las ideas, las enriquecemos y hacemos crecer.",
    name: "Alberto Planelles",
    role: "Senior Art Director, DDB Spain",
    url: "https://albertoplanelles.com",
  },
];

export function Testimonials() {
  const { locale, t } = useI18n();

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute -top-20 -left-10 text-[20rem] lg:text-[30rem] font-heading font-bold text-white/[0.02] leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-yellow" />
            <span className="text-xs uppercase tracking-[0.3em] text-yellow">
              {t.testimonials.label[locale]}
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white leading-[1.1]">
            {t.testimonials.heading[locale]}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group block"
            >
              <div className="border-t-2 border-yellow pt-8">
                <p className="text-lg lg:text-xl text-white font-heading leading-relaxed mb-8 group-hover:text-yellow transition-colors duration-500">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{item.name}</p>
                  <p className="text-muted-foreground text-xs mt-1">{item.role}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
