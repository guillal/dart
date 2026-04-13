"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

const UAB_ADMISSION_URL =
  "https://www.uab.cat/web/master-en-direccion-de-arte-y-comunicacion/admision-1206597472150.html/d-Touch/param1-4879_es/";

interface Festival {
  name: string;
  when: string;
  description: Record<"es" | "ca" | "en", string>;
  tags: string[];
  url?: string;
}

const festivals: Festival[] = [
  {
    name: "OFFF Barcelona",
    when: "Abril",
    description: {
      es: "El festival internacional de referencia en creatividad, diseño y arte digital. Ponentes de talla mundial, talleres y networking durante tres días intensos.",
      ca: "El festival internacional de referència en creativitat, disseny i art digital. Ponents de talla mundial, tallers i networking durant tres dies intensos.",
      en: "The leading international festival for creativity, design and digital art. World-class speakers, workshops and networking over three intense days.",
    },
    tags: ["Diseño", "Creatividad", "Arte digital"],
    url: "https://offf.barcelona",
  },
  {
    name: "Sónar",
    when: "Junio",
    description: {
      es: "Festival de música avanzada y nuevos medios. Sónar+D es su vertiente de creatividad, tecnología e innovación — un laboratorio de ideas para creadores visuales.",
      ca: "Festival de música avançada i nous mitjans. Sónar+D és el seu vessant de creativitat, tecnologia i innovació — un laboratori d'idees per a creadors visuals.",
      en: "Festival of advanced music and new media. Sónar+D is its creativity, technology and innovation strand — an ideas lab for visual creators.",
    },
    tags: ["Música", "Tecnología", "Nuevos medios"],
    url: "https://sonar.es",
  },
  {
    name: "Primavera Sound",
    when: "Junio",
    description: {
      es: "Uno de los festivales de música más importantes de Europa. Su dirección de arte, escenografías y comunicación visual son referencia para la industria.",
      ca: "Un dels festivals de música més importants d'Europa. La seva direcció d'art, escenografies i comunicació visual són referència per a la indústria.",
      en: "One of Europe's most important music festivals. Its art direction, set design and visual communication are a benchmark for the industry.",
    },
    tags: ["Música", "Dirección de arte", "Escenografía"],
    url: "https://www.primaverasound.com",
  },
  {
    name: "Barcelona Design Week",
    when: "Junio",
    description: {
      es: "Una semana de exposiciones, conferencias y talleres que posicionan Barcelona como capital del diseño. Organizada por BCD (Barcelona Centro de Diseño).",
      ca: "Una setmana d'exposicions, conferències i tallers que posicionen Barcelona com a capital del disseny. Organitzada per BCD (Barcelona Centre de Disseny).",
      en: "A week of exhibitions, conferences and workshops positioning Barcelona as a design capital. Organized by BCD (Barcelona Design Centre).",
    },
    tags: ["Diseño", "Branding", "Innovación"],
    url: "https://www.barcelonadesignweek.com",
  },
  {
    name: "Loop Festival",
    when: "Noviembre",
    description: {
      es: "Festival y feria internacional dedicado al videoarte y la imagen en movimiento. Galerías, proyecciones y conferencias en toda la ciudad.",
      ca: "Festival i fira internacional dedicat al videoart i la imatge en moviment. Galeries, projeccions i conferències a tota la ciutat.",
      en: "International festival and fair dedicated to video art and the moving image. Galleries, screenings and conferences across the city.",
    },
    tags: ["Videoarte", "Audiovisual", "Arte contemporáneo"],
    url: "https://loop-barcelona.com",
  },
  {
    name: "Premis ADG Laus",
    when: "Junio",
    description: {
      es: "Los premios de diseño gráfico y comunicación visual más prestigiosos de España. Organizados por ADG-FAD desde 1964.",
      ca: "Els premis de disseny gràfic i comunicació visual més prestigiosos d'Espanya. Organitzats per ADG-FAD des de 1964.",
      en: "Spain's most prestigious graphic design and visual communication awards. Organized by ADG-FAD since 1964.",
    },
    tags: ["Premios", "Diseño gráfico", "Comunicación visual"],
    url: "https://www.fad.cat/laus",
  },
  {
    name: "LlumBCN",
    when: "Febrero",
    description: {
      es: "Festival de artes lumínicas de Barcelona. Instalaciones de luz que transforman el barrio del Poblenou en un museo al aire libre.",
      ca: "Festival d'arts lumíniques de Barcelona. Instal·lacions de llum que transformen el barri del Poblenou en un museu a l'aire lliure.",
      en: "Barcelona's light arts festival. Light installations transforming the Poblenou neighborhood into an open-air museum.",
    },
    tags: ["Arte lumínico", "Instalaciones", "Poblenou"],
    url: "https://www.llumbcn.cat",
  },
  {
    name: "Sitges Film Festival",
    when: "Octubre",
    description: {
      es: "Festival Internacional de Cine Fantástico de Sitges. A 30 minutos de Barcelona, es referencia mundial en cine de género con una dirección de arte icónica.",
      ca: "Festival Internacional de Cinema Fantàstic de Sitges. A 30 minuts de Barcelona, és referència mundial en cinema de gènere amb una direcció d'art icònica.",
      en: "Sitges International Fantastic Film Festival. 30 minutes from Barcelona, a world benchmark in genre cinema with iconic art direction.",
    },
    tags: ["Cine", "Audiovisual", "Arte fantástico"],
    url: "https://sitgesfilmfestival.com",
  },
  {
    name: "Grec Festival",
    when: "Julio",
    description: {
      es: "El festival de artes escénicas de Barcelona. Teatro, danza, música y circo con una cuidada identidad visual que se renueva cada edición.",
      ca: "El festival d'arts escèniques de Barcelona. Teatre, dansa, música i circ amb una acurada identitat visual que es renova cada edició.",
      en: "Barcelona's performing arts festival. Theatre, dance, music and circus with a carefully crafted visual identity renewed each edition.",
    },
    tags: ["Artes escénicas", "Identidad visual", "Cultura"],
    url: "https://www.barcelona.cat/grec",
  },
];

export function FestivalsPageContent() {
  const { locale, t } = useI18n();

  return (
    <>
      <Navigation />
      <main>
        <div className="pt-24 lg:pt-28 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.a
              href="/"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-yellow transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L3 12m0 0l4-5m-4 5h18" />
              </svg>
              darc.barcelona
            </motion.a>
          </div>
        </div>

        <section className="pt-12 lg:pt-20 pb-24 lg:pb-40 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-16 lg:mb-24"
            >
              <span className="font-heading font-bold text-[clamp(4rem,15vw,12rem)] leading-none text-yellow/10 block">
                10+
              </span>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl xl:text-7xl text-white leading-[1.05] -mt-6 lg:-mt-12">
                {t.festivals.heading[locale]}
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mt-8">
                {t.festivals.description[locale]}
              </p>
            </motion.div>

            <div className="space-y-[1px] bg-white/5">
              {festivals.map((festival, i) => (
                <motion.div
                  key={festival.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                >
                  {festival.url ? (
                    <a
                      href={festival.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-black p-6 lg:p-8 group hover:bg-card transition-colors duration-500"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <h2 className="font-heading font-bold text-xl lg:text-2xl text-white group-hover:text-yellow transition-colors duration-500">
                              {festival.name}
                            </h2>
                            <svg className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                          </div>
                          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-2xl">
                            {festival.description[locale]}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {festival.tags.map((tag) => (
                              <span key={tag} className="text-xs border border-white/10 text-white/70 px-3 py-1.5">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="text-yellow font-heading font-bold text-sm lg:text-base shrink-0 lg:mt-1">
                          {festival.when}
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div className="bg-black p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <h2 className="font-heading font-bold text-xl lg:text-2xl text-white mb-3">
                            {festival.name}
                          </h2>
                          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-2xl">
                            {festival.description[locale]}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {festival.tags.map((tag) => (
                              <span key={tag} className="text-xs border border-white/10 text-white/70 px-3 py-1.5">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="text-yellow font-heading font-bold text-sm lg:text-base shrink-0 lg:mt-1">
                          {festival.when}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-yellow p-10 lg:p-16 text-center mt-24"
            >
              <h2 className="font-heading font-bold text-2xl lg:text-4xl text-black leading-[1.1] mb-4">
                {t.festivals.ctaTitle[locale]}
              </h2>
              <p className="text-black/70 text-base max-w-lg mx-auto mb-8">
                {t.festivals.ctaDescription[locale]}
              </p>
              <a
                href={UAB_ADMISSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-black text-yellow font-semibold px-8 py-4 text-base hover:bg-black/80 transition-colors duration-300 group"
              >
                {t.festivals.ctaApply[locale]}
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
