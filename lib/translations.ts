export type Language = 'es' | 'en' | 'pt-BR'

export interface Translations {
  header: {
    hours: string
    phone: string
    email: string
    nav: {
      about: string
      services: string
      products: string
      contact: string
      quote: string
      viewAllProducts: string
    }
  }
  hero: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    productsButton: string
    learnMoreButton: string
    scroll: string
  }
  about: {
    title: string
    subtitle: string
    history1: string
    history2: string
    history3: string
    factoryTitle: string
    factoryDescription: string
    analysisTitle: string
    analysisDescription: string
    features: {
      quality: {
        title: string
        description: string
      }
      technology: {
        title: string
        description: string
      }
      waste: {
        title: string
        description: string
      }
      logistics: {
        title: string
        description: string
      }
    }
  }
  services: {
    title: string
    subtitle: string
    brass: {
      title: string
      description: string
    }
    analysis: {
      title: string
      description: string
    }
    logistics: {
      title: string
      description: string
    }
    furnaces: {
      title: string
      description: string
    }
    recovery: {
      title: string
      description: string
    }
    ingots: {
      title: string
      description: string
    }
  }
  products: {
    title: string
    subtitle: string
    bullets: {
      uses: string
      availability: string
      delivery: string
    }
      cta: {
        requestSpecs: string
        requestQuote: string
        viewMore: string
      }
    items: {
      ingots: {
        name: string
        title: string
        uses: string
        availability: string
        delivery: string
        description: string
        description2?: string
        bullets: {
          title1: string
          title2: string
          title3: string
        }
      }
      bars: {
        name: string
        title: string
        uses: string
        availability: string
        delivery: string
        description: string
        description2?: string
        bullets: {
          title1: string
          title2: string
          title3: string
        }
      }
      recovery: {
        name: string
        title: string
        uses: string
        availability: string
        delivery: string
        description: string
        description2?: string
        bullets: {
          title1: string
          title2: string
          title3: string
        }
      }
    }
  }
  brass: {
    title: string
    subtitle: string
    description1: string
    description2: string
    description3: string
    description4: string
    table: {
      type: string
      zinc: string
      characteristics: string
      alpha: string
      alphaZinc: string
      alphaDesc: string
      alphaBeta: string
      alphaBetaZinc: string
      alphaBetaDesc: string
      beta: string
      betaZinc: string
      betaDesc: string
    }
    note: string
    experience: string
    quality: string
  }
  map: {
    title: string
    address: string
  }
  contact: {
    title: string
    subtitle: string
    infoTitle: string
    phone: string
    email: string
    location: string
    hours: string
    formTitle: string
      form: {
        name: string
        namePlaceholder: string
        company: string
        companyPlaceholder: string
        email: string
        emailPlaceholder: string
        phone: string
        phonePlaceholder: string
        productInterest: string
        productInterestPlaceholder: string
        productInterestOptions: {
          lingote: string
          barras: string
          otros: string
        }
        message: string
        messagePlaceholder: string
        submit: string
      }
    successMessage: string
  }
  footer: {
    description: string
    follow: string
    links: {
      company: string
      services: string
      products: string
      contact: string
    }
    rights: string
  }
  whatsapp: {
    message: string
    ariaLabel: string
  }
  common: {
    home: string
    backTo: string
    mainFeatures: string
  }
}

export const translations: Record<Language, Translations> = {
  es: {
    header: {
      hours: 'Lun - Vie: 6hs a 12hs y 13hs a 15hs',
      phone: '+54 (011) 5175-2327',
      email: 'info@fugisa.com.ar',
      nav: {
        about: 'Nosotros',
        services: 'Servicios',
        products: 'Productos',
        contact: 'Contacto',
        quote: 'Cotizar',
        viewAllProducts: 'Ver todos los productos',
      },
    },
    hero: {
      badge: 'Desde 1970',
      title: 'Fundición de',
      titleHighlight: 'Metales No Ferrosos',
      description: 'Expertos en la producción de latón en lingotes con la más alta calidad y tecnología de vanguardia en Argentina.',
      productsButton: 'Nuestros Productos',
      learnMoreButton: 'Conocer Más',
      scroll: 'Scroll',
    },
    about: {
      title: 'La Empresa',
      subtitle: 'Fundiciones Giacobbe S.A.',
      history1: 'La historia de Fugisa (Fundiciones Giacobbe S.A.) comienza en el año 1970, cuando iniciaron la actividad de recuperación en bruto de latón y bronce, con gran dedicación, esfuerzo y por sobre todas las cosas apostando hacia el futuro.',
      history2: 'Luego de algunos años y ganando gran experiencia en el terreno de los no ferrosos, Fugisa da un vuelco en su actividad, incursionando en la que hoy es su actividad principal. A raíz de ello en 1980 comenzaron con la refinación de LATÓN.',
      history3: 'Fugisa siguió en continuo crecimiento, en 1985 se consolida la Sociedad Anónima y en 1989, buscando un ámbito de acuerdo a las necesidades del momento, la empresa se muda al nuevo establecimiento dentro del Partido de Tigre.',
      factoryTitle: 'La Planta Fabril',
      factoryDescription: 'Con una superficie total de 2.200m², Fugisa se ubica en el Partido de Tigre a una cuadra de la Ruta Panamericana a la altura de la Ruta 197, Provincia de Buenos Aires, Argentina. Está compuesta de dos líneas de hornos rotativos, de inducción y de media frecuencia. Se dedica a producir y refinar latón y como actividad secundaria la producción de óxido de zinc (Sello amarillo y rojo). La importancia de esta industria radica en su papel de satisfacer las necesidades de materia prima de aquellas aplicaciones que por sus características dicho material no es reemplazable.',
      analysisTitle: 'Análisis del Material',
      analysisDescription: 'Ubicándose en un mercado altamente competitivo, Fugisa cuenta con un laboratorio especializado con el cual monitorea todo el proceso de fabricación de sus productos, realizando análisis químicos de Espectometría por chispa y Durómetro (midiendo la dureza del material) con el solo objetivo de lograr una mejora continua y definir con eficiencia las necesidades específicas del cliente. Fugisa tiene el orgullo de poder contar con personal de más de quince años de antigüedad que aportan su experiencia, y el empuje de un equipo joven que acompaña a la nueva generación.',
      features: {
        quality: {
          title: 'Calidad Premium',
          description: 'Los productos son fabricados con materia prima de primera calidad, asegurando al cliente un excelente producto final.',
        },
        technology: {
          title: 'Tecnología Avanzada',
          description: 'Sistema productivo compuesto por dos líneas de hornos rotativos, de inducción y de media frecuencia.',
        },
        waste: {
          title: 'Mínimas Mermas',
          description: 'Gracias a su tecnología de avanzada, se logran mínimas mermas en los materiales durante la fusión.',
        },
        logistics: {
          title: 'Logística Garantizada',
          description: 'Entrega en tiempo y forma con análisis espectográfico que autentifica la calidad del material.',
        },
      },
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Ofrecemos servicios especializados en fundición de metales no ferrosos con tecnología de vanguardia',
      brass: {
        title: 'Fundición de Latón',
        description: 'Especialización en la refinación y fundición de latón desde 1980, con procesos optimizados para máxima calidad.',
      },
      analysis: {
        title: 'Análisis Espectográfico',
        description: 'Cada entrega incluye el análisis espectográfico de cada partida que autentifica la calidad del material.',
      },
      logistics: {
        title: 'Logística Garantizada',
        description: 'Entrega de nuestros productos en tiempo y forma al cliente, con un servicio logístico confiable y eficiente.',
      },
      furnaces: {
        title: 'Hornos de Inducción',
        description: 'Sistema productivo con hornos rotativos, de inducción y de media frecuencia para procesos de alta eficiencia.',
      },
      recovery: {
        title: 'Recuperación de Materiales',
        description: 'Actividad de recuperación en bruto de latón y bronce, con más de 50 años de experiencia en el sector.',
      },
      ingots: {
        title: 'Producción de Lingotes',
        description: 'Fabricación de latón en lingotes con materia prima de primera calidad y procesos optimizados.',
      },
    },
    products: {
      title: 'Nuestros Productos',
      subtitle: 'Productos de la más alta calidad, fabricados con materia prima de primera calidad',
      bullets: {
        uses: 'Usos',
        availability: 'Disponibilidad',
        delivery: 'Entrega',
      },
      cta: {
        requestSpecs: 'Solicitar ficha técnica',
        requestQuote: 'Cotizar este producto',
        viewMore: 'Ver más información',
      },
      items: {
        ingots: {
          name: 'Lingotes',
          title: 'Latón en Lingotes',
          uses: 'Fabricación de grifería, trabajos de bronce, herrajes y piezas de cerrajería',
          availability: 'Disponibilidad inmediata según stock',
          delivery: 'Entrega con análisis espectográfico incluido',
          description: 'Las aleaciones de latón se utilizan para la fabricación de grifería, trabajos de bronce, herrajes y piezas de cerrajería, entre otras aplicaciones.\n\nLos latones industriales constituyen una amplia gama de aleaciones de cobre y zinc, obtenidas ya sea por fusión directa de los metales o más frecuentemente a partir de latón reciclado con agregado de cobre y zinc.\n\nLas propiedades del latón varían desde las del cobre casi puro hasta las de los latones especiales de alta resistencia, logradas mediante el agregado de combinaciones adecuadas de elementos como estaño, plomo, hierro, manganeso, níquel, aluminio y silicio.\n\nEn cuanto a su estructura (y según su contenido de zinc), los latones pueden clasificarse en tres grupos principales utilizados en la industria.',
          bullets: {
            title1: 'Materia Prima de Primera Calidad',
            title2: 'Análisis Espectográfico Incluido',
            title3: 'Tecnología de Vanguardia',
          },
        },
        bars: {
          name: 'Barras',
          title: 'Barras de Latón',
          uses: 'Opciones para diferentes usos industriales',
          availability: 'Calidad controlada y producción con experiencia',
          delivery: 'Coordinación de entrega según necesidad',
          description: 'Fabricamos barras de latón pensadas para distintos procesos productivos y necesidades de abastecimiento. Mantenemos un enfoque en la consistencia del material y la trazabilidad del proceso, para acompañar tanto pedidos recurrentes como requerimientos puntuales.',
          description2: 'Si querés, te asesoramos para definir la opción más conveniente según tu uso y modalidad de entrega.',
          bullets: {
            title1: 'Opciones para diferentes usos industriales',
            title2: 'Calidad controlada y producción con experiencia',
            title3: 'Coordinación de entrega según necesidad',
          },
        },
        recovery: {
          name: 'Recuperación de Materiales',
          title: 'Recuperación de Materiales',
          uses: 'Gestión simple y coordinada',
          availability: 'Proceso con control y seguimiento',
          delivery: 'Enfoque responsable y eficiente',
          description: 'Brindamos un servicio de recuperación orientado a optimizar el aprovechamiento de materiales y acompañar procesos de reciclaje dentro de la cadena productiva. Trabajamos con un enfoque responsable y ordenado, coordinando recepción, evaluación y tratamiento para darles una nueva vida útil cuando corresponde.',
          description2: 'Es una solución ideal para empresas que buscan eficiencia, continuidad operativa y mejores prácticas en gestión de materiales.',
          bullets: {
            title1: 'Gestión simple y coordinada',
            title2: 'Proceso con control y seguimiento',
            title3: 'Enfoque responsable y eficiente',
          },
        },
      },
    },
    brass: {
      title: 'El Latón',
      subtitle: 'El Lingote',
      description1: 'Las aleaciones de latón se utilizan para la fabricación de grifería, trabajos de bronce, herrajes y piezas de cerrajería, entre otras aplicaciones.',
      description2: 'Los latones industriales constituyen una amplia gama de aleaciones de cobre y zinc, obtenidas ya sea por fusión directa de los metales o más frecuentemente a partir de latón reciclado con agregado de cobre y zinc.',
      description3: 'Las propiedades del latón varían desde las del cobre casi puro hasta las de los latones especiales de alta resistencia, logradas mediante el agregado de combinaciones adecuadas de elementos como estaño, plomo, hierro, manganeso, níquel, aluminio y silicio.',
      description4: 'En cuanto a su estructura (y según su contenido de zinc), los latones pueden clasificarse en tres grupos principales utilizados en la industria.',
      table: {
        type: 'Tipo de Latón',
        zinc: 'Contenido de Zinc',
        characteristics: 'Características',
        alpha: 'Alpha',
        alphaZinc: '5 a 35%',
        alphaDesc: 'Fácil de formación en frío',
        alphaBeta: 'Alpha + Beta',
        alphaBetaZinc: '35 a 45%',
        alphaBetaDesc: 'Se deforman plásticamente en caliente y son muy resistentes en frío, ideales para piezas forjadas y mecanizadas',
        beta: 'Beta',
        betaZinc: '45 a 50%',
        betaDesc: 'Se deforman muy bien en caliente, pero son demasiado frágiles en frío',
      },
      note: 'Fugisa se encuentra capacitada para producir cualquiera de los tipos de latón mencionados según las necesidades del cliente.',
      experience: 'Años de experiencia',
      quality: 'Calidad Asegurada',
    },
    map: {
      title: 'Nuestra Ubicación',
      address: 'Martínez de Alegría 2468, El Talar de Pacheco, Tigre, Buenos Aires, Argentina',
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Estamos listos para atender sus necesidades. Contáctenos para obtener más información sobre nuestros productos.',
      infoTitle: 'Información de Contacto',
      phone: 'Teléfono',
      email: 'Email',
      location: 'Ubicación',
      hours: 'Horarios',
      formTitle: 'Envianos un Mensaje',
      form: {
        name: 'Nombre *',
        namePlaceholder: 'Nombre y Apellido',
        company: 'Empresa *',
        companyPlaceholder: 'Nombre de la empresa',
        email: 'Email *',
        emailPlaceholder: 'tu@email.com',
        phone: 'Teléfono',
        phonePlaceholder: '+54 (011) ...',
        productInterest: 'Producto de interés',
        productInterestPlaceholder: 'Seleccione una opción',
        productInterestOptions: {
          lingote: 'Lingote',
          barras: 'Barras',
          otros: 'Otros',
        },
        message: 'Mensaje *',
        messagePlaceholder: 'Tu mensaje...',
        submit: 'Enviar Mensaje',
      },
      successMessage: 'Gracias por contactarnos. Nos pondremos en contacto a la brevedad.',
    },
    footer: {
      description: 'Fundición de Metales No Ferrosos. Expertos en la producción de latón en lingotes con la más alta calidad y tecnología de vanguardia en Argentina.',
      follow: 'Seguinos en nuestras redes sociales',
      links: {
        company: 'La Empresa',
        services: 'Servicios',
        products: 'Productos',
        contact: 'Contacto',
      },
      rights: 'Todos los derechos reservados por Fundiciones Giacobbe S.A.',
    },
    whatsapp: {
      message: 'Hola! Quisiera más información',
      ariaLabel: 'Contactar por WhatsApp',
    },
    common: {
      home: 'Inicio',
      backTo: 'Volver a',
      mainFeatures: 'Características principales',
    },
  },
  en: {
    header: {
      hours: 'Mon - Fri: 6am to 12pm and 1pm to 3pm',
      phone: '+54 (011) 5175-2327',
      email: 'info@fugisa.com.ar',
      nav: {
        about: 'About Us',
        services: 'Services',
        products: 'Products',
        contact: 'Contact',
        quote: 'Quote',
        viewAllProducts: 'View all products',
      },
    },
    hero: {
      badge: 'Since 1970',
      title: 'Non-Ferrous Metal',
      titleHighlight: 'Foundry',
      description: 'Experts in the production of brass ingots with the highest quality and cutting-edge technology in Argentina.',
      productsButton: 'Our Products',
      learnMoreButton: 'Learn More',
      scroll: 'Scroll',
    },
    about: {
      title: 'The Company',
      subtitle: 'Fundiciones Giacobbe S.A.',
      history1: 'The history of Fugisa (Fundiciones Giacobbe S.A.) begins in 1970, when they started the activity of raw recovery of brass and bronze, with great dedication, effort and above all betting on the future.',
      history2: 'After some years and gaining great experience in the non-ferrous field, Fugisa makes a turn in its activity, venturing into what is now its main activity. As a result, in 1980 they began with the refining of BRASS.',
      history3: 'Fugisa continued to grow, in 1985 the Corporation was consolidated and in 1989, looking for an environment according to the needs of the moment, the company moved to the new establishment within the Tigre District.',
      factoryTitle: 'The Manufacturing Plant',
      factoryDescription: 'With a total area of 2,200m², Fugisa is located in the Tigre District one block from the Pan-American Highway at Route 197, Province of Buenos Aires, Argentina. It consists of two lines of rotary furnaces, induction and medium frequency. It is dedicated to producing and refining brass and as a secondary activity the production of zinc oxide (Yellow and red seal). The importance of this industry lies in its role of satisfying the raw material needs of those applications that due to their characteristics this material is not replaceable.',
      analysisTitle: 'Material Analysis',
      analysisDescription: 'Positioned in a highly competitive market, Fugisa has a specialized laboratory with which it monitors the entire manufacturing process of its products, performing chemical analysis of Spark Spectrometry and Durometer (measuring the hardness of the material) with the sole objective of achieving continuous improvement and efficiently define the specific needs of the client. Fugisa is proud to have staff with more than fifteen years of seniority who contribute their experience, and the drive of a young team that accompanies the new generation.',
      features: {
        quality: {
          title: 'Premium Quality',
          description: 'Products are manufactured with first-class raw materials, ensuring the customer an excellent final product.',
        },
        technology: {
          title: 'Advanced Technology',
          description: 'Production system composed of two lines of rotary furnaces, induction and medium frequency.',
        },
        waste: {
          title: 'Minimal Waste',
          description: 'Thanks to its advanced technology, minimal waste is achieved in materials during melting.',
        },
        logistics: {
          title: 'Guaranteed Logistics',
          description: 'Delivery on time and in form with spectrographic analysis that authenticates the quality of the material.',
        },
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'We offer specialized services in non-ferrous metal foundry with cutting-edge technology',
      brass: {
        title: 'Brass Foundry',
        description: 'Specialization in brass refining and foundry since 1980, with optimized processes for maximum quality.',
      },
      analysis: {
        title: 'Spectrographic Analysis',
        description: 'Each delivery includes the spectrographic analysis of each batch that authenticates the quality of the material.',
      },
      logistics: {
        title: 'Guaranteed Logistics',
        description: 'Delivery of our products on time and in form to the customer, with reliable and efficient logistics service.',
      },
      furnaces: {
        title: 'Induction Furnaces',
        description: 'Production system with rotary, induction and medium frequency furnaces for high efficiency processes.',
      },
      recovery: {
        title: 'Material Recovery',
        description: 'Raw recovery activity of brass and bronze, with more than 50 years of experience in the sector.',
      },
      ingots: {
        title: 'Ingot Production',
        description: 'Manufacturing of brass ingots with first-class raw materials and optimized processes.',
      },
    },
    products: {
      title: 'Our Products',
      subtitle: 'Products of the highest quality, manufactured with first-class raw materials',
      bullets: {
        uses: 'Uses',
        availability: 'Availability',
        delivery: 'Delivery',
      },
      cta: {
        requestSpecs: 'Request technical sheet',
        requestQuote: 'Quote this product',
        viewMore: 'View more information',
      },
      items: {
        ingots: {
          name: 'Ingots',
          title: 'Brass Ingots',
          uses: 'Manufacture of faucets, bronze work, hardware and locksmith pieces',
          availability: 'Immediate availability according to stock',
          delivery: 'Delivery with spectrographic analysis included',
          description: 'Brass alloys are used for the manufacture of faucets, bronze work, hardware and locksmith pieces, among other applications.\n\nIndustrial brasses constitute a wide range of copper and zinc alloys, obtained either by direct fusion of the metals or more frequently from recycled brass with the addition of copper and zinc.\n\nThe properties of brass vary from those of almost pure copper to those of special high-strength brasses, achieved by adding appropriate combinations of elements such as tin, lead, iron, manganese, nickel, aluminum and silicon.\n\nRegarding its structure (and according to its zinc content), brasses can be classified into three main groups used in the industry.',
          bullets: {
            title1: 'First-Class Raw Materials',
            title2: 'Spectrographic Analysis Included',
            title3: 'Cutting-Edge Technology',
          },
        },
        bars: {
          name: 'Bars',
          title: 'Brass Bars',
          uses: 'Options for different industrial uses',
          availability: 'Controlled quality and experienced production',
          delivery: 'Delivery coordination according to need',
          description: 'We manufacture brass bars designed for different production processes and supply needs. We maintain a focus on material consistency and process traceability, to support both recurring orders and specific requirements.',
          description2: 'If you want, we advise you to define the most convenient option according to your use and delivery method.',
          bullets: {
            title1: 'Options for different industrial uses',
            title2: 'Controlled quality and experienced production',
            title3: 'Delivery coordination according to need',
          },
        },
        recovery: {
          name: 'Material Recovery',
          title: 'Material Recovery',
          uses: 'Simple and coordinated management',
          availability: 'Process with control and follow-up',
          delivery: 'Responsible and efficient approach',
          description: 'We provide a recovery service aimed at optimizing material utilization and supporting recycling processes within the production chain. We work with a responsible and orderly approach, coordinating reception, evaluation and treatment to give them a new useful life when appropriate.',
          description2: 'It is an ideal solution for companies seeking efficiency, operational continuity and best practices in material management.',
          bullets: {
            title1: 'Simple and coordinated management',
            title2: 'Process with control and follow-up',
            title3: 'Responsible and efficient approach',
          },
        },
      },
    },
    brass: {
      title: 'Brass',
      subtitle: 'The Ingot',
      description1: 'Brass alloys are used for the manufacture of faucets, bronze work, hardware and locksmith pieces, among other applications.',
      description2: 'Industrial brasses constitute a wide range of copper and zinc alloys, obtained either by direct fusion of the metals or more frequently from recycled brass with the addition of copper and zinc.',
      description3: 'The properties of brass vary from those of almost pure copper to those of special high-strength brasses, achieved by adding appropriate combinations of elements such as tin, lead, iron, manganese, nickel, aluminum and silicon.',
      description4: 'Regarding its structure (and according to its zinc content), brasses can be classified into three main groups used in the industry.',
      table: {
        type: 'Brass Type',
        zinc: 'Zinc Content',
        characteristics: 'Characteristics',
        alpha: 'Alpha',
        alphaZinc: '5 to 35%',
        alphaDesc: 'Easy cold forming',
        alphaBeta: 'Alpha + Beta',
        alphaBetaZinc: '35 to 45%',
        alphaBetaDesc: 'They deform plastically when hot and are very resistant when cold, ideal for forged and machined parts',
        beta: 'Beta',
        betaZinc: '45 to 50%',
        betaDesc: 'They deform very well when hot, but are too brittle when cold',
      },
      note: 'Fugisa is capable of producing any of the mentioned brass types according to customer needs.',
      experience: 'Years of experience',
      quality: 'Quality Assured',
    },
    map: {
      title: 'Our Location',
      address: 'Martínez de Alegría 2468, El Talar de Pacheco, Tigre, Buenos Aires, Argentina',
    },
    contact: {
      title: 'Contact',
      subtitle: 'We are ready to serve your needs. Contact us to get more information about our products.',
      infoTitle: 'Contact Information',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      hours: 'Hours',
      formTitle: 'Send us a Message',
      form: {
        name: 'Name *',
        namePlaceholder: 'First and Last Name',
        company: 'Company *',
        companyPlaceholder: 'Company name',
        email: 'Email *',
        emailPlaceholder: 'your@email.com',
        phone: 'Phone',
        phonePlaceholder: '+54 (011) ...',
        productInterest: 'Product of interest',
        productInterestPlaceholder: 'Select an option',
        productInterestOptions: {
          lingote: 'Ingot',
          barras: 'Bars',
          otros: 'Others',
        },
        message: 'Message *',
        messagePlaceholder: 'Your message...',
        submit: 'Send Message',
      },
      successMessage: 'Thank you for contacting us. We will get back to you shortly.',
    },
    footer: {
      description: 'Non-Ferrous Metal Foundry. Experts in the production of brass ingots with the highest quality and cutting-edge technology in Argentina.',
      follow: 'Follow Us',
      links: {
        company: 'The Company',
        services: 'Services',
        products: 'Products',
        contact: 'Contact',
      },
      rights: 'All rights reserved by Fundiciones Giacobbe S.A.',
    },
    whatsapp: {
      message: 'Hello! I would like more information',
      ariaLabel: 'Contact via WhatsApp',
    },
    common: {
      home: 'Home',
      backTo: 'Back to',
      mainFeatures: 'Main Features',
    },
  },
  'pt-BR': {
    header: {
      hours: 'Seg - Sex: 6h às 12h e 13h às 15h',
      phone: '+54 (011) 5175-2327',
      email: 'info@fugisa.com.ar',
      nav: {
        about: 'Sobre Nós',
        services: 'Serviços',
        products: 'Produtos',
        contact: 'Contato',
        quote: 'Cotizar',
        viewAllProducts: 'Ver todos os produtos',
      },
    },
    hero: {
      badge: 'Desde 1970',
      title: 'Fundição de',
      titleHighlight: 'Metais Não Ferrosos',
      description: 'Especialistas na produção de lingotes de latão com a mais alta qualidade e tecnologia de ponta na Argentina.',
      productsButton: 'Nossos Produtos',
      learnMoreButton: 'Saber Mais',
      scroll: 'Rolar',
    },
    about: {
      title: 'A Empresa',
      subtitle: 'Fundiciones Giacobbe S.A.',
      history1: 'A história da Fugisa (Fundiciones Giacobbe S.A.) começa em 1970, quando iniciaram a atividade de recuperação bruta de latão e bronze, com grande dedicação, esforço e, acima de tudo, apostando no futuro.',
      history2: 'Após alguns anos e ganhando grande experiência no campo dos não ferrosos, a Fugisa dá uma guinada em sua atividade, incursionando na que hoje é sua atividade principal. Como resultado, em 1980 começaram com a refinação de LATÃO.',
      history3: 'A Fugisa continuou em crescimento contínuo, em 1985 consolida-se a Sociedade Anônima e em 1989, buscando um ambiente de acordo com as necessidades do momento, a empresa se muda para o novo estabelecimento dentro do Partido de Tigre.',
      factoryTitle: 'A Planta Industrial',
      factoryDescription: 'Com uma superfície total de 2.200m², a Fugisa está localizada no Partido de Tigre a um quarteirão da Rota Panamericana na altura da Rota 197, Província de Buenos Aires, Argentina. É composta de duas linhas de fornos rotativos, de indução e de média frequência. Dedica-se a produzir e refinar latão e como atividade secundária a produção de óxido de zinco (Selo amarelo e vermelho). A importância desta indústria reside em seu papel de satisfazer as necessidades de matéria-prima daquelas aplicações que, devido às suas características, esse material não é substituível.',
      analysisTitle: 'Análise do Material',
      analysisDescription: 'Posicionando-se em um mercado altamente competitivo, a Fugisa conta com um laboratório especializado com o qual monitora todo o processo de fabricação de seus produtos, realizando análises químicas de Espectometria por faísca e Durômetro (medindo a dureza do material) com o único objetivo de alcançar uma melhoria contínua e definir com eficiência as necessidades específicas do cliente. A Fugisa tem o orgulho de poder contar com pessoal com mais de quinze anos de antiguidade que aportam sua experiência, e o impulso de uma equipe jovem que acompanha a nova geração.',
      features: {
        quality: {
          title: 'Qualidade Premium',
          description: 'Os produtos são fabricados com matéria-prima de primeira qualidade, garantindo ao cliente um excelente produto final.',
        },
        technology: {
          title: 'Tecnologia Avançada',
          description: 'Sistema produtivo composto por duas linhas de fornos rotativos, de indução e de média frequência.',
        },
        waste: {
          title: 'Mínimas Perdas',
          description: 'Graças à sua tecnologia avançada, são alcançadas mínimas perdas nos materiais durante a fusão.',
        },
        logistics: {
          title: 'Logística Garantida',
          description: 'Entrega em tempo e forma com análise espectográfica que autentica a qualidade do material.',
        },
      },
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Oferecemos serviços especializados em fundição de metais não ferrosos com tecnologia de ponta',
      brass: {
        title: 'Fundição de Latão',
        description: 'Especialização na refinação e fundição de latão desde 1980, com processos otimizados para máxima qualidade.',
      },
      analysis: {
        title: 'Análise Espectográfica',
        description: 'Cada entrega inclui a análise espectográfica de cada lote que autentica a qualidade do material.',
      },
      logistics: {
        title: 'Logística Garantida',
        description: 'Entrega de nossos produtos em tempo e forma ao cliente, com um serviço logístico confiável e eficiente.',
      },
      furnaces: {
        title: 'Fornos de Indução',
        description: 'Sistema produtivo com fornos rotativos, de indução e de média frequência para processos de alta eficiência.',
      },
      recovery: {
        title: 'Recuperação de Materiais',
        description: 'Atividade de recuperação bruta de latão e bronze, com mais de 50 anos de experiência no setor.',
      },
      ingots: {
        title: 'Produção de Lingotes',
        description: 'Fabricação de lingotes de latão com matéria-prima de primeira qualidade e processos otimizados.',
      },
    },
    products: {
      title: 'Nossos Produtos',
      subtitle: 'Produtos da mais alta qualidade, fabricados com matéria-prima de primeira qualidade',
      bullets: {
        uses: 'Usos',
        availability: 'Disponibilidade',
        delivery: 'Entrega',
      },
      cta: {
        requestSpecs: 'Solicitar ficha técnica',
        requestQuote: 'Cotizar este produto',
        viewMore: 'Ver mais informações',
      },
      items: {
        ingots: {
          name: 'Lingotes',
          title: 'Lingotes de Latão',
          uses: 'Fabricação de torneiras, trabalhos de bronze, ferragens e peças de serralheria',
          availability: 'Disponibilidade imediata conforme estoque',
          delivery: 'Entrega com análise espectográfica incluída',
          description: 'As ligas de latão são utilizadas para a fabricação de torneiras, trabalhos de bronze, ferragens e peças de serralheria, entre outras aplicações.\n\nOs latões industriais constituem uma ampla gama de ligas de cobre e zinco, obtidas seja por fusão direta dos metais ou mais frequentemente a partir de latão reciclado com adição de cobre e zinco.\n\nAs propriedades do latão variam desde as do cobre quase puro até as dos latões especiais de alta resistência, alcançadas mediante a adição de combinações adequadas de elementos como estanho, chumbo, ferro, manganês, níquel, alumínio e silício.\n\nQuanto à sua estrutura (e segundo seu conteúdo de zinco), os latões podem ser classificados em três grupos principais utilizados na indústria.',
          bullets: {
            title1: 'Matéria-Prima de Primeira Qualidade',
            title2: 'Análise Espectográfica Incluída',
            title3: 'Tecnologia de Ponta',
          },
        },
        bars: {
          name: 'Barras',
          title: 'Barras de Latão',
          uses: 'Opções para diferentes usos industriais',
          availability: 'Qualidade controlada e produção com experiência',
          delivery: 'Coordenação de entrega conforme necessidade',
          description: 'Fabricamos barras de latão pensadas para distintos processos produtivos e necessidades de abastecimento. Mantemos um enfoque na consistência do material e a rastreabilidade do processo, para acompanhar tanto pedidos recorrentes como requerimentos pontuais.',
          description2: 'Se quiser, te assessoramos para definir a opção mais conveniente segundo seu uso e modalidade de entrega.',
          bullets: {
            title1: 'Opções para diferentes usos industriais',
            title2: 'Qualidade controlada e produção com experiência',
            title3: 'Coordenação de entrega conforme necessidade',
          },
        },
        recovery: {
          name: 'Recuperação de Materiais',
          title: 'Recuperação de Materiais',
          uses: 'Gestão simples e coordenada',
          availability: 'Processo com controle e acompanhamento',
          delivery: 'Enfoque responsável e eficiente',
          description: 'Oferecemos um serviço de recuperação orientado a otimizar o aproveitamento de materiais e acompanhar processos de reciclagem dentro da cadeia produtiva. Trabalhamos com um enfoque responsável e ordenado, coordenando recepção, avaliação e tratamento para dar-lhes uma nova vida útil quando corresponde.',
          description2: 'É uma solução ideal para empresas que buscam eficiência, continuidade operativa e melhores práticas em gestão de materiais.',
          bullets: {
            title1: 'Gestão simples e coordenada',
            title2: 'Processo com controle e acompanhamento',
            title3: 'Enfoque responsável e eficiente',
          },
        },
      },
    },
    brass: {
      title: 'O Latão',
      subtitle: 'O Lingote',
      description1: 'As ligas de latão são utilizadas para a fabricação de torneiras, trabalhos de bronze, ferragens e peças de serralheria, entre outras aplicações.',
      description2: 'Os latões industriais constituem uma ampla gama de ligas de cobre e zinco, obtidas seja por fusão direta dos metais ou mais frequentemente a partir de latão reciclado com adição de cobre e zinco.',
      description3: 'As propriedades do latão variam desde as do cobre quase puro até as dos latões especiais de alta resistência, alcançadas mediante a adição de combinações adequadas de elementos como estanho, chumbo, ferro, manganês, níquel, alumínio e silício.',
      description4: 'Quanto à sua estrutura (e segundo seu conteúdo de zinco), os latões podem ser classificados em três grupos principais utilizados na indústria.',
      table: {
        type: 'Tipo de Latão',
        zinc: 'Conteúdo de Zinco',
        characteristics: 'Características',
        alpha: 'Alpha',
        alphaZinc: '5 a 35%',
        alphaDesc: 'Fácil de formação a frio',
        alphaBeta: 'Alpha + Beta',
        alphaBetaZinc: '35 a 45%',
        alphaBetaDesc: 'Deformam-se plasticamente a quente e são muito resistentes a frio, ideais para peças forjadas e usinadas',
        beta: 'Beta',
        betaZinc: '45 a 50%',
        betaDesc: 'Deformam-se muito bem a quente, mas são muito frágeis a frio',
      },
      note: 'A Fugisa está capacitada para produzir qualquer um dos tipos de latão mencionados de acordo com as necessidades do cliente.',
      experience: 'Anos de experiência',
      quality: 'Qualidade Garantida',
    },
    map: {
      title: 'Nossa Localização',
      address: 'Martínez de Alegría 2468, El Talar de Pacheco, Tigre, Buenos Aires, Argentina',
    },
    contact: {
      title: 'Contato',
      subtitle: 'Estamos prontos para atender suas necessidades. Entre em contato conosco para obter mais informações sobre nossos produtos.',
      infoTitle: 'Informações de Contato',
      phone: 'Telefone',
      email: 'Email',
      location: 'Localização',
      hours: 'Horários',
      formTitle: 'Envie-nos uma Mensagem',
      form: {
        name: 'Nome *',
        namePlaceholder: 'Nome e Sobrenome',
        company: 'Empresa *',
        companyPlaceholder: 'Nome da empresa',
        email: 'Email *',
        emailPlaceholder: 'seu@email.com',
        phone: 'Telefone',
        phonePlaceholder: '+54 (011) ...',
        productInterest: 'Produto de interesse',
        productInterestPlaceholder: 'Selecione uma opção',
        productInterestOptions: {
          lingote: 'Lingote',
          barras: 'Barras',
          otros: 'Outros',
        },
        message: 'Mensagem *',
        messagePlaceholder: 'Sua mensagem...',
        submit: 'Enviar Mensagem',
      },
      successMessage: 'Obrigado por entrar em contato. Entraremos em contato em breve.',
    },
    footer: {
      description: 'Fundição de Metais Não Ferrosos. Especialistas na produção de lingotes de latão com a mais alta qualidade e tecnologia de ponta na Argentina.',
      follow: 'Siga-nos',
      links: {
        company: 'A Empresa',
        services: 'Serviços',
        products: 'Produtos',
        contact: 'Contato',
      },
      rights: 'Todos os direitos reservados por Fundiciones Giacobbe S.A.',
    },
    whatsapp: {
      message: 'Olá! Gostaria de mais informações',
      ariaLabel: 'Contatar via WhatsApp',
    },
    common: {
      home: 'Início',
      backTo: 'Voltar para',
      mainFeatures: 'Características principais',
    },
  },
}
