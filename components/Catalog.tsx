'use client';

import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import { getDict, type Locale } from '@/lib/i18n';
import type { Product } from '@/lib/products';

export default function Catalog({ lang, items, groups }: { lang: Locale; items: Product[]; groups: string[] }) {
  const d = getDict(lang);
  const [group, setGroup] = useState('all');
  const [q, setQ] = useState('');
  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return items.filter((p) => (group === 'all' || p.group === group) && (!needle || p.name.toLowerCase().includes(needle)));
  }, [items, group, q]);

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-1.5 text-sm transition ${active ? 'border-teal bg-teal text-white' : 'border-ink/15 bg-white hover:border-teal'}`;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={d.products.search}
          aria-label={d.products.search}
          className="w-full rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm outline-none focus:border-teal sm:max-w-xs"
        />
        <p className="text-sm text-ink/60">{d.products.count(shown.length)}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button className={chip(group === 'all')} onClick={() => setGroup('all')}>{d.products.all}</button>
        {groups.map((g) => (
          <button key={g} className={chip(group === g)} onClick={() => setGroup(g)}>{d.categories[g] ?? g}</button>
        ))}
      </div>
      {shown.length ? (
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {shown.map((p) => <ProductCard key={p.id} p={p} lang={lang} />)}
        </div>
      ) : (
        <p className="mt-10 text-center text-ink/60">{d.products.none}</p>
      )}
    </div>
  );
}
