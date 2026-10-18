// Datos legales de la farmacia. Reemplaza cada valor entre corchetes con el dato real.
// Los valores que empiezan con "[" se muestran resaltados en el sitio como pendientes.
export const business = {
  legalName: '[RAZÓN SOCIAL — completar]',
  address: '[DIRECCIÓN FÍSICA COMPLETA — completar]',
  cofepris: '[No. DE LICENCIA SANITARIA / AVISO DE FUNCIONAMIENTO COFEPRIS — completar]',
  responsibleName: '[NOMBRE DEL RESPONSABLE SANITARIO — completar]',
  responsibleLicense: '[CÉDULA PROFESIONAL — completar]',
  storeHours: '[HORARIO DE LA FARMACIA FÍSICA — completar]',
  privacyEmail: '[CORREO PARA PRIVACIDAD — completar]',
};

export const isPlaceholder = (v: string) => v.startsWith('[');
