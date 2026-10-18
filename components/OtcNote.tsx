import { getDict, type Locale } from '@/lib/i18n';

export default function OtcNote({ lang }: { lang: Locale }) {
  return (
    <p role="note" className="mt-5 max-w-2xl rounded-xl border border-gold/40 bg-white px-4 py-3 text-sm font-medium text-ink">
      ℹ️ {getDict(lang).products.otcNote}
    </p>
  );
}
