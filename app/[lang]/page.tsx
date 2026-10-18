import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import ProductCard from '@/components/ProductCard';
import OtcNote from '@/components/OtcNote';
import LicensedInfo from '@/components/LicensedInfo';
import { getDict, isLocale, PHONE_DISPLAY, PHONE_TEL, waLink } from '@/lib/i18n';
import { products } from '@/lib/products';
import JsonLd from '@/components/JsonLd';
import { pharmacyJsonLd } from '@/lib/jsonld';
import { serviceContent, serviceIcons, serviceIds, servicePath } from '@/lib/services';
import { alternatesFor } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDict(lang);
  return {
    title: d.meta.title,
    description: d.meta.description,
    alternates: alternatesFor(lang, { en: '/en/', es: '/es/' }),
    openGraph: { title: d.meta.title, description: d.meta.description, type: 'website', url: `/${lang}/` },
    twitter: { card: 'summary_large_image', title: d.meta.title, description: d.meta.description },
  };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  const featured = products.filter((p) => p.img && p.inStock && p.price != null).slice(0, 8);

  return (
    <>
      <JsonLd data={pharmacyJsonLd(lang)} />
      <Header lang={lang} />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-teal-soft to-sand">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 sm:py-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-teal shadow-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" /> {d.status}
              </p>
              <p className="mt-3 text-xs text-ink/60">{d.hours}</p>
              <p className="eyebrow mt-6">{d.hero.badge}</p>
              <h1 className="mt-2 font-serif text-4xl leading-tight sm:text-5xl">{d.hero.title}</h1>
              <p className="mt-5 text-lg text-ink/70">{d.hero.text}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={waLink(d.hero.waText)} className="btn btn-primary">{d.cta.message}</a>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost">{d.cta.concierge}</a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink/70">
                {d.hero.chips.map((c) => <li key={c}>✓ {c}</li>)}
              </ul>
            </div>
            <div className="card">
              <p className="font-serif text-2xl">{d.desk.title}</p>
              <p className="mt-1 text-sm text-ink/60">{d.desk.sub}</p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {d.desk.stats.map(([n, l]) => (
                  <div key={l} className="rounded-xl bg-teal-soft p-3">
                    <p className="text-2xl font-bold text-teal">{n}</p>
                    <p className="text-[11px] leading-tight text-ink/70">{l}</p>
                  </div>
                ))}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/pharmacy-cabo-concierge-handoff.jpg" alt={d.desk.handoff} className="mt-5 aspect-[16/10] w-full rounded-xl object-cover" />
              <p className="mt-3 font-semibold">{d.desk.handoff}</p>
              <p className="text-sm text-ink/60">{d.desk.handoffSub}</p>
            </div>
          </div>
        </section>

        {/* Standard + zones */}
        <section className="section">
          <p className="eyebrow">{d.standard.eyebrow}</p>
          <h2 className="h2 max-w-2xl">{d.standard.title}</h2>
          <p className="mt-3 max-w-2xl text-ink/70">{d.standard.text}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.standard.items.map(([t, s]) => (
              <div key={t} className="card"><p className="font-semibold">{t}</p><p className="mt-1 text-sm text-ink/60">{s}</p></div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {d.zones.map(([t, s, eta]) => (
              <div key={t} className="card bg-teal-soft/60">
                <p className="font-semibold text-teal">{t}</p>
                <p className="text-sm text-ink/70">{s}</p>
                <p className="mt-2 text-xs text-ink/60">{d.typical}: {eta}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white">
          <div className="section">
            <p className="eyebrow">{d.services.eyebrow}</p>
            <h2 className="h2">{d.services.title}</h2>
            <p className="mt-3 max-w-2xl text-ink/70">{d.services.text}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {serviceIds.map((id) => (
                <Link key={id} href={servicePath(lang, id)} className="card group flex flex-col transition hover:border-teal hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-soft text-2xl">{serviceIcons[id]}</span>
                  <p className="mt-4 font-semibold">{serviceContent[lang][id].nav}</p>
                  <p className="mt-1 flex-1 text-sm text-ink/70">{serviceContent[lang][id].card}</p>
                  <span className="mt-4 text-sm font-semibold text-teal group-hover:underline">{d.services.cta} →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="bg-teal text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{d.banner.eyebrow}</p>
              <h2 className="mt-2 font-serif text-3xl">{d.banner.title}</h2>
              <p className="mt-3 text-white/80">{d.banner.text}</p>
            </div>
            <a href={waLink(d.banner.waText)} className="btn bg-white !text-teal hover:bg-sand">{d.banner.cta}</a>
          </div>
        </section>

        {/* Featured products */}
        <section className="section">
          <p className="eyebrow">{d.products.eyebrow}</p>
          <h2 className="h2">{d.products.title}</h2>
          <p className="mt-3 max-w-2xl text-ink/70">{d.products.text}</p>
          <OtcNote lang={lang} />
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {featured.map((p) => <ProductCard key={p.id} p={p} lang={lang} />)}
          </div>
          <div className="mt-8 text-center">
            <Link href={`/${lang}/products/`} className="btn btn-ghost">{d.products.viewAll} →</Link>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="bg-white">
          <div className="section">
            <p className="eyebrow">{d.steps.eyebrow}</p>
            <h2 className="h2">{d.steps.title}</h2>
            <p className="mt-3 text-ink/70">{d.steps.text}</p>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {d.steps.items.map(([t, s], i) => (
                <li key={t} className="card">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal font-bold text-white">{i + 1}</span>
                  <p className="mt-3 font-semibold">{t}</p><p className="mt-1 text-sm text-ink/70">{s}</p>
                </li>
              ))}
            </ol>
            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-ink/50">
              {d.trusted.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </section>

        {/* Coverage */}
        <section id="coverage" className="section">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow">{d.coverage.eyebrow}</p>
              <h2 className="h2">{d.coverage.title}</h2>
              <p className="mt-3 text-ink/70">{d.coverage.text}</p>
              <a href={waLink(d.coverage.waText)} className="btn btn-primary mt-6">{d.coverage.cta}</a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/luxury-zones-premium.png" alt={d.coverage.title} className="mt-8 w-full rounded-2xl" />
            </div>
            <ul className="space-y-3">
              {d.coverage.items.map(([t, s, eta]) => (
                <li key={t} className="card flex items-center justify-between !py-4">
                  <div><p className="font-semibold">{t}</p><p className="text-sm text-ink/60">{s}</p></div>
                  <span className="rounded-full bg-teal-soft px-3 py-1 text-sm font-semibold text-teal">{eta}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-white">
          <div className="section">
            <p className="eyebrow">{d.reviews.eyebrow}</p>
            <h2 className="h2">{d.reviews.title}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {d.reviews.items.map(([quote, who, where]) => (
                <figure key={who} className="card">
                  <p className="text-gold">★★★★★</p>
                  <blockquote className="mt-2 text-sm text-ink/80">“{quote}”</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold">{who}<span className="block text-xs font-normal text-ink/60">{where}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section max-w-3xl">
          <p className="eyebrow">{d.faq.eyebrow}</p>
          <h2 className="h2">{d.faq.title}</h2>
          <div className="mt-8 space-y-3">
            {d.faq.items.map(([q, a]) => (
              <details key={q} className="card group !py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {q}<span className="text-teal transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-ink/70">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-ink text-center text-white">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{d.final.eyebrow}</p>
            <h2 className="mt-2 font-serif text-4xl">{d.final.title}</h2>
            <p className="mt-3 text-white/70">{d.final.text}</p>
            <a href={waLink(d.final.waText)} className="btn btn-primary mt-6">{d.final.cta}</a>
            <p className="mt-4 text-white/60">{PHONE_DISPLAY}</p>
          </div>
        </section>
        <LicensedInfo lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingCTA lang={lang} />
    </>
  );
}
