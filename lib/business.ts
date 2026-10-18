// Datos legales de la farmacia. Reemplaza cada valor entre corchetes con el dato real.
// Los valores que empiezan con "[" se muestran resaltados en el sitio como pendientes.
export const business = {
  legalName: 'CVU Pharmacy',
  address: 'FCO. I. MADERO CENTRO LOS CABOS CABO SAN LUCAS BAJA CALIFORNIA SUR 23450',
  cofepris: '030400066',
  responsibleName: 'ROSIBEL NUÑEZ ROJO',
  responsibleLicense: '7408277',
  storeHours: '9:00 AM – 10:00 PM',
  privacyEmail: 'pharmacycabo69@gmail.com',
};

export const isPlaceholder = (v: string) => v.startsWith('[');

// Precios de servicios: reemplaza "___" con el monto real (ej. 'From $45 USD').
export const prices = {
  delivery: 'From $___ USD',
  ivTherapy: 'From $___ USD',
  doctorVisit: 'From $___ USD',
  videoConsultation: 'From $___ USD',
};

export const SITE_URL = 'https://pharmacycabo.com';
export const LEGAL_NAME = 'CVU Pharmacy';
