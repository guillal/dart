"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function Curriculum() {
  const { locale, t } = useI18n();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="plan-de-estudios" className="py-24 lg:py-40 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-yellow mb-4 block">
              {t.curriculum.label[locale]}
            </span>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white leading-[1.1]">
              {t.curriculum.heading[locale]}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm lg:text-base leading-relaxed">
            {t.curriculum.description[locale]}
          </p>
        </motion.div>

        <div className="space-y-[1px]">
          {t.curriculum.subjects.map((subject, i) => (
            <motion.div
              key={subject.code}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full text-left bg-black hover:bg-muted transition-colors duration-300 p-6 lg:p-8 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 lg:gap-8 flex-1">
                    <span className="text-yellow font-heading font-bold text-sm lg:text-base mt-1 shrink-0 w-8">
                      {subject.code}
                    </span>
                    <h3 className="font-heading font-semibold text-base lg:text-xl text-white group-hover:text-yellow transition-colors duration-300">
                      {subject.title[locale]}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-sm text-muted-foreground font-heading">
                      {subject.credits} ECTS
                    </span>
                    <svg
                      className={`w-5 h-5 text-yellow transition-transform duration-300 ${activeIndex === i ? "rotate-45" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: activeIndex === i ? "auto" : 0, opacity: activeIndex === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="bg-black px-6 lg:px-8 pb-8 pt-2 pl-[3.5rem] lg:pl-[5rem]">
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6 max-w-2xl">
                    {subject.description[locale]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {subject.topics[locale].map((topic) => (
                      <span key={topic} className="text-xs border border-white/10 text-white/70 px-3 py-1.5">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 lg:mt-16"
        >
          <div className="flex h-2 w-full overflow-hidden">
            {t.curriculum.subjects.map((subject, i) => (
              <motion.div
                key={subject.code}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="origin-left"
                style={{
                  flex: subject.credits,
                  backgroundColor: i === t.curriculum.subjects.length - 1 ? "#FFDE00" : `rgba(255, 222, 0, ${0.2 + i * 0.15})`,
                }}
              />
            ))}
          </div>
          <div className="flex mt-2">
            {t.curriculum.subjects.map((subject) => (
              <div key={subject.code} className="text-[10px] text-muted-foreground" style={{ flex: subject.credits }}>
                {subject.code}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
