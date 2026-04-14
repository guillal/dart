"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n, type Locale } from "@/lib/i18n";

type I18nText = Record<Locale, string>;

interface FeaturedProfessor {
  name: string;
  role: I18nText;
  area: I18nText;
  url: string;
}

const featured: FeaturedProfessor[] = [
  {
    name: "Daniel Escalé García",
    role: {
      es: "Fotógrafo de set: The Crown, Black Mirror, Kaos",
      ca: "Fotògraf de set: The Crown, Black Mirror, Kaos",
      en: "Set photographer: The Crown, Black Mirror, Kaos",
    },
    area: { es: "Fotografía", ca: "Fotografia", en: "Photography" },
    url: "https://www.danielescalephoto.com",
  },
  {
    name: "Rubén Tresserras Gil",
    role: {
      es: "Retoque y CGI: Nike, Coca-Cola, PlayStation 5",
      ca: "Retoc i CGI: Nike, Coca-Cola, PlayStation 5",
      en: "Retouching & CGI: Nike, Coca-Cola, PlayStation 5",
    },
    area: { es: "Fotografía", ca: "Fotografia", en: "Photography" },
    url: "https://www.rubentres.com",
  },
  {
    name: "Jacint Cabau Manau",
    role: {
      es: "Director de arte asociado, WEST BBDO — AT&T, adidas",
      ca: "Director d'art associat, WEST BBDO — AT&T, adidas",
      en: "Associate Creative Director, WEST BBDO — AT&T, adidas",
    },
    area: { es: "Publicidad", ca: "Publicitat", en: "Advertising" },
    url: "https://www.jacintcabau.com",
  },
  {
    name: "Alberto Planelles González",
    role: {
      es: "Senior Art Director, DDB Spain — Seat, Audi, FC Barcelona",
      ca: "Senior Art Director, DDB Spain — Seat, Audi, FC Barcelona",
      en: "Senior Art Director, DDB Spain — Seat, Audi, FC Barcelona",
    },
    area: { es: "Publicidad", ca: "Publicitat", en: "Advertising" },
    url: "https://www.albertoplanelles.com",
  },
  {
    name: "Juan Manuel Pelillo",
    role: {
      es: "Director de arte — Volkswagen, Mahou, Primavera Sound",
      ca: "Director d'art — Volkswagen, Mahou, Primavera Sound",
      en: "Art Director — Volkswagen, Mahou, Primavera Sound",
    },
    area: { es: "Publicidad", ca: "Publicitat", en: "Advertising" },
    url: "https://www.behance.net/juanmanuelpelillo",
  },
  {
    name: "Sandra Ly Flor",
    role: {
      es: "Directora de arte, Knock Brand Design",
      ca: "Directora d'art, Knock Brand Design",
      en: "Art Director, Knock Brand Design",
    },
    area: { es: "Branding", ca: "Branding", en: "Branding" },
    url: "https://www.instagram.com/saandraflor",
  },
  {
    name: "Ana Lafarga Collell",
    role: {
      es: "Cofundadora, Coffee. — Nespresso, Banc Sabadell, Desigual",
      ca: "Cofundadora, Coffee. — Nespresso, Banc Sabadell, Desigual",
      en: "Co-founder, Coffee. — Nespresso, Banc Sabadell, Desigual",
    },
    area: { es: "Branding", ca: "Branding", en: "Branding" },
    url: "https://estoescoffee.com",
  },
  {
    name: "Marc Forcada Estruch",
    role: {
      es: "Creativo copy: Cupra × Rosalía, Levi's, Damm",
      ca: "Creatiu copy: Cupra × Rosalía, Levi's, Damm",
      en: "Creative copywriter: Cupra × Rosalía, Levi's, Damm",
    },
    area: { es: "Publicidad", ca: "Publicitat", en: "Advertising" },
    url: "https://marcforcada.com",
  },
];

interface RosterEntry {
  name: string;
  url?: string;
}

const roster: RosterEntry[] = [
  { name: "Albert Armisen Morell", url: "https://es.linkedin.com/in/armisen" },
  { name: "Silvia Barrios Baena", url: "https://silbarrios.com" },
  { name: "Jacint Cabau Manau", url: "https://www.jacintcabau.com" },
  { name: "Marc Compte Pujol", url: "https://scholar.google.es/citations?hl=es&user=ikmknx8AAAAJ" },
  { name: "Daniel Escalé García", url: "https://www.danielescalephoto.com" },
  { name: "Marc Forcada Estruch", url: "https://marcforcada.com" },
  { name: "Gerard Franquesa Capdevila", url: "https://www.franquesafoto.com" },
  { name: "Joan Frigola Bartrina", url: "https://www.twine.net/Bartrinadesign" },
  { name: "Ana Lafarga Collell", url: "https://estoescoffee.com" },
  { name: "Pau Lluis Gumiel", url: "https://uab.academia.edu/PauLluisGumiel" },
  { name: "Ludovico Longhi", url: "https://portalrecerca.uab.cat/en/persons/ludovico-longhi-6/" },
  { name: "Sandra Ly Flor", url: "https://www.instagram.com/saandraflor" },
  { name: "Juan Manuel Pelillo", url: "https://www.behance.net/juanmanuelpelillo" },
  { name: "Alberto Planelles González", url: "https://www.albertoplanelles.com" },
  { name: "Francesc Ribot Puntí", url: "https://www.elisava.net/en/research/team/dr-francesc-ribot" },
  { name: "Jordi Ribot Igualada" },
  { name: "Núria Roca Limorte", url: "https://www.linkedin.com/in/nuriaroca-branding/" },
  { name: "Oriol Rojas Vizcaino", url: "https://rojodop.com" },
  { name: "Carles Sanchez Nieto", url: "https://www.linkedin.com/in/carles-g-sanchez-nieto-79616042/" },
  { name: "Jose Sánchez Ríos", url: "https://www.linkedin.com/in/pepsrios/" },
  { name: "Anna Tañà Solé", url: "https://escuchad.es/equipo/" },
  { name: "Nuria Torras Planas", url: "https://portalrecerca.uab.cat/es/persons/nuria-torras-planas-2/" },
  { name: "Rubén Tresserras Gil", url: "https://www.rubentres.com" },
  { name: "Marc Vaillo Daniel", url: "https://www.imdb.com/name/nm0883249/" },
];

function RosterToggle({ roster, locale, label }: { roster: RosterEntry[]; locale: Locale; label: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 group"
      >
        <svg
          className={`w-5 h-5 text-yellow transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <span className="text-xs uppercase tracking-[0.3em] text-yellow group-hover:text-white transition-colors duration-300">
          {label}
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pt-6">
          {roster.map((entry) => (
            <div key={entry.name}>
              {entry.url ? (
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 border-b border-white/5 text-sm text-muted-foreground hover:text-yellow transition-colors duration-300 flex items-center justify-between group"
                >
                  <span>{entry.name}</span>
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              ) : (
                <div className="py-2.5 border-b border-white/5 text-sm text-muted-foreground">
                  {entry.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function Faculty() {
  const { locale, t } = useI18n();

  return (
    <section id="profesorado" className="py-24 lg:py-40 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header + Manifesto + Stats */}
        <div className="mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-yellow mb-4 block">
              {t.faculty.label[locale]}
            </span>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white leading-[1.1]">
              {t.faculty.heading[locale]}
            </h2>
          </motion.div>

          {/* Manifesto quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-l-2 border-yellow pl-6 lg:pl-8 text-xl lg:text-2xl text-white font-heading leading-relaxed max-w-3xl mb-16 lg:mb-20"
          >
            {t.faculty.spotlightIntro[locale]}
          </motion.p>

          {/* Stats — promoted to full-width, bigger presence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/5"
          >
            <div className="bg-card p-8 lg:p-12">
              <p className="font-heading font-bold text-5xl lg:text-7xl text-yellow leading-none mb-4">
                60%
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-yellow mb-3">
                {t.faculty.professionalsShort[locale]}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                {t.faculty.professionals[locale]}
              </p>
            </div>
            <div className="bg-card p-8 lg:p-12">
              <p className="font-heading font-bold text-5xl lg:text-7xl text-white leading-none mb-4">
                40%
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-3">
                {t.faculty.doctorsShort[locale]}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                {t.faculty.doctors[locale]}
              </p>
            </div>
          </motion.div>

        </div>

        {/* Featured / Spotlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-yellow block">
            {t.faculty.featured[locale]}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/5 mb-24 lg:mb-32">
          {featured.map((prof, i) => (
            <motion.a
              key={prof.name}
              href={prof.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-card p-6 lg:p-8 group hover:bg-black transition-colors duration-500 border-l-2 border-yellow/20 hover:border-yellow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading font-bold text-base lg:text-lg text-white group-hover:text-yellow transition-colors duration-500">
                    {prof.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    {prof.role[locale]}
                  </p>
                  <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-yellow/50 mt-3">
                    {prof.area[locale]}
                  </span>
                </div>
                <svg className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Full Roster Toggle */}
        <RosterToggle roster={roster} locale={locale} label={t.faculty.allFaculty[locale]} />
      </div>
    </section>
  );
}
