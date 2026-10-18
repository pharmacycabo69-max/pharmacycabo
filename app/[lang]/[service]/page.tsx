import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePage from '@/components/ServicePage';
import { isLocale, locales } from '@/lib/i18n';
import { alternatesFor } from '@/lib/seo';
import { serviceContent, serviceFromSlug, serviceIds, servicePath, serviceSlugs } from '@/lib/services';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => serviceIds.map((id) => ({ lang, service: serviceSlugs[lang][id] })));
}

type Props = { params: Promise<{ lang: string; service: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, service } = await params;
  if (!isLocale(lang)) return {};
  const id = serviceFromSlug(lang, service);
  if (!id) return {};
  const c = serviceContent[lang][id];
  const title = `${c.h1} | Pharmacy Cabo`;
  return {
    title,
    description: c.intro,
    alternates: alternatesFor(lang, { en: servicePath('en', id), es: servicePath('es', id) }),
    openGraph: { title, description: c.intro, type: 'website', url: servicePath(lang, id) },
    twitter: { card: 'summary_large_image', title, description: c.intro },
  };
}

export default async function Page({ params }: Props) {
  const { lang, service } = await params;
  if (!isLocale(lang)) notFound();
  const id = serviceFromSlug(lang, service);
  if (!id) notFound();
  return <ServicePage lang={lang} id={id} />;
}
