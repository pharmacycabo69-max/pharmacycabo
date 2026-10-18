import { PHONE_DISPLAY, type Locale } from './i18n';
import { business, LEGAL_NAME, SITE_URL } from './business';
import { serviceContent, serviceIds, servicePath, type ServiceId } from './services';

const area = { '@type': 'City', name: 'Los Cabos' };

const orgBase = {
  name: 'Pharmacy Cabo',
  legalName: LEGAL_NAME,
  telephone: PHONE_DISPLAY,
  areaServed: area,
};

export function pharmacyJsonLd(lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Pharmacy',
    ...orgBase,
    url: `${SITE_URL}/${lang}/`,
    inLanguage: ['en', 'es'],
    address: { '@type': 'PostalAddress', streetAddress: business.address, addressCountry: 'MX' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '22:00',
    },
    makesOffer: serviceIds.map((id) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: serviceContent[lang][id].nav, url: `${SITE_URL}${servicePath(lang, id)}` },
    })),
  };
}

export function serviceJsonLd(lang: Locale, id: ServiceId) {
  const c = serviceContent[lang][id];
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: c.nav,
    description: c.intro,
    url: `${SITE_URL}${servicePath(lang, id)}`,
    areaServed: area,
    provider: {
      '@type': 'MedicalBusiness',
      ...orgBase,
      url: `${SITE_URL}/${lang}/`,
    },
  };
}
