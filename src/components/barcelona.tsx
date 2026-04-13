"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const highlights = [
  {
    number: "200+",
    href: "/agencias",
    external: false,
    label: {
      es: "Agencias creativas",
      ca: "Agències creatives",
      en: "Creative agencies",
    },
    description: {
      es: "McCann, DDB, TBWA, Ogilvy, *S,C,P,F... y cientos de estudios independientes que definen la publicidad global desde Barcelona.",
      ca: "McCann, DDB, TBWA, Ogilvy, *S,C,P,F... i centenars d'estudis independents que defineixen la publicitat global des de Barcelona.",
      en: "McCann, DDB, TBWA, Ogilvy, *S,C,P,F... and hundreds of independent studios defining global advertising from Barcelona.",
    },
  },
  {
    number: "10+",
    href: "/festivales",
    external: false,
    label: {
      es: "Festivales internacionales",
      ca: "Festivals internacionals",
      en: "International festivals",
    },
    description: {
      es: "OFFF, Sónar, Primavera Sound, Loop Festival, Barcelona Design Week — la ciudad es un calendario permanente de cultura visual.",
      ca: "OFFF, Sónar, Primavera Sound, Loop Festival, Barcelona Design Week — la ciutat és un calendari permanent de cultura visual.",
      en: "OFFF, Sónar, Primavera Sound, Loop Festival, Barcelona Design Week — the city is a permanent calendar of visual culture.",
    },
  },
  {
    number: "Gaudí",
    href: "https://ajuntament.barcelona.cat/museudeldesign/",
    external: true,
    label: {
      es: "Herencia de diseño",
      ca: "Herència de disseny",
      en: "Design heritage",
    },
    description: {
      es: "De Gaudí al Museu del Disseny, del FAD al 22@. Barcelona respira diseño en cada esquina, cada fachada, cada cartel.",
      ca: "De Gaudí al Museu del Disseny, del FAD al 22@. Barcelona respira disseny a cada cantonada, cada façana, cada cartell.",
      en: "From Gaudí to the Design Museum, from FAD to 22@. Barcelona breathes design in every corner, every facade, every poster.",
    },
  },
  {
    number: "30'",
    href: "https://www.uab.cat/web/la-facultat-de-ciencies-de-la-comunicacio-1345467741498.html",
    external: true,
    label: {
      es: "Campus UAB",
      ca: "Campus UAB",
      en: "UAB campus",
    },
    description: {
      es: "La Facultat de Ciències de la Comunicació está a 30 minutos del centro. Un campus con todas las instalaciones y la tranquilidad necesaria para crear.",
      ca: "La Facultat de Ciències de la Comunicació és a 30 minuts del centre. Un campus amb totes les instal·lacions i la tranquil·litat necessària per crear.",
      en: "The Faculty of Communication Sciences is 30 minutes from downtown. A campus with full facilities and the calm needed to create.",
    },
  },
];

export function Barcelona() {
  const { locale, t } = useI18n();

  return (
    <section className="py-24 lg:py-40 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-yellow mb-4 block">
            {t.barcelona.label[locale]}
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl xl:text-6xl text-white leading-[1.1] max-w-4xl">
            {t.barcelona.heading[locale]}
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mt-6">
            {t.barcelona.description[locale]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {highlights.map((item, i) => {
            const inner = (
              <>
                <p className="font-heading font-bold text-3xl lg:text-4xl text-yellow">
                  {item.number}
                </p>
                <p className="font-heading font-semibold text-white text-base mt-2 group-hover:text-yellow transition-colors duration-500 inline-flex items-center gap-2">
                  {item.label[locale]}
                  {item.external ? (
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  {item.description[locale]}
                </p>
              </>
            );

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-l-2 border-yellow/30 pl-6 lg:pl-8 hover:border-yellow transition-colors duration-500 group"
                  >
                    {inner}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="block border-l-2 border-yellow/30 pl-6 lg:pl-8 hover:border-yellow transition-colors duration-500 group"
                  >
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 lg:mt-24 border-l-2 border-yellow pl-6 lg:pl-8"
        >
          <p className="text-lg lg:text-xl text-white font-heading max-w-2xl leading-relaxed">
            &ldquo;{t.barcelona.quote[locale]}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
