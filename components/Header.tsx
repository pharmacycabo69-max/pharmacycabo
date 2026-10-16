import Link from 'next/link';
import { getDict, waLink, type Locale } from '@/lib/i18n';

export default function Header({ lang, base = '' }: { lang: Locale; base?: string }) {
  const d = getDict(lang);
  const other: Locale = lang === 'en' ? 'es' : 'en';
  const links: [string, string][] = [
    [d.nav.services, `${base}#services`],
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
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-ink/80 hover:text-teal">{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href={`/${other}/`} className="text-sm font-medium text-ink/70 hover:text-teal">{d.switchLabel}</Link>
          <a href={waLink(d.hero.waText)} className="btn btn-primary !px-4 !py-2">{d.cta.whatsapp}</a>
        </div>
      </div>
    </header>
  );
}
