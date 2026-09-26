/* ==========================================================================
   Contenido corporativo: historia, valores, proceso, equipo, ESG, empleo.
   ========================================================================== */
import type { L10n } from '../i18n';

export const timeline: { year: number; title: L10n; text: L10n }[] = [
  { year: 2011, title: { es: 'Nace en València', en: 'Founded in Valencia' }, text: { es: 'Tres ingenieros industriales empiezan instalando autoconsumo en naves de l’Horta.', en: 'Three industrial engineers start installing rooftop solar on warehouses around Valencia.' } },
  { year: 2014, title: { es: 'Primera planta de 10 MWp', en: 'First 10 MWp plant' }, text: { es: 'Entramos en la escala utility con una planta en La Mancha.', en: 'We move into utility scale with a plant in La Mancha.' } },
  { year: 2017, title: { es: 'Unidad de O&M', en: 'O&M unit launched' }, text: { es: 'Abrimos el centro de control 24/7 y empezamos a operar para terceros.', en: 'We open the 24/7 control room and start operating for third parties.' } },
  { year: 2019, title: { es: 'Salto a Portugal', en: 'Expansion to Portugal' }, text: { es: 'Oficina en Lisboa y primer PPA corporativo transfronterizo.', en: 'Lisbon office and our first cross-border corporate PPA.' } },
  { year: 2021, title: { es: '1 GW desarrollado', en: '1 GW developed' }, text: { es: 'Superamos el gigavatio con 38 plantas en cartera.', en: 'We pass one gigawatt with 38 plants in the portfolio.' } },
  { year: 2023, title: { es: 'Almacenamiento', en: 'Storage business' }, text: { es: 'Creamos la línea BESS y el EMS propio de gestión de baterías.', en: 'We launch the BESS line and our in-house battery EMS.' } },
  { year: 2025, title: { es: 'Italia y agrivoltaica', en: 'Italy & agrivoltaics' }, text: { es: 'Primer proyecto agrivoltaico elevado en Puglia.', en: 'First elevated agrivoltaic project in Apulia.' } },
  { year: 2026, title: { es: '1,8 GW y Pulse 3.0', en: '1.8 GW & Pulse 3.0' }, text: { es: 'Conectamos Los Llanos y lanzamos la tercera versión de Pulse.', en: 'Los Llanos is connected and Pulse 3.0 is released.' } },
];

export const values: { icon: string; title: L10n; text: L10n }[] = [
  { icon: 'target', title: { es: 'Rigor', en: 'Rigour' }, text: { es: 'Cada decisión se apoya en datos medidos, no en supuestos optimistas.', en: 'Every decision rests on measured data, not optimistic assumptions.' } },
  { icon: 'eye', title: { es: 'Transparencia', en: 'Transparency' }, text: { es: 'Compartimos con clientes y socios los mismos datos que vemos nosotros.', en: 'Clients and partners see the same data we do.' } },
  { icon: 'map-pin', title: { es: 'Territorio', en: 'Place' }, text: { es: 'Contratamos y compramos en local. La planta debe dejar el lugar mejor.', en: 'We hire and buy locally. A plant should leave its place better off.' } },
  { icon: 'shield-check', title: { es: 'Seguridad', en: 'Safety' }, text: { es: 'Ningún plazo justifica un riesgo. Objetivo cero accidentes.', en: 'No deadline justifies a risk. Zero-harm target.' } },
  { icon: 'clock', title: { es: 'Largo plazo', en: 'Long view' }, text: { es: 'Diseñamos pensando en 30 años de operación, no en la foto de inauguración.', en: 'We design for 30 years of operation, not for the ribbon-cutting photo.' } },
];

/** Proceso — sección sticky en home */
export const process: { code: string; title: L10n; text: L10n; icon: string }[] = [
  { code: '01', icon: 'compass', title: { es: 'Originación', en: 'Origination' }, text: { es: 'Buscamos suelo, analizamos la red y validamos la viabilidad técnica y ambiental.', en: 'We source land, analyse the grid and validate technical and environmental feasibility.' } },
  { code: '02', icon: 'circuitry', title: { es: 'Ingeniería', en: 'Engineering' }, text: { es: 'Diseño de detalle con simulaciones de producción P50/P90 y optimización de layout.', en: 'Detailed design with P50/P90 yield simulations and layout optimisation.' } },
  { code: '03', icon: 'handshake', title: { es: 'Financiación', en: 'Financing' }, text: { es: 'PPA, project finance o capital propio: estructuramos la opción más eficiente.', en: 'PPA, project finance or equity: we structure the most efficient option.' } },
  { code: '04', icon: 'hard-hat', title: { es: 'Construcción', en: 'Construction' }, text: { es: 'EPC llave en mano con equipos propios, seguridad cero accidentes y proveedores locales.', en: 'Turnkey EPC with in-house crews, zero-harm safety and local suppliers.' } },
  { code: '05', icon: 'pulse', title: { es: 'Operación', en: 'Operation' }, text: { es: '30 años de O&M con Pulse, nuestra plataforma de mantenimiento predictivo.', en: '30 years of O&M with Pulse, our predictive maintenance platform.' } },
];

export const leadership = [
  { name: 'Marta Iborra', initials: 'MI', role: { es: 'Consejera delegada', en: 'Chief Executive Officer' } },
  { name: 'Joan Ferrer', initials: 'JF', role: { es: 'Director técnico', en: 'Chief Technology Officer' } },
  { name: 'Lucía Andrade', initials: 'LA', role: { es: 'Directora financiera', en: 'Chief Financial Officer' } },
  { name: 'Paolo Ricci', initials: 'PR', role: { es: 'Director Italia', en: 'Country Manager Italy' } },
];

export const certifications = [
  { code: 'ISO 9001', label: { es: 'Calidad', en: 'Quality' } },
  { code: 'ISO 14001', label: { es: 'Medio ambiente', en: 'Environment' } },
  { code: 'ISO 45001', label: { es: 'Seguridad y salud', en: 'Health & safety' } },
  { code: 'ISO 50001', label: { es: 'Gestión energética', en: 'Energy management' } },
];

export const esgMetrics = [
  { value: 640, suffix: ' kt', label: { es: 'CO₂ evitado cada año', en: 'CO₂ avoided every year' } },
  { value: 0, suffix: '', label: { es: 'accidentes con baja en 2025', en: 'lost-time injuries in 2025' } },
  { value: 58, suffix: ' %', label: { es: 'compras a proveedores locales', en: 'spend with local suppliers' } },
  { value: 41, suffix: ' %', label: { es: 'mujeres en puestos directivos', en: 'women in leadership roles' } },
];

export const sdgs = [
  { n: 7, title: { es: 'Energía asequible y no contaminante', en: 'Affordable and clean energy' } },
  { n: 8, title: { es: 'Trabajo decente y crecimiento económico', en: 'Decent work and economic growth' } },
  { n: 9, title: { es: 'Industria, innovación e infraestructura', en: 'Industry, innovation and infrastructure' } },
  { n: 13, title: { es: 'Acción por el clima', en: 'Climate action' } },
  { n: 15, title: { es: 'Vida de ecosistemas terrestres', en: 'Life on land' } },
];

export const esgPillars: { icon: string; title: L10n; text: L10n }[] = [
  { icon: 'leaf', title: { es: 'Biodiversidad activa', en: 'Active biodiversity' }, text: { es: 'Pastoreo ovino, hoteles de insectos, charcas y setos autóctonos en todas las plantas de más de 20 MWp.', en: 'Sheep grazing, insect hotels, ponds and native hedgerows at every plant above 20 MWp.' } },
  { icon: 'hand-heart', title: { es: 'Retorno local', en: 'Local return' }, text: { es: 'El 1 % de los ingresos de cada planta se reinvierte en el municipio durante toda su vida útil.', en: '1% of every plant’s revenue is reinvested in the host municipality for its whole life.' } },
  { icon: 'recycle', title: { es: 'Circularidad', en: 'Circularity' }, text: { es: 'Contratos de retirada y reciclaje de módulos y baterías firmados desde el primer día.', en: 'Module and battery take-back and recycling contracts signed from day one.' } },
  { icon: 'scales', title: { es: 'Buen gobierno', en: 'Governance' }, text: { es: 'Consejo con mayoría independiente, canal ético y cadena de suministro auditada.', en: 'Board with an independent majority, ethics channel and audited supply chain.' } },
];

export const jobs = [
  { title: { es: 'Ingeniero/a de proyectos FV', en: 'PV Project Engineer' }, area: { es: 'Ingeniería', en: 'Engineering' }, location: 'València', type: { es: 'Indefinido · Híbrido', en: 'Permanent · Hybrid' } },
  { title: { es: 'Jefe/a de obra EPC', en: 'EPC Site Manager' }, area: { es: 'Construcción', en: 'Construction' }, location: 'Badajoz', type: { es: 'Indefinido · Presencial', en: 'Permanent · On-site' } },
  { title: { es: 'Analista de mercados eléctricos', en: 'Power Markets Analyst' }, area: { es: 'Almacenamiento', en: 'Storage' }, location: 'Madrid', type: { es: 'Indefinido · Híbrido', en: 'Permanent · Hybrid' } },
  { title: { es: 'Técnico/a de O&M', en: 'O&M Technician' }, area: { es: 'Operación', en: 'Operations' }, location: 'Sevilla', type: { es: 'Indefinido · Presencial', en: 'Permanent · On-site' } },
  { title: { es: 'Data engineer — Pulse', en: 'Data Engineer — Pulse' }, area: { es: 'Digital', en: 'Digital' }, location: 'València / Remoto', type: { es: 'Indefinido · Remoto', en: 'Permanent · Remote' } },
  { title: { es: 'Sviluppatore/trice di progetti', en: 'Project Developer' }, area: { es: 'Desarrollo', en: 'Development' }, location: 'Bari', type: { es: 'Indefinido · Híbrido', en: 'Permanent · Hybrid' } },
];

export const benefits: { icon: string; title: L10n; text: L10n }[] = [
  { icon: 'clock', title: { es: 'Jornada flexible', en: 'Flexible hours' }, text: { es: 'Horario flexible y viernes intensivo todo el año.', en: 'Flexible schedule and short Fridays all year.' } },
  { icon: 'graduation-cap', title: { es: '1.500 € de formación', en: '€1,500 learning budget' }, text: { es: 'Presupuesto anual individual para cursos, congresos y certificaciones.', en: 'Personal annual budget for courses, conferences and certifications.' } },
  { icon: 'heart', title: { es: 'Seguro médico', en: 'Health insurance' }, text: { es: 'Seguro privado para ti y tu familia desde el primer día.', en: 'Private cover for you and your family from day one.' } },
  { icon: 'sun', title: { es: 'Plan de retribución flexible', en: 'Flexible benefits' }, text: { es: 'Transporte, comida y guardería con ventaja fiscal.', en: 'Tax-efficient transport, meals and childcare.' } },
  { icon: 'globe-hemisphere-west', title: { es: 'Movilidad internacional', en: 'International mobility' }, text: { es: 'Proyectos en España, Portugal e Italia.', en: 'Projects across Spain, Portugal and Italy.' } },
  { icon: 'plant', title: { es: 'Días de voluntariado', en: 'Volunteering days' }, text: { es: 'Dos días al año para proyectos ambientales en las comunidades donde operamos.', en: 'Two days a year for environmental projects in our host communities.' } },
];

export const homeFaqs: { q: L10n; a: L10n }[] = [
  { q: { es: '¿Con qué tipo de clientes trabaja GEOLight?', en: 'What kind of clients does GEOLight work with?' }, a: { es: 'Con industria y logística que quiere reducir su factura, con fondos de infraestructura que invierten en renovables y con propietarios de suelo que buscan un arrendamiento estable a 30 años.', en: 'Industrial and logistics companies looking to cut their bill, infrastructure funds investing in renewables, and landowners seeking a stable 30-year lease.' } },
  { q: { es: '¿En qué países operáis?', en: 'Which countries do you operate in?' }, a: { es: 'España, Portugal e Italia, con oficinas en València, Madrid, Lisboa y Bari.', en: 'Spain, Portugal and Italy, with offices in Valencia, Madrid, Lisbon and Bari.' } },
  { q: { es: '¿Puedo instalar autoconsumo sin invertir?', en: 'Can I get self-consumption without investing?' }, a: { es: 'Sí. Con un PPA on-site GEOLight financia, construye y opera la instalación y tú pagas solo la energía que consumes, a un precio fijo inferior al de la red.', en: 'Yes. Under an on-site PPA GEOLight finances, builds and operates the system and you pay only for the energy you use, at a fixed price below grid.' } },
  { q: { es: 'Tengo terreno, ¿puede servir para una planta solar?', en: 'I own land — could it host a solar plant?' }, a: { es: 'Buscamos parcelas de más de 30 hectáreas, poco pendientes y a menos de 10 km de una subestación. Envíanos la referencia catastral y te respondemos en 10 días.', en: 'We look for plots over 30 hectares, with gentle slopes and within 10 km of a substation. Send us the parcel reference and we will reply within 10 days.' } },
];
