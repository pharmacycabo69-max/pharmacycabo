import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { getDict, isLocale } from '@/lib/i18n';
import { business, isPlaceholder } from '@/lib/business';
import { alternatesFor } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: `${getDict(lang).legal.title} | Pharmacy Cabo`,
    alternates: alternatesFor(lang, { en: '/en/legal/', es: '/es/legal/' }),
  };
}

export default async function LegalPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  const blocks = [d.legal.privacy, d.legal.terms];
  return (
    <>
      <Header lang={lang} base={`/${lang}/`} />
      <main className="section max-w-3xl">
        <h1 className="h2 !mt-0">{d.legal.title}</h1>
        <p className="mt-2 text-sm text-ink/60">{d.legal.draft}</p>
        {blocks.map((b) => (
          <section key={b.title} className="mt-10">
            <h2 className="font-serif text-2xl">{b.title}</h2>
            <div className="mt-4 space-y-4">
              {b.sections.map(([h, t]) => (
                <div key={h}>
                  <h3 className="font-semibold">{h}</h3>
                  {h === d.legal.privacy.sections[5][0] ? (
                    <p className="text-sm text-ink/70">
                      {t}:{' '}
                      <span className={isPlaceholder(business.privacyEmail) ? 'rounded bg-yellow-200 px-1.5 py-0.5 font-medium text-yellow-900' : 'font-medium'}>
                        {business.privacyEmail}
                      </span>
                    </p>
                  ) : (
                    <p className="text-sm text-ink/70">{t}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer lang={lang} />
      <FloatingCTA lang={lang} />
    </>
  );
}
