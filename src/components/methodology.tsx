"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Methodology() {
  const { locale, t } = useI18n();

  return (
    <section className="py-24 lg:py-40 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-yellow mb-4 block">
              {t.methodology.label[locale]}
            </span>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white leading-[1.1] mb-8">
              {t.methodology.heading1[locale]}
              <br />
              <span className="text-yellow">{t.methodology.heading2[locale]}</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-md">
              {t.methodology.description[locale]}
            </p>
          </motion.div>

          <div className="space-y-6">
            {t.methodology.items.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-4 lg:gap-6 group"
              >
                <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-yellow/30 text-yellow text-xs font-heading font-bold group-hover:bg-yellow group-hover:text-black transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-sm lg:text-base mb-1.5">
                    {method.title[locale]}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {method.description[locale]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 lg:mt-32 text-center"
        >
          <p className="font-heading text-xl lg:text-3xl xl:text-4xl text-white/80 max-w-3xl mx-auto leading-snug italic">
            &ldquo;The only way to predict the future is to create it.&rdquo;
          </p>
          <p className="text-muted-foreground text-sm mt-4">— George Lois</p>
        </motion.div>
      </div>
    </section>
  );
}
