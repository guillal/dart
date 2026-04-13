"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

const UAB_ADMISSION_URL =
  "https://www.uab.cat/web/master-en-direccion-de-arte-y-comunicacion/admision-1206597472150.html/d-Touch/param1-4879_es/";

interface Agency {
  name: string;
  description: Record<"es" | "ca" | "en", string>;
  url?: string;
}

const categories: Array<{
  label: Record<"es" | "ca" | "en", string>;
  agencies: Agency[];
}> = [
  {
    label: {
      es: "Redes internacionales",
      ca: "Xarxes internacionals",
      en: "International networks",
    },
    agencies: [
      {
        name: "McCann Worldgroup",
        description: {
          es: "Una de las mayores redes de publicidad del mundo, con oficina en Barcelona especializada en creatividad y estrategia de marca.",
          ca: "Una de les majors xarxes de publicitat del món, amb oficina a Barcelona especialitzada en creativitat i estratègia de marca.",
          en: "One of the world's largest advertising networks, with a Barcelona office specialized in creativity and brand strategy.",
        },
        url: "https://www.mccann.com",
      },
      {
        name: "DDB",
        description: {
          es: "Red global con fuerte presencia en Barcelona. Conocida por su filosofía de creatividad como fuerza de negocio.",
          ca: "Xarxa global amb forta presència a Barcelona. Coneguda per la seva filosofia de creativitat com a força de negoci.",
          en: "Global network with strong Barcelona presence. Known for its philosophy of creativity as a business force.",
        },
        url: "https://www.ddb.com",
      },
      {
        name: "TBWA",
        description: {
          es: "Agencia conocida por su metodología 'Disruption'. Su oficina en Barcelona trabaja con marcas nacionales e internacionales.",
          ca: "Agència coneguda per la seva metodologia 'Disruption'. La seva oficina a Barcelona treballa amb marques nacionals i internacionals.",
          en: "Agency known for its 'Disruption' methodology. Its Barcelona office works with national and international brands.",
        },
        url: "https://www.tbwa.com",
      },
      {
        name: "Ogilvy",
        description: {
          es: "Fundada por David Ogilvy, es referencia mundial en publicidad, branding y comunicación integrada.",
          ca: "Fundada per David Ogilvy, és referència mundial en publicitat, branding i comunicació integrada.",
          en: "Founded by David Ogilvy, a worldwide reference in advertising, branding and integrated communications.",
        },
        url: "https://www.ogilvy.com",
      },
      {
        name: "Leo Burnett",
        description: {
          es: "Red creativa global presente en Barcelona, especializada en construir marcas icónicas a través de 'HumanKind'.",
          ca: "Xarxa creativa global present a Barcelona, especialitzada en construir marques icòniques a través de 'HumanKind'.",
          en: "Global creative network present in Barcelona, specialized in building iconic brands through 'HumanKind'.",
        },
        url: "https://www.leoburnett.com",
      },
      {
        name: "Publicis",
        description: {
          es: "Uno de los mayores grupos de comunicación del mundo, con operaciones de creatividad y medios en Barcelona.",
          ca: "Un dels majors grups de comunicació del món, amb operacions de creativitat i mitjans a Barcelona.",
          en: "One of the world's largest communication groups, with creativity and media operations in Barcelona.",
        },
        url: "https://www.publicis.com",
      },
    ],
  },
  {
    label: {
      es: "Agencias independientes y estudios",
      ca: "Agències independents i estudis",
      en: "Independent agencies and studios",
    },
    agencies: [
      {
        name: "*S,C,P,F...",
        description: {
          es: "Una de las agencias independientes más premiadas de España. Referencia en creatividad publicitaria desde Barcelona.",
          ca: "Una de les agències independents més premiades d'Espanya. Referència en creativitat publicitària des de Barcelona.",
          en: "One of Spain's most awarded independent agencies. A reference in advertising creativity from Barcelona.",
        },
        url: "https://www.scpf.com",
      },
      {
        name: "Vasava",
        description: {
          es: "Estudio de diseño y dirección de arte reconocido internacionalmente por su trabajo en branding, ilustración y motion.",
          ca: "Estudi de disseny i direcció d'art reconegut internacionalment pel seu treball en branding, il·lustració i motion.",
          en: "Design and art direction studio internationally recognized for branding, illustration and motion work.",
        },
        url: "https://www.vasava.es",
      },
      {
        name: "Mucho",
        description: {
          es: "Estudio de branding con sede en Barcelona y proyección global. Especialistas en identidad visual y sistemas de diseño.",
          ca: "Estudi de branding amb seu a Barcelona i projecció global. Especialistes en identitat visual i sistemes de disseny.",
          en: "Branding studio based in Barcelona with global reach. Specialists in visual identity and design systems.",
        },
        url: "https://www.mucho.ws",
      },
      {
        name: "Summa",
        description: {
          es: "Consultora de branding líder en España. Especializada en estrategia de marca e identidad corporativa.",
          ca: "Consultora de branding líder a Espanya. Especialitzada en estratègia de marca i identitat corporativa.",
          en: "Leading branding consultancy in Spain. Specialized in brand strategy and corporate identity.",
        },
        url: "https://www.summa.es",
      },
      {
        name: "Folch",
        description: {
          es: "Estudio creativo fundado en Barcelona. Trabaja en la intersección de cultura, diseño y comunicación.",
          ca: "Estudi creatiu fundat a Barcelona. Treballa en la intersecció de cultura, disseny i comunicació.",
          en: "Creative studio founded in Barcelona. Works at the intersection of culture, design and communication.",
        },
        url: "https://www.folchstudio.com",
      },
      {
        name: "Clase",
        description: {
          es: "Agencia creativa barcelonesa conocida por campañas con alto impacto visual y narrativo.",
          ca: "Agència creativa barcelonina coneguda per campanyes amb alt impacte visual i narratiu.",
          en: "Barcelona creative agency known for campaigns with high visual and narrative impact.",
        },
        url: "https://www.clase.com",
      },
      {
        name: "Toormix",
        description: {
          es: "Estudio de diseño gráfico y comunicación visual con más de 20 años de trayectoria en Barcelona.",
          ca: "Estudi de disseny gràfic i comunicació visual amb més de 20 anys de trajectòria a Barcelona.",
          en: "Graphic design and visual communication studio with over 20 years of trajectory in Barcelona.",
        },
        url: "https://www.toormix.com",
      },
      {
        name: "Comuniza",
        description: {
          es: "Consultora de branding y naming con base en Barcelona. Expertos en arquitectura de marca.",
          ca: "Consultora de branding i naming amb base a Barcelona. Experts en arquitectura de marca.",
          en: "Branding and naming consultancy based in Barcelona. Experts in brand architecture.",
        },
        url: "https://www.comuniza.com",
      },
    ],
  },
  {
    label: {
      es: "Productoras audiovisuales",
      ca: "Productores audiovisuals",
      en: "Audiovisual production companies",
    },
    agencies: [
      {
        name: "Lee Films",
        description: {
          es: "Productora de referencia en publicidad audiovisual en España, con base en Barcelona.",
          ca: "Productora de referència en publicitat audiovisual a Espanya, amb base a Barcelona.",
          en: "Reference audiovisual advertising production company in Spain, based in Barcelona.",
        },
        url: "https://www.leefilms.com",
      },
      {
        name: "Canada",
        description: {
          es: "Productora barcelonesa premiada internacionalmente. Videoclips, publicidad y contenido de marca.",
          ca: "Productora barcelonina premiada internacionalment. Videoclips, publicitat i contingut de marca.",
          en: "Internationally awarded Barcelona production company. Music videos, advertising and branded content.",
        },
        url: "https://www.canadacanada.com",
      },
      {
        name: "CANADA Studio",
        description: {
          es: "Estudio de dirección creativa y producción audiovisual con fuerte identidad visual.",
          ca: "Estudi de direcció creativa i producció audiovisual amb forta identitat visual.",
          en: "Creative direction and audiovisual production studio with strong visual identity.",
        },
      },
      {
        name: "Garage Films",
        description: {
          es: "Productora cinematográfica y publicitaria con sede en Barcelona y proyectos internacionales.",
          ca: "Productora cinematogràfica i publicitària amb seu a Barcelona i projectes internacionals.",
          en: "Film and advertising production company based in Barcelona with international projects.",
        },
        url: "https://www.garagefilms.net",
      },
    ],
  },
];

export function AgenciesPageContent() {
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
                200+
              </span>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl xl:text-7xl text-white leading-[1.05] -mt-6 lg:-mt-12">
                {t.agencies.heading[locale]}
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mt-8">
                {t.agencies.description[locale]}
              </p>
            </motion.div>

            {categories.map((cat, ci) => (
              <div key={ci} className="mb-16 lg:mb-24">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-xs uppercase tracking-[0.3em] text-yellow mb-8 block"
                >
                  {cat.label[locale]}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/5">
                  {cat.agencies.map((agency, i) => (
                    <motion.div
                      key={agency.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                    >
                      {agency.url ? (
                        <a
                          href={agency.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-black p-6 lg:p-8 group hover:bg-card transition-colors duration-500 h-full"
                        >
                          <h3 className="font-heading font-bold text-lg lg:text-xl text-white group-hover:text-yellow transition-colors duration-500">
                            {agency.name}
                            <svg className="inline-block ml-2 w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                            {agency.description[locale]}
                          </p>
                        </a>
                      ) : (
                        <div className="bg-black p-6 lg:p-8 h-full">
                          <h3 className="font-heading font-bold text-lg lg:text-xl text-white">
                            {agency.name}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                            {agency.description[locale]}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-yellow p-10 lg:p-16 text-center"
            >
              <h2 className="font-heading font-bold text-2xl lg:text-4xl text-black leading-[1.1] mb-4">
                {t.agencies.ctaTitle[locale]}
              </h2>
              <p className="text-black/70 text-base max-w-lg mx-auto mb-8">
                {t.agencies.ctaDescription[locale]}
              </p>
              <a
                href={UAB_ADMISSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-black text-yellow font-semibold px-8 py-4 text-base hover:bg-black/80 transition-colors duration-300 group"
              >
                {t.agencies.ctaApply[locale]}
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
