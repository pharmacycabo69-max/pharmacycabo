import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/business';
import { serviceIds, servicePath } from '@/lib/services';
import { locales } from '@/lib/i18n';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // Each entry is a pair of routes (en/es); every URL lists both languages via hreflang.
  const pairs: Record<string, string>[] = [
    { en: '/en/', es: '/es/' },
    ...serviceIds.map((id) => ({ en: servicePath('en', id), es: servicePath('es', id) })),
    { en: '/en/products/', es: '/es/products/' },
    { en: '/en/legal/', es: '/es/legal/' },
  ];
  return pairs.flatMap((pair) =>
    locales.map((l) => ({
      url: `${SITE_URL}${pair[l]}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: pair.en === '/en/' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries([...locales.map((x) => [x, `${SITE_URL}${pair[x]}`]), ['x-default', `${SITE_URL}${pair.en}`]]),
      },
    })),
  );
}
