import { getDict, PHONE_DISPLAY, PHONE_TEL, type Locale } from '@/lib/i18n';

export default function Footer({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  return (
    <footer className="bg-ink pb-16 text-white/80 sm:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-10 text-center text-sm">
        <p className="font-serif text-xl text-white">Pharmacy Cabo</p>
        <p className="mt-1 text-xs tracking-[0.2em]">{d.brandTag}</p>
        <a href={`tel:${PHONE_TEL}`} className="mt-4 block text-lg text-white">{PHONE_DISPLAY}</a>
        <p className="mt-3">{d.footer.line}</p>
        <p className="mt-1 text-white/50">© {new Date().getFullYear()} Pharmacy Cabo. {d.footer.rights}</p>
      </div>
    </footer>
  );
}
