"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const numbers = ["01", "02", "03", "04"];

export function ProgramAreas() {
  const { locale, t } = useI18n();

  return (
    <section id="programa" className="py-24 lg:py-40 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-yellow mb-4 block">
            {t.areas.label[locale]}
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl xl:text-6xl text-white max-w-3xl leading-[1.1]">
            {t.areas.heading[locale]}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/5">
          {t.areas.items.map((area, i) => (
            <motion.div
              key={numbers[i]}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-black p-8 lg:p-12 group hover:bg-card transition-colors duration-500"
            >
              <span className="text-yellow font-heading text-sm font-bold tracking-wider">
                {numbers[i]}
              </span>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl text-white mt-4 mb-6 group-hover:text-yellow transition-colors duration-500">
                {area.title[locale]}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                {area.description[locale]}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 lg:mt-24 border-l-2 border-yellow pl-6 lg:pl-8"
        >
          <p className="text-lg lg:text-xl text-white font-heading max-w-2xl leading-relaxed">
            &ldquo;{t.areas.quote[locale]}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
