"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

const UAB_ADMISSION_URL =
  "https://www.uab.cat/web/master-en-direccion-de-arte-y-comunicacion/admision-1206597472150.html/d-Touch/param1-4879_es/";

const CONTACT_EMAIL = "coordinacio.master.direccio.art.comunicacio@uab.cat";

const faqs = [
  {
    question: {
      es: "¿A quién va dirigido este máster?",
      ca: "A qui va dirigit aquest màster?",
      en: "Who is this master's for?",
    },
    answer: {
      es: "A graduados universitarios interesados en la dirección de arte y la comunicación visual. Los perfiles prioritarios son Comunicación, Diseño, Marketing, Arte y afines, aunque aceptamos candidatos de otras disciplinas que demuestren motivación y aptitud creativa.",
      ca: "A graduats universitaris interessats en la direcció d'art i la comunicació visual. Els perfils prioritaris són Comunicació, Disseny, Màrqueting, Art i afins, tot i que acceptem candidats d'altres disciplines que demostrin motivació i aptitud creativa.",
      en: "For university graduates interested in art direction and visual communication. Priority profiles include Communication, Design, Marketing, Art and related fields, though we accept candidates from other disciplines who demonstrate motivation and creative aptitude.",
    },
  },
  {
    question: {
      es: "¿Necesito un título en diseño para acceder?",
      ca: "Necessito un títol en disseny per accedir?",
      en: "Do I need a design degree to apply?",
    },
    answer: {
      es: "No es imprescindible. El requisito es tener un título de grado universitario o equiparable. Lo importante es tu motivación, tu portfolio (si lo tienes) y la entrevista con el coordinador del programa. Hemos tenido alumnos brillantes de periodismo, bellas artes, ingeniería y otros campos.",
      ca: "No és imprescindible. El requisit és tenir un títol de grau universitari o equiparable. L'important és la teva motivació, el teu portfolio (si en tens) i l'entrevista amb el coordinador del programa. Hem tingut alumnes brillants de periodisme, belles arts, enginyeria i altres camps.",
      en: "Not necessarily. The requirement is a university degree or equivalent. What matters is your motivation, your portfolio (if you have one) and the interview with the program coordinator. We've had brilliant students from journalism, fine arts, engineering and other fields.",
    },
  },
  {
    question: {
      es: "¿En qué idioma se imparte?",
      ca: "En quin idioma s'imparteix?",
      en: "What language is it taught in?",
    },
    answer: {
      es: "Las clases se imparten principalmente en castellano. Algunos materiales y lecturas pueden estar en catalán o inglés. No se requiere nivel de catalán para seguir el programa.",
      ca: "Les classes s'imparteixen principalment en castellà. Alguns materials i lectures poden estar en català o anglès. No es requereix nivell de català per seguir el programa.",
      en: "Classes are taught primarily in Spanish. Some materials and readings may be in Catalan or English. No Catalan proficiency is required to follow the program.",
    },
  },
  {
    question: {
      es: "¿Es presencial u online?",
      ca: "És presencial o online?",
      en: "Is it in-person or online?",
    },
    answer: {
      es: "El máster es 100% presencial, en la Facultat de Ciències de la Comunicació de la UAB (Campus de Bellaterra, Cerdanyola del Vallès). Las clases son viernes por la tarde y sábados por la mañana.",
      ca: "El màster és 100% presencial, a la Facultat de Ciències de la Comunicació de la UAB (Campus de Bellaterra, Cerdanyola del Vallès). Les classes són divendres a la tarda i dissabtes al matí.",
      en: "The master's is 100% in-person, at the UAB Faculty of Communication Sciences (Bellaterra Campus, Cerdanyola del Vallès). Classes are Friday afternoons and Saturday mornings.",
    },
  },
  {
    question: {
      es: "¿Puedo trabajar mientras estudio?",
      ca: "Puc treballar mentre estudio?",
      en: "Can I work while studying?",
    },
    answer: {
      es: "Sí. El horario está diseñado para compatibilizar con la actividad profesional: viernes por la tarde y sábados por la mañana. La mayoría de nuestros alumnos trabajan durante la semana.",
      ca: "Sí. L'horari està dissenyat per compatibilitzar amb l'activitat professional: divendres a la tarda i dissabtes al matí. La majoria dels nostres alumnes treballen durant la setmana.",
      en: "Yes. The schedule is designed to be compatible with professional activity: Friday afternoons and Saturday mornings. Most of our students work during the week.",
    },
  },
  {
    question: {
      es: "¿Cuánto cuesta? ¿Hay becas?",
      ca: "Quant costa? Hi ha beques?",
      en: "How much does it cost? Are there scholarships?",
    },
    answer: {
      es: "El precio del máster es de 5.730 € (más 30,21 € de tasa de inscripción). La UAB ofrece diversas opciones de becas y ayudas al estudio. Consulta la página de admisión de la UAB para información actualizada sobre financiación.",
      ca: "El preu del màster és de 5.730 € (més 30,21 € de taxa d'inscripció). La UAB ofereix diverses opcions de beques i ajuts a l'estudi. Consulta la pàgina d'admissió de la UAB per a informació actualitzada sobre finançament.",
      en: "The master's fee is €5,730 (plus €30.21 registration fee). The UAB offers various scholarship and financial aid options. Check the UAB admission page for up-to-date information on funding.",
    },
  },
  {
    question: {
      es: "¿Cuánto dura el programa?",
      ca: "Quant dura el programa?",
      en: "How long is the program?",
    },
    answer: {
      es: "Un curso académico completo (de octubre a junio), con 60 ECTS distribuidos en 6 módulos. Las clases son viernes y sábados, lo que permite completar el programa en un año.",
      ca: "Un curs acadèmic complet (d'octubre a juny), amb 60 ECTS distribuïts en 6 mòduls. Les classes són divendres i dissabtes, cosa que permet completar el programa en un any.",
      en: "One full academic year (October to June), with 60 ECTS across 6 modules. Classes are on Fridays and Saturdays, allowing completion in one year.",
    },
  },
  {
    question: {
      es: "¿Cómo es el proceso de admisión?",
      ca: "Com és el procés d'admissió?",
      en: "What is the admission process?",
    },
    answer: {
      es: "El proceso incluye: solicitud online con documentación (título, expediente, CV, carta de motivación), y una entrevista personal con el coordinador del programa. Se valora el perfil académico, la experiencia profesional y la motivación del candidato. La admisión se resuelve por orden de inscripción a igualdad de perfil.",
      ca: "El procés inclou: sol·licitud online amb documentació (títol, expedient, CV, carta de motivació), i una entrevista personal amb el coordinador del programa. Es valora el perfil acadèmic, l'experiència professional i la motivació del candidat. L'admissió es resol per ordre d'inscripció a igualtat de perfil.",
      en: "The process includes: online application with documentation (degree, transcript, CV, motivation letter), and a personal interview with the program coordinator. Academic profile, professional experience and candidate motivation are evaluated. Admission is resolved by registration order for equal profiles.",
    },
  },
  {
    question: {
      es: "¿Qué es el TFM (Trabajo Final de Máster)?",
      ca: "Què és el TFM (Treball Final de Màster)?",
      en: "What is the TFM (Master's Final Project)?",
    },
    answer: {
      es: "El TFM (15 ECTS) es un proyecto profesional real donde eliges entre dos escenarios: resolver briefings publicitarios o desarrollar un proyecto audiovisual con branding. Se trabaja de forma colaborativa con mentoría personalizada y se defiende públicamente ante un tribunal de profesionales.",
      ca: "El TFM (15 ECTS) és un projecte professional real on tries entre dos escenaris: resoldre brífings publicitaris o desenvolupar un projecte audiovisual amb branding. Es treballa de forma col·laborativa amb mentoria personalitzada i es defensa públicament davant un tribunal de professionals.",
      en: "The TFM (15 ECTS) is a real professional project where you choose between two scenarios: solving advertising briefings or developing an audiovisual project with branding. It's collaborative, with personalized mentoring, and publicly defended before a panel of professionals.",
    },
  },
  {
    question: {
      es: "¿Qué salidas profesionales tiene?",
      ca: "Quines sortides professionals té?",
      en: "What career opportunities does it offer?",
    },
    answer: {
      es: "Los graduados trabajan como directores de arte en agencias de publicidad, consultoras de branding, productoras audiovisuales y estudios de diseño. También como directores creativos, fotógrafos comerciales, diseñadores de producción y freelance creativos. El 60% del profesorado son profesionales en activo que conectan el aula con la industria.",
      ca: "Els graduats treballen com a directors d'art en agències de publicitat, consultores de branding, productores audiovisuals i estudis de disseny. També com a directors creatius, fotògrafs comercials, dissenyadors de producció i freelance creatius. El 60% del professorat són professionals en actiu que connecten l'aula amb la indústria.",
      en: "Graduates work as art directors at advertising agencies, branding consultancies, audiovisual production companies and design studios. Also as creative directors, commercial photographers, production designers and freelance creatives. 60% of the faculty are active professionals who connect the classroom with the industry.",
    },
  },
];

export function FaqPageContent() {
  const { locale, t } = useI18n();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <Navigation />
      <main>
        {/* Back link */}
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

        {/* Header */}
        <section className="pt-12 lg:pt-20 pb-24 lg:pb-40 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-yellow mb-4 block">
                {t.faq.label[locale]}
              </span>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl xl:text-7xl text-white leading-[1.05]">
                {t.faq.heading[locale]}
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mt-6">
                {t.faq.description[locale]}
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="pb-24 lg:pb-40 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-[1px]">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                    className="w-full text-left bg-card hover:bg-muted transition-colors duration-300 p-6 lg:p-8 group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 lg:gap-6 flex-1">
                        <span className="text-yellow font-heading font-bold text-sm mt-1 shrink-0 w-8">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="font-heading font-semibold text-base lg:text-lg text-white group-hover:text-yellow transition-colors duration-300">
                          {faq.question[locale]}
                        </h2>
                      </div>
                      <svg
                        className={`w-5 h-5 text-yellow transition-transform duration-300 shrink-0 mt-1 ${activeIndex === i ? "rotate-45" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: activeIndex === i ? "auto" : 0,
                      opacity: activeIndex === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="bg-card px-6 lg:px-8 pb-8 pt-2 pl-[3.5rem] lg:pl-[4.5rem]">
                      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-2xl">
                        {faq.answer[locale]}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 lg:pb-40 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-yellow p-10 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
            >
              <div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl text-black leading-[1.1]">
                  {t.faq.ctaTitle[locale]}
                </h2>
                <p className="text-black/70 text-sm lg:text-base mt-2">
                  {t.faq.ctaDescription[locale]}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a
                  href={UAB_ADMISSION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-yellow font-semibold px-6 py-3 text-sm hover:bg-black/80 transition-colors duration-300 group"
                >
                  {t.faq.ctaApply[locale]}
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center border-2 border-black text-black font-semibold px-6 py-3 text-sm hover:bg-black hover:text-yellow transition-colors duration-300"
                >
                  {t.faq.ctaContact[locale]}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
