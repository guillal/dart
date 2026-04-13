"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Locale = "es" | "ca" | "en";

const translations = {
  nav: {
    programa: { es: "Programa", ca: "Programa", en: "Program" },
    planEstudios: { es: "Plan de estudios", ca: "Pla d'estudis", en: "Curriculum" },
    profesorado: { es: "Profesorado", ca: "Professorat", en: "Faculty" },
    admision: { es: "Admisión", ca: "Admissió", en: "Admission" },
    contacto: { es: "Contacto", ca: "Contacte", en: "Contact" },
    inscribete: { es: "Inscríbete", ca: "Inscriu-te", en: "Apply" },
  },
  hero: {
    uab: {
      es: "Universitat Autònoma de Barcelona",
      ca: "Universitat Autònoma de Barcelona",
      en: "Universitat Autònoma de Barcelona",
    },
    masterTag: {
      es: "Máster universitario",
      ca: "Màster universitari",
      en: "University master's degree",
    },
    line1: { es: "Dirección", ca: "Direcció", en: "Art" },
    line2: { es: "de Arte", ca: "d'Art", en: "Direction" },
    line3: { es: "y Comunicación", ca: "i Comunicació", en: "& Communication" },
    subtitle: {
      es: "Formamos directores de arte globales y estrategas, capaces de ejercer la disciplina en publicidad, branding, audiovisual y fotografía.",
      ca: "Formem directors d'art globals i estrateges, capaços d'exercir la disciplina en publicitat, branding, audiovisual i fotografia.",
      en: "We train global art directors and strategists, capable of practicing the discipline in advertising, branding, audiovisual and photography.",
    },
    plazas: { es: "Plazas", ca: "Places", en: "Seats" },
    edicion: { es: "Edición", ca: "Edició", en: "Edition" },
    cta1: { es: "Solicita información", ca: "Sol·licita informació", en: "Request info" },
    cta2: { es: "Descubre el programa", ca: "Descobreix el programa", en: "Discover the program" },
  },
  areas: {
    label: { es: "Áreas del programa", ca: "Àrees del programa", en: "Program areas" },
    heading: {
      es: "Cuatro ejes para dominar la comunicación visual",
      ca: "Quatre eixos per dominar la comunicació visual",
      en: "Four pillars to master visual communication",
    },
    items: [
      {
        title: { es: "Publicidad", ca: "Publicitat", en: "Advertising" },
        description: {
          es: "Profundiza en el ámbito publicitario, concretamente en las habilidades y responsabilidades de la figura del director de arte surgido hoy de la dupla con el copy en el equipo creativo.",
          ca: "Profunditza en l'àmbit publicitari, concretament en les habilitats i responsabilitats de la figura del director d'art sorgit avui de la dupla amb el copy a l'equip creatiu.",
          en: "Delves into advertising, specifically the skills and responsibilities of today's art director role, born from the creative duo with the copywriter.",
        },
      },
      {
        title: { es: "Branding", ca: "Branding", en: "Branding" },
        description: {
          es: "Establece el branding y la creación de identidad visual como elementos sobre los que pivota la conceptualización en el ámbito de la creación visual.",
          ca: "Estableix el branding i la creació d'identitat visual com a elements sobre els quals pivota la conceptualització en l'àmbit de la creació visual.",
          en: "Establishes branding and visual identity creation as the pivotal elements of conceptualization in the field of visual creation.",
        },
      },
      {
        title: { es: "Fotografía", ca: "Fotografia", en: "Photography" },
        description: {
          es: "Uno de los ámbitos en los que más influencia tiene la dirección de arte y donde más olvidada está a veces es en la creación de las imágenes.",
          ca: "Un dels àmbits en què més influència té la direcció d'art i on més oblidada està de vegades és en la creació de les imatges.",
          en: "One of the areas where art direction has the most influence — and is sometimes most forgotten — is in the creation of images.",
        },
      },
      {
        title: { es: "Audiovisual", ca: "Audiovisual", en: "Audiovisual" },
        description: {
          es: "Expone el contexto del departamento de la dirección de arte en la estructura de la producción audiovisual mostrando los vínculos con la dirección de fotografía y el departamento de diseño de producción.",
          ca: "Exposa el context del departament de la direcció d'art en l'estructura de la producció audiovisual mostrant els vincles amb la direcció de fotografia i el departament de disseny de producció.",
          en: "Presents the context of the art direction department within audiovisual production, showing the links with cinematography and production design.",
        },
      },
    ],
    quote: {
      es: "Formamos directoras y directores de arte capaces de interpretar un briefing creativo y establecer una estrategia de comunicación visual para un público objetivo específico.",
      ca: "Formem directores i directors d'art capaços d'interpretar un briefing creatiu i establir una estratègia de comunicació visual per a un públic objectiu específic.",
      en: "We train art directors capable of interpreting a creative briefing and establishing a visual communication strategy for a specific target audience.",
    },
  },
  methodology: {
    label: { es: "Metodología", ca: "Metodologia", en: "Methodology" },
    heading1: { es: "Aprender haciendo.", ca: "Aprendre fent.", en: "Learn by doing." },
    heading2: { es: "Crear resolviendo.", ca: "Crear resolent.", en: "Create by solving." },
    description: {
      es: "Nuestras metodologías docentes abarcan una amplia variedad de enfoques, desde clases magistrales presenciales hasta tutorías personalizadas, seminarios interactivos y resolución de briefings.",
      ca: "Les nostres metodologies docents abarquen una àmplia varietat d'enfocaments, des de classes magistrals presencials fins a tutories personalitzades, seminaris interactius i resolució de briefings.",
      en: "Our teaching methodologies encompass a wide variety of approaches, from in-person lectures to personalized tutoring, interactive seminars and briefing resolution.",
    },
    items: [
      {
        title: { es: "Clases magistrales y prácticas", ca: "Classes magistrals i pràctiques", en: "Lectures and workshops" },
        description: {
          es: "Sesiones presenciales que combinan teoría y práctica con resolución de briefings reales y análisis de casos.",
          ca: "Sessions presencials que combinen teoria i pràctica amb resolució de briefings reals i anàlisi de casos.",
          en: "In-person sessions combining theory and practice with real briefing resolution and case analysis.",
        },
      },
      {
        title: { es: "Recursos especializados", ca: "Recursos especialitzats", en: "Specialized resources" },
        description: {
          es: "Campus virtual con contenidos detallados, presentaciones de expertos, materiales didácticos y actividades prácticas.",
          ca: "Campus virtual amb continguts detallats, presentacions d'experts, materials didàctics i activitats pràctiques.",
          en: "Virtual campus with detailed content, expert presentations, didactic materials and practical activities.",
        },
      },
      {
        title: { es: "Interacción y colaboración", ca: "Interacció i col·laboració", en: "Interaction and collaboration" },
        description: {
          es: "Espacio de interacción en línea para estudiantes, profesores, tutores y coordinadores.",
          ca: "Espai d'interacció en línia per a estudiants, professors, tutors i coordinadors.",
          en: "Online interaction space for students, professors, tutors and coordinators.",
        },
      },
      {
        title: { es: "Evaluación continua", ca: "Avaluació contínua", en: "Continuous assessment" },
        description: {
          es: "Evaluación progresiva a través de módulos independientes que garantizan el aprendizaje real.",
          ca: "Avaluació progressiva a través de mòduls independents que garanteixen l'aprenentatge real.",
          en: "Progressive assessment through independent modules that ensure real learning.",
        },
      },
    ],
  },
  curriculum: {
    label: { es: "Plan de estudios", ca: "Pla d'estudis", en: "Curriculum" },
    heading: { es: "6 módulos. 60 ECTS.", ca: "6 mòduls. 60 ECTS.", en: "6 modules. 60 ECTS." },
    description: {
      es: "Un programa de alto rendimiento donde los alumnos reciben las herramientas para resolver casos reales creando piezas visuales con un fin.",
      ca: "Un programa d'alt rendiment on els alumnes reben les eines per resoldre casos reals creant peces visuals amb un fi.",
      en: "A high-performance program where students receive the tools to solve real cases by creating visual pieces with a purpose.",
    },
    subjects: [
      {
        code: "A1",
        title: {
          es: "Planificación de la Comunicación y la Dirección de Arte",
          ca: "Planificació de la Comunicació i la Direcció d'Art",
          en: "Communication Planning and Art Direction",
        },
        credits: 6,
        description: {
          es: "Familiariza al alumnado con los conceptos de comunicación, la creatividad, la estrategia, las tácticas y los briefings.",
          ca: "Familiaritza l'alumnat amb els conceptes de comunicació, la creativitat, l'estratègia, les tàctiques i els brífings.",
          en: "Familiarizes students with communication concepts, creativity, strategy, tactics and briefings.",
        },
        topics: {
          es: ["Comunicación", "Estrategia", "Planificación", "Relaciones Públicas", "Narrativa", "IA y Arte"],
          ca: ["Comunicació", "Estratègia", "Planificació", "Relacions Públiques", "Narrativa", "IA i Art"],
          en: ["Communication", "Strategy", "Planning", "Public Relations", "Narrative", "AI & Art"],
        },
      },
      {
        code: "A2",
        title: {
          es: "Dirección de Arte en Publicidad",
          ca: "Direcció d'Art en Publicitat",
          en: "Art Direction in Advertising",
        },
        credits: 12,
        description: {
          es: "Profundiza en el ámbito publicitario, destacando las habilidades y responsabilidades de la figura del director de arte de hoy junto al copy, presentando herramientas, experiencias y casos prácticos.",
          ca: "Profunditza en l'àmbit publicitari, destacant les habilitats i les responsabilitats de la figura del director d'art d'avui juntament amb el copy, presentant eines, experiències i casos pràctics.",
          en: "Deepens into advertising, highlighting the skills and responsibilities of today's art director alongside the copywriter, presenting tools, experiences and case studies.",
        },
        topics: {
          es: ["Concepto", "El director de arte en publicidad", "La dupla creativa", "La producción", "El proceso de creación", "La dimensión internacional"],
          ca: ["Concepte", "El director d'art en publicitat", "La dupla creativa", "La producció", "El procés de creació", "La dimensió internacional"],
          en: ["Concept", "The art director in advertising", "The creative duo", "Production", "The creative process", "The international dimension"],
        },
      },
      {
        code: "A3",
        title: {
          es: "Dirección de Arte y Branding",
          ca: "Direcció d'Art i Branding",
          en: "Art Direction and Branding",
        },
        credits: 12,
        description: {
          es: "Establece el branding y la creación de identidad visual como elementos sobre los que pivota la conceptualización, ofreciendo herramientas y ejemplos prácticos.",
          ca: "Estableix el branding i la creació d'identitat visual com a elements sobre els quals pivota la conceptualització, oferint eines i exemples pràctics.",
          en: "Establishes branding and visual identity creation as pivotal conceptualization elements, offering tools and practical examples.",
        },
        topics: {
          es: ["Los orígenes", "Gestión del diseño de marca", "Creación de valores de marca", "Sistematización de los valores", "Normalización"],
          ca: ["Els orígens", "Gestió del disseny de marca", "Creació de valors de marca", "Sistematització dels valors", "Normalització"],
          en: ["Origins", "Brand design management", "Brand value creation", "Value systematization", "Standardization"],
        },
      },
      {
        code: "A4",
        title: {
          es: "Dirección de Arte Audiovisual",
          ca: "Direcció d'Art Audiovisual",
          en: "Audiovisual Art Direction",
        },
        credits: 9,
        description: {
          es: "Expone el contexto de la producción audiovisual, los vínculos con la dirección de fotografía y el departamento de diseño de producción.",
          ca: "Exposa el context de la producció audiovisual, els vincles amb la direcció de fotografia i el departament de disseny de producció.",
          en: "Presents the audiovisual production context, linking art direction with cinematography and production design.",
        },
        topics: {
          es: ["Introducción", "Productos", "El director", "Dirección de fotografía", "Preproducción audiovisual", "Postproducción audiovisual", "Banda sonora"],
          ca: ["Introducció", "Productes", "El director", "Direcció de fotografia", "Preproducció audiovisual", "Postproducció audiovisual", "Banda sonora"],
          en: ["Introduction", "Products", "The director", "Cinematography", "Audiovisual pre-production", "Audiovisual post-production", "Soundtrack"],
        },
      },
      {
        code: "A5",
        title: {
          es: "Dirección de Arte en Fotografía",
          ca: "Direcció d'Art en Fotografia",
          en: "Art Direction in Photography",
        },
        credits: 6,
        description: {
          es: "Presenta el papel de la fotografía en los proyectos creativos, la creación de imágenes mediante software/IA y técnicas de iluminación.",
          ca: "Presenta el paper de la fotografia en els projectes creatius, la creació d'imatges mitjançant programari/IA i tècniques d'il·luminació.",
          en: "Presents the role of photography in creative projects, image creation through software/AI and lighting techniques.",
        },
        topics: {
          es: ["Creatividad visual", "Domina la luz y la estética", "Innovación tecnológica", "Experiencia en el set", "La nueva era del retoque fotográfico"],
          ca: ["Creativitat visual", "Domina la llum i l'estètica", "Innovació tecnològica", "Experiència en el set", "La nova era del retoc fotogràfic"],
          en: ["Visual creativity", "Mastering light and aesthetics", "Technological innovation", "On-set experience", "The new era of photo retouching"],
        },
      },
      {
        code: "A6",
        title: {
          es: "Trabajo Final de Máster (TFM)",
          ca: "Treball Final de Màster (TFM)",
          en: "Master's Final Project",
        },
        credits: 15,
        description: {
          es: "El estudiante elige entre dos escenarios profesionales: briefings publicitarios o proyectos audiovisuales que requieren desarrollo de branding. Se resuelven de forma colaborativa.",
          ca: "L'estudiant tria entre dos escenaris professionals: brífings publicitaris o projectes audiovisuals que requereixen desenvolupament de branding. Es resolen de forma col·laborativa.",
          en: "Students choose between two professional scenarios: advertising briefings or audiovisual projects requiring branding development. Solved collaboratively.",
        },
        topics: {
          es: ["Retos con clientes reales", "Sesiones de contrabriefing", "Mentoría personalizada", "Defensa pública del proyecto"],
          ca: ["Reptes amb clients reals", "Sessions de contrabrífing", "Mentoria personalitzada", "Defensa pública del projecte"],
          en: ["Real client challenges", "Counter-briefing sessions", "Personalized mentoring", "Public project defense"],
        },
      },
    ],
  },
  testimonials: {
    label: { es: "Voces del sector", ca: "Veus del sector", en: "Industry voices" },
    heading: {
      es: "Lo que dicen los profesionales",
      ca: "El que diuen els professionals",
      en: "What the professionals say",
    },
  },
  faculty: {
    label: { es: "Profesorado", ca: "Professorat", en: "Faculty" },
    heading: {
      es: "25 profesionales del sector",
      ca: "25 professionals del sector",
      en: "25 industry professionals",
    },
    director: { es: "Dirección del máster", ca: "Direcció del màster", en: "Master's director" },
    department: {
      es: "Departamento de Comunicación Audiovisual y Publicidad",
      ca: "Departament de Comunicació Audiovisual i Publicitat",
      en: "Department of Audiovisual Communication and Advertising",
    },
    doctors: {
      es: "Doctores y académicos de diversas universidades españolas",
      ca: "Doctors i acadèmics de diverses universitats espanyoles",
      en: "PhDs and academics from various Spanish universities",
    },
    professionals: {
      es: "Profesionales en activo en agencias, productoras y estudios de diseño",
      ca: "Professionals en actiu en agències, productores i estudis de disseny",
      en: "Active professionals in agencies, production companies and design studios",
    },
  },
  admission: {
    label: { es: "Admisión y matrícula", ca: "Admissió i matrícula", en: "Admission & enrollment" },
    heading: { es: "Tu camino empieza aquí", ca: "El teu camí comença aquí", en: "Your path starts here" },
    datos: { es: "Datos clave", ca: "Dades clau", en: "Key data" },
    docs: { es: "Documentación requerida", ca: "Documentació requerida", en: "Required documents" },
    perfiles: { es: "Perfiles prioritarios", ca: "Perfils prioritaris", en: "Priority profiles" },
    preinscripcion: { es: "Preinscripción abierta", ca: "Preinscripció oberta", en: "Pre-registration open" },
    cta: { es: "Inscríbete ahora", ca: "Inscriu-te ara", en: "Apply now" },
    details: [
      { label: { es: "Modalidad", ca: "Modalitat", en: "Mode" }, value: { es: "Presencial", ca: "Presencial", en: "In-person" } },
      { label: { es: "Idioma", ca: "Idioma", en: "Language" }, value: { es: "Castellano", ca: "Castellà", en: "Spanish" } },
      { label: { es: "Precio", ca: "Preu", en: "Price" }, value: "5.730 €" },
      { label: { es: "Inscripción", ca: "Inscripció", en: "Registration fee" }, value: "30,21 €" },
    ],
    requirements: {
      es: [
        "Título de grado universitario o equiparable",
        "Expediente académico",
        "DNI, NIE o TIE (escaneado por ambas caras) o pasaporte vigente",
        "Currículum vitae",
        "Carta de motivación",
        "Entrevista con el coordinador del programa",
      ],
      ca: [
        "Títol de grau universitari o equiparable",
        "Expedient acadèmic",
        "DNI, NIE o TIE (escanejat per les dues cares) o passaport vigent",
        "Currículum vitae",
        "Carta de motivació",
        "Entrevista amb el coordinador del programa",
      ],
      en: [
        "University degree or equivalent",
        "Academic transcript",
        "National ID or valid passport (both sides scanned)",
        "Curriculum vitae",
        "Motivation letter",
        "Interview with the program coordinator",
      ],
    },
    profiles: {
      es: ["Comunicación", "Diseño", "Marketing", "Arte", "Otros"],
      ca: ["Comunicació", "Disseny", "Màrqueting", "Art", "Altres"],
      en: ["Communication", "Design", "Marketing", "Art", "Other"],
    },
  },
  footer: {
    contacto: { es: "Contacto", ca: "Contacte", en: "Contact" },
    ubicacion: { es: "Ubicación", ca: "Ubicació", en: "Location" },
    enlaces: { es: "Enlaces", ca: "Enllaços", en: "Links" },
    director: { es: "Dirección del Máster", ca: "Direcció del Màster", en: "Master's Director" },
    paginaUab: { es: "Página oficial UAB", ca: "Pàgina oficial UAB", en: "UAB official page" },
    copyright: {
      es: "Máster en Dirección de Arte y Comunicación — UAB",
      ca: "Màster en Direcció d'Art i Comunicació — UAB",
      en: "Master in Art Direction and Communication — UAB",
    },
    department: {
      es: "Departamento de Comunicación Audiovisual y Publicidad",
      ca: "Departament de Comunicació Audiovisual i Publicitat",
      en: "Department of Audiovisual Communication and Advertising",
    },
    description: {
      es: "Máster en Dirección de Arte y Comunicación. Universitat Autònoma de Barcelona.",
      ca: "Màster en Direcció d'Art i Comunicació. Universitat Autònoma de Barcelona.",
      en: "Master in Art Direction and Communication. Universitat Autònoma de Barcelona.",
    },
  },
} as const;

type Translations = typeof translations;

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
