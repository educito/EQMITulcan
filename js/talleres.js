/*
 * Datos de talleres — Campamentos Escuel@s que me inspiran · Tulcán 2026
 * Horarios, cupos, sedes, facilitadores e instituciones: references/AGENDA DE ACTIVIDADES 1.docx
 * Descripciones e impacto: tomados del mismo taller en el sitio de Orellana 2026.
 * Los talleres marcados con  descripcionPropia: true  no existían en Orellana: su texto es provisional.
 */
(function () {
  var S = function (dia, hora, actividad) { return { dia: dia, hora: hora, actividad: actividad || 'Taller' }; };
  var CAMPAMENTO_EST = [
    S('Mar 24', '08:00 – 13:00'), S('Mié 25', '08:00 – 13:00'),
    S('Jue 26', '10:00 – 12:00', 'Concurso'), S('Vie 27', '09:00 – 11:00', 'Festival de cierre')
  ];
  var CAMPAMENTO_DOC = [
    S('Mar 24', '08:00 – 12:00'), S('Mié 25', '08:00 – 15:30'),
    S('Jue 26', '10:00 – 12:00', 'Concurso'), S('Vie 27', '09:00 – 11:00', 'Festival de cierre')
  ];
  var unico = function (ses) { return [{ nombre: 'Grupo único', detalle: 'Asiste todos los días', sesiones: ses }]; };

  window.TALLERES = [
    {
      id: 1, institucion: 'ESPE', tipo: 'Hackatón',
      titulo: 'Ciencia Ciudadana y Sostenibilidad',
      descripcion: [
        'Este taller introduce a los participantes en la Ciencia Ciudadana, permitiéndoles convertirse en científicos de su entorno y agentes de cambio. A través de la investigación y la tecnología, bajo el enfoque STEM aplicado a la sostenibilidad, explorarán desafíos ambientales clave como la calidad del aire, la contaminación del agua, la biodiversidad y el cambio climático.',
        'Utilizando sensores, herramientas digitales y observaciones, los equipos recopilarán y analizarán datos para comprender estos problemas y proponer soluciones innovadoras. Además, el taller promueve la responsabilidad social, incentivando la toma de decisiones informadas y la acción colectiva. Finalmente, los participantes presentarán sus hallazgos de manera creativa, inspirando a sus comunidades a comprometerse con la sostenibilidad y la conservación del planeta.'
      ],
      impacto: 'Este taller permitirá a los docentes y estudiantes del Ministerio de Educación integrar estrategias de aprendizaje basado en proyectos y experimentación en sus clases, fomentando el pensamiento crítico y la conciencia ambiental en sus estudiantes.',
      dirigido: 'Estudiantes de 10.º EGB y un docente por institución',
      cupos: '6 estudiantes y 1 docente por institución · 8 equipos · 56 participantes',
      participantes: 56, estudiantes: true, publico: ['estudiantes', 'docentes'],
      lugar: 'UPEC · Aula 1', apoyo: ['MSc. Mayra Calpa', 'MSc. Carlos Méndez'],
      instituciones: ['UE Huaca', 'UE San Antonio de Padua', 'UE Cristo Rey', 'UE Luciano Coral', 'UE Alejandro R. Mera', 'UE Tulcán', 'UE Bolívar', 'UE Isaac Acosta'],
      grupos: unico(CAMPAMENTO_EST)
    },
    {
      id: 2, institucion: 'ESPE', tipo: 'Taller',
      titulo: 'Submarino',
      descripcion: [
        'Este taller introduce a los participantes en el diseño y construcción de un ROV (Vehículo Operado Remotamente) inspirado en el modelo educativo del programa SeaPerch, integrando principios de ingeniería, física y tecnología bajo el enfoque STEM.',
        'Los equipos desarrollarán un submarino funcional capaz de desplazarse bajo el agua mediante un sistema de propulsión eléctrica controlado por cable, aplicando conceptos como flotabilidad, empuje, centro de masa, estabilidad, circuitos eléctricos y resistencia de materiales. Durante el proceso, deberán diseñar, ensamblar, probar y optimizar su prototipo, enfrentándose a desafíos reales de ingeniería similares a los que se presentan en competencias internacionales de robótica submarina.',
        'Además del componente técnico, el taller conecta la experiencia con problemáticas ambientales relacionadas con la exploración y monitoreo de ecosistemas acuáticos, promoviendo la reflexión sobre la conservación de océanos, ríos y lagos, y el uso responsable de la tecnología en favor de la sostenibilidad.',
        'El proceso incluye documentación básica del diseño, pruebas experimentales y análisis de desempeño del vehículo. Como cierre, se realizará un pequeño concurso interno donde los equipos pondrán a prueba la maniobrabilidad, precisión y estabilidad de sus submarinos en un desafío práctico.'
      ],
      impacto: 'Este taller permitirá a los docentes y estudiantes del Ministerio de Educación implementar experiencias de aprendizaje basado en proyectos que integran física, electrónica y pensamiento ingenieril. Fomenta habilidades como resolución de problemas, trabajo colaborativo, comunicación técnica y pensamiento crítico, acercando a los estudiantes a modelos reales de competencia tecnológica y formación científica aplicada.',
      dirigido: 'Estudiantes de 2.º de Bachillerato y un docente por institución',
      cupos: '5 estudiantes y 1 docente por institución · 5 equipos · 30 participantes',
      participantes: 30, estudiantes: true, publico: ['estudiantes', 'docentes'],
      lugar: 'UPEC · Aula 2', apoyo: ['MSc. Esther Yar', 'MSc. Marco Noroña'],
      instituciones: ['UE Vicente Fierro', 'UE Bolívar', 'UE Luciano Coral Morillo', 'UE César Antonio Mosquera', 'UE Tulcán'],
      grupos: unico(CAMPAMENTO_EST)
    },
    {
      id: 3, institucion: 'ESPE', tipo: 'Hackatón',
      titulo: 'Braitenberg IA',
      descripcion: [
        'Este taller introduce a los participantes en los fundamentos de la inteligencia artificial y el comportamiento autónomo a través del diseño y programación de vehículos inspirados en los experimentos de Valentino Braitenberg, conocidos por demostrar cómo comportamientos complejos pueden emerger a partir de reglas simples.',
        'Bajo el enfoque STEM, los equipos trabajarán con robots educativos equipados con sensores (luz, proximidad o sonido) para diseñar sistemas reactivos capaces de interactuar con su entorno. Mediante conexiones estratégicas entre sensores y motores, los participantes explorarán cómo pequeñas variaciones en la configuración pueden generar comportamientos como evasión, seguimiento, exploración o atracción hacia estímulos.',
        'El taller permite comprender conceptos fundamentales de inteligencia artificial como sistemas autónomos, toma de decisiones basada en estímulos, retroalimentación y comportamiento emergente. Además, se analizará la diferencia entre programación tradicional y sistemas inspirados en principios biológicos, fomentando una comprensión intuitiva de cómo funcionan muchas tecnologías actuales basadas en IA.',
        'Durante el proceso, los estudiantes diseñarán, programarán, probarán y optimizarán sus vehículos, documentando cómo cambian los comportamientos según la configuración elegida. Como cierre, se realizará una demostración práctica donde los equipos presentarán el comportamiento de sus robots y explicarán la lógica detrás de su diseño.'
      ],
      impacto: 'Este taller permitirá a los estudiantes del Ministerio de Educación introducir conceptos de inteligencia artificial y robótica de manera accesible y experimental. Fortalece el pensamiento computacional, el razonamiento lógico, la comprensión de sistemas dinámicos y la capacidad de análisis crítico, preparando a los estudiantes para comprender las tecnologías emergentes desde una base científica sólida.',
      dirigido: 'Estudiantes de 8.º EGB y un docente por institución',
      cupos: '6 estudiantes y 1 docente por institución · 56 participantes',
      participantes: 56, estudiantes: true, publico: ['estudiantes', 'docentes'],
      lugar: 'U.E. Tulcán · Biblioteca / Auditorio', apoyo: ['MSc. Mayra Meneses', 'MSc. Emily Delgado'],
      instituciones: ['UE Vicente Fierro', 'UE Luciano Coral Morillo', 'UE Hno. Miguel La Salle', 'UE San Antonio de Padua', 'UE Cristóbal Colón', 'UE Tulcán', 'UE Bolívar', 'UE Isaac Acosta'],
      grupos: unico(CAMPAMENTO_EST)
    },
    {
      id: 4, institucion: 'ESPE', tipo: 'Taller',
      titulo: 'Arado',
      descripcion: [
        'Este taller propone el diseño y desarrollo de un sistema de arado automatizado utilizando el mBot Ranger, integrando robótica educativa, fabricación digital y sostenibilidad bajo el enfoque STEM. Los participantes transformarán un robot multifuncional en una herramienta tecnológica aplicada al contexto agrícola, mediante la creación de acoples y accesorios personalizados fabricados en corte láser e impresión 3D.',
        'Durante el proceso, los equipos analizarán principios de mecánica aplicada como tracción, torque, resistencia de materiales, distribución de peso y estabilidad estructural. A partir de estos fundamentos, diseñarán piezas modulares que permitan al robot simular funciones básicas de preparación del suelo, adaptando su configuración y programación para optimizar el desempeño.',
        'El taller incorpora pensamiento computacional mediante la programación del mBot Ranger para ejecutar trayectorias controladas, rutinas automatizadas y ajustes según el entorno. Además, se reflexionará sobre el papel de la tecnología en la agricultura sostenible, explorando cómo la automatización puede contribuir a mejorar la eficiencia y reducir el impacto ambiental en procesos productivos.',
        'Los participantes recorrerán todas las etapas del ciclo de ingeniería: análisis del problema, diseño digital, prototipado, ensamblaje, pruebas experimentales y mejora iterativa. Como cierre, los equipos presentarán su solución explicando el diseño mecánico, la lógica de programación implementada y el impacto potencial de su propuesta en contextos reales.'
      ],
      impacto: 'Este taller permitirá a los docentes del Ministerio de Educación integrar robótica avanzada y fabricación digital en proyectos interdisciplinarios vinculados a ciencia, tecnología y desarrollo sostenible. Fortalece competencias en diseño ingenieril, pensamiento computacional, trabajo colaborativo y aplicación contextualizada del conocimiento, acercando a los estudiantes a la innovación tecnológica con propósito social.',
      dirigido: 'Docentes (6 por cada subnivel)',
      cupos: '24 docentes · se entregará el kit de robótica',
      participantes: 24, estudiantes: false, publico: ['docentes'],
      lugar: 'UPEC · Aula 3', apoyo: ['MSc. Nancy Tobar', 'MSc. Nubia Rosero'],
      instituciones: ['UE Vicente Fierro'],
      grupos: unico(CAMPAMENTO_DOC)
    },
    {
      id: 5, institucion: 'ESPE', tipo: 'Hackatón',
      titulo: 'Máquinas de Goldberg',
      descripcion: [
        'Este taller invita a los docentes del Ministerio de Educación a vivir una experiencia práctica y lúdica a través de la construcción de una Máquina de Rube Goldberg. A partir de materiales simples, los participantes diseñarán mecanismos encadenados que resuelvan una tarea sencilla de manera ingeniosa y divertida. La actividad promueve el trabajo colaborativo, la creatividad, el pensamiento crítico y la integración de principios STEM, ofreciendo estrategias replicables en el aula para motivar a los estudiantes y vincular el aprendizaje con la experimentación activa.'
      ],
      impacto: null,
      dirigido: 'Docentes (4 por institución)',
      cupos: '4 docentes por institución · 80 participantes',
      participantes: 80, estudiantes: false, publico: ['docentes'],
      lugar: 'U.E. San Antonio de Padua', apoyo: ['MSc. María José Mesa', 'MSc. Saúl Crucerira'],
      instituciones: ['UE César Antonio Mosquera', 'UE Mariscal Sucre', 'UE Carlos Romo Dávila', 'UE Santa Mariana de Jesús', 'UE Huaca', 'UE Tufiño', 'UE San Antonio de Padua', 'UE Hno. Miguel La Salle', 'UE Tulcán', 'UE Bolívar', 'UE Isaac Acosta', 'UE Cristóbal Colón', 'UE Luciano Coral', 'UE Carmelo', 'UE Sagrado Corazón de Jesús', 'UE Cristo Rey', 'UE Consejo Provincial', 'UE Alejandro R. Mera', 'UE Sucre N.º 1', 'UE Gran Colombia'],
      grupos: unico(CAMPAMENTO_DOC)
    },
    {
      id: 6, institucion: 'ESPE', tipo: 'Taller',
      titulo: 'Construcción de Autómatas y Robots Básicos',
      descripcion: [
        'Este taller introduce a los participantes en los principios fundamentales de la robótica a través de la construcción de autómatas y robots básicos con ESP32. Mediante actividades prácticas, explorarán conceptos esenciales de mecánica, electrónica y programación, integrando sensores y motores para dar vida a sus creaciones.',
        'Durante el taller, los participantes trabajarán en el diseño, ensamblaje y control de robots, aplicando habilidades de resolución de problemas, creatividad y pensamiento lógico. Esta experiencia les permitirá comprender mejor el funcionamiento de los sistemas automatizados y desarrollar competencias clave para el futuro.'
      ],
      impacto: 'Los docentes podrán aplicar estos conocimientos en el aula para guiar a sus estudiantes en proyectos prácticos de robótica, fomentando la experimentación y el desarrollo de habilidades tecnológicas alineadas con el futuro laboral.',
      dirigido: 'Estudiantes de 10.º EGB y un docente por institución',
      cupos: '6 estudiantes y 1 docente por institución · 5 equipos · 35 participantes',
      participantes: 35, estudiantes: true, publico: ['estudiantes', 'docentes'],
      lugar: 'UPEC · Aula 4', apoyo: ['MSc. Haidy Castillo', 'MSc. Diana Rosero'],
      instituciones: ['UE Vicente Fierro', 'UE Tulcán', 'UE Bolívar', 'UE Hno. Miguel La Salle', 'UE Luciano Coral'],
      grupos: unico(CAMPAMENTO_EST)
    },
    {
      id: 7, institucion: 'ESPE', tipo: 'Taller',
      titulo: 'Ratón, pensamiento computacional',
      descripcion: ['Fortalecer los conceptos de pensamiento computacional y programación básica.'],
      impacto: null,
      dirigido: 'Docentes',
      cupos: '24 docentes · se entregará el kit de robot de pensamiento computacional',
      participantes: 24, estudiantes: false, publico: ['docentes'],
      lugar: 'UPEC · Aula 5', apoyo: ['MSc. Janneth Calán', 'MSc. Antony Villarreal'],
      instituciones: ['UE Vicente Fierro'],
      nota: 'Incluye 10 docentes de la misma institución del taller de Arado.',
      grupos: unico(CAMPAMENTO_DOC)
    },
    {
      id: 8, institucion: 'Robótica educativa', tipo: 'Taller', descripcionPropia: true,
      titulo: 'Del cartón al código: Robótica en el aula',
      descripcion: [
        'Taller práctico para docentes de Educación General Básica que muestra cómo llevar la robótica al aula con materiales cotidianos como el cartón, combinándolos con programación sencilla para crear prototipos que se mueven, sienten y responden.',
        'Los participantes construirán y programarán sus propios modelos y se llevarán actividades replicables para trabajar pensamiento computacional, creatividad y resolución de problemas con sus estudiantes.'
      ],
      impacto: null,
      dirigido: 'Docentes de EGB, subniveles elemental y media',
      cupos: '5 docentes por institución · 50 participantes',
      participantes: 50, estudiantes: false, publico: ['docentes'],
      lugar: 'UPEC · Laboratorio 2', apoyo: ['MSc. Diana Home', 'MSc. Andrea Ordóñez'],
      instituciones: ['UE César Antonio Mosquera', 'UE Mariscal Sucre', 'UE Carlos Romo Dávila', 'UE Santa Mariana de Jesús', 'UE Huaca', 'UE Tufiño', 'UE Luciano Coral', 'UE Sagrado Corazón', 'UE Cristo Rey', 'UE Consejo Provincial'],
      grupos: [{ nombre: 'Turnos', detalle: 'Horarios disponibles', sesiones: [
        S('Mar 24', '09:00 – 12:00'), S('Mié 25', '09:00 – 12:00'), S('Mié 25', '13:00 – 16:00'),
        S('Jue 26', '09:00 – 12:00'), S('Jue 26', '13:00 – 16:00')
      ] }]
    },
    {
      id: 9, institucion: 'MINEDEC · DTE', tipo: 'Taller',
      titulo: 'Desarrollo de competencias digitales para la IA',
      descripcion: ['El taller “Desarrollo de competencias digitales para la IA” está diseñado para fortalecer las competencias digitales de directivos, docentes y equipos de apoyo mediante el uso estratégico de herramientas de inteligencia artificial (IA) que facilitan, optimizan y enriquecen los procesos de gestión institucional.'],
      impacto: null,
      dirigido: 'Autoridades: rectores o vicerrectores',
      cupos: '2 grupos de 30 autoridades · 60 participantes',
      participantes: 60, estudiantes: false, publico: ['autoridades'],
      lugar: 'UPEC · Laboratorio 1', apoyo: ['MSc. Tamara Garrido', 'MSc. Valeria Pérez'],
      grupos: [
        { nombre: 'Grupo 1', detalle: '30 autoridades', sesiones: [S('Mar 24', '14:00 – 16:00')],
          instituciones: ['UE San Antonio de Padua', 'UE Hno. Miguel La Salle', 'UE Tulcán', 'UE Bolívar', 'UE Isaac Acosta', 'UE Cristóbal Colón', 'UE Vicente Fierro', 'UE César Antonio Mosquera', 'UE Mariscal Sucre', 'UE Carlos Romo Dávila', 'UE Santa Mariana de Jesús', 'UE Huaca', 'UE Tufiño', 'UE Manuel María Velasco', 'UE María Auxiliadora'] },
        { nombre: 'Grupo 2', detalle: '30 autoridades', sesiones: [S('Jue 26', '14:00 – 16:00')],
          instituciones: ['UE Luciano Coral', 'UE Sagrado Corazón', 'UE Cristo Rey', 'UE Consejo Provincial', 'UE Alejandro R. Mera', 'UE Sucre N.º 1', 'UE Municipal Primero de Mayo', 'UE Gran Colombia', 'UE Carmelo', 'EGB Calvachi', 'UE Maldonado', 'UE Ecuador', 'UE Especializada del Carchi', 'UE 10 de Agosto', 'UE Ángel de la Guarda'] }
      ]
    },
    {
      id: 10, institucion: 'MINEDEC · DTE', tipo: 'Hackatón',
      titulo: 'Plan de Transformación Digital',
      descripcion: ['Taller para fortalecer las competencias docentes, en el uso seguro, ético y responsable de la tecnología en la educación. Además, contempla actividades prácticas sobre herramientas de Inteligencia Artificial para integrar en el trabajo docente.'],
      impacto: null,
      dirigido: 'Docentes de varias instituciones (no personal administrativo ni DECE)',
      cupos: '10 docentes por institución · 4 grupos de 50 · 200 participantes',
      participantes: 200, estudiantes: false, publico: ['docentes'],
      lugar: 'UPEC · Aula 6', apoyo: ['MSc. Diana Arellano', 'MSc. Camila Sandoval'],
      grupos: [
        { nombre: 'Grupo 1', detalle: '50 docentes', sesiones: [S('Mar 24', '08:30 – 11:00')], instituciones: ['UE César Antonio Mosquera', 'UE Mariscal Sucre', 'UE Carlos Romo Dávila', 'UE Santa Mariana de Jesús', 'UE Huaca'] },
        { nombre: 'Grupo 2', detalle: '50 docentes', sesiones: [S('Mar 24', '13:00 – 15:00')], instituciones: ['UE Sucre N.º 1', 'UE Sagrado Corazón', 'UE Vicente Fierro', 'UE María Auxiliadora', 'UE Cristóbal Colón'] },
        { nombre: 'Grupo 3', detalle: '50 docentes', sesiones: [S('Mié 25', '08:30 – 11:00')], instituciones: ['UE Luciano Coral', 'UE Carmelo', 'UE Tufiño', 'UE Cristo Rey', 'UE Consejo Provincial'] },
        { nombre: 'Grupo 4', detalle: '50 docentes', sesiones: [S('Mié 25', '13:00 – 15:00')], instituciones: ['UE San Antonio de Padua', 'UE Hno. Miguel La Salle', 'UE Tulcán', 'UE Bolívar', 'UE Isaac Acosta'] }
      ]
    },
    {
      id: 11, institucion: 'IGM', tipo: 'Taller',
      titulo: 'GeoEduca',
      descripcion: ['El taller GeoEduca tiene como objetivo enseñar a los participantes a utilizar el Geoportal del Instituto Geográfico Militar, una plataforma digital que permite explorar mapas, consultar información geográfica del Ecuador y acceder a recursos cartográficos. A través de una actividad práctica, los participantes aprenderán a navegar por el visor geográfico, identificar información del territorio y conocer las opciones de consulta y descarga de mapas, fortaleciendo sus habilidades para el uso de herramientas digitales de información geográfica.'],
      impacto: null,
      dirigido: 'Docentes',
      cupos: '5 docentes por institución · 5 grupos de 25 · 120 participantes',
      participantes: 120, estudiantes: false, publico: ['docentes'],
      lugar: 'UPEC · Laboratorio 3', apoyo: [],
      grupos: [
        { nombre: 'Grupo 1', detalle: '25 docentes', sesiones: [S('Mar 24', '09:00 – 11:00')], instituciones: ['UE César Antonio Mosquera', 'UE Mariscal Sucre', 'UE Carlos Romo Dávila', 'UE Santa Mariana de Jesús', 'UE Huaca'] },
        { nombre: 'Grupo 2', detalle: '25 docentes', sesiones: [S('Mar 24', '14:00 – 16:00')], instituciones: ['UE Tufiño', 'UE San Antonio de Padua', 'UE Hno. Miguel La Salle', 'UE Tulcán', 'UE Bolívar'] },
        { nombre: 'Grupo 3', detalle: '25 docentes', sesiones: [S('Mié 25', '09:00 – 11:00')], instituciones: ['UE Isaac Acosta', 'UE Cristóbal Colón', 'UE Luciano Coral', 'UE Carmelo', 'EGB Calvachi'] },
        { nombre: 'Grupo 4', detalle: '25 docentes', sesiones: [S('Mié 25', '14:00 – 16:00')], instituciones: ['UE Cristo Rey', 'UE Consejo Provincial', 'UE Alejandro R. Mera', 'UE Sucre N.º 1', 'UE Sagrado Corazón'] },
        { nombre: 'Grupo 5', detalle: '25 docentes', sesiones: [S('Jue 26', '14:00 – 16:00')], instituciones: ['UE Vicente Fierro', 'UE Ángel de la Guarda', 'UE Fe y Alegría', 'UE María Auxiliadora', 'UE Manuel María Velasco'] }
      ]
    },
    {
      id: 12, institucion: 'Patrimonio y cultura', tipo: 'Taller', descripcionPropia: true,
      titulo: 'Manos a la Historia',
      descripcion: [
        'Una experiencia práctica en la que los estudiantes de 7.º EGB exploran la historia a través del trabajo con sus manos: investigan, recrean y construyen, conectando los hechos y personajes del pasado con su propio territorio.',
        'El taller promueve el aprendizaje activo, la creatividad y el trabajo colaborativo, y ofrece al docente acompañante ideas para llevar la historia al aula de forma vivencial.'
      ],
      impacto: null,
      dirigido: 'Estudiantes de 7.º EGB (un solo curso) y su docente',
      cupos: '1 curso con su docente · 25 participantes',
      participantes: 25, estudiantes: true, publico: ['estudiantes', 'docentes'],
      lugar: 'U.E. Consejo Provincial', apoyo: [],
      instituciones: ['UE Consejo Provincial'],
      grupos: [{ nombre: 'Grupo único', detalle: 'Asiste ambos días', sesiones: [S('Mar 24', '07:30 – 12:30'), S('Jue 26', '07:30 – 12:30')] }]
    },
    {
      id: 13, institucion: 'Animación', tipo: 'Taller', descripcionPropia: true,
      titulo: 'AnimaEC',
      descripcion: [
        'Taller de animación para estudiantes de 5.º EGB en el que darán vida a sus propias ideas: crearán personajes, contarán una historia breve y la convertirán en una animación, combinando dibujo, narrativa y herramientas digitales.',
        'Una puerta de entrada a la creatividad y al pensamiento secuencial, con recursos que el docente podrá replicar en clase.'
      ],
      impacto: null,
      dirigido: 'Estudiantes de 5.º EGB (un solo curso) y su docente',
      cupos: '1 curso con su docente · 25 participantes',
      participantes: 25, estudiantes: true, publico: ['estudiantes', 'docentes'],
      lugar: 'U.E. Cristóbal Colón', apoyo: [],
      instituciones: ['UE Cristóbal Colón'],
      grupos: [{ nombre: 'Grupo único', detalle: 'Una jornada', sesiones: [S('Mié 25', '07:30 – 12:30')] }]
    },
    {
      id: 14, institucion: 'Innovación docente', tipo: 'Taller', descripcionPropia: true,
      titulo: 'Educa en el Aula',
      descripcion: [
        'Taller para docentes orientado a integrar recursos y herramientas digitales en la práctica diaria del aula, con estrategias concretas para planificar, motivar y evaluar los aprendizajes de sus estudiantes.'
      ],
      impacto: null,
      dirigido: 'Docentes (5 por institución)',
      cupos: '2 grupos de 25 docentes · 50 participantes',
      participantes: 50, estudiantes: false, publico: ['docentes'],
      lugar: 'UPEC · Aula 7', apoyo: [],
      grupos: [
        { nombre: 'Grupo 1', detalle: '25 docentes', sesiones: [S('Mar 24', '14:00 – 17:00')], instituciones: ['UE San Antonio de Padua', 'UE Hno. Miguel La Salle', 'UE Tulcán', 'UE Bolívar', 'UE Isaac Acosta'] },
        { nombre: 'Grupo 2', detalle: '25 docentes', sesiones: [S('Jue 26', '14:00 – 17:00')], instituciones: ['UE Cristóbal Colón', 'UE Consejo Provincial', 'UE Alejandro R. Mera', 'UE Sucre N.º 1', 'UE Sagrado Corazón'] }
      ]
    }
  ];
})();
