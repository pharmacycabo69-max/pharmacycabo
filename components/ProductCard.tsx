import { getDict, waLink, type Locale } from '@/lib/i18n';
import type { Product } from '@/lib/products';

export default function ProductCard({ p, lang }: { p: Product; lang: Locale }) {
  const d = getDict(lang);
  return (
    <article className="card flex flex-col !p-4">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-teal-soft">
        {p.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-contain" />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl text-teal/40">✚</div>
        )}
        <span className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[11px] font-semibold ${p.inStock ? 'bg-teal text-white' : 'bg-ink/70 text-white'}`}>
          {p.inStock ? d.products.inStock : d.products.soldOut}
        </span>
      </div>
      <p className="mt-3 text-[11px] uppercase tracking-wider text-gold">{d.categories[p.group] ?? p.group}</p>
      <h3 className="mt-1 flex-1 text-sm font-semibold leading-snug">{p.name}</h3>
      <p className="mt-2 text-lg font-bold text-teal">
        {p.price != null ? `$${p.price.toFixed(2)}` : <span className="text-sm font-medium text-ink/60">{d.products.noPrice}</span>}
      </p>
      <a href={waLink(d.products.waText(p.name))} className="btn btn-primary mt-3 !py-2">{d.products.order}</a>
    </article>
  );
}
