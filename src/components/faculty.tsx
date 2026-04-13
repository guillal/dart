"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const faculty = [
  "Albert Armisen Morell", "Silvia Barrios Baena", "Jacint Cabau Manau",
  "Marc Compte Pujol", "Daniel Escalé García", "Marc Forcada Estruch",
  "Gerard Franquesa Capdevila", "Joan Frigola Bartrina", "Ana Lafarga Collell",
  "Pau Lluis Gumiel", "Ludovico Longhi", "Sandra Ly Flor",
  "Juan Manuel Pelillo", "Alberto Planelles González", "Francesc Ribot Puntí",
  "Jordi Ribot Igualada", "Núria Roca Limorte", "Oriol Rojas Vizcaino",
  "Carles Sanchez Nieto", "Jose Sánchez Ríos", "Anna Tañà Solé",
  "Nuria Torras Planas", "Rubén Tresserras Gil", "Marc Vaillo Daniel",
];

export function Faculty() {
  const { locale, t } = useI18n();

  return (
    <section id="profesorado" className="py-24 lg:py-40 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-yellow mb-4 block">
              {t.faculty.label[locale]}
            </span>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white leading-[1.1] mb-8">
              {t.faculty.heading[locale]}
            </h2>

            <div className="space-y-8">
              <div className="border border-yellow/20 p-6 lg:p-8">
                <span className="text-xs uppercase tracking-[0.2em] text-yellow">
                  {t.faculty.director[locale]}
                </span>
                <p className="font-heading font-bold text-xl lg:text-2xl text-white mt-3">
                  Guillem Marca Frances
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  {t.faculty.department[locale]}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-heading font-bold text-4xl lg:text-5xl text-yellow">40%</p>
                  <p className="text-muted-foreground text-sm mt-2">{t.faculty.doctors[locale]}</p>
                </div>
                <div>
                  <p className="font-heading font-bold text-4xl lg:text-5xl text-white">60%</p>
                  <p className="text-muted-foreground text-sm mt-2">{t.faculty.professionals[locale]}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {faculty.map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02, duration: 0.4 }}
                  className="py-2.5 border-b border-white/5 text-sm text-muted-foreground hover:text-white transition-colors duration-300"
                >
                  {name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
