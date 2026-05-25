// LSP Explorer — Structured Data Layer
// Unified from: Lista_Talleres.csv, Problemas_Inforgrafia.csv,
//               Tabla_Completa.csv, Descripcion_Talleres_LSP.csv

export const AT_MAP: Record<string, string> = {
  'AT 1': 'Construcción Individual',
  'AT 2': 'Construcción Compartida',
  'AT 3': 'Paisaje Sistémico',
  'AT 4': 'Conexiones Sistémicas',
  'AT 5': 'Modelo de Sistema Vivo',
  'AT 6': 'Juego de Emergencia',
  'AT 7': 'Principios Guía Simples',
};

export type Nivel = 'Fundacional' | 'Intermedio' | 'Avanzado';

export interface TallerData {
  id: number;
  nombre: string;           // From Lista_Talleres (no prefix)
  nombreCompleto: string;   // From Tabla/Descripcion (with "N." prefix)
  nivel: Nivel;
  duracion: string;
  problema: string;         // Col 2 – Problemas_Infografia
  diagnostico: string;      // Col 3 – Problemas_Infografia
  objetivo: string;         // Col 2 – Descripcion_Talleres
  descripcion: string;      // Elaborated from source data
  tecnicas: string[];       // ['AT 1', ...] from Descripcion_Talleres
  temas: string[];          // Key themes (derived)
  image: string;            // Pexels URL
  imageAlt: string;
}

export const TALLER_DATA: TallerData[] = [
  {
    id: 1,
    nombre: 'Mi Rol y Desafío Personal',
    nombreCompleto: '1. Mi Rol y Desafío Personal',
    nivel: 'Fundacional',
    duracion: '3 horas',
    problema: 'Sesgo de deseabilidad social y parálisis por análisis.',
    diagnostico:
      'Los colaboradores articulan discursos prefabricados o políticamente correctos por temor a la vulnerabilidad. Existe una desconexión crítica entre el conocimiento tácito —lo que el individuo sabe pero no puede expresar— y el explícito.',
    objetivo:
      'Que cada participante rompa la barrera del pensamiento lógico y exprese su perspectiva interna, rol o desafío personal a través de metáforas, liberando el conocimiento inconsciente.',
    descripcion:
      'A través de la construcción con LEGO, cada participante externaliza su modelo mental del rol que ocupa y los desafíos que enfrenta. El proceso físico activa canales cognitivos no verbales, revelando insights que las dinámicas conversacionales tradicionales no logran capturar.',
    tecnicas: ['AT 1'],
    temas: [
      'Autoconocimiento y metacognición ejecutiva',
      'Expresión del conocimiento tácito',
      'Ruptura del sesgo de deseabilidad social',
      'Metáfora como herramienta diagnóstica',
      'Construcción de identidad profesional',
    ],
    image:
      'https://images.pexels.com/photos/3808016/pexels-photo-3808016.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Profesional reflexionando sobre su rol en una sesión individual',
  },
  {
    id: 2,
    nombre: 'Identidad y Visión de Equipo',
    nombreCompleto: '2. Identidad y Visión de Equipo',
    nivel: 'Fundacional',
    duracion: '4 horas',
    problema: 'Falsa alineación e individualismo fragmentado (efecto "silo").',
    diagnostico:
      'Se confunde la sumisión pasiva o el acuerdo superficial con el compromiso real. Los objetivos compartidos suelen ser interpretaciones dispares de una misma directriz, careciendo de una propiedad psicológica colectiva (shared ownership).',
    objetivo:
      'Crear una identidad común y un compromiso grupal donde todos los miembros se sientan representados en una visión unificada, logrando un consenso real.',
    descripcion:
      'El equipo construye un modelo colectivo de su identidad y visión futura. Cada miembro aporta su perspectiva y, a través del diálogo facilitado con LEGO, se forja un sentido de pertenencia y compromiso que trasciende el acuerdo superficial.',
    tecnicas: ['AT 1', 'AT 2'],
    temas: [
      'Co-construcción de visión compartida',
      'Superación del síndrome del silo',
      'Propiedad psicológica colectiva',
      'Compromisos grupales auténticos',
      'Narrativa identitaria del equipo',
    ],
    image:
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Equipo construyendo una visión compartida en taller colaborativo',
  },
  {
    id: 3,
    nombre: 'Mapeo del Ecosistema Organizacional',
    nombreCompleto: '3. Mapeo del Ecosistema Organizacional',
    nivel: 'Fundacional',
    duracion: '5 horas',
    problema: 'Miopía estratégica y aislamiento del entorno.',
    diagnostico:
      'Los equipos operan con una visión endogámica, ignorando cómo sus decisiones impactan o son impactadas por agentes externos (clientes, competencia, reguladores), asumiendo riesgos por operar en un vacío contextual.',
    objetivo:
      'Visualizar el ecosistema completo del proyecto u organización, comprendiendo la posición del equipo respecto a todos los demás actores: clientes, competencia y jefes.',
    descripcion:
      'Los participantes construyen un paisaje tridimensional de su ecosistema con piezas LEGO, situando a su equipo en relación con clientes, competidores y reguladores. La representación física hace tangibles las interdependencias invisibles.',
    tecnicas: ['AT 1', 'AT 2', 'AT 3'],
    temas: [
      'Análisis de actores externos y stakeholders',
      'Cartografía estratégica organizacional',
      'Visión sistémica del entorno competitivo',
      'Gestión de dependencias e influencias',
      'Impacto de decisiones en el ecosistema',
    ],
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Equipo mapeando el ecosistema organizacional en sesión estratégica',
  },
  {
    id: 4,
    nombre: 'Diagnóstico de Flujos y Fricción',
    nombreCompleto: '4. Diagnóstico de Flujos y Fricción',
    nivel: 'Fundacional',
    duracion: '4 - 5 horas',
    problema: 'Ineficiencia operacional invisible y fallas interfuncionales.',
    diagnostico:
      'Los organigramas y mapas de procesos teóricos no reflejan las dinámicas reales de poder e influencia. Existen cuellos de botella ocultos y fricciones relacionales que ralentizan la ejecución sin ser detectados por auditorías convencionales.',
    objetivo:
      'Identificar las dependencias, los flujos de comunicación y los puntos de fricción que existen entre los diferentes elementos del paisaje creado.',
    descripcion:
      'Partiendo del paisaje construido en el módulo anterior, el equipo traza conexiones físicas entre los elementos para hacer visibles los flujos reales. Los bloqueos y fricciones emergen naturalmente del modelo, revelando ineficiencias sistémicas ocultas.',
    tecnicas: ['AT 3', 'AT 4'],
    temas: [
      'Detección de cuellos de botella ocultos',
      'Mapeo de comunicación interfuncional',
      'Fricción relacional y operacional',
      'Dinámicas reales de poder e influencia',
      'Optimización de procesos críticos',
    ],
    image:
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Equipo analizando flujos y procesos organizacionales',
  },
  {
    id: 5,
    nombre: 'Análisis de Vulnerabilidad Sistémica',
    nombreCompleto: '5. Análisis de Vulnerabilidad Sistémica',
    nivel: 'Fundacional',
    duracion: '6 horas',
    problema: 'Fragilidad estructural y pensamiento lineal (causa-efecto simple).',
    diagnostico:
      'La organización analiza los problemas de manera aislada, aplicando soluciones paliativas que solo trasladan la crisis a otra área. Falta una visión de conjunto que permita anticipar fallas antes de que ocurra una disruption.',
    objetivo:
      'Ver el negocio o el desafío como un organismo vivo, examinando la complejidad para precisar los cuellos de botella y las áreas de tensión sistémica.',
    descripcion:
      'El equipo examina su sistema construido como un organismo vivo, identificando qué elementos son críticos, cuáles están bajo tensión y dónde yace la verdadera fragilidad. El enfoque sistémico revela interdependencias que el análisis lineal ignora.',
    tecnicas: ['AT 1', 'AT 4', 'AT 5'],
    temas: [
      'Fragilidad estructural y tensión latente',
      'Pensamiento sistémico no lineal',
      'Anticipación de disrupciones y crisis',
      'Organismos vivos vs estructuras rígidas',
      'Mapa de zonas de riesgo organizacional',
    ],
    image:
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Análisis estratégico de vulnerabilidades organizacionales',
  },
  {
    id: 6,
    nombre: 'Clarificación de Roles y Relaciones',
    nombreCompleto: '6. Clarificación de Roles y Relaciones',
    nivel: 'Fundacional',
    duracion: '5 horas',
    problema: 'Ambigüedad de rol y conflictos de autoridad.',
    diagnostico:
      'La superposición de funciones y las expectativas no alineadas generan fricción constante y baja productividad. Existe una disonancia entre lo que el individuo considera su deber y lo que sus pares esperan de él.',
    objetivo:
      'Utilizar modelos individuales y las conexiones sistémicas para clarificar roles, dependencias y dinámicas de relación dentro del equipo.',
    descripcion:
      'Cada participante construye un modelo de su propio rol y lo posiciona en el sistema compartido. Al conectar los modelos individuales, emergen las expectativas implícitas, los solapamientos y los vacíos de responsabilidad que generan conflicto.',
    tecnicas: ['AT 1', 'AT 2', 'AT 4'],
    temas: [
      'Ambigüedad de rol y mapeo de expectativas',
      'Superposición de funciones y autoridad',
      'Disonancia entre autopercepción y expectativa ajena',
      'Dependencias funcionales explícitas',
      'Claridad de accountability y responsabilidad',
    ],
    image:
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Equipo clarificando roles y relaciones en taller facilitado',
  },
  {
    id: 7,
    nombre: 'Laboratorio de Resiliencia y Crisis',
    nombreCompleto: '7. Laboratorio de Resiliencia y Crisis',
    nivel: 'Intermedio',
    duracion: '6 horas',
    problema: 'Reactividad e incapacidad de adaptación bajo estrés.',
    diagnostico:
      'Los planes estratégicos suelen ser estáticos y asumen un futuro lineal. El equipo carece de la preparación operativa y psicológica para gestionar el caos, manifestando rigidez cognitiva ante lo imprevisto.',
    objetivo:
      'Probar la resiliencia del equipo y la solidez de su sistema ante crisis o escenarios hipotéticos inesperados, observando la toma de decisiones bajo presión.',
    descripcion:
      'El facilitador introduce disrupciones inesperadas al modelo construido —eventos externos, fallas internas, cambios de reglas— y el equipo debe adaptar su sistema en tiempo real. El laboratorio evidencia la capacidad real de respuesta ante el caos.',
    tecnicas: ['AT 5', 'AT 6'],
    temas: [
      'Simulación de crisis y escenarios extremos',
      'Toma de decisiones bajo presión y caos',
      'Rigidez cognitiva vs adaptabilidad',
      'Preparación psicológica ante lo imprevisto',
      'Planes de contingencia robustos y dinámicos',
    ],
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Equipo en laboratorio de simulación de crisis organizacional',
  },
  {
    id: 8,
    nombre: 'Extracción de la Estrategia Emergente',
    nombreCompleto: '8. Extracción de la Estrategia Emergente',
    nivel: 'Intermedio',
    duracion: '3 - 4 horas',
    problema: 'Parálisis operativa por exceso de normatividad y manuales obsoletos.',
    diagnostico:
      'En entornos volátiles, las reglas extensas son inútiles. El problema es la ausencia de un marco simplificado que permita la autonomía alineada; se requiere cerrar la brecha entre la junta directiva y la acción en tiempo real mediante Principios Guía Simples.',
    objetivo:
      'Destilar la sabiduría y las lecciones aprendidas de las simulaciones en reglas de oro concisas que guíen la toma de decisiones diaria (acción autónoma).',
    descripcion:
      'El equipo reflexiona sobre las decisiones tomadas durante el laboratorio de crisis y extrae los principios que guiaron las respuestas exitosas. Estos insights se consolidan en un conjunto reducido de reglas de oro operativas y accionables.',
    tecnicas: ['AT 6', 'AT 7'],
    temas: [
      'Principios Guía Simples (PGS)',
      'Síntesis de aprendizajes colectivos',
      'Toma de decisiones autónoma y alineada',
      'Cierre de la brecha directiva-operativa',
      'Marcos simplificados para la acción rápida',
    ],
    image:
      'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Equipo extractando y consolidando estrategia emergente',
  },
  {
    id: 9,
    nombre: 'Desarrollo Integral de Liderazgo',
    nombreCompleto: '9. Desarrollo Integral de Liderazgo',
    nivel: 'Intermedio',
    duracion: '1 día (6 - 8 horas)',
    problema: 'Liderazgo autocrático, centralizado o descontextualizado.',
    diagnostico:
      'Los programas de desarrollo directivo tradicionales se basan en teorías abstractas. Los líderes carecen de autoconsciencia sobre su impacto real en el sistema y muestran resistencia para transitar de un modelo de control a uno de facilitación.',
    objetivo:
      'Utilizar la expresión individual, la identidad compartida y el análisis de interdependencias para crear una hoja de ruta clara para el desarrollo de líderes.',
    descripcion:
      'Un programa intensivo de un día que combina la introspección individual con el análisis sistémico. Los líderes construyen modelos de su estilo directivo actual, lo confrontan con la percepción del equipo y co-diseñan una hoja de ruta de desarrollo personalizada.',
    tecnicas: ['AT 1', 'AT 2', 'AT 4', 'AT 7'],
    temas: [
      'Autoconsciencia del impacto directivo',
      'Transición del control a la facilitación',
      'Hoja de ruta de desarrollo individual',
      'Interdependencias del sistema de liderazgo',
      'Liderazgo contextualizado y práctico',
    ],
    image:
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Programa de desarrollo integral de liderazgo ejecutivo',
  },
  {
    id: 10,
    nombre: 'Estrategia Completa y Compromiso',
    nombreCompleto: '10. Estrategia Completa y Compromiso',
    nivel: 'Avanzado',
    duracion: '2 días (12 - 16 horas)',
    problema: 'Brecha de ejecución (Execution Gap) y falta de sostenibilidad.',
    diagnostico:
      'Gran parte de las estrategias terminan como documentos archivados sin tracción real. El problema central es la desconexión del ciclo estratégico y la falta de un compromiso visceral e intelectual por parte de quienes deben ejecutar la visión.',
    objetivo:
      'Recorrer el ciclo completo de la metodología para generar una visión sistémica, probar su resiliencia ante el futuro y extraer los principios rectores que aseguren la implementación y el compromiso.',
    descripcion:
      'La experiencia más completa y transformadora del catálogo. En dos días, el equipo construye una representación tridimensional de toda su realidad organizacional, la somete a pruebas de estrés extremo y extrae los principios rectores que garantizarán la ejecución sostenida.',
    tecnicas: ['AT 1', 'AT 2', 'AT 3', 'AT 4', 'AT 5', 'AT 6', 'AT 7'],
    temas: [
      'Ciclo estratégico integrado y completo',
      'Visión sistémica y pruebas de resiliencia',
      'Principios rectores para la implementación',
      'Compromiso visceral e intelectual del equipo',
      'Sostenibilidad de la ejecución estratégica',
    ],
    image:
      'https://images.pexels.com/photos/3184399/pexels-photo-3184399.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    imageAlt: 'Sesión completa de estrategia y compromiso organizacional',
  },
];

// Derived lists for dropdowns
export const CUALIDADES = TALLER_DATA.map((t) => t.nombre);

export const NIVELES: Nivel[] = ['Fundacional', 'Intermedio', 'Avanzado'];

export const NIVEL_META: Record<Nivel, { descripcion: string; color: string }> = {
  Fundacional: {
    descripcion: 'Talleres de entrada: construyen la base diagnóstica y el lenguaje común del equipo.',
    color: 'var(--lego-green)',
  },
  Intermedio: {
    descripcion: 'Talleres de profundidad: simulan, extraen y desarrollan capacidades avanzadas.',
    color: 'var(--lego-blue)',
  },
  Avanzado: {
    descripcion: 'Experiencia completa: ciclo estratégico íntegro con compromiso de ejecución.',
    color: 'var(--lego-red)',
  },
};
