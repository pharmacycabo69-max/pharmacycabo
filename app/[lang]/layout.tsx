import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { getDict, isLocale, locales } from '@/lib/i18n';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDict(lang);
  return {
    title: d.meta.title,
    description: d.meta.description,
    alternates: { languages: { en: '/en/', es: '/es/' } },
    openGraph: { title: d.meta.title, description: d.meta.description, type: 'website' },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
