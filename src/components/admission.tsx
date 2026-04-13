"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const UAB_URL =
  "https://www.uab.cat/web/master-en-direccion-de-arte-y-comunicacion/admision-1206597472150.html/d-Touch/param1-4879_es/";

const CONTACT_EMAIL = "coordinacio.master.direccio.art.comunicacio@uab.cat";

export function Admission() {
  const { locale, t } = useI18n();

  return (
    <section id="admision" className="py-24 lg:py-40 px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow via-yellow/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-yellow mb-4 block">
            {t.admission.label[locale]}
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl xl:text-6xl text-white leading-[1.1] max-w-3xl">
            {t.admission.heading[locale]}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-yellow mb-6">
              {t.admission.datos[locale]}
            </h3>
            <div className="space-y-4">
              {t.admission.details.map((d) => (
                <div key={typeof d.label === "string" ? d.label : d.label.es} className="flex justify-between items-baseline border-b border-white/5 pb-3">
                  <span className="text-sm text-muted-foreground">
                    {d.label[locale]}
                  </span>
                  <span className="text-sm text-white font-medium">
                    {typeof d.value === "string" ? d.value : d.value[locale]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Documents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-yellow mb-6">
              {t.admission.docs[locale]}
            </h3>
            <ul className="space-y-3">
              {t.admission.requirements[locale].map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-yellow mt-0.5 shrink-0">—</span>
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Profiles + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-yellow mb-6">
              {t.admission.perfiles[locale]}
            </h3>
            <div className="space-y-2 mb-10">
              {t.admission.profiles[locale].map((label, i) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-xs text-yellow/60 font-heading w-4">{i + 1}</span>
                  <div className="flex-1 h-[1px] bg-white/10" />
                  <span className="text-sm text-white">{label}</span>
                </div>
              ))}
            </div>

            <div className="bg-yellow p-6 lg:p-8">
              <p className="text-black font-heading font-bold text-lg mb-2">
                {t.admission.preinscripcion[locale]}
              </p>


              <a
                href={UAB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-black text-yellow font-semibold px-6 py-3 text-sm hover:bg-black/80 transition-colors duration-300 group"
              >
                {t.admission.cta[locale]}
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
