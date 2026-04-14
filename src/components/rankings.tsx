"use client";

import { motion } from "framer-motion";
import { useI18n, type Locale } from "@/lib/i18n";

type I18nText = Record<Locale, string>;

interface Ranking {
  figure: string;
  label: I18nText;
  source: string;
  year: string;
  url: string;
}

const rankings: Ranking[] = [
  {
    figure: "#13",
    label: {
      es: "Mundial en universidades jóvenes",
      ca: "Mundial en universitats joves",
      en: "Worldwide among young universities",
    },
    source: "THE Young University Rankings",
    year: "2025",
    url: "https://www.timeshighereducation.com/world-university-rankings/2025/young-university-rankings",
  },
  {
    figure: "Top 200",
    label: {
      es: "Mundial en QS World Rankings",
      ca: "Mundial en QS World Rankings",
      en: "Worldwide in QS World Rankings",
    },
    source: "QS World University Rankings",
    year: "2026",
    url: "https://www.topuniversities.com/universities/universitat-autonoma-de-barcelona",
  },
  {
    figure: "#1",
    label: {
      es: "Universidad en España",
      ca: "Universitat a Espanya",
      en: "University in Spain",
    },
    source: "CWUR",
    year: "2025",
    url: "https://cwur.org/2025/autonomous-university-of-barcelona.php",
  },
  {
    figure: "#76",
    label: {
      es: "Europa en THE Rankings",
      ca: "Europa en THE Rankings",
      en: "In Europe — THE Rankings",
    },
    source: "Times Higher Education",
    year: "2026",
    url: "https://www.timeshighereducation.com/world-university-rankings/universitat-autonoma-de-barcelona-uab",
  },
];

export function Rankings() {
  const { locale, t } = useI18n();

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-yellow" />
            <span className="text-xs uppercase tracking-[0.3em] text-yellow">
              {t.rankings.label[locale]}
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white leading-[1.1] max-w-3xl">
            {t.rankings.heading[locale]}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5">
          {rankings.map((r, i) => (
            <motion.a
              key={i}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card p-6 lg:p-8 group hover:bg-black transition-colors duration-500"
            >
              <p className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl text-yellow leading-none mb-4">
                {r.figure}
              </p>
              <p className="text-sm text-white leading-snug mb-4 group-hover:text-yellow transition-colors duration-500">
                {r.label[locale]}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {r.source}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {r.year}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
