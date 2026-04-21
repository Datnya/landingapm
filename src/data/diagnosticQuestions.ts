export interface DiagnosticOption {
  label: string;
  text: string;
  score: number;
}

export interface DiagnosticQuestion {
  id: number;
  category: string;
  question: string;
  options: DiagnosticOption[];
}

export const diagnosticQuestions: DiagnosticQuestion[] = [
  // ── 1. Contexto, alcance y dirección del sistema ──
  {
    id: 1,
    category: 'Contexto, alcance y dirección del sistema',
    question: '¿La empresa ha definido su contexto, alcance del SGC y partes interesadas relevantes, y esa información se usa para tomar decisiones?',
    options: [
      { label: 'a', text: 'Sí, está documentado, actualizado y alineado con la operación real.', score: 100 },
      { label: 'b', text: 'Está definido, pero de forma parcial, desactualizada o poco utilizada.', score: 50 },
      { label: 'c', text: 'No está definido o no se evidencia su uso.', score: 0 },
    ],
  },
  {
    id: 2,
    category: 'Contexto, alcance y dirección del sistema',
    question: '¿La Alta Dirección participa activamente en el sistema de gestión y demuestra liderazgo con revisiones, decisiones y seguimiento?',
    options: [
      { label: 'a', text: 'Sí, participa de forma consistente y con decisiones verificables.', score: 100 },
      { label: 'b', text: 'Participa solo en ciertos momentos o de forma irregular.', score: 50 },
      { label: 'c', text: 'No participa o su rol es meramente formal.', score: 0 },
    ],
  },
  {
    id: 3,
    category: 'Contexto, alcance y dirección del sistema',
    question: '¿La política y los objetivos de calidad están aprobados, comunicados y conectados con los objetivos del negocio?',
    options: [
      { label: 'a', text: 'Sí, están vigentes, comunicados y medidos con indicadores.', score: 100 },
      { label: 'b', text: 'Existen, pero su despliegue o seguimiento es parcial.', score: 50 },
      { label: 'c', text: 'No existen o no se aplican realmente.', score: 0 },
    ],
  },
  {
    id: 4,
    category: 'Contexto, alcance y dirección del sistema',
    question: '¿Los roles, responsabilidades y autoridades relacionados con el SGC están definidos y son comprendidos por el personal clave?',
    options: [
      { label: 'a', text: 'Sí, están documentados y se cumplen en la práctica.', score: 100 },
      { label: 'b', text: 'Están definidos, pero no todos los conocen o aplican.', score: 50 },
      { label: 'c', text: 'No están claros o dependen de personas específicas.', score: 0 },
    ],
  },
  // ── 2. Procesos, riesgos y planeación operativa ──
  {
    id: 5,
    category: 'Procesos, riesgos y planeación operativa',
    question: '¿La organización tiene un mapa de procesos actualizado y comprendido por quienes ejecutan y supervisan esos procesos?',
    options: [
      { label: 'a', text: 'Sí, está identificado, actualizado y utilizado.', score: 100 },
      { label: 'b', text: 'Existe, pero con brechas de actualización o entendimiento.', score: 50 },
      { label: 'c', text: 'No existe o no representa la operación real.', score: 0 },
    ],
  },
  {
    id: 6,
    category: 'Procesos, riesgos y planeación operativa',
    question: '¿Cada proceso crítico cuenta con indicadores de desempeño, seguimiento periódico y análisis de resultados?',
    options: [
      { label: 'a', text: 'Sí, se miden y se usan para decidir.', score: 100 },
      { label: 'b', text: 'Algunos procesos los tienen, pero no todos o no con disciplina.', score: 50 },
      { label: 'c', text: 'No hay indicadores o son solo declarativos.', score: 0 },
    ],
  },
  {
    id: 7,
    category: 'Procesos, riesgos y planeación operativa',
    question: '¿Los riesgos y oportunidades de los procesos se identifican y se revisan con acciones concretas?',
    options: [
      { label: 'a', text: 'Sí, existe evaluación y tratamiento activo.', score: 100 },
      { label: 'b', text: 'Hay identificación, pero poca actualización o seguimiento.', score: 50 },
      { label: 'c', text: 'No se gestionan formalmente.', score: 0 },
    ],
  },
  {
    id: 8,
    category: 'Procesos, riesgos y planeación operativa',
    question: '¿La planificación operativa considera requisitos, recursos, controles y criterios de aceptación antes de ejecutar?',
    options: [
      { label: 'a', text: 'Sí, se planifica antes de ejecutar y se verifica después.', score: 100 },
      { label: 'b', text: 'Se planifica solo en algunos casos o de forma incompleta.', score: 50 },
      { label: 'c', text: 'No hay una planificación consistente.', score: 0 },
    ],
  },
  // ── 3. Cliente, proveedores y cumplimiento ──
  {
    id: 9,
    category: 'Cliente, proveedores y cumplimiento',
    question: '¿Se identifican y documentan los requisitos del cliente antes de la entrega del producto o servicio?',
    options: [
      { label: 'a', text: 'Sí, se confirma claramente antes de ejecutar.', score: 100 },
      { label: 'b', text: 'Se hace solo en algunos casos o con registros incompletos.', score: 50 },
      { label: 'c', text: 'No se formaliza o suele asumirse.', score: 0 },
    ],
  },
  {
    id: 10,
    category: 'Cliente, proveedores y cumplimiento',
    question: '¿Existe un mecanismo formal para medir la satisfacción del cliente y gestionar reclamos o quejas con trazabilidad?',
    options: [
      { label: 'a', text: 'Sí, hay medición, análisis y seguimiento documentado.', score: 100 },
      { label: 'b', text: 'Existe, pero es irregular o con baja trazabilidad.', score: 50 },
      { label: 'c', text: 'No existe un mecanismo sistemático.', score: 0 },
    ],
  },
  {
    id: 11,
    category: 'Cliente, proveedores y cumplimiento',
    question: '¿Los proveedores y servicios externos relevantes se evalúan, seleccionan y controlan con criterios definidos?',
    options: [
      { label: 'a', text: 'Sí, hay evaluación y control según criticidad.', score: 100 },
      { label: 'b', text: 'Se controla parcialmente o solo a ciertos proveedores.', score: 50 },
      { label: 'c', text: 'No hay control formal.', score: 0 },
    ],
  },
  {
    id: 12,
    category: 'Cliente, proveedores y cumplimiento',
    question: '¿La empresa identifica y cumple los requisitos legales, regulatorios y sectoriales aplicables a su actividad?',
    options: [
      { label: 'a', text: 'Sí, se mantiene un control actualizado y verificable.', score: 100 },
      { label: 'b', text: 'Se conoce parcialmente o se revisa de forma reactiva.', score: 50 },
      { label: 'c', text: 'No hay un control formal del cumplimiento.', score: 0 },
    ],
  },
  // ── 4. Personas, recursos y documentación ──
  {
    id: 13,
    category: 'Personas, recursos y documentación',
    question: '¿Las competencias del personal que impacta la calidad están definidas y respaldadas con evidencia?',
    options: [
      { label: 'a', text: 'Sí, hay matriz de competencias y evidencia objetiva.', score: 100 },
      { label: 'b', text: 'Existe parcialmente o solo para algunos puestos.', score: 50 },
      { label: 'c', text: 'No está definido ni evidenciado.', score: 0 },
    ],
  },
  {
    id: 14,
    category: 'Personas, recursos y documentación',
    question: '¿La empresa cuenta con un plan de formación anual alineado a brechas reales del sistema y evalúa su eficacia?',
    options: [
      { label: 'a', text: 'Sí, está planificado, ejecutado y verificado.', score: 100 },
      { label: 'b', text: 'Hay capacitaciones, pero sin planificación sólida o sin evaluación.', score: 50 },
      { label: 'c', text: 'No hay un plan de formación consistente.', score: 0 },
    ],
  },
  {
    id: 15,
    category: 'Personas, recursos y documentación',
    question: '¿La infraestructura, equipos, ambiente de trabajo y mantenimiento aseguran la conformidad del producto o servicio?',
    options: [
      { label: 'a', text: 'Sí, están controlados y mantenidos de forma adecuada.', score: 100 },
      { label: 'b', text: 'Hay controles, pero con debilidades puntuales.', score: 50 },
      { label: 'c', text: 'No están controlados o afectan la calidad.', score: 0 },
    ],
  },
  {
    id: 16,
    category: 'Personas, recursos y documentación',
    question: '¿Los documentos y registros del SGC están controlados, vigentes, accesibles y libres de versiones obsoletas?',
    options: [
      { label: 'a', text: 'Sí, existe control documental y de registros efectivo.', score: 100 },
      { label: 'b', text: 'Existe, pero con fallas ocasionales de orden o actualización.', score: 50 },
      { label: 'c', text: 'No hay control formal o es muy deficiente.', score: 0 },
    ],
  },
  // ── 5. Operación, control y mejora ──
  {
    id: 17,
    category: 'Operación, control y mejora',
    question: '¿Los equipos de medición y seguimiento están calibrados o verificados según corresponda?',
    options: [
      { label: 'a', text: 'Sí, existe control vigente y trazable.', score: 100 },
      { label: 'b', text: 'Algunos equipos están controlados, pero no todos.', score: 50 },
      { label: 'c', text: 'No existe control confiable de medición.', score: 0 },
    ],
  },
  {
    id: 18,
    category: 'Operación, control y mejora',
    question: '¿Las salidas no conformes y la trazabilidad del producto, servicio o evidencia operativa se controlan con criterios definidos?',
    options: [
      { label: 'a', text: 'Sí, se identifican, registran y pueden rastrearse cuando aplica.', score: 100 },
      { label: 'b', text: 'Existe control parcial o solo para algunos casos.', score: 50 },
      { label: 'c', text: 'No hay control consistente.', score: 0 },
    ],
  },
  {
    id: 19,
    category: 'Operación, control y mejora',
    question: '¿Los cambios en procesos, productos, servicios o documentos se gestionan de manera controlada antes de aplicarse?',
    options: [
      { label: 'a', text: 'Sí, hay evaluación, aprobación y verificación posterior.', score: 100 },
      { label: 'b', text: 'Se controla solo en cambios importantes o de forma informal.', score: 50 },
      { label: 'c', text: 'Se implementan sin control consistente.', score: 0 },
    ],
  },
  {
    id: 20,
    category: 'Operación, control y mejora',
    question: '¿Las auditorías internas, acciones correctivas y revisiones de gestión se sostienen durante todo el año y generan mejoras reales?',
    options: [
      { label: 'a', text: 'Sí, el ciclo de mejora funciona y deja resultados verificables.', score: 100 },
      { label: 'b', text: 'Existe, pero con seguimiento parcial o enfoque documental.', score: 50 },
      { label: 'c', text: 'No se evidencia un ciclo de mejora efectivo.', score: 0 },
    ],
  },
];

export const getScoreColor = (pct: number): string => {
  if (pct < 15) return '#DC2626';
  if (pct < 40) return '#F59E0B';
  if (pct < 70) return '#3B82F6';
  return '#B2C535';
};

export const getScoreBg = (pct: number): string => {
  if (pct < 15) return 'rgba(220,38,38,0.1)';
  if (pct < 40) return 'rgba(245,158,11,0.1)';
  if (pct < 70) return 'rgba(59,130,246,0.1)';
  return 'rgba(178,197,53,0.1)';
};

export const getDiagnostic = (pct: number) => {
  if (pct >= 90) return {
    title: 'Sistema Muy Sólido',
    summary: 'Su SGC está implementado de forma consistente y aporta valor real a la organización.',
    detail: 'Su empresa demuestra un alto nivel de madurez en la gestión de calidad. Los procesos están documentados, controlados y sostenidos. Hay oportunidades de optimización para mantener la excelencia y buscar la mejora continua.',
    icon: '🏆',
  };
  if (pct >= 70) return {
    title: 'Sistema Funcional',
    summary: 'Existe una base firme, pero todavía hay brechas relevantes por cerrar.',
    detail: 'Su organización ha avanzado significativamente en la implementación del SGC. Sin embargo, algunas áreas requieren refuerzo para garantizar consistencia y sostenibilidad a largo plazo. Es un buen momento para cerrar brechas antes de una auditoría externa.',
    icon: '✅',
  };
  if (pct >= 40) return {
    title: 'Sistema en Desarrollo',
    summary: 'Hay avances, pero el nivel de control es irregular y requiere refuerzo.',
    detail: 'Su empresa ha dado pasos iniciales hacia la implementación del sistema de calidad, pero existen áreas críticas sin la consistencia necesaria. Se recomienda una intervención estructurada para fortalecer procesos, documentación y seguimiento.',
    icon: '⚠️',
  };
  return {
    title: 'Sistema Crítico',
    summary: 'La implementación es insuficiente y existe alto riesgo operativo y de auditoría.',
    detail: 'Su organización presenta brechas significativas que comprometen la conformidad con la norma ISO 9001. Es fundamental iniciar un plan de acción urgente con acompañamiento experto para construir las bases de un sistema de gestión funcional.',
    icon: '🚨',
  };
};
