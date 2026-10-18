import { getDict, type Locale } from '@/lib/i18n';
import { business, isPlaceholder } from '@/lib/business';

const keys = ['legalName', 'address', 'cofepris', 'responsibleName', 'responsibleLicense', 'storeHours'] as const;

export function LicensedFields({ lang, dark = false, single = false }: { lang: Locale; dark?: boolean; single?: boolean }) {
  const d = getDict(lang);
  return (
    <dl className={`grid gap-x-8 gap-y-3 text-left text-sm ${single ? '' : 'sm:grid-cols-2'}`}>
      {keys.map((k) => {
        const v = business[k];
        return (
          <div key={k}>
            <dt className={`text-xs uppercase tracking-wider ${dark ? 'text-white/50' : 'text-ink/50'}`}>{d.licensed.labels[k]}</dt>
            <dd className={isPlaceholder(v) ? 'mt-0.5 inline-block rounded bg-yellow-200 px-1.5 py-0.5 font-medium text-yellow-900' : 'mt-0.5 font-medium'}>{v}</dd>
          </div>
        );
      })}
    </dl>
  );
}

export default function LicensedInfo({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  return (
    <section id="licensed" className="bg-teal-soft">
      <div className="section">
        <p className="eyebrow">{d.licensed.eyebrow}</p>
        <h2 className="h2">{d.licensed.title}</h2>
        <p className="mt-3 max-w-2xl text-ink/70">{d.licensed.text}</p>
        <p className="mt-3 max-w-2xl rounded-xl border border-teal/20 bg-white px-4 py-3 text-sm font-medium text-teal-dark">{d.products.otcNote}</p>
        <div className="card mt-8"><LicensedFields lang={lang} /></div>
      </div>
    </section>
  );
}
