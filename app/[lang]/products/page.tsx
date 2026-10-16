import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Catalog from '@/components/Catalog';
import { getDict, isLocale } from '@/lib/i18n';
import { groups, products } from '@/lib/products';

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  return (
    <>
      <Header lang={lang} base={`/${lang}/`} />
      <main className="section">
        <p className="eyebrow">{d.products.eyebrow}</p>
        <h1 className="h2">{d.products.title}</h1>
        <p className="mt-3 max-w-2xl text-ink/70">{d.products.text}</p>
        <div className="mt-8">
          <Catalog lang={lang} items={products} groups={groups} />
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
