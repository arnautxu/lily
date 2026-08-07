export type Lang = 'ca' | 'es';

export const languages: Record<Lang, { label: string; href: string }> = {
  ca: { label: 'CAT', href: '/' },
  es: { label: 'ES', href: '/es' },
};

export const ui = {
  ca: {
    htmlLang: 'ca',
    meta: {
      title: 'Lídia Caldera · Instagram per a comerços de Vic i Osona',
      description:
        "Gestiono l'Instagram del teu comerç de Vic i Osona amb fotos reals i criteri humà. Publiques constant, sense haver-hi de pensar. Escriu-me per WhatsApp.",
      ogAlt: 'Lídia Caldera — màrqueting i comunicació per a comerços de Vic',
    },
    nav: {
      links: [
        { href: '#que-fem', label: 'Què fem' },
        { href: '#com-treballem', label: 'Com treballem' },
        { href: '#feina', label: 'Feina' },
        { href: '#tarifes', label: 'Tarifes' },
        { href: '#lidia', label: 'Qui sóc' },
      ],
      cta: 'Escriu-me',
      langLabel: 'Canviar idioma',
      menuLabel: 'Obrir menú',
    },
    hero: {
      eyebrow: 'Instagram per a comerços de Vic i Osona',
      title: "L'Instagram del teu negoci, cuidat per algú de proximitat",
      lead: "El teu local a la pantalla: feed i stories amb fotos reals i textos escrits per una persona. Cada setmana genero nou contingut, sense que t'hagis de preocupar.",
      ctaPrimary: 'Escriu-me per WhatsApp',
      ctaSecondary: 'Veure feina',
      trust: 'Resposta el mateix dia · Sense permanència · De proximitat',
    },
    problem: {
      eyebrow: 'Et sona?',
      title: 'Tens un negoci que funciona. El teu Instagram encara no.',
      lead: "Saps que hauries de publicar més, però el dia no dóna per a tot. I l'Instagram sempre és l'últim.",
      items: [
        {
          title: 'No tens temps',
          body: "Tens mil coses a fer i el dia s'acaba. No és deixadesa: és que el negoci ja t'ocupa el dia sencer.",
        },
        {
          title: 'Penges quan pots',
          body: "Una setmana no penges res, després desapareixes. L'algoritme t'oblida, i el client també.",
        },
        {
          title: 'No saps què publicar',
          body: 'Tens coses a ensenyar, però no saps com. El problema no és la idea, és convertir-ho en contingut.',
        },
      ],
    },
    services: {
      eyebrow: 'Què fem',
      title: "Jo m'encarrego de l'Instagram. Tu, del teu negoci.",
      lead: 'Cada mes m\'ocupo de tot el contingut perquè la teva presència sigui constant i et representi tal com ets.',
      items: [
        {
          title: 'Feed amb criteri',
          body: 'El teu local, els teus productes i la teva gent. Publicacions pensades per al teu públic.',
        },
        {
          title: 'Text que sona a tu',
          body: 'Escric els textos amb la teva essència. Em recolzo en la IA per fer un primer esborrany, i després el treballo jo.',
        },
        {
          title: 'Stories que mouen',
          body: "El teu dia a dia explicat amb perspectiva: novetats, consells, ofertes, l'equip. Un negoci amb cara i ulls perquè et coneguin.",
        },
        {
          title: 'Calendari clar',
          body: "En tot moment saps què es publicarà i quan. Creo el contingut i te'l ensenyo; si cal, ho retoco. Quan em dones l'OK, ho pujo.",
        },
      ],
    },
    process: {
      eyebrow: 'Com treballem',
      title: 'IA per anar ràpid. Una persona per anar bé.',
      lead: "La IA m'ajuda amb l'esborrany; el resultat el faig jo. Tot el que es publica ho he fet jo i ho has revisat tu. Aquí està la diferència.",
      steps: [
        {
          n: '01',
          title: 'Coneixem el negoci',
          body: 'Dediquem una estona a parlar del negoci: com és, quin és el teu públic objectiu i què vols aconseguir.',
        },
        {
          n: '02',
          title: 'Esborrany',
          body: "Faig un primer esborrany d'idees amb ajuda de la IA per anar més ràpida. És el punt de partida, mai el que arriba al públic. Això ho faig jo.",
        },
        {
          n: '03',
          title: 'Toc humà',
          body: 'Ho treballo tot a fons: reescric els textos, ajusto el to i ho adapto al teu estil. Selecciono les imatges perquè tot tingui sentit.',
        },
        {
          n: '04',
          title: 'Tu tens el control',
          body: "Tu tens l'última paraula: ho veus tot abans de publicar-se. Demana els canvis que vulguis fins a estar conforme.",
        },
        {
          n: '05',
          title: 'Publiquem el material',
          body: 'Publico el contingut els dies acordats i analitzo què funciona millor, per ajustar-ho cada mes.',
        },
        {
          n: '06',
          title: 'Calendarització',
          body: 'Et planifico tot el mes en un calendari clar: quin dia toca feed i quin stories, sense improvisar, per tenir presència constant.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Tarifes',
      title: 'Tu marques el ritme.',
      lead: 'Sense permanència ni lletra petita. Tria el paquet i, si un mes necessites més (o menys), ho fem.',
      perMonth: '/mes',
      featuredBadge: 'El més triat',
      extrasTitle: 'Extres a la carta',
      note: "Preus sense IVA. Sense permanència: tria el paquet i ajusta'l cada mes segons el que necessitis.",
      cta: 'El vull',
    },
    portfolio: {
      eyebrow: 'Feina',
      title: 'La millor carta de presentació és la feina.',
      lead: "Un cas real explicat de prop. La prova del que faig és el que ja s'ha publicat.",
      caseStudy: {
        tag: 'Cas · Taller de guitarres · Osona',
        title: "El que es fa a mà, s'ha d'ensenyar a mà",
        intro:
          "Un luthier per al qual cada guitarra són mesos de feina. El seu Instagram no ho explicava; per això vam començar aquest procés, on ara ho transmet.",
        portraitAlt: 'El luthier sostenint una guitarra clàssica acabada al seu taller',
        challengeLabel: 'El repte',
        challenge: 'Mans excepcionals, presència invisible. Publicava poc, i la feina no es veia reflectida.',
        approachLabel: 'Què vam fer',
        approach: 'Una sessió al taller: fusta, formons, roseta. Fotos reals i textos escrits amb la seva essència.',
        resultLabel: 'El resultat',
        result:
          'Feed amb olor a serradures. Ara els clients entenen per què una guitarra seva té aquest preu. Ho veuen reflectit al feed.',
        resultStat: '×3',
        resultStatLabel: 'consultes al taller',
        captions: {
          roseta: 'La roseta, dibuixada peça a peça',
          clamps: 'Encolat: dotze clamps i molta paciència',
          eines: 'Els formons, esmolats cada matí',
          cos: 'El cos, just abans de tancar la tapa',
        },
        quote: '«Ara el meu Instagram té la mateixa cura que poso en cada guitarra.»',
        quoteAuthor: '',
        bannerCaption: 'Tapa i fons, llestos per muntar — foto real del procés',
        resultsTitle: 'Els resultats, en dades',
        resultsNote: '',
        metrics: [
          { n: 214, prefix: '+', suffix: '%', label: 'abast mensual' },
          { n: 5, prefix: '×', suffix: '', label: 'interaccions per publicació' },
          { n: 320, prefix: '+', suffix: '', label: 'seguidors nous en 3 mesos' },
        ],
        growthLabel: 'Abast mensual mitjà',
        growthBefore: { label: 'Abans', n: 1200, display: '1.200' },
        growthAfter: { label: 'Amb la Lídia', n: 5100, display: '5.100' },
      },
      moreSamples: {
        eyebrow: 'Més mostres',
        title: 'Altres comptes, la mateixa cura.',
        lead: 'Una selecció de feina real per a altres negocis. Cada projecte, amb el seu to.',
        tag: 'Mostra',
      },
      zoom: {
        open: 'Amplia la foto',
        close: 'Tanca la foto',
      },
    },
    about: {
      eyebrow: 'Qui sóc',
      title: 'Sóc la Lídia.',
      body: [
        'Em dedico al copywriting, la publicitat i la gestió de xarxes, amb una idea clara: les paraules importen. Creo missatges que no només es llegeixen, sinó que es senten.',
        'Treballo creativitat i estratègia per connectar cada negoci amb el seu públic de forma honesta i propera.',
        "L'objectiu és clar: deixar empremta en cada negoci.",
      ],
      signature: 'Lídia Caldera',
      role: 'Màrqueting i comunicació · Vic, Osona',
      voice: {
        eyebrow: 'Parla amb mi',
        title: 'Pregunta-m’ho com si fos al teu davant',
        lead: 'Tria una pregunta i te la responc al WhatsApp, amb veu humana. Sense formularis ni esperes.',
        listening: 'T’escolto…',
        prompts: ['Quant costa?', 'Cada quan publiques?', 'Com treballes?', 'Treballes amb el meu sector?'],
        questions: [
          { label: 'Quant costa?', wa: 'Hola Lídia! Quant costa la gestió de l’Instagram del meu negoci?' },
          { label: 'Cada quan publiqueu?', wa: 'Hola Lídia! Cada quan publiqueu contingut al meu compte?' },
          { label: 'Com treballes?', wa: 'Hola Lídia! M’expliques com treballes pas a pas?' },
        ],
        cta: 'Obrir WhatsApp',
        hint: 'Resposta el mateix dia',
      },
    },
    faq: {
      eyebrow: 'Dubtes',
      title: 'El que sol preguntar tothom',
    },
    contact: {
      eyebrow: 'Parlem',
      title: "Explica'm el teu negoci. En 5 minuts ho veiem.",
      lead: 'Escriu-me per WhatsApp i et responc el mateix dia, o omple el formulari i jo et truco. El que et vagi millor.',
      waCta: 'Escriu-me per WhatsApp',
      orForm: "O deixa'm les dades:",
      form: {
        name: 'Nom',
        namePh: 'Com et dius',
        business: 'Negoci',
        businessPh: 'Nom del teu comerç',
        phone: 'Telèfon',
        phonePh: "Per trucar-te o escriure't",
        message: 'Què necessites?',
        messagePh: "Explica'm una mica què tens al cap",
        submit: 'Enviar',
        sending: 'Enviant…',
        ok: 'Rebut! Et contacto avui mateix. Gràcies.',
        error: 'Hi ha hagut un problema. Prova pel WhatsApp i ho solucionem.',
        privacy: "Faré servir les teves dades només per respondre't. Res més.",
      },
    },
    footer: {
      tagline: 'Instagram amb cara i ulls per a comerços de Vic i Osona.',
      nav: 'Navegació',
      contactTitle: 'Contacte',
      rights: 'Tots els drets reservats.',
      madeIn: 'Fet a Osona',
    },
    waFab: 'Escriu-me per WhatsApp',
  },

  es: {
    htmlLang: 'es',
    meta: {
      title: 'Lídia Caldera · Instagram para comercios de Vic y Osona',
      description:
        'Gestiono el Instagram de tu comercio en Vic y Osona con fotos reales y criterio humano. Publicas constante, sin tener que pensarlo. Escríbeme por WhatsApp.',
      ogAlt: 'Lídia Caldera — marketing y comunicación para comercios de Vic',
    },
    nav: {
      links: [
        { href: '#que-fem', label: 'Qué hacemos' },
        { href: '#com-treballem', label: 'Cómo trabajamos' },
        { href: '#feina', label: 'Trabajos' },
        { href: '#tarifes', label: 'Tarifas' },
        { href: '#lidia', label: 'Quién soy' },
      ],
      cta: 'Escríbeme',
      langLabel: 'Cambiar idioma',
      menuLabel: 'Abrir menú',
    },
    hero: {
      eyebrow: 'Instagram para comercios de Vic y Osona',
      title: 'El Instagram de tu negocio, cuidado por alguien de proximidad',
      lead: 'Tu local en la pantalla: feed y stories con fotos reales y textos escritos por una persona. Cada semana genero contenido nuevo, sin que tengas que preocuparte.',
      ctaPrimary: 'Escríbeme por WhatsApp',
      ctaSecondary: 'Ver trabajos',
      trust: 'Respuesta el mismo día · Sin permanencia · De proximidad',
    },
    problem: {
      eyebrow: '¿Te suena?',
      title: 'Tienes un negocio que funciona. Tu Instagram aún no.',
      lead: 'Sabes que deberías publicar más, pero el día no da para todo. Y el Instagram siempre es lo último.',
      items: [
        {
          title: 'No tienes tiempo',
          body: 'Tienes mil cosas que hacer y el día se acaba. No es dejadez: es que el negocio ya te ocupa el día entero.',
        },
        {
          title: 'Publicas cuando puedes',
          body: 'Una semana no publicas nada, después desapareces. El algoritmo te olvida, y el cliente también.',
        },
        {
          title: 'No sabes qué publicar',
          body: 'Tienes cosas que enseñar, pero no sabes cómo. El problema no es la idea, es convertirla en contenido.',
        },
      ],
    },
    services: {
      eyebrow: 'Qué hacemos',
      title: 'Yo me encargo de Instagram. Tú, de tu negocio.',
      lead: 'Cada mes me ocupo de todo el contenido para que tu presencia sea constante y te represente tal como eres.',
      items: [
        {
          title: 'Feed con criterio',
          body: 'Tu local, tus productos y tu gente. Publicaciones pensadas para tu público.',
        },
        {
          title: 'Textos que suenan a ti',
          body: 'Escribo los textos con tu esencia. Me apoyo en la IA para un primer borrador, y después lo trabajo yo.',
        },
        {
          title: 'Stories que mueven',
          body: 'Tu día a día contado con perspectiva: novedades, consejos, ofertas, el equipo. Un negocio con cara y ojos para que te conozcan.',
        },
        {
          title: 'Calendario claro',
          body: 'En todo momento sabes qué se publicará y cuándo. Creo el contenido y te lo enseño; si hace falta, lo retoco. Cuando me das el OK, lo subo.',
        },
      ],
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'IA para ir rápido. Una persona para ir bien.',
      lead: 'La IA me ayuda con el borrador; el resultado lo hago yo. Todo lo que se publica lo he hecho yo y lo has revisado tú. Ahí está la diferencia.',
      steps: [
        {
          n: '01',
          title: 'Conocemos el negocio',
          body: 'Dedicamos un rato a hablar del negocio: cómo es, quién es tu público objetivo y qué quieres conseguir.',
        },
        {
          n: '02',
          title: 'Borrador',
          body: 'Hago un primer borrador de ideas con ayuda de la IA para ir más rápida. Es el punto de partida, nunca lo que llega al público. Esto lo hago yo.',
        },
        {
          n: '03',
          title: 'Toque humano',
          body: 'Lo trabajo todo a fondo: reescribo los textos, ajusto el tono y lo adapto a tu estilo. Selecciono las imágenes para que todo tenga sentido.',
        },
        {
          n: '04',
          title: 'Tú tienes el control',
          body: 'Tú tienes la última palabra: lo ves todo antes de publicarse. Pide los cambios que quieras hasta estar conforme.',
        },
        {
          n: '05',
          title: 'Publicamos el material',
          body: 'Publico el contenido los días acordados y analizo qué funciona mejor, para ajustarlo cada mes.',
        },
        {
          n: '06',
          title: 'Calendarización',
          body: 'Te planifico todo el mes en un calendario claro: qué día toca feed y qué día stories, sin improvisar, para tener presencia constante.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Tarifas',
      title: 'Tú marcas el ritmo.',
      lead: 'Sin permanencia ni letra pequeña. Elige el paquete y, si un mes necesitas más (o menos), lo hacemos.',
      perMonth: '/mes',
      featuredBadge: 'El más elegido',
      extrasTitle: 'Extras a la carta',
      note: 'Precios sin IVA. Sin permanencia: elige el paquete y ajústalo cada mes según lo que necesites.',
      cta: 'Lo quiero',
    },
    portfolio: {
      eyebrow: 'Trabajos',
      title: 'La mejor carta de presentación es el trabajo.',
      lead: 'Un caso real, contado de cerca. La prueba de lo que hago es lo que ya se ha publicado.',
      caseStudy: {
        tag: 'Caso · Taller de guitarras · Osona',
        title: 'Lo que se hace a mano, hay que enseñarlo a mano',
        intro:
          'Un luthier para quien cada guitarra son meses de trabajo. Su Instagram no lo contaba; por eso empezamos este proceso, donde ahora lo transmite.',
        portraitAlt: 'El luthier sosteniendo una guitarra clásica acabada en su taller',
        challengeLabel: 'El reto',
        challenge: 'Manos excepcionales, presencia invisible. Publicaba poco, y el trabajo no se veía reflejado.',
        approachLabel: 'Qué hicimos',
        approach: 'Una sesión en el taller: madera, formones, roseta. Fotos reales y textos escritos con su esencia.',
        resultLabel: 'El resultado',
        result:
          'Feed con olor a serrín. Ahora los clientes entienden por qué una guitarra suya tiene ese precio. Lo ven reflejado en el feed.',
        resultStat: '×3',
        resultStatLabel: 'consultas al taller',
        captions: {
          roseta: 'La roseta, dibujada pieza a pieza',
          clamps: 'Encolado: doce clamps y mucha paciencia',
          eines: 'Los formones, afilados cada mañana',
          cos: 'El cuerpo, justo antes de cerrar la tapa',
        },
        quote: '«Ahora mi Instagram tiene el mismo cuidado que pongo en cada guitarra.»',
        quoteAuthor: '',
        bannerCaption: 'Tapa y fondo, listos para montar — foto real del proceso',
        resultsTitle: 'Los resultados, en datos',
        resultsNote: '',
        metrics: [
          { n: 214, prefix: '+', suffix: '%', label: 'alcance mensual' },
          { n: 5, prefix: '×', suffix: '', label: 'interacciones por publicación' },
          { n: 320, prefix: '+', suffix: '', label: 'seguidores nuevos en 3 meses' },
        ],
        growthLabel: 'Alcance mensual medio',
        growthBefore: { label: 'Antes', n: 1200, display: '1.200' },
        growthAfter: { label: 'Con Lídia', n: 5100, display: '5.100' },
      },
      moreSamples: {
        eyebrow: 'Más muestras',
        title: 'Otras cuentas, el mismo cuidado.',
        lead: 'Una selección de trabajo real para otros negocios. Cada proyecto, con su tono.',
        tag: 'Muestra',
      },
      zoom: {
        open: 'Amplía la foto',
        close: 'Cierra la foto',
      },
    },
    about: {
      eyebrow: 'Quién soy',
      title: 'Soy Lídia.',
      body: [
        'Me dedico al copywriting, la publicidad y la gestión de redes, con una idea clara: las palabras importan. Creo mensajes que no solo se leen, sino que se sienten.',
        'Trabajo creatividad y estrategia para conectar cada negocio con su público de forma honesta y cercana.',
        'El objetivo es claro: dejar huella en cada negocio.',
      ],
      signature: 'Lídia Caldera',
      role: 'Marketing y comunicación · Vic, Osona',
      voice: {
        eyebrow: 'Habla conmigo',
        title: 'Pregúntame como si estuviera delante de ti',
        lead: 'Elige una pregunta y te la respondo por WhatsApp, con voz humana. Sin formularios ni esperas.',
        listening: 'Te escucho…',
        prompts: ['¿Cuánto cuesta?', '¿Cada cuánto publicas?', '¿Cómo trabajas?', '¿Trabajas con mi sector?'],
        questions: [
          { label: '¿Cuánto cuesta?', wa: '¡Hola Lídia! ¿Cuánto cuesta la gestión del Instagram de mi negocio?' },
          { label: '¿Cada cuánto publicáis?', wa: '¡Hola Lídia! ¿Cada cuánto publicáis contenido en mi cuenta?' },
          { label: '¿Cómo trabajas?', wa: '¡Hola Lídia! ¿Me explicas cómo trabajas paso a paso?' },
        ],
        cta: 'Abrir WhatsApp',
        hint: 'Respuesta el mismo día',
      },
    },
    faq: {
      eyebrow: 'Dudas',
      title: 'Lo que suele preguntar todo el mundo',
    },
    contact: {
      eyebrow: 'Hablamos',
      title: 'Cuéntame tu negocio. En 5 minutos lo vemos.',
      lead: 'Escríbeme por WhatsApp y te respondo el mismo día, o rellena el formulario y yo te llamo. Lo que te vaya mejor.',
      waCta: 'Escríbeme por WhatsApp',
      orForm: 'O déjame tus datos:',
      form: {
        name: 'Nombre',
        namePh: 'Cómo te llamas',
        business: 'Negocio',
        businessPh: 'Nombre de tu comercio',
        phone: 'Teléfono',
        phonePh: 'Para llamarte o escribirte',
        message: '¿Qué necesitas?',
        messagePh: 'Cuéntame un poco qué tienes en mente',
        submit: 'Enviar',
        sending: 'Enviando…',
        ok: '¡Recibido! Te contacto hoy mismo. Gracias.',
        error: 'Ha habido un problema. Prueba por WhatsApp y lo solucionamos.',
        privacy: 'Usaré tus datos solo para responderte. Nada más.',
      },
    },
    footer: {
      tagline: 'Instagram con cara y ojos para comercios de Vic y Osona.',
      nav: 'Navegación',
      contactTitle: 'Contacto',
      rights: 'Todos los derechos reservados.',
      madeIn: 'Hecho en Osona',
    },
    waFab: 'Escríbeme por WhatsApp',
  },
} as const;

export type UI = (typeof ui)[Lang];
