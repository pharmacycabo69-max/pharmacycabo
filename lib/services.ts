import type { Locale } from './i18n';

export const serviceIds = ['delivery', 'ivTherapy', 'doctorVisit', 'videoConsultation'] as const;
export type ServiceId = (typeof serviceIds)[number];

export const serviceSlugs: Record<Locale, Record<ServiceId, string>> = {
  en: { delivery: 'delivery', ivTherapy: 'iv-therapy', doctorVisit: 'doctor-visit', videoConsultation: 'video-consultation' },
  es: { delivery: 'entrega', ivTherapy: 'sueroterapia', doctorVisit: 'consulta-medica', videoConsultation: 'videoconsulta' },
};

export const serviceIcons: Record<ServiceId, string> = {
  delivery: '✚',
  ivTherapy: '💧',
  doctorVisit: '🩺',
  videoConsultation: '📱',
};

export const servicePath = (lang: Locale, id: ServiceId) => `/${lang}/${serviceSlugs[lang][id]}/`;

export function serviceFromSlug(lang: Locale, slug: string): ServiceId | undefined {
  return serviceIds.find((id) => serviceSlugs[lang][id] === slug);
}

export type ServiceContent = {
  nav: string;
  card: string;
  h1: string;
  intro: string;
  notice: string;
  includes: string[];
  steps: [string, string][];
  /** 'delivery' = use the real delivery ETAs; 'sameDay' = same-day, confirmed at booking */
  zoneTiming: 'delivery' | 'sameDay';
  faq: [string, string][];
  waText: string;
};

const OTC_EN = 'We only deliver over-the-counter products. Prescription medication is not available through this service.';
const OTC_ES = 'Solo entregamos productos de libre venta. Los medicamentos con receta no están disponibles a través de este servicio.';
const DOC_EN = 'Consultations are provided by licensed physicians. For emergencies, call 911.';
const DOC_ES = 'Las consultas son brindadas por médicos con licencia. En caso de emergencia, llama al 911.';

export const serviceContent: Record<Locale, Record<ServiceId, ServiceContent>> = {
  en: {
    delivery: {
      nav: 'Pharmacy Delivery',
      card: 'Licensed pharmacy delivery to your hotel, villa or yacht in 30 to 90 minutes.',
      h1: 'Licensed pharmacy delivery to your hotel, villa or yacht',
      intro:
        'Licensed pharmacy delivery to your hotel, villa or yacht. Over-the-counter medicine, first-aid supplies, sun care and personal care items, typically delivered in 30 to 90 minutes across Cabo San Lucas and San José del Cabo. Coordinated by a bilingual team through WhatsApp.',
      notice: OTC_EN,
      includes: [
        'Over-the-counter medicine',
        'First-aid supplies',
        'Sun care and personal care items',
        'Delivery to your hotel lobby, suite, villa gate or marina slip',
      ],
      steps: [
        ['Message us', 'Tell us what you need and where you are staying by WhatsApp or phone.'],
        ['Confirm & pay', 'Receive a clear quote with product photos and the delivery fee. Pay by card, transfer, or cash in USD or MXN.'],
        ['Receive your order', 'We deliver to your hotel, villa, or yacht, typically within 30–90 minutes.'],
      ],
      zoneTiming: 'delivery',
      faq: [
        ['What can I order?', 'Over-the-counter products only: medicine, first-aid supplies, sun care, and personal care items. Prescription medication is not available through this service.'],
        ['How long does delivery take?', 'Typically 30 to 90 minutes depending on your zone and the time of day. We confirm the estimated arrival before dispatch.'],
        ['How much is the delivery fee?', 'The fee depends on zone and time and is always disclosed before dispatch. There is no minimum order.'],
      ],
      waText: "Hi, I'd like to order over-the-counter products for delivery to my hotel or villa in Los Cabos.",
    },
    ivTherapy: {
      nav: 'IV Therapy',
      card: 'Mobile IV hydration therapy at your villa or hotel suite, administered by licensed nurses.',
      h1: 'Mobile IV hydration therapy in Los Cabos',
      intro:
        'Mobile IV hydration therapy at your villa or hotel suite, administered by licensed nurses. Hydration, vitamins and electrolytes for travelers recovering from sun, long flights or a late night.',
      notice: 'A brief health screening is completed before every session.',
      includes: [
        'IV hydration with fluids and electrolytes',
        'Vitamin options reviewed with you during the health screening',
        'Administered by licensed nurses at your villa or hotel suite',
        'A brief health screening before every session',
      ],
      steps: [
        ['Message us', 'Share your location, preferred time, and what you are looking for.'],
        ['Health screening', 'A brief health screening is completed before every session to confirm IV therapy is appropriate for you.'],
        ['Your session', 'A licensed nurse comes to your villa or hotel suite and administers your session.'],
      ],
      zoneTiming: 'sameDay',
      faq: [
        ['Who administers the therapy?', 'Sessions are administered by licensed nurses at your villa or hotel suite.'],
        ['Is a health screening required?', 'Yes. A brief health screening is completed before every session. If IV therapy is not suitable for you, we will let you know.'],
        ['How do I book?', 'Message us on WhatsApp with your location and preferred time. Same-day availability depends on the schedule and is confirmed when you book.'],
      ],
      waText: "Hi, I'd like to book IV therapy at my villa.",
    },
    doctorVisit: {
      nav: 'In-Person Consultation',
      card: 'Bilingual doctor visits at your hotel, villa or yacht, with same-day appointments.',
      h1: 'Bilingual doctor visits at your hotel, villa or yacht',
      intro:
        'Bilingual doctor visits at your hotel, villa or yacht anywhere in Los Cabos. Same-day appointments for travel-related concerns.',
      notice: DOC_EN,
      includes: [
        'In-person visit from a bilingual, licensed physician',
        'Same-day appointments for travel-related concerns',
        'Visits at your hotel, villa or yacht anywhere in Los Cabos',
        'Consultation fee shared with you before the visit',
      ],
      steps: [
        ['Message us', 'Tell us where you are staying and what you need help with.'],
        ['Confirm your visit', 'We confirm the appointment time and the consultation fee.'],
        ['Doctor visit', 'A licensed physician visits you at your hotel, villa, or yacht.'],
      ],
      zoneTiming: 'sameDay',
      faq: [
        ['Is the doctor bilingual?', 'Yes. Visits are available in English and Spanish.'],
        ['Can I get a same-day appointment?', 'Same-day appointments are available for travel-related concerns, subject to availability. We confirm the time when you book.'],
        ['What if it is an emergency?', 'For emergencies, call 911. This service is not a substitute for emergency care.'],
      ],
      waText: "Hi, I'd like to book a doctor visit at my hotel in Los Cabos.",
    },
    videoConsultation: {
      nav: 'Video Consultation',
      card: 'Talk to a bilingual doctor from your phone in minutes, with same-day availability.',
      h1: 'Video consultation with a bilingual doctor',
      intro:
        'Talk to a bilingual doctor from your phone in minutes. Same-day video consultations for travelers in Los Cabos, with follow-up delivery of over-the-counter products if needed.',
      notice: DOC_EN,
      includes: [
        'Video call with a bilingual, licensed physician',
        'Same-day video consultations for travelers in Los Cabos',
        'Works from your hotel, villa or yacht',
        'Follow-up delivery of over-the-counter products if needed',
      ],
      steps: [
        ['Message us', 'Tell us what you need help with by WhatsApp.'],
        ['Confirm & connect', 'We confirm the consultation fee and send you the video link.'],
        ['Talk to the doctor', 'Speak with a licensed physician in English or Spanish, and order over-the-counter follow-up if needed.'],
      ],
      zoneTiming: 'delivery',
      faq: [
        ['What do I need?', 'A phone or computer with a camera and a stable internet connection.'],
        ['Can I get products delivered afterwards?', 'Yes. Over-the-counter products can be delivered to your hotel or villa. Prescription medication is not available through our delivery service.'],
        ['What if it is an emergency?', 'For emergencies, call 911. Video consultations are not a substitute for emergency care.'],
      ],
      waText: "Hi, I'd like to book a video consultation with a doctor.",
    },
  },
  es: {
    delivery: {
      nav: 'Entrega de farmacia',
      card: 'Entrega de farmacia con licencia en tu hotel, villa o yate en 30 a 90 minutos.',
      h1: 'Farmacia con licencia a domicilio en tu hotel, villa o yate',
      intro:
        'Entrega de farmacia con licencia en tu hotel, villa o yate. Medicamentos de libre venta, artículos de primeros auxilios, protección solar y cuidado personal, normalmente entregados en 30 a 90 minutos en Cabo San Lucas y San José del Cabo. Coordinado por un equipo bilingüe por WhatsApp.',
      notice: OTC_ES,
      includes: [
        'Medicamentos de libre venta',
        'Artículos de primeros auxilios',
        'Protección solar y artículos de cuidado personal',
        'Entrega en lobby, suite, portón de villa o muelle',
      ],
      steps: [
        ['Escríbenos', 'Dinos qué necesitas y dónde te hospedas por WhatsApp o teléfono.'],
        ['Confirma y paga', 'Recibe una cotización clara con fotos y el costo de envío. Paga con tarjeta, transferencia o efectivo en USD o MXN.'],
        ['Recibe tu pedido', 'Entregamos en tu hotel, villa o yate, normalmente en 30–90 minutos.'],
      ],
      zoneTiming: 'delivery',
      faq: [
        ['¿Qué puedo pedir?', 'Solo productos de libre venta: medicamentos, primeros auxilios, protección solar y cuidado personal. Los medicamentos con receta no están disponibles a través de este servicio.'],
        ['¿Cuánto tarda la entrega?', 'Normalmente de 30 a 90 minutos según tu zona y la hora del día. Confirmamos la hora estimada antes del despacho.'],
        ['¿Cuánto cuesta el envío?', 'Depende de la zona y la hora, y siempre se informa antes del despacho. No hay pedido mínimo.'],
      ],
      waText: 'Hola, quisiera pedir productos de libre venta a mi hotel o villa en Los Cabos.',
    },
    ivTherapy: {
      nav: 'Sueroterapia',
      card: 'Sueroterapia intravenosa de hidratación en tu villa o suite, aplicada por enfermeras con licencia.',
      h1: 'Sueroterapia de hidratación a domicilio en Los Cabos',
      intro:
        'Sueroterapia intravenosa de hidratación en tu villa o suite de hotel, aplicada por enfermeras con licencia. Hidratación, vitaminas y electrolitos para viajeros que se recuperan del sol, de vuelos largos o de una noche larga.',
      notice: 'Antes de cada sesión se realiza una breve evaluación de salud.',
      includes: [
        'Hidratación intravenosa con líquidos y electrolitos',
        'Opciones de vitaminas revisadas contigo durante la evaluación de salud',
        'Aplicada por enfermeras con licencia en tu villa o suite',
        'Breve evaluación de salud antes de cada sesión',
      ],
      steps: [
        ['Escríbenos', 'Comparte tu ubicación, el horario que prefieres y lo que buscas.'],
        ['Evaluación de salud', 'Antes de cada sesión se realiza una breve evaluación para confirmar que la sueroterapia es adecuada para ti.'],
        ['Tu sesión', 'Una enfermera con licencia llega a tu villa o suite y aplica tu sesión.'],
      ],
      zoneTiming: 'sameDay',
      faq: [
        ['¿Quién aplica la terapia?', 'Las sesiones las aplican enfermeras con licencia en tu villa o suite de hotel.'],
        ['¿Es obligatoria la evaluación de salud?', 'Sí. Antes de cada sesión se realiza una breve evaluación. Si la sueroterapia no es adecuada para ti, te lo diremos.'],
        ['¿Cómo reservo?', 'Escríbenos por WhatsApp con tu ubicación y horario preferido. La disponibilidad el mismo día depende de la agenda y se confirma al reservar.'],
      ],
      waText: 'Hola, quisiera reservar sueroterapia en mi villa.',
    },
    doctorVisit: {
      nav: 'Consulta médica presencial',
      card: 'Consultas médicas bilingües en tu hotel, villa o yate, con citas el mismo día.',
      h1: 'Consultas médicas bilingües en tu hotel, villa o yate',
      intro:
        'Consultas médicas bilingües en tu hotel, villa o yate en cualquier punto de Los Cabos. Citas el mismo día para molestias relacionadas con el viaje.',
      notice: DOC_ES,
      includes: [
        'Visita presencial de un médico bilingüe con licencia',
        'Citas el mismo día para molestias relacionadas con el viaje',
        'Visitas en tu hotel, villa o yate en cualquier punto de Los Cabos',
        'Costo de la consulta informado antes de la visita',
      ],
      steps: [
        ['Escríbenos', 'Dinos dónde te hospedas y en qué necesitas ayuda.'],
        ['Confirma tu visita', 'Confirmamos el horario de la cita y el costo de la consulta.'],
        ['Visita del médico', 'Un médico con licencia te visita en tu hotel, villa o yate.'],
      ],
      zoneTiming: 'sameDay',
      faq: [
        ['¿El médico es bilingüe?', 'Sí. Las consultas están disponibles en inglés y español.'],
        ['¿Puedo tener una cita el mismo día?', 'Hay citas el mismo día para molestias relacionadas con el viaje, sujetas a disponibilidad. Confirmamos el horario al reservar.'],
        ['¿Y si es una emergencia?', 'En caso de emergencia, llama al 911. Este servicio no sustituye la atención de emergencias.'],
      ],
      waText: 'Hola, quisiera agendar una consulta médica en mi hotel en Los Cabos.',
    },
    videoConsultation: {
      nav: 'Videoconsulta',
      card: 'Habla con un médico bilingüe desde tu teléfono en minutos, con disponibilidad el mismo día.',
      h1: 'Videoconsulta con un médico bilingüe',
      intro:
        'Habla con un médico bilingüe desde tu teléfono en minutos. Videoconsultas el mismo día para viajeros en Los Cabos, con entrega posterior de productos de libre venta si lo necesitas.',
      notice: DOC_ES,
      includes: [
        'Videollamada con un médico bilingüe con licencia',
        'Videoconsultas el mismo día para viajeros en Los Cabos',
        'Funciona desde tu hotel, villa o yate',
        'Entrega posterior de productos de libre venta si lo necesitas',
      ],
      steps: [
        ['Escríbenos', 'Cuéntanos por WhatsApp en qué necesitas ayuda.'],
        ['Confirma y conéctate', 'Confirmamos el costo de la consulta y te enviamos el enlace de la videollamada.'],
        ['Habla con el médico', 'Conversa con un médico con licencia en inglés o español y pide productos de libre venta si los necesitas.'],
      ],
      zoneTiming: 'delivery',
      faq: [
        ['¿Qué necesito?', 'Un teléfono o computadora con cámara y una conexión a internet estable.'],
        ['¿Puedo recibir productos después?', 'Sí. Podemos entregar productos de libre venta en tu hotel o villa. Los medicamentos con receta no están disponibles en nuestro servicio de entrega.'],
        ['¿Y si es una emergencia?', 'En caso de emergencia, llama al 911. Las videoconsultas no sustituyen la atención de emergencias.'],
      ],
      waText: 'Hola, quisiera agendar una videoconsulta con un médico.',
    },
  },
};

export const servicePageLabels: Record<
  Locale,
  {
    included: string; how: string; coverage: string; coverageNote: string; sameDay: string;
    pricing: string; pricingNote: string; faq: string; ctaTitle: string; ctaText: string;
    book: string; allServices: string; videoZonesNote: string;
  }
> = {
  en: {
    included: "What's included",
    how: 'How it works',
    coverage: 'Coverage & timing',
    coverageNote: 'Cabo San Lucas to San José del Cabo.',
    sameDay: 'Same day · confirmed when booking',
    pricing: 'Pricing',
    pricingNote: 'Your final price is confirmed by WhatsApp before you book.',
    faq: 'Frequently asked questions',
    ctaTitle: 'Ready when you are',
    ctaText: 'Send us a WhatsApp message and our bilingual team will take it from there.',
    book: 'Message us on WhatsApp',
    allServices: 'All services',
    videoZonesNote: 'Video consultations work from anywhere. Times below are for follow-up delivery of over-the-counter products.',
  },
  es: {
    included: 'Qué incluye',
    how: 'Cómo funciona',
    coverage: 'Cobertura y tiempos',
    coverageNote: 'De Cabo San Lucas a San José del Cabo.',
    sameDay: 'El mismo día · se confirma al reservar',
    pricing: 'Precios',
    pricingNote: 'Te confirmamos el precio final por WhatsApp antes de reservar.',
    faq: 'Preguntas frecuentes',
    ctaTitle: 'Listos cuando tú lo estés',
    ctaText: 'Envíanos un mensaje por WhatsApp y nuestro equipo bilingüe se encarga del resto.',
    book: 'Escríbenos por WhatsApp',
    allServices: 'Todos los servicios',
    videoZonesNote: 'La videoconsulta funciona desde cualquier lugar. Los tiempos son para la entrega posterior de productos de libre venta.',
  },
};
