import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import JsonLd from './JsonLd';
import { getDict, PHONE_DISPLAY, PHONE_TEL, waLink, type Locale } from '@/lib/i18n';
import { prices } from '@/lib/business';
import { serviceContent, serviceIcons, servicePageLabels, type ServiceId } from '@/lib/services';
import { serviceJsonLd } from '@/lib/jsonld';

export default function ServicePage({ lang, id }: { lang: Locale; id: ServiceId }) {
  const d = getDict(lang);
  const c = serviceContent[lang][id];
  const t = servicePageLabels[lang];
  const price = prices[id];
  const pending = price.includes('___');

  return (
    <>
      <JsonLd data={serviceJsonLd(lang, id)} />
      <Header lang={lang} base={`/${lang}/`} />
      <main>
        <section className="bg-gradient-to-b from-teal-soft to-sand">
          <div className="mx-auto max-w-4xl px-5 py-14 sm:py-20">
            <Link href={`/${lang}/#services`} className="text-sm text-teal hover:underline">← {t.allServices}</Link>
            <p className="mt-4 text-3xl">{serviceIcons[id]}</p>
            <h1 className="mt-2 font-serif text-4xl leading-tight sm:text-5xl">{c.h1}</h1>
            <p className="mt-5 text-lg text-ink/70">{c.intro}</p>
            <p role="note" className="mt-5 rounded-xl border border-gold/40 bg-white px-4 py-3 text-sm font-medium">ℹ️ {c.notice}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={waLink(c.waText)} className="btn btn-primary !bg-[#1fa855] hover:!bg-[#178a45]">{t.book}</a>
              <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost">{d.cta.call} {PHONE_DISPLAY}</a>
            </div>
          </div>
        </section>

        <section className="section !pb-6 max-w-4xl">
          <h2 className="h2 !mt-0">{t.included}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {c.includes.map((i) => (
              <li key={i} className="card flex gap-3 !p-4 text-sm"><span className="text-teal">✓</span>{i}</li>
            ))}
          </ul>
        </section>

        <section className="section !pb-6 max-w-4xl">
          <h2 className="h2 !mt-0">{t.how}</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {c.steps.map(([h, s], i) => (
              <li key={h} className="card">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal font-bold text-white">{i + 1}</span>
                <p className="mt-3 font-semibold">{h}</p>
                <p className="mt-1 text-sm text-ink/70">{s}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section !pb-6 max-w-4xl">
          <h2 className="h2 !mt-0">{t.coverage}</h2>
          <p className="mt-2 text-ink/70">{t.coverageNote}{id === 'videoConsultation' ? ` ${t.videoZonesNote}` : ''}</p>
          <ul className="mt-6 space-y-3">
            {d.coverage.items.map(([zone, desc, eta]) => (
              <li key={zone} className="card flex items-center justify-between gap-4 !py-4">
                <div><p className="font-semibold">{zone}</p><p className="text-sm text-ink/60">{desc}</p></div>
                <span className="shrink-0 rounded-full bg-teal-soft px-3 py-1 text-right text-sm font-semibold text-teal">
                  {c.zoneTiming === 'delivery' ? eta : t.sameDay}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section !pb-6 max-w-4xl">
          <h2 className="h2 !mt-0">{t.pricing}</h2>
          <div className="card mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className={`text-2xl font-bold ${pending ? 'rounded bg-yellow-200 px-2 text-yellow-900' : 'text-teal'}`}>{price}</p>
            <p className="text-sm text-ink/70">{t.pricingNote}</p>
          </div>
        </section>

        <section className="section max-w-3xl">
          <h2 className="h2 !mt-0">{t.faq}</h2>
          <div className="mt-6 space-y-3">
            {c.faq.map(([q, a]) => (
              <details key={q} className="card group !py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {q}<span className="text-teal transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-ink/70">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-ink text-center text-white">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <h2 className="font-serif text-3xl">{t.ctaTitle}</h2>
            <p className="mt-3 text-white/70">{t.ctaText}</p>
            <a href={waLink(c.waText)} className="btn btn-primary mt-6 !bg-[#1fa855] hover:!bg-[#178a45]">{t.book}</a>
            <p className="mt-4 text-white/60">{PHONE_DISPLAY}</p>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <FloatingCTA lang={lang} />
    </>
  );
}
