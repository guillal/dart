"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { areas, type AreaPageData } from "@/lib/area-data";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

const UAB_ADMISSION_URL =
  "https://www.uab.cat/web/master-en-direccion-de-arte-y-comunicacion/admision-1206597472150.html/d-Touch/param1-4879_es/";

function getRelatedSubjects(codes: string[], t: ReturnType<typeof useI18n>["t"]) {
  return t.curriculum.subjects.filter((s) => codes.includes(s.code));
}

function AreaSignature({ slug }: { slug: string }) {
  // Each area gets a signature decorative mark — no images, just meaningful SVG
  if (slug === "publicidad") {
    // Creative duo — two parallel lines
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth={2}>
        <line x1="20" y1="30" x2="100" y2="30" />
        <line x1="20" y1="90" x2="100" y2="90" />
        <circle cx="20" cy="30" r="4" fill="currentColor" />
        <circle cx="100" cy="90" r="4" fill="currentColor" />
      </svg>
    );
  }
  if (slug === "branding") {
    // System — grid of dots
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full" fill="currentColor">
        {[20, 50, 80, 110].map((y) =>
          [20, 50, 80, 110].map((x) => (
            <circle key={`${x}-${y}`} cx={x - 5} cy={y - 5} r="3" />
          ))
        )}
      </svg>
    );
  }
  if (slug === "fotografia") {
    // Aperture — concentric circles
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="60" cy="60" r="50" />
        <circle cx="60" cy="60" r="30" />
        <circle cx="60" cy="60" r="10" fill="currentColor" />
      </svg>
    );
  }
  if (slug === "audiovisual") {
    // Play triangle with frame
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="10" y="20" width="100" height="80" />
        <path d="M48 45 L48 75 L78 60 Z" fill="currentColor" />
      </svg>
    );
  }
  return null;
}

export function AreaPageContent({ slug }: { slug: string }) {
  const { locale, t } = useI18n();
  const area = areas[slug] as AreaPageData;

  const relatedSubjects = getRelatedSubjects(area.relatedModuleCodes, t);

  return (
    <>
      <Navigation />
      <main>
        {/* Back link */}
        <div className="pt-24 lg:pt-28 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.a
              href="/#programa"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-yellow transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L3 12m0 0l4-5m-4 5h18" />
              </svg>
              {t.areaPage.back[locale]}
            </motion.a>
          </div>
        </div>

        {/* Hero */}
        <section className="pt-12 lg:pt-20 pb-24 lg:pb-40 px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-20 right-6 lg:right-12 w-32 h-32 lg:w-48 lg:h-48 text-yellow/20 pointer-events-none"
          >
            <AreaSignature slug={slug} />
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-heading font-bold text-[clamp(4rem,15vw,12rem)] leading-none text-yellow/10 block"
            >
              {area.number}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold text-4xl lg:text-6xl xl:text-7xl text-white leading-[1.05] -mt-6 lg:-mt-12"
            >
              {area.title[locale]}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-heading text-xl lg:text-2xl text-yellow mt-4 lg:mt-6"
            >
              {area.hook[locale]}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mt-8"
            >
              {area.description[locale]}
            </motion.p>
          </div>
        </section>

        {/* Skills */}
        <section className="py-24 lg:py-40 px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-16 lg:mb-24"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-yellow mb-4 block">
                {area.number} — {area.title[locale]}
              </span>
              <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white leading-[1.1]">
                {t.areaPage.whatYoullLearn[locale]}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5">
              {area.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="bg-card p-8 lg:p-10 group hover:bg-black transition-colors duration-500"
                >
                  <span className="text-yellow font-heading text-sm font-bold tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-white mt-4 mb-3 group-hover:text-yellow transition-colors duration-500">
                    {skill.title[locale]}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description[locale]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related modules */}
        <section className="py-24 lg:py-40 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-16 lg:mb-24"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-yellow mb-4 block">
                {t.areaPage.relatedModules[locale]}
              </span>
              <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white leading-[1.1]">
                {relatedSubjects.reduce((sum, s) => sum + s.credits, 0)} ECTS
              </h2>
            </motion.div>

            <div className="space-y-[1px]">
              {relatedSubjects.map((subject, i) => (
                <motion.div
                  key={subject.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-card p-8 lg:p-10"
                >
                  <div className="flex items-start gap-4 lg:gap-8 mb-6">
                    <span className="text-yellow font-heading font-bold text-sm lg:text-base mt-1 shrink-0 w-8">
                      {subject.code}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-heading font-semibold text-lg lg:text-xl text-white">
                          {subject.title[locale]}
                        </h3>
                        <span className="text-sm text-muted-foreground font-heading shrink-0">
                          {subject.credits} ECTS
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mt-3 max-w-2xl">
                        {subject.description[locale]}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-12 lg:pl-16">
                    {subject.topics[locale].map((topic) => (
                      <span key={topic} className="text-xs border border-white/10 text-white/70 px-3 py-1.5">
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Career paths */}
        <section className="py-24 lg:py-40 px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-16 lg:mb-24"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-yellow mb-4 block">
                {t.areaPage.careers[locale]}
              </span>
              <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white leading-[1.1]">
                {area.title[locale]}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {area.careers.map((career, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="border-t-2 border-yellow pt-8"
                >
                  <h3 className="font-heading font-bold text-xl lg:text-2xl text-white mb-4">
                    {career.title[locale]}
                  </h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                    {career.description[locale]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-40 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-yellow p-10 lg:p-16 text-center"
            >
              <h2 className="font-heading font-bold text-3xl lg:text-5xl text-black leading-[1.1] mb-4">
                {t.areaPage.readyTitle[locale]}
              </h2>
              <p className="text-black/70 text-base lg:text-lg max-w-lg mx-auto mb-8">
                {t.areaPage.readyDescription[locale]}
              </p>
              <a
                href={UAB_ADMISSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-black text-yellow font-semibold px-8 py-4 text-base hover:bg-black/80 transition-colors duration-300 group"
              >
                {t.areaPage.applyNow[locale]}
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
