export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const WHATSAPP = '526242673177';
export const PHONE_DISPLAY = '+52 624 267 3177';
export const PHONE_TEL = '+526242673177';

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

const en = {
  meta: {
    title: 'Pharmacy Cabo | 24/7 Concierge Delivery in Los Cabos',
    description:
      'Discreet, bilingual concierge delivery for hotels, villas, and yachts across Los Cabos. Available 24/7. Contact Pharmacy Cabo by WhatsApp.',
  },
  nav: { services: 'Services', how: 'How it works', coverage: 'Coverage', products: 'Products', faq: 'FAQ' },
  cta: { whatsapp: 'WhatsApp now', call: 'Call', message: 'Message us on WhatsApp', concierge: 'Call our concierge' },
  status: 'Available now · Drivers on standby',
  hours: 'Store 8AM–6PM · Delivery coordination 24/7',
  brandTag: 'PREMIUM DELIVERY CONCIERGE',
  hero: {
    badge: 'Bilingual team available now',
    title: 'Pharmacy & wellness concierge, delivered with premium care.',
    text: 'Discreet, bilingual delivery of everyday pharmacy essentials, personal care, wellness items, and concierge requests across Los Cabos. Trusted by luxury hotels, private villas, and yachts — all coordinated through a single WhatsApp message.',
    chips: ['No app required', 'Cash or card on delivery', 'Bilingual team'],
    waText: 'Hello! I need a discreet delivery in Los Cabos.',
  },
  desk: {
    title: 'Los Cabos delivery desk',
    sub: 'Fast, discreet help wherever you are staying.',
    stats: [
      ['24/7', 'Delivery coordination'],
      ['30–90', 'Minute ETA'],
      ['3', 'Luxury zones'],
    ],
    handoff: 'Hotels · Villas · Yachts',
    handoffSub: 'Lobby, suite, villa gate, or marina-slip handoff.',
  },
  standard: {
    eyebrow: 'The Pharmacy Cabo standard',
    title: 'Clear coordination with a luxury hospitality feel.',
    text: 'Every request is handled by a real bilingual team with clear pricing, discreet coordination, and delivery adapted to your property or vessel.',
    items: [
      ['Bilingual Team', 'English & Spanish guest support'],
      ['Discreet Delivery', 'Lobby, suite, or villa handoff'],
      ['Luxury Zones', 'Palmilla, Pedregal, Corridor'],
      ['Yacht Service', 'Marina provisioning on request'],
    ],
  },
  zones: [
    ['CSL · Cabo San Lucas', 'Médano & urban resorts', '30–45 minutes'],
    ['COR · Tourist Corridor', 'Premium hotel belt', '45–60 minutes'],
    ['SJD · San José del Cabo', 'Extended coverage', '60–75 minutes'],
  ],
  typical: 'Typical delivery',
  services: {
    eyebrow: 'Everything coordinated in one place',
    title: 'Concierge services for your stay.',
    text: 'Tell us what you need and where you are. We confirm availability, share clear pricing, and arrange the handoff.',
    items: [
      ['Pharmacy & Wellness', 'General OTC essentials, first-aid supplies, personal care, hydration, and everyday wellness products coordinated by our bilingual concierge team.'],
      ['Beach Essentials', 'Reef-safe sunscreen, aloe, rash guards, hats, hydration packs, and travel comfort items.'],
      ['Food & Beverages', 'Groceries, premium mixers, spirits, snacks, and fresh provisions for your villa, yacht, or in-room bar.'],
      ['Concierge Requests', 'Forgotten travel essentials, personal-care items, convenience requests, and guest-specific needs.'],
    ],
  },
  banner: {
    eyebrow: 'Discreet hotel, villa & yacht handoff',
    title: 'Premium service that feels effortless.',
    text: 'From the first WhatsApp message to the final handoff, our bilingual team coordinates every detail with the care expected by Los Cabos guests and concierges.',
    cta: 'Arrange a delivery',
    waText: 'Hello! I need a discreet delivery in Los Cabos.',
  },
  products: {
    eyebrow: 'Everyday essentials',
    title: 'Travel wellness & personal care.',
    text: 'Browse general OTC, sun care, hydration, personal care, and wellness essentials. Availability is confirmed before delivery.',
    all: 'All',
    order: 'Order on WhatsApp',
    soldOut: 'Ask availability',
    inStock: 'In stock',
    search: 'Search products…',
    none: 'No products match your search.',
    viewAll: 'View all products',
    count: (n: number) => `${n} products`,
    waText: (name: string) => `Hello! I would like to order: ${name}`,
    noPrice: 'Price on request',
  },
  steps: {
    eyebrow: 'Simple from the first message',
    title: 'How it works.',
    text: 'No app, no complicated checkout, and no uncertainty about the handoff.',
    items: [
      ['Message us', 'Reach us by WhatsApp or phone and share what you need, plus your property, suite, gate, or marina slip.'],
      ['Confirm & pay', 'Receive a clear quote with product photos. Pay by card, transfer, or cash in USD or MXN.'],
      ['Receive discreetly', 'We coordinate delivery to your hotel, villa, or yacht, typically within 30–90 minutes.'],
    ],
  },
  trusted: ['One&Only Palmilla', 'Chileno Bay', 'Las Ventanas al Paraíso', 'Solaz', 'Waldorf Astoria Pedregal', 'Nobu Los Cabos', 'Esperanza', 'Montage'],
  coverage: {
    eyebrow: 'Coverage snapshot',
    title: 'From Cabo San Lucas to San José del Cabo.',
    text: 'Delivery fees depend on zone and time. Your total and estimated arrival are always disclosed before dispatch.',
    cta: 'Confirm my location',
    waText: 'Hello! Can you deliver to my location in Los Cabos?',
    items: [
      ['Cabo San Lucas / Médano', 'Urban and resort zone', '30–45 min'],
      ['Pedregal / Marina', 'Hotels, villas, and yachts', '30–45 min'],
      ['Tourist Corridor', 'Premium hotel belt', '45–60 min'],
      ['Palmilla / Querencia', 'Resort and residential zone', '45–60 min'],
      ['San José del Cabo', 'Extended coverage', '60–75 min'],
      ['Diamante / Quivira', 'Outer luxury zone', '60–90 min'],
    ],
  },
  reviews: {
    eyebrow: 'Trusted by Cabo guests',
    title: 'Service people remember.',
    items: [
      ['We realized we had forgotten several travel essentials. They answered in under a minute and had everything at our villa in 40. Excellent service.', 'Jennifer M.', 'Pedregal · Family trip'],
      ['We provisioned our yacht through them three times this season. Reliable, professional, and they bring exactly what you order.', 'David R.', 'CSL Marina · Yacht charter'],
      ['The discretion matters. Our concierge recommends them and now I understand why — no awkwardness, no questions, just service.', 'Sarah K.', 'Palmilla · Returning guest'],
    ],
  },
  faq: {
    eyebrow: 'Helpful answers',
    title: 'Frequently asked questions.',
    items: [
      ['Are you available 24/7?', 'Our store operates from 8AM to 6PM, while delivery coordination is available around the clock for last-minute travel essentials and guest convenience requests.'],
      ['How can I pay?', 'We accept Visa, Mastercard, American Express, wire transfer, and cash in USD or MXN. A card terminal can be brought to the handoff.'],
      ['Can you deliver to my hotel or villa?', 'Yes. We coordinate with you for lobby, suite, villa gate, or another property-approved handoff point.'],
      ['Do you deliver to yachts?', 'Yes, at Cabo San Lucas Marina and Puerto Los Cabos. Please share your slip number and captain or crew contact.'],
      ['Does your team speak English?', 'Yes. Our entire guest-support and delivery team is bilingual in English and Spanish.'],
      ['Is there a minimum order?', 'There is no minimum. The delivery fee depends on your zone and time and is disclosed upfront.'],
    ],
  },
  final: { eyebrow: 'Ready when you are', title: 'Let us get you sorted.', text: 'One WhatsApp message is all it takes.', cta: 'Start on WhatsApp', waText: 'Hello! I need help from Pharmacy Cabo.' },
  footer: { line: 'Store 8AM–6PM · Delivery 24/7 · Los Cabos, B.C.S., Mexico', rights: 'All rights reserved.' },
  categories: {
    'skin-care': 'Skin Care',
    'sun-care': 'Sun Care',
    vitamins: 'Vitamins & Supplements',
    baby: 'Baby Care',
    pharmacy: 'Pharmacy',
    'personal-care': 'Personal Care',
    food: 'Food & Beverages',
    other: 'Other',
  } as Record<string, string>,
  switchLabel: 'Español',
};

type Dict = typeof en;

const es: Dict = {
  meta: {
    title: 'Pharmacy Cabo | Concierge Médico 24/7 en Los Cabos',
    description:
      'Entrega discreta y bilingüe para hoteles, villas y yates en Los Cabos. Disponible 24/7. Contacta a Pharmacy Cabo por WhatsApp.',
  },
  nav: { services: 'Servicios', how: 'Cómo funciona', coverage: 'Cobertura', products: 'Productos', faq: 'Preguntas' },
  cta: { whatsapp: 'WhatsApp ahora', call: 'Llamar', message: 'Escríbenos por WhatsApp', concierge: 'Llama a nuestro concierge' },
  status: 'Disponible ahora · Repartidores listos',
  hours: 'Tienda 8AM–6PM · Coordinación de entregas 24/7',
  brandTag: 'CONCIERGE DE ENTREGA PREMIUM',
  hero: {
    badge: 'Equipo bilingüe disponible ahora',
    title: 'Concierge de farmacia y bienestar, entregado con cuidado premium.',
    text: 'Entrega discreta y bilingüe de artículos de farmacia, cuidado personal, bienestar y pedidos especiales en todo Los Cabos. De confianza para hoteles de lujo, villas privadas y yates — todo coordinado con un solo mensaje de WhatsApp.',
    chips: ['Sin app', 'Efectivo o tarjeta al recibir', 'Equipo bilingüe'],
    waText: '¡Hola! Necesito una entrega discreta en Los Cabos.',
  },
  desk: {
    title: 'Mesa de entregas en Los Cabos',
    sub: 'Ayuda rápida y discreta donde te hospedes.',
    stats: [
      ['24/7', 'Coordinación de entregas'],
      ['30–90', 'Minutos estimados'],
      ['3', 'Zonas de lujo'],
    ],
    handoff: 'Hoteles · Villas · Yates',
    handoffSub: 'Entrega en lobby, suite, portón de villa o muelle.',
  },
  standard: {
    eyebrow: 'El estándar Pharmacy Cabo',
    title: 'Coordinación clara con el trato de un hotel de lujo.',
    text: 'Cada pedido lo atiende un equipo bilingüe real, con precios claros, coordinación discreta y entrega adaptada a tu propiedad o embarcación.',
    items: [
      ['Equipo bilingüe', 'Atención en inglés y español'],
      ['Entrega discreta', 'Lobby, suite o villa'],
      ['Zonas de lujo', 'Palmilla, Pedregal, Corredor'],
      ['Servicio a yates', 'Abastecimiento en marina bajo pedido'],
    ],
  },
  zones: [
    ['CSL · Cabo San Lucas', 'Médano y resorts urbanos', '30–45 minutos'],
    ['COR · Corredor Turístico', 'Franja de hoteles premium', '45–60 minutos'],
    ['SJD · San José del Cabo', 'Cobertura extendida', '60–75 minutos'],
  ],
  typical: 'Entrega típica',
  services: {
    eyebrow: 'Todo coordinado en un solo lugar',
    title: 'Servicios de concierge para tu estancia.',
    text: 'Dinos qué necesitas y dónde estás. Confirmamos disponibilidad, compartimos precios claros y coordinamos la entrega.',
    items: [
      ['Farmacia y bienestar', 'Productos de libre venta, primeros auxilios, cuidado personal, hidratación y bienestar diario, coordinados por nuestro equipo bilingüe.'],
      ['Esenciales de playa', 'Protector solar biodegradable, aloe, rash guards, sombreros, hidratación y artículos de comodidad para viaje.'],
      ['Alimentos y bebidas', 'Despensa, mezcladores premium, licores, botanas y provisiones frescas para tu villa, yate o minibar.'],
      ['Pedidos especiales', 'Artículos de viaje olvidados, cuidado personal, encargos de conveniencia y necesidades de cada huésped.'],
    ],
  },
  banner: {
    eyebrow: 'Entrega discreta en hotel, villa y yate',
    title: 'Un servicio premium que se siente sencillo.',
    text: 'Desde el primer mensaje de WhatsApp hasta la entrega final, nuestro equipo bilingüe coordina cada detalle con el cuidado que esperan los huéspedes y concierges de Los Cabos.',
    cta: 'Coordinar una entrega',
    waText: '¡Hola! Necesito una entrega discreta en Los Cabos.',
  },
  products: {
    eyebrow: 'Esenciales del día a día',
    title: 'Bienestar de viaje y cuidado personal.',
    text: 'Explora productos de libre venta, protección solar, hidratación, cuidado personal y bienestar. La disponibilidad se confirma antes de la entrega.',
    all: 'Todos',
    order: 'Pedir por WhatsApp',
    soldOut: 'Consultar disponibilidad',
    inStock: 'Disponible',
    search: 'Buscar productos…',
    none: 'Ningún producto coincide con tu búsqueda.',
    viewAll: 'Ver todos los productos',
    count: (n: number) => `${n} productos`,
    waText: (name: string) => `¡Hola! Quisiera pedir: ${name}`,
    noPrice: 'Precio por consulta',
  },
  steps: {
    eyebrow: 'Sencillo desde el primer mensaje',
    title: 'Cómo funciona.',
    text: 'Sin app, sin pagos complicados y sin dudas sobre la entrega.',
    items: [
      ['Escríbenos', 'Contáctanos por WhatsApp o teléfono y cuéntanos qué necesitas, además de tu propiedad, suite, portón o posición en marina.'],
      ['Confirma y paga', 'Recibe una cotización clara con fotos. Paga con tarjeta, transferencia o efectivo en USD o MXN.'],
      ['Recibe con discreción', 'Coordinamos la entrega en tu hotel, villa o yate, normalmente en 30–90 minutos.'],
    ],
  },
  trusted: en.trusted,
  coverage: {
    eyebrow: 'Resumen de cobertura',
    title: 'De Cabo San Lucas a San José del Cabo.',
    text: 'El costo de envío depende de la zona y la hora. Siempre te informamos el total y la hora estimada antes del despacho.',
    cta: 'Confirmar mi ubicación',
    waText: '¡Hola! ¿Pueden entregar en mi ubicación en Los Cabos?',
    items: [
      ['Cabo San Lucas / Médano', 'Zona urbana y de resorts', '30–45 min'],
      ['Pedregal / Marina', 'Hoteles, villas y yates', '30–45 min'],
      ['Corredor Turístico', 'Franja de hoteles premium', '45–60 min'],
      ['Palmilla / Querencia', 'Zona de resorts y residencial', '45–60 min'],
      ['San José del Cabo', 'Cobertura extendida', '60–75 min'],
      ['Diamante / Quivira', 'Zona de lujo exterior', '60–90 min'],
    ],
  },
  reviews: {
    eyebrow: 'Con la confianza de los huéspedes de Cabo',
    title: 'Un servicio que se recuerda.',
    items: [
      ['Nos dimos cuenta de que olvidamos varios artículos de viaje. Respondieron en menos de un minuto y lo tuvimos en la villa en 40. Excelente servicio.', 'Jennifer M.', 'Pedregal · Viaje familiar'],
      ['Abastecimos nuestro yate con ellos tres veces esta temporada. Confiables, profesionales y traen exactamente lo que pides.', 'David R.', 'Marina CSL · Renta de yate'],
      ['La discreción importa. Nuestro concierge los recomienda y ahora entiendo por qué — sin incomodidades, sin preguntas, solo servicio.', 'Sarah K.', 'Palmilla · Huésped frecuente'],
    ],
  },
  faq: {
    eyebrow: 'Respuestas útiles',
    title: 'Preguntas frecuentes.',
    items: [
      ['¿Están disponibles 24/7?', 'Nuestra tienda opera de 8AM a 6PM, y la coordinación de entregas está disponible todo el día para necesidades de última hora.'],
      ['¿Cómo puedo pagar?', 'Aceptamos Visa, Mastercard, American Express, transferencia y efectivo en USD o MXN. Podemos llevar terminal de tarjeta a la entrega.'],
      ['¿Entregan en mi hotel o villa?', 'Sí. Coordinamos contigo la entrega en lobby, suite, portón de villa u otro punto aprobado por la propiedad.'],
      ['¿Entregan en yates?', 'Sí, en la Marina de Cabo San Lucas y Puerto Los Cabos. Comparte tu número de muelle y el contacto del capitán o tripulación.'],
      ['¿Su equipo habla inglés?', 'Sí. Todo nuestro equipo de atención y entrega es bilingüe en inglés y español.'],
      ['¿Hay pedido mínimo?', 'No hay mínimo. El costo de envío depende de tu zona y horario, y se informa por adelantado.'],
    ],
  },
  final: { eyebrow: 'Listos cuando tú lo estés', title: 'Déjanos resolverlo.', text: 'Un solo mensaje de WhatsApp es todo lo que necesitas.', cta: 'Empezar en WhatsApp', waText: '¡Hola! Necesito ayuda de Pharmacy Cabo.' },
  footer: { line: 'Tienda 8AM–6PM · Entregas 24/7 · Los Cabos, B.C.S., México', rights: 'Todos los derechos reservados.' },
  categories: {
    'skin-care': 'Cuidado de la piel',
    'sun-care': 'Protección solar',
    vitamins: 'Vitaminas y suplementos',
    baby: 'Bebé',
    pharmacy: 'Farmacia',
    'personal-care': 'Cuidado personal',
    food: 'Alimentos y bebidas',
    other: 'Otros',
  },
  switchLabel: 'English',
};

export const dictionaries: Record<Locale, Dict> = { en, es };
export const getDict = (l: Locale) => dictionaries[l];
export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
