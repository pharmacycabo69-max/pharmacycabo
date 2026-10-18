import Link from 'next/link';
import { getDict, waLink, type Locale } from '@/lib/i18n';
import { serviceContent, serviceIds, servicePath } from '@/lib/services';

export default function Header({ lang, base = '' }: { lang: Locale; base?: string }) {
  const d = getDict(lang);
  const other: Locale = lang === 'en' ? 'es' : 'en';
  const services = serviceIds.map((id) => ({ href: servicePath(lang, id), label: serviceContent[lang][id].nav }));
  const links: [string, string][] = [
    [d.nav.products, `/${lang}/products/`],
    [d.nav.how, `${base}#how`],
    [d.nav.coverage, `${base}#coverage`],
    [d.nav.faq, `${base}#faq`],
  ];
  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href={`/${lang}/`} className="leading-tight">
          <span className="block font-serif text-xl font-bold text-teal">Pharmacy Cabo</span>
          <span className="block text-[10px] tracking-[0.2em] text-ink/60">{d.brandTag}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Main">
          <div className="group relative">
            <a href={`${base}#services`} className="flex items-center gap-1 text-ink/80 hover:text-teal">
              {d.nav.services} <span aria-hidden className="text-[10px]">▾</span>
            </a>
            <div className="invisible absolute left-0 top-full z-40 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="w-64 rounded-xl border border-ink/10 bg-white p-2 shadow-lg">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="block rounded-lg px-3 py-2 text-ink/80 hover:bg-teal-soft hover:text-teal">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-ink/80 hover:text-teal">{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href={`/${other}/`} className="text-sm font-medium text-ink/70 hover:text-teal">{d.switchLabel}</Link>
          <a href={waLink(d.hero.waText)} className="btn btn-primary !px-4 !py-2">{d.cta.whatsapp}</a>
          <details className="relative md:hidden">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-ink/15 bg-white text-lg" aria-label="Menu">☰</summary>
            <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-ink/10 bg-white p-2 shadow-lg">
              <p className="px-3 pb-1 pt-2 text-[11px] uppercase tracking-wider text-gold">{d.nav.services}</p>
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-teal-soft">{s.label}</Link>
              ))}
              <hr className="my-2 border-ink/10" />
              {links.map(([label, href]) => (
                <a key={href} href={href} className="block rounded-lg px-3 py-2 text-sm hover:bg-teal-soft">{label}</a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
