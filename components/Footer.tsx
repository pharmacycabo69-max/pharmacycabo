import Link from 'next/link';
import { getDict, PHONE_DISPLAY, PHONE_TEL, type Locale } from '@/lib/i18n';
import { LicensedFields } from './LicensedInfo';
import { serviceContent, serviceIds, servicePath } from '@/lib/services';

export default function Footer({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  return (
    <footer className="bg-ink pb-20 text-white/80 sm:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-10 text-sm">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl text-white">Pharmacy Cabo</p>
            <p className="mt-1 text-xs tracking-[0.2em]">{d.brandTag}</p>
            <a href={`tel:${PHONE_TEL}`} className="mt-4 block text-lg text-white">{PHONE_DISPLAY}</a>
            <p className="mt-3">{d.footer.line}</p>
            <p className="mt-3 text-white/70">{d.products.otcNote}</p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{d.nav.services}</p>
            <ul className="space-y-2">
              {serviceIds.map((id) => (
                <li key={id}><Link href={servicePath(lang, id)} className="text-white/80 hover:text-white">{serviceContent[lang][id].nav}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{d.licensed.eyebrow}</p>
            <LicensedFields lang={lang} dark single />
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-white/50">
          <p>© {new Date().getFullYear()} Pharmacy Cabo. {d.footer.rights}</p>
          <Link href={`/${lang}/legal/`} className="text-white/80 underline hover:text-white">{d.legal.link}</Link>
        </div>
      </div>
    </footer>
  );
}
