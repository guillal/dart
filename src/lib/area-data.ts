import type { Locale } from "./i18n";

type I18nText = Record<Locale, string>;

interface AreaSkill {
  title: I18nText;
  description: I18nText;
}

interface CareerPath {
  title: I18nText;
  description: I18nText;
}

export interface AreaPageData {
  slug: string;
  number: string;
  title: I18nText;
  hook: I18nText;
  description: I18nText;
  skills: AreaSkill[];
  careers: CareerPath[];
  relatedModuleCodes: string[];
}

export const areas: Record<string, AreaPageData> = {
  publicidad: {
    slug: "publicidad",
    number: "01",
    title: { es: "Publicidad", ca: "Publicitat", en: "Advertising" },
    hook: {
      es: "La dupla creativa empieza aquí",
      ca: "La dupla creativa comença aquí",
      en: "The creative duo starts here",
    },
    description: {
      es: "Trabajarás como se trabaja en agencia: director de arte y copy, resolviendo briefings reales de clientes reales. Desde el concepto hasta la presentación, aprenderás a pensar estratégicamente y a ejecutar visualmente en campañas publicitarias de dimensión internacional.",
      ca: "Treballaràs com es treballa en agència: director d'art i copy, resolent briefings reals de clients reals. Des del concepte fins a la presentació, aprendràs a pensar estratègicament i a executar visualment en campanyes publicitàries de dimensió internacional.",
      en: "You'll work the way agencies actually work — art director and copywriter, solving real briefings from real clients. From concept to presentation, you'll learn to think strategically and execute visually in international advertising campaigns.",
    },
    skills: [
      {
        title: { es: "Concepto creativo", ca: "Concepte creatiu", en: "Creative concept" },
        description: {
          es: "Del insight a la gran idea. Aprenderás a conceptualizar campañas que conecten con el público objetivo.",
          ca: "De l'insight a la gran idea. Aprendràs a conceptualitzar campanyes que connectin amb el públic objectiu.",
          en: "From insight to big idea. You'll learn to conceptualize campaigns that connect with the target audience.",
        },
      },
      {
        title: { es: "La dupla creativa", ca: "La dupla creativa", en: "The creative duo" },
        description: {
          es: "La relación arte–copy es el motor de la publicidad. Trabajarás en equipo como en una agencia real.",
          ca: "La relació art–copy és el motor de la publicitat. Treballaràs en equip com en una agència real.",
          en: "The art–copy relationship is the engine of advertising. You'll work in teams like a real agency.",
        },
      },
      {
        title: { es: "Pensamiento de campaña", ca: "Pensament de campanya", en: "Campaign thinking" },
        description: {
          es: "Multi-plataforma, multi-formato. Desde gráfica a digital, de TV a redes sociales.",
          ca: "Multi-plataforma, multi-format. Des de gràfica a digital, de TV a xarxes socials.",
          en: "Multi-platform, multi-format. From print to digital, from TV to social media.",
        },
      },
      {
        title: { es: "Presentación al cliente", ca: "Presentació al client", en: "Client presentation" },
        description: {
          es: "Defender tu trabajo en una sala de juntas es tan importante como crearlo.",
          ca: "Defensar el teu treball en una sala de juntes és tan important com crear-lo.",
          en: "Defending your work in a boardroom is as important as creating it.",
        },
      },
      {
        title: { es: "Dimensión internacional", ca: "Dimensió internacional", en: "International dimension" },
        description: {
          es: "Campañas globales, adaptación local. Cómo funciona la creatividad sin fronteras.",
          ca: "Campanyes globals, adaptació local. Com funciona la creativitat sense fronteres.",
          en: "Global campaigns, local adaptation. How creativity works without borders.",
        },
      },
      {
        title: { es: "Producción creativa", ca: "Producció creativa", en: "Creative production" },
        description: {
          es: "Del boceto al arte final. El proceso completo de producción de piezas publicitarias.",
          ca: "De l'esbós a l'art final. El procés complet de producció de peces publicitàries.",
          en: "From rough to final art. The complete process of producing advertising pieces.",
        },
      },
    ],
    careers: [
      {
        title: { es: "Director/a de arte en agencia", ca: "Director/a d'art en agència", en: "Art Director at agency" },
        description: {
          es: "Lidera la visión visual de las campañas en agencias de publicidad nacionales e internacionales.",
          ca: "Lidera la visió visual de les campanyes en agències de publicitat nacionals i internacionals.",
          en: "Lead the visual vision of campaigns at national and international advertising agencies.",
        },
      },
      {
        title: { es: "Director/a creativo/a", ca: "Director/a creatiu/va", en: "Creative Director" },
        description: {
          es: "Dirige equipos creativos y define la estrategia visual de marcas y campañas.",
          ca: "Dirigeix equips creatius i defineix l'estratègia visual de marques i campanyes.",
          en: "Lead creative teams and define the visual strategy for brands and campaigns.",
        },
      },
      {
        title: { es: "Freelance creativo/a", ca: "Freelance creatiu/va", en: "Freelance Creative" },
        description: {
          es: "Trabaja de forma independiente con múltiples clientes y agencias en proyectos de alto impacto.",
          ca: "Treballa de forma independent amb múltiples clients i agències en projectes d'alt impacte.",
          en: "Work independently with multiple clients and agencies on high-impact projects.",
        },
      },
    ],
    relatedModuleCodes: ["A1", "A2"],
  },

  branding: {
    slug: "branding",
    number: "02",
    title: { es: "Branding", ca: "Branding", en: "Branding" },
    hook: {
      es: "De la idea a la identidad",
      ca: "De la idea a la identitat",
      en: "From idea to identity",
    },
    description: {
      es: "Las marcas son sistemas, no solo logotipos. Aprenderás a construir identidades visuales completas — desde la estrategia de marca hasta el sistema de diseño, desde el naming hasta las guías de implementación y normalización.",
      ca: "Les marques són sistemes, no només logotips. Aprendràs a construir identitats visuals completes — des de l'estratègia de marca fins al sistema de disseny, des del naming fins a les guies d'implementació i normalització.",
      en: "Brands are systems, not just logos. You'll learn to build complete visual identities — from brand strategy to design systems, from naming to implementation guidelines and standardization.",
    },
    skills: [
      {
        title: { es: "Estrategia de marca", ca: "Estratègia de marca", en: "Brand strategy" },
        description: {
          es: "Posicionamiento, valores y personalidad. Los cimientos invisibles de toda marca fuerte.",
          ca: "Posicionament, valors i personalitat. Els fonaments invisibles de tota marca forta.",
          en: "Positioning, values and personality. The invisible foundations of every strong brand.",
        },
      },
      {
        title: { es: "Identidad visual", ca: "Identitat visual", en: "Visual identity" },
        description: {
          es: "Logotipo, tipografía, color, iconografía. El sistema visual que hace reconocible una marca.",
          ca: "Logotip, tipografia, color, iconografia. El sistema visual que fa reconeixible una marca.",
          en: "Logo, typography, color, iconography. The visual system that makes a brand recognizable.",
        },
      },
      {
        title: { es: "Manual de marca", ca: "Manual de marca", en: "Brand manual" },
        description: {
          es: "Documentación y normalización. Cómo asegurar la coherencia en todos los puntos de contacto.",
          ca: "Documentació i normalització. Com assegurar la coherència en tots els punts de contacte.",
          en: "Documentation and standardization. How to ensure consistency across all touchpoints.",
        },
      },
      {
        title: { es: "Gestión del diseño", ca: "Gestió del disseny", en: "Design management" },
        description: {
          es: "Liderar el proceso de diseño de marca desde la conceptualización hasta la implementación.",
          ca: "Liderar el procés de disseny de marca des de la conceptualització fins a la implementació.",
          en: "Lead the brand design process from conceptualization to implementation.",
        },
      },
      {
        title: { es: "Creación de valores", ca: "Creació de valors", en: "Value creation" },
        description: {
          es: "Cómo traducir valores intangibles en elementos visuales tangibles y consistentes.",
          ca: "Com traduir valors intangibles en elements visuals tangibles i consistents.",
          en: "How to translate intangible values into tangible and consistent visual elements.",
        },
      },
      {
        title: { es: "Sistematización", ca: "Sistematització", en: "Systematization" },
        description: {
          es: "Construir sistemas escalables que mantengan la identidad coherente al crecer.",
          ca: "Construir sistemes escalables que mantinguin la identitat coherent en créixer.",
          en: "Build scalable systems that maintain identity coherence as they grow.",
        },
      },
    ],
    careers: [
      {
        title: { es: "Brand Strategist", ca: "Brand Strategist", en: "Brand Strategist" },
        description: {
          es: "Define el posicionamiento y la estrategia visual de marcas en consultoras y estudios.",
          ca: "Defineix el posicionament i l'estratègia visual de marques en consultores i estudis.",
          en: "Define the positioning and visual strategy of brands at consultancies and studios.",
        },
      },
      {
        title: { es: "Diseñador/a de identidad", ca: "Dissenyador/a d'identitat", en: "Identity Designer" },
        description: {
          es: "Crea sistemas de identidad visual completos para marcas de todos los sectores.",
          ca: "Crea sistemes d'identitat visual complets per a marques de tots els sectors.",
          en: "Create complete visual identity systems for brands across all sectors.",
        },
      },
      {
        title: { es: "Brand Manager", ca: "Brand Manager", en: "Brand Manager" },
        description: {
          es: "Gestiona la coherencia de marca en grandes organizaciones y equipos multidisciplinares.",
          ca: "Gestiona la coherència de marca en grans organitzacions i equips multidisciplinars.",
          en: "Manage brand coherence in large organizations and multidisciplinary teams.",
        },
      },
    ],
    relatedModuleCodes: ["A1", "A3"],
  },

  fotografia: {
    slug: "fotografia",
    number: "03",
    title: { es: "Fotografía", ca: "Fotografia", en: "Photography" },
    hook: {
      es: "Dirige la imagen",
      ca: "Dirigeix la imatge",
      en: "Direct the image",
    },
    description: {
      es: "La herramienta más poderosa del director de arte es la imagen. Aprenderás a dirigir sesiones fotográficas, dominar la iluminación de estudio y crear con inteligencia artificial — desde lo editorial hasta lo comercial, del set a la pantalla.",
      ca: "L'eina més poderosa del director d'art és la imatge. Aprendràs a dirigir sessions fotogràfiques, dominar la il·luminació d'estudi i crear amb intel·ligència artificial — des de l'editorial fins al comercial, del set a la pantalla.",
      en: "The art director's most powerful tool is the image. You'll learn to direct photo shoots, master studio lighting, and create with AI — from editorial to commercial, from set to screen.",
    },
    skills: [
      {
        title: { es: "Creatividad visual", ca: "Creativitat visual", en: "Visual creativity" },
        description: {
          es: "Desarrollar conceptos fotográficos que comuniquen ideas y emociones con precisión.",
          ca: "Desenvolupar conceptes fotogràfics que comuniquin idees i emocions amb precisió.",
          en: "Develop photographic concepts that communicate ideas and emotions with precision.",
        },
      },
      {
        title: { es: "Luz y estética", ca: "Llum i estètica", en: "Light and aesthetics" },
        description: {
          es: "Domina la iluminación en estudio y localización. La luz es tu primer pincel.",
          ca: "Domina la il·luminació en estudi i localització. La llum és el teu primer pinzell.",
          en: "Master lighting in studio and on location. Light is your first brush.",
        },
      },
      {
        title: { es: "Dirección en el set", ca: "Direcció en el set", en: "On-set direction" },
        description: {
          es: "El papel del director de arte en una producción fotográfica: del mood board al resultado final.",
          ca: "El paper del director d'art en una producció fotogràfica: del mood board al resultat final.",
          en: "The role of the art director in a photo production: from mood board to final result.",
        },
      },
      {
        title: { es: "Generación con IA", ca: "Generació amb IA", en: "AI generation" },
        description: {
          es: "La nueva frontera creativa. Crear imágenes con herramientas de inteligencia artificial.",
          ca: "La nova frontera creativa. Crear imatges amb eines d'intel·ligència artificial.",
          en: "The new creative frontier. Creating images with artificial intelligence tools.",
        },
      },
      {
        title: { es: "Postproducción", ca: "Postproducció", en: "Post-production" },
        description: {
          es: "Retoque digital y acabado. La nueva era del retoque fotográfico profesional.",
          ca: "Retoc digital i acabat. La nova era del retoc fotogràfic professional.",
          en: "Digital retouching and finishing. The new era of professional photo retouching.",
        },
      },
      {
        title: { es: "Innovación tecnológica", ca: "Innovació tecnològica", en: "Tech innovation" },
        description: {
          es: "Software, hardware y nuevas tecnologías aplicadas a la creación de imágenes.",
          ca: "Programari, maquinari i noves tecnologies aplicades a la creació d'imatges.",
          en: "Software, hardware and new technologies applied to image creation.",
        },
      },
    ],
    careers: [
      {
        title: { es: "Director/a de arte fotográfico", ca: "Director/a d'art fotogràfic", en: "Photo Art Director" },
        description: {
          es: "Dirige la visión visual de producciones fotográficas en publicidad, moda y editorial.",
          ca: "Dirigeix la visió visual de produccions fotogràfiques en publicitat, moda i editorial.",
          en: "Direct the visual vision of photo productions in advertising, fashion and editorial.",
        },
      },
      {
        title: { es: "Fotógrafo/a comercial", ca: "Fotògraf/a comercial", en: "Commercial Photographer" },
        description: {
          es: "Crea imágenes profesionales para marcas, productos y campañas publicitarias.",
          ca: "Crea imatges professionals per a marques, productes i campanyes publicitàries.",
          en: "Create professional images for brands, products and advertising campaigns.",
        },
      },
      {
        title: { es: "Artista digital / IA", ca: "Artista digital / IA", en: "Digital / AI Artist" },
        description: {
          es: "Combina retoque avanzado y generación con IA para crear imágenes de nueva generación.",
          ca: "Combina retoc avançat i generació amb IA per crear imatges de nova generació.",
          en: "Combine advanced retouching and AI generation to create next-generation images.",
        },
      },
    ],
    relatedModuleCodes: ["A5"],
  },

  audiovisual: {
    slug: "audiovisual",
    number: "04",
    title: { es: "Audiovisual", ca: "Audiovisual", en: "Audiovisual" },
    hook: {
      es: "Del guion al set",
      ca: "Del guió al set",
      en: "From script to set",
    },
    description: {
      es: "Cine, publicidad, videoclips — el director de arte conecta la visión del director con la ejecución visual. Aprenderás el pipeline completo de producción audiovisual, desde la preproducción hasta la postproducción, pasando por la dirección de fotografía y el diseño de producción.",
      ca: "Cinema, publicitat, videoclips — el director d'art connecta la visió del director amb l'execució visual. Aprendràs el pipeline complet de producció audiovisual, des de la preproducció fins a la postproducció, passant per la direcció de fotografia i el disseny de producció.",
      en: "Film, advertising, music videos — the art director bridges the director's vision and the visual execution. You'll learn the full production pipeline, from pre-production to post-production, through cinematography and production design.",
    },
    skills: [
      {
        title: { es: "Diseño de producción", ca: "Disseny de producció", en: "Production design" },
        description: {
          es: "Crear mundos visuales. Escenografía, atrezzo y ambientación para la narrativa audiovisual.",
          ca: "Crear mons visuals. Escenografia, atrezzo i ambientació per a la narrativa audiovisual.",
          en: "Creating visual worlds. Set design, props and atmospherics for audiovisual narrative.",
        },
      },
      {
        title: { es: "Dirección de fotografía", ca: "Direcció de fotografia", en: "Cinematography" },
        description: {
          es: "Entender y colaborar con el DP. Cómo la luz y la cámara cuentan la historia.",
          ca: "Entendre i col·laborar amb el DP. Com la llum i la càmera expliquen la història.",
          en: "Understanding and collaborating with the DP. How light and camera tell the story.",
        },
      },
      {
        title: { es: "Preproducción", ca: "Preproducció", en: "Pre-production" },
        description: {
          es: "Storyboards, mood boards, diseño de sets. Todo lo que sucede antes de rodar.",
          ca: "Storyboards, mood boards, disseny de sets. Tot el que passa abans de rodar.",
          en: "Storyboards, mood boards, set design. Everything that happens before shooting.",
        },
      },
      {
        title: { es: "Postproducción", ca: "Postproducció", en: "Post-production" },
        description: {
          es: "Color, VFX, continuidad visual. Cómo el arte sigue después del rodaje.",
          ca: "Color, VFX, continuïtat visual. Com l'art continua després del rodatge.",
          en: "Color, VFX, visual continuity. How art direction continues after the shoot.",
        },
      },
      {
        title: { es: "Diversidad de formatos", ca: "Diversitat de formats", en: "Format diversity" },
        description: {
          es: "Cine, TV, spots, videoclips. Cada formato tiene sus reglas y oportunidades.",
          ca: "Cinema, TV, spots, videoclips. Cada format té les seves regles i oportunitats.",
          en: "Film, TV, commercials, music videos. Each format has its own rules and opportunities.",
        },
      },
      {
        title: { es: "Banda sonora y narrativa", ca: "Banda sonora i narrativa", en: "Soundtrack and narrative" },
        description: {
          es: "La dimensión sonora del audiovisual y su relación con la dirección de arte.",
          ca: "La dimensió sonora de l'audiovisual i la seva relació amb la direcció d'art.",
          en: "The sound dimension of audiovisual and its relationship with art direction.",
        },
      },
    ],
    careers: [
      {
        title: { es: "Director/a de arte audiovisual", ca: "Director/a d'art audiovisual", en: "Audiovisual Art Director" },
        description: {
          es: "Lidera la visión visual en producciones de cine, TV y publicidad audiovisual.",
          ca: "Lidera la visió visual en produccions de cinema, TV i publicitat audiovisual.",
          en: "Lead the visual vision in film, TV and audiovisual advertising productions.",
        },
      },
      {
        title: { es: "Diseñador/a de producción", ca: "Dissenyador/a de producció", en: "Production Designer" },
        description: {
          es: "Diseña y supervisa los espacios y ambientes de producciones audiovisuales.",
          ca: "Dissenya i supervisa els espais i ambients de produccions audiovisuals.",
          en: "Design and supervise the spaces and environments of audiovisual productions.",
        },
      },
      {
        title: { es: "Director/a de fotografía", ca: "Director/a de fotografia", en: "Cinematographer" },
        description: {
          es: "Domina la imagen en movimiento, la luz cinematográfica y la narrativa visual.",
          ca: "Domina la imatge en moviment, la llum cinematogràfica i la narrativa visual.",
          en: "Master the moving image, cinematic lighting and visual narrative.",
        },
      },
    ],
    relatedModuleCodes: ["A4"],
  },
};
