export type Lang = 'ca' | 'es';

export const languages: Record<Lang, { label: string; href: string }> = {
  ca: { label: 'CAT', href: '/' },
  es: { label: 'ES', href: '/es' },
};

export const ui = {
  ca: {
    htmlLang: 'ca',
    meta: {
      title: 'Lídia Caldera · Gestió d\'Instagram per a negocis locals',
      description:
        "Gestiono l'Instagram del teu negoci amb foto real i criteri editorial humà. Des de Vic, per a negocis de tot Catalunya. Publiques constant, sense haver-hi de pensar.",
      ogAlt: 'Lídia Caldera — màrqueting i comunicació per a negocis locals',
    },
    nav: {
      links: [
        { href: '#que-fem', label: 'Què fem' },
        { href: '#com-treballem', label: 'Com treballem' },
        { href: '#casos', label: 'Casos' },
        { href: '#tarifes', label: 'Tarifes' },
        { href: '#lidia', label: 'Qui sóc' },
      ],
      cta: 'Escriu-me',
      langLabel: 'Canviar idioma',
      menuOpen: 'Obrir menú',
      menuClose: 'Tancar menú',
    },
    hero: {
      eyebrow: 'Gestió d\'Instagram · feta a Vic',
      titlePre: "L'Instagram del teu negoci,",
      titleAccent: 'cuidat',
      titlePost: 'per una persona de veritat.',
      lead: "Feed i stories amb foto real del teu local i text escrit per una persona, no per una màquina. Publiques constant cada setmana sense haver-hi de pensar — i et dediques al que se't dóna bé.",
      ctaPrimary: 'Escriu-me per WhatsApp',
      ctaSecondary: 'Veure casos reals',
      trust: 'Resposta el mateix dia · Sense permanència · Sóc de Vic',
      feedName: 'El teu negoci',
      feedHandle: 'elteunegoci',
      feedStats: 'publicacions · seguidors · seguits',
      chipLike: "M'agrada nou",
      chipMessage: 'Missatge nou',
    },
    problem: {
      eyebrow: 'Et sona?',
      title: 'Saps que hauries de publicar més. Però el dia no dóna.',
      lead: "No és que no vulguis. És que entre obrir, atendre i tancar, l'Instagram sempre queda per demà.",
      items: [
        {
          title: 'No tens temps',
          body: "Acabes el dia rebentat i el mòbil amb 40 fotos que no penjaràs mai. La feina ben feta a dins no es veu a fora.",
        },
        {
          title: 'Penges quan pots',
          body: 'Tres stories una setmana i res durant un mes. El client no et veu i pensa que potser has tancat.',
        },
        {
          title: 'No saps què publicar',
          body: 'Obres l\'app, mires la pantalla en blanc i la tanques. Cada dia la mateixa pregunta: "i avui què poso?".',
        },
      ],
    },
    services: {
      eyebrow: 'Què fem',
      title: 'Jo m\'encarrego de l\'Instagram. Tu, del teu negoci.',
      lead: 'Cada mes preparo i publico el contingut perquè la teva presència sigui constant i tingui la teva cara, no una plantilla genèrica.',
      items: [
        {
          title: 'Feed amb criteri',
          body: 'Publicacions pensades per al teu públic, amb foto real del teu local, els teus productes i la teva gent. Res de bancs d\'imatges.',
        },
        {
          title: 'Stories que mouen',
          body: 'El dia a dia del negoci explicat amb gràcia: novetats, darrere de la barra, ofertes. El que fa que la gent passi a comprar.',
        },
        {
          title: 'Text que sona a tu',
          body: 'Esborrany amb IA per anar ràpid, i després el reviso i el reescric jo perquè parli com tu i en català de veritat.',
        },
        {
          title: 'Calendari clar',
          body: 'Saps què es publicarà i quan. T\'ensenyo el contingut abans, tu hi dius la teva, i jo ho deixo llest.',
        },
      ],
    },
    process: {
      eyebrow: 'Com treballem',
      title: 'IA per anar ràpid. Una persona per anar bé.',
      lead: 'Faig servir la IA per a l\'esborrany, no per al resultat final. Tot el que es publica ha passat per ulls humans i pel teu vistiplau. Aquesta és la diferència.',
      steps: [
        {
          n: '01',
          title: 'Coneixem el negoci',
          body: 'Em passes una estona explicant-me com és, qui hi entra i què vols. Si pot ser, vinc al local i ho veig amb els meus ulls.',
        },
        {
          n: '02',
          title: 'Esborrany amb IA',
          body: 'Plantejo idees i primers textos amb ajuda de la IA per guanyar velocitat. És el punt de partida, mai el que arriba al públic.',
        },
        {
          n: '03',
          title: 'Revisió humana',
          body: 'Reescric, ajusto el to, trio les fotos bones i m\'asseguro que tot sona a tu i té sentit per a la teva clientela.',
        },
        {
          n: '04',
          title: 'Tu hi dius la teva',
          body: 'Veus el contingut abans de publicar-se. Si vols canviar res, es canvia. Quan dius OK, ho programo.',
        },
        {
          n: '05',
          title: 'Publiquem i mirem',
          body: 'Publico els dies acordats i miro què funciona per anar afinant cada mes. Constància de veritat, no a ratxes.',
        },
      ],
    },
    cases: {
      eyebrow: 'Casos reals',
      title: 'Dos negocis reals. Dues maneres de comprovar-ho.',
      lead: 'No són logos inventats: són clients de veritat, amb nom i poble. La prova del que faig és la seva experiència.',
    },
    pricing: {
      eyebrow: 'Tarifes',
      title: 'Comences per on et va bé. Puges quan et compensa.',
      lead: 'Sense permanència ni lletra petita. Tries el paquet i, si un mes vols més (o menys), ho parlem.',
      perMonth: '/mes',
      featuredBadge: 'El més triat',
      featuredNote: 'El punt dolç entre presència i pressupost.',
      extrasTitle: 'Extres a la carta',
      note: 'Preus orientatius i sense IVA. El pressupost final depèn del volum i de la teva situació; t\'ho concreto en 5 minuts per WhatsApp.',
      cta: 'El vull',
    },
    about: {
      eyebrow: 'Qui sóc',
      title: 'Sóc la Lídia. I sóc d\'aquí.',
      body: [
        'No sóc una agència de Barcelona que et tracta com un número. Visc a Vic i treballo des d\'aquí amb negocis d\'arreu de Catalunya — d\'Osona a la Costa Brava i el Berguedà.',
        'Per això el teu Instagram no sonarà a corporatiu fred ni a robot. Sonarà a tu, amb la proximitat d\'algú que entén un negoci de proximitat perquè hi ha crescut.',
      ],
      signature: 'Lídia Caldera',
      role: 'Màrqueting i comunicació · Vic, Osona',
      imageAlt: 'Lídia Caldera, màrqueting i comunicació',
      imageCaption: 'Vic, Osona — des d\'on treballo',
    },
    faq: {
      eyebrow: 'Dubtes',
      title: 'El que sol preguntar tothom',
    },
    contact: {
      eyebrow: 'Parlem',
      title: 'Explica\'m el teu negoci. En 5 minuts ho veiem.',
      lead: 'Escriu-me per WhatsApp i et responc el mateix dia, o omple el formulari i jo et truco. El que et vagi millor.',
      waCta: 'Escriu-me per WhatsApp',
      orForm: 'O deixa\'m les dades:',
      form: {
        name: 'Nom',
        namePh: 'Com et dius',
        business: 'Negoci',
        businessPh: 'Nom del teu comerç',
        phone: 'Telèfon',
        phonePh: 'Per trucar-te o escriure\'t',
        message: 'Què necessites?',
        messagePh: 'Explica\'m una mica què tens al cap',
        submit: 'Enviar',
        sending: 'Enviant…',
        ok: 'Rebut! Et contacto avui mateix. Gràcies.',
        error: 'Hi ha hagut un problema. Prova pel WhatsApp i ho solucionem.',
        privacy: 'Faré servir les teves dades només per respondre\'t. Res més.',
      },
    },
    footer: {
      tagline: 'Instagram amb cara i ulls per a negocis locals. Fet des de Vic.',
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
      title: 'Lídia Caldera · Gestión de Instagram para negocios locales',
      description:
        'Gestiono el Instagram de tu negocio con foto real y criterio editorial humano. Desde Vic, para negocios de toda Cataluña. Publicas constante, sin tener que pensarlo.',
      ogAlt: 'Lídia Caldera — marketing y comunicación para negocios locales',
    },
    nav: {
      links: [
        { href: '#que-fem', label: 'Qué hacemos' },
        { href: '#com-treballem', label: 'Cómo trabajamos' },
        { href: '#casos', label: 'Casos' },
        { href: '#tarifes', label: 'Tarifas' },
        { href: '#lidia', label: 'Quién soy' },
      ],
      cta: 'Escríbeme',
      langLabel: 'Cambiar idioma',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
    },
    hero: {
      eyebrow: 'Gestión de Instagram · hecha en Vic',
      titlePre: 'El Instagram de tu negocio,',
      titleAccent: 'cuidado',
      titlePost: 'por una persona de verdad.',
      lead: 'Feed y stories con foto real de tu local y textos escritos por una persona, no por una máquina. Publicas constante cada semana sin tener que pensarlo — y te dedicas a lo que se te da bien.',
      ctaPrimary: 'Escríbeme por WhatsApp',
      ctaSecondary: 'Ver casos reales',
      trust: 'Respuesta el mismo día · Sin permanencia · Soy de Vic',
      feedName: 'Tu negocio',
      feedHandle: 'tunegocio',
      feedStats: 'publicaciones · seguidores · seguidos',
      chipLike: 'Me gusta nuevo',
      chipMessage: 'Mensaje nuevo',
    },
    problem: {
      eyebrow: '¿Te suena?',
      title: 'Sabes que deberías publicar más. Pero el día no da.',
      lead: 'No es que no quieras. Es que entre abrir, atender y cerrar, Instagram siempre queda para mañana.',
      items: [
        {
          title: 'No tienes tiempo',
          body: 'Acabas el día reventado y el móvil con 40 fotos que nunca subirás. El buen trabajo de dentro no se ve fuera.',
        },
        {
          title: 'Publicas cuando puedes',
          body: 'Tres stories una semana y nada durante un mes. El cliente no te ve y piensa que quizá has cerrado.',
        },
        {
          title: 'No sabes qué publicar',
          body: 'Abres la app, miras la pantalla en blanco y la cierras. Cada día la misma pregunta: "¿y hoy qué pongo?".',
        },
      ],
    },
    services: {
      eyebrow: 'Qué hacemos',
      title: 'Yo me encargo de Instagram. Tú, de tu negocio.',
      lead: 'Cada mes preparo y publico el contenido para que tu presencia sea constante y tenga tu cara, no una plantilla genérica.',
      items: [
        {
          title: 'Feed con criterio',
          body: 'Publicaciones pensadas para tu público, con foto real de tu local, tus productos y tu gente. Nada de bancos de imágenes.',
        },
        {
          title: 'Stories que mueven',
          body: 'El día a día del negocio contado con gracia: novedades, detrás de la barra, ofertas. Lo que hace que la gente entre a comprar.',
        },
        {
          title: 'Textos que suenan a ti',
          body: 'Borrador con IA para ir rápido, y después lo reviso y lo reescribo yo para que hable como tú.',
        },
        {
          title: 'Calendario claro',
          body: 'Sabes qué se publicará y cuándo. Te enseño el contenido antes, dices lo que opinas, y yo lo dejo listo.',
        },
      ],
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'IA para ir rápido. Una persona para ir bien.',
      lead: 'Uso la IA para el borrador, no para el resultado final. Todo lo que se publica ha pasado por ojos humanos y por tu visto bueno. Esa es la diferencia.',
      steps: [
        {
          n: '01',
          title: 'Conocemos el negocio',
          body: 'Me cuentas un rato cómo es, quién entra y qué quieres. Si puede ser, voy al local y lo veo con mis ojos.',
        },
        {
          n: '02',
          title: 'Borrador con IA',
          body: 'Planteo ideas y primeros textos con ayuda de la IA para ganar velocidad. Es el punto de partida, nunca lo que llega al público.',
        },
        {
          n: '03',
          title: 'Revisión humana',
          body: 'Reescribo, ajusto el tono, elijo las fotos buenas y me aseguro de que todo suena a ti y tiene sentido para tu clientela.',
        },
        {
          n: '04',
          title: 'Tú opinas',
          body: 'Ves el contenido antes de publicarse. Si quieres cambiar algo, se cambia. Cuando dices OK, lo programo.',
        },
        {
          n: '05',
          title: 'Publicamos y miramos',
          body: 'Publico los días acordados y miro qué funciona para ir afinando cada mes. Constancia de verdad, no a rachas.',
        },
      ],
    },
    cases: {
      eyebrow: 'Casos reales',
      title: 'Dos negocios reales. Dos maneras de comprobarlo.',
      lead: 'No son logos inventados: son clientes de verdad, con nombre y pueblo. La prueba de lo que hago es su experiencia.',
    },
    pricing: {
      eyebrow: 'Tarifas',
      title: 'Empiezas por donde te va bien. Subes cuando te compensa.',
      lead: 'Sin permanencia ni letra pequeña. Eliges el paquete y, si un mes quieres más (o menos), lo hablamos.',
      perMonth: '/mes',
      featuredBadge: 'El más elegido',
      featuredNote: 'El punto dulce entre presencia y presupuesto.',
      extrasTitle: 'Extras a la carta',
      note: 'Precios orientativos y sin IVA. El presupuesto final depende del volumen y de tu situación; te lo concreto en 5 minutos por WhatsApp.',
      cta: 'Lo quiero',
    },
    about: {
      eyebrow: 'Quién soy',
      title: 'Soy Lídia. Y soy de aquí.',
      body: [
        'No soy una agencia de Barcelona que te trata como un número. Vivo en Vic y trabajo desde aquí con negocios de toda Cataluña — de Osona a la Costa Brava y el Berguedà.',
        'Por eso tu Instagram no sonará a corporativo frío ni a robot. Sonará a ti, con la cercanía de alguien que entiende un negocio de proximidad porque ha crecido en uno.',
      ],
      signature: 'Lídia Caldera',
      role: 'Marketing y comunicación · Vic, Osona',
      imageAlt: 'Lídia Caldera, marketing y comunicación',
      imageCaption: 'Vic, Osona — desde donde trabajo',
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
      tagline: 'Instagram con cara y ojos para negocios locales. Hecho desde Vic.',
      nav: 'Navegación',
      contactTitle: 'Contacto',
      rights: 'Todos los derechos reservados.',
      madeIn: 'Hecho en Osona',
    },
    waFab: 'Escríbeme por WhatsApp',
  },
} as const;

export type UI = (typeof ui)[Lang];
