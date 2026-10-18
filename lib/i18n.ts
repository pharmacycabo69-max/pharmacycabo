export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const WHATSAPP = '526242261023';
export const PHONE_DISPLAY = '+52 624 226 1023';
export const PHONE_TEL = '+526242261023';

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

const en = {
  meta: {
    title: 'Pharmacy Cabo | Licensed Pharmacy Delivery in Los Cabos',
    description:
      'Licensed pharmacy in Los Cabos. Over-the-counter medicine, personal care and first-aid supplies delivered to hotels, villas and marinas in Cabo San Lucas and San José del Cabo.',
  },
  nav: { services: 'Services', how: 'How it works', coverage: 'Coverage', products: 'Products', faq: 'FAQ' },
  cta: { whatsapp: 'WhatsApp now', call: 'Call', message: 'Message us on WhatsApp', concierge: 'Call our concierge' },
  status: 'Available now · Drivers on standby',
  hours: 'Store 8AM–6PM · Delivery coordination 24/7',
  brandTag: 'LICENSED PHARMACY DELIVERY',
  hero: {
    badge: 'Bilingual team available now',
    title: 'Licensed pharmacy delivery in Los Cabos.',
    text: 'Over-the-counter medicine, personal care, and first-aid supplies delivered by our bilingual team to hotels, villas, and marinas in Cabo San Lucas and San José del Cabo. Fast, reliable service with transparent pricing — order by WhatsApp or phone.',
    chips: ['No app required', 'Cash or card on delivery', 'Bilingual team'],
    waText: 'Hello! I would like to order over-the-counter products for delivery in Los Cabos.',
  },
  desk: {
    title: 'Los Cabos delivery desk',
    sub: 'Fast, reliable pharmacy help wherever you are staying.',
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
    text: 'Every request is handled by a real bilingual team with transparent pricing, reliable coordination, and delivery adapted to your property or vessel.',
    items: [
      ['Bilingual Team', 'English & Spanish guest support'],
      ['Reliable Delivery', 'Lobby, suite, or villa handoff'],
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
      ['Food & Beverages', 'Groceries, snacks, hydration, and fresh provisions for your villa, yacht, or room.'],
      ['Concierge Requests', 'Forgotten travel essentials, personal-care items, convenience requests, and guest-specific needs.'],
    ],
  },
  banner: {
    eyebrow: 'Licensed pharmacy delivery to hotels, villas & marinas',
    title: 'Premium service that feels effortless.',
    text: 'From the first WhatsApp message to the final handoff, our bilingual team coordinates every detail with the care expected by Los Cabos guests and concierges.',
    cta: 'Arrange a delivery',
    waText: 'Hello! I would like to order over-the-counter products for delivery in Los Cabos.',
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
    otcNote: 'We only deliver over-the-counter products. Prescription medication is not available through this service.',
  },
  steps: {
    eyebrow: 'Simple from the first message',
    title: 'How it works.',
    text: 'No app, no complicated checkout, and no uncertainty about the handoff.',
    items: [
      ['Message us', 'Reach us by WhatsApp or phone and share what you need, plus your property, suite, gate, or marina slip.'],
      ['Confirm & pay', 'Receive a clear quote with product photos. Pay by card, transfer, or cash in USD or MXN.'],
      ['Receive your order', 'We coordinate delivery to your hotel, villa, or yacht, typically within 30–90 minutes.'],
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
  licensed: {
    eyebrow: 'Licensed pharmacy',
    title: 'A licensed pharmacy you can verify.',
    text: 'Pharmacy Cabo operates as a licensed pharmacy in Los Cabos, B.C.S., Mexico. We deliver over-the-counter products only.',
    labels: {
      legalName: 'Legal name',
      address: 'Physical address',
      cofepris: 'COFEPRIS sanitary license / operating notice no.',
      responsibleName: 'Responsible pharmacist',
      responsibleLicense: 'Professional license (cédula)',
      storeHours: 'Pharmacy hours',
    },
  },
  legal: {
    link: 'Privacy & Terms',
    title: 'Privacy Notice & Terms',
    draft: 'Basic template — have it reviewed by your legal advisor before relying on it.',
    updated: 'Last updated',
    privacy: {
      title: 'Privacy Notice',
      sections: [
        ['Who is responsible', 'The data controller is the legal entity listed in the "Licensed pharmacy" section of this site.'],
        ['Data we collect', 'Name, phone number, delivery address or property/marina details, and the contents of your orders and messages sent to us by WhatsApp, phone, or this website.'],
        ['How we use it', 'To confirm availability and pricing, arrange and complete deliveries, provide customer support, and meet our legal and sanitary obligations. We do not sell your personal data.'],
        ['Sharing', 'We share data only with the delivery and payment providers needed to fulfil your order, and with authorities when required by law.'],
        ['Your rights', 'You may access, rectify, cancel, or object to the use of your data (ARCO rights) at any time by writing to the privacy contact below.'],
        ['Contact', 'Privacy contact'],
        ['Changes', 'We may update this notice. The latest version is always published on this page.'],
      ],
    },
    terms: {
      title: 'Terms of Service',
      sections: [
        ['Over-the-counter products only', 'We only deliver over-the-counter products. Prescription medication is not available through this service. We do not sell or deliver controlled substances.'],
        ['Orders and availability', 'Orders are placed by WhatsApp or phone. Availability and final pricing are confirmed with you before dispatch.'],
        ['Pricing and payment', 'Prices are quoted in USD or MXN. Delivery fees depend on zone and time and are disclosed before dispatch. Payment is accepted by card, transfer, or cash.'],
        ['Delivery', 'Delivery times are estimates and may vary with traffic, weather, and location. Someone must be available to receive the order at the agreed handoff point.'],
        ['Returns', 'For health and safety reasons, products cannot be returned once delivered, except if they are damaged, defective, or incorrect. Contact us promptly if that happens.'],
        ['Health information', 'Information on this site is not medical advice. Read product labels and consult a healthcare professional or our responsible pharmacist if you have questions.'],
        ['Governing law', 'These terms are governed by the laws of Mexico and the courts of Baja California Sur.'],
      ],
    },
  },
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
    title: 'Pharmacy Cabo | Farmacia con licencia a domicilio en Los Cabos',
    description:
      'Farmacia con licencia en Los Cabos. Medicamentos de libre venta, cuidado personal y artículos de primeros auxilios a domicilio en hoteles, villas y marinas de Cabo San Lucas y San José del Cabo.',
  },
  nav: { services: 'Servicios', how: 'Cómo funciona', coverage: 'Cobertura', products: 'Productos', faq: 'Preguntas' },
  cta: { whatsapp: 'WhatsApp ahora', call: 'Llamar', message: 'Escríbenos por WhatsApp', concierge: 'Llama a nuestro concierge' },
  status: 'Disponible ahora · Repartidores listos',
  hours: 'Tienda 8AM–6PM · Coordinación de entregas 24/7',
  brandTag: 'FARMACIA CON LICENCIA A DOMICILIO',
  hero: {
    badge: 'Equipo bilingüe disponible ahora',
    title: 'Farmacia con licencia a domicilio en Los Cabos.',
    text: 'Medicamentos de libre venta, cuidado personal y artículos de primeros auxilios entregados por nuestro equipo bilingüe en hoteles, villas y marinas de Cabo San Lucas y San José del Cabo. Servicio rápido y confiable, con precios transparentes — pide por WhatsApp o teléfono.',
    chips: ['Sin app', 'Efectivo o tarjeta al recibir', 'Equipo bilingüe'],
    waText: '¡Hola! Quisiera pedir productos de libre venta a domicilio en Los Cabos.',
  },
  desk: {
    title: 'Mesa de entregas en Los Cabos',
    sub: 'Ayuda de farmacia rápida y confiable donde te hospedes.',
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
    text: 'Cada pedido lo atiende un equipo bilingüe real, con precios transparentes, coordinación confiable y entrega adaptada a tu propiedad o embarcación.',
    items: [
      ['Equipo bilingüe', 'Atención en inglés y español'],
      ['Entrega confiable', 'Lobby, suite o villa'],
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
      ['Alimentos y bebidas', 'Despensa, botanas, hidratación y provisiones frescas para tu villa, yate o habitación.'],
      ['Pedidos especiales', 'Artículos de viaje olvidados, cuidado personal, encargos de conveniencia y necesidades de cada huésped.'],
    ],
  },
  banner: {
    eyebrow: 'Farmacia con licencia a domicilio en hoteles, villas y marinas',
    title: 'Un servicio premium que se siente sencillo.',
    text: 'Desde el primer mensaje de WhatsApp hasta la entrega final, nuestro equipo bilingüe coordina cada detalle con el cuidado que esperan los huéspedes y concierges de Los Cabos.',
    cta: 'Coordinar una entrega',
    waText: '¡Hola! Quisiera pedir productos de libre venta a domicilio en Los Cabos.',
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
    otcNote: 'Solo entregamos productos de libre venta. Los medicamentos con receta no están disponibles a través de este servicio.',
  },
  steps: {
    eyebrow: 'Sencillo desde el primer mensaje',
    title: 'Cómo funciona.',
    text: 'Sin app, sin pagos complicados y sin dudas sobre la entrega.',
    items: [
      ['Escríbenos', 'Contáctanos por WhatsApp o teléfono y cuéntanos qué necesitas, además de tu propiedad, suite, portón o posición en marina.'],
      ['Confirma y paga', 'Recibe una cotización clara con fotos. Paga con tarjeta, transferencia o efectivo en USD o MXN.'],
      ['Recibe tu pedido', 'Coordinamos la entrega en tu hotel, villa o yate, normalmente en 30–90 minutos.'],
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
  licensed: {
    eyebrow: 'Farmacia con licencia',
    title: 'Una farmacia con licencia que puedes verificar.',
    text: 'Pharmacy Cabo opera como farmacia con licencia en Los Cabos, B.C.S., México. Entregamos únicamente productos de libre venta.',
    labels: {
      legalName: 'Razón social',
      address: 'Dirección física',
      cofepris: 'Licencia sanitaria / aviso de funcionamiento COFEPRIS no.',
      responsibleName: 'Responsable sanitario',
      responsibleLicense: 'Cédula profesional',
      storeHours: 'Horario de la farmacia',
    },
  },
  legal: {
    link: 'Privacidad y términos',
    title: 'Aviso de privacidad y términos',
    draft: 'Plantilla básica — pídele a tu asesor legal que la revise antes de usarla.',
    updated: 'Última actualización',
    privacy: {
      title: 'Aviso de privacidad',
      sections: [
        ['Responsable', 'El responsable del tratamiento de datos es la persona moral indicada en la sección "Farmacia con licencia" de este sitio.'],
        ['Datos que recabamos', 'Nombre, número de teléfono, dirección de entrega o datos de propiedad/marina, y el contenido de tus pedidos y mensajes enviados por WhatsApp, teléfono o este sitio.'],
        ['Para qué los usamos', 'Para confirmar disponibilidad y precios, coordinar y completar entregas, dar atención al cliente y cumplir nuestras obligaciones legales y sanitarias. No vendemos tus datos personales.'],
        ['Transferencias', 'Solo compartimos datos con los proveedores de entrega y pago necesarios para cumplir tu pedido, y con autoridades cuando la ley lo exige.'],
        ['Tus derechos', 'Puedes acceder, rectificar, cancelar u oponerte al uso de tus datos (derechos ARCO) en cualquier momento escribiendo al contacto de privacidad.'],
        ['Contacto', 'Contacto de privacidad'],
        ['Cambios', 'Podemos actualizar este aviso. La versión más reciente siempre estará publicada en esta página.'],
      ],
    },
    terms: {
      title: 'Términos del servicio',
      sections: [
        ['Solo productos de libre venta', 'Solo entregamos productos de libre venta. Los medicamentos con receta no están disponibles a través de este servicio. No vendemos ni entregamos sustancias controladas.'],
        ['Pedidos y disponibilidad', 'Los pedidos se hacen por WhatsApp o teléfono. La disponibilidad y el precio final se confirman contigo antes del despacho.'],
        ['Precios y pago', 'Los precios se cotizan en USD o MXN. El costo de envío depende de la zona y el horario y se informa antes del despacho. Aceptamos tarjeta, transferencia o efectivo.'],
        ['Entrega', 'Los tiempos de entrega son estimados y pueden variar por tráfico, clima y ubicación. Alguien debe recibir el pedido en el punto de entrega acordado.'],
        ['Devoluciones', 'Por razones de salud y seguridad, los productos no admiten devolución una vez entregados, salvo que estén dañados, defectuosos o sean incorrectos. Contáctanos de inmediato si ocurre.'],
        ['Información de salud', 'La información de este sitio no es consejo médico. Lee las etiquetas y consulta a un profesional de la salud o a nuestro responsable sanitario si tienes dudas.'],
        ['Ley aplicable', 'Estos términos se rigen por las leyes de México y los tribunales de Baja California Sur.'],
      ],
    },
  },
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
