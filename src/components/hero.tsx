"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { locale, t } = useI18n();

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 lg:pb-24 px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow to-transparent" />

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-[8%] w-[3px] h-[40vh] bg-yellow origin-top hidden lg:block"
      />

      <div className="max-w-7xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 lg:mb-12"
        >
          {t.hero.masterTag[locale]}
        </motion.p>

        <div className="space-y-2 lg:space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tight text-white"
          >
            {locale !== "en" ? (
              <><span className="text-yellow">D</span>{t.hero.line1[locale].slice(1)}</>
            ) : (
              t.hero.line1[locale]
            )}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tight text-yellow"
          >
            {t.hero.line2[locale]}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tight text-white"
          >
            {locale !== "en" ? (
              <>{t.hero.line3[locale].slice(0, 2)}<span className="text-yellow">C</span>{t.hero.line3[locale].slice(3)}</>
            ) : (
              t.hero.line3[locale]
            )}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-6 text-sm lg:text-base uppercase tracking-[0.2em] text-muted-foreground"
        >
          {t.hero.uab[locale]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10 lg:mt-16 flex flex-col sm:flex-row gap-6 sm:gap-12 items-start"
        >
          <p className="text-base lg:text-lg text-muted-foreground max-w-md leading-relaxed">
            {t.hero.subtitle[locale]}
          </p>
          <div className="flex gap-8 text-sm">
            <div>
              <p className="text-yellow font-heading font-bold text-2xl">60</p>
              <p className="text-muted-foreground">ECTS</p>
            </div>
            <div>
              <p className="text-yellow font-heading font-bold text-2xl">30</p>
              <p className="text-muted-foreground">{t.hero.plazas[locale]}</p>
            </div>
            <div>
              <p className="text-yellow font-heading font-bold text-2xl">3ª</p>
              <p className="text-muted-foreground">{t.hero.edicion[locale]}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://www.uab.cat/web/master-en-direccion-de-arte-y-comunicacion/admision-1206597472150.html/d-Touch/param1-4879_es/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-yellow text-black font-semibold px-8 py-4 text-base hover:bg-yellow-dark transition-colors duration-300 group"
          >
            {t.hero.cta1[locale]}
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#programa"
            className="inline-flex items-center justify-center border border-white/20 text-white font-medium px-8 py-4 text-base hover:border-yellow hover:text-yellow transition-colors duration-300"
          >
            {t.hero.cta2[locale]}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-yellow to-transparent"
        />
      </motion.div>
    </section>
  );
}
