import type { Metadata } from 'next';
import { locales, type Locale } from './i18n';

/** hreflang + canonical for a page that exists in both languages under different paths. */
export function alternatesFor(lang: Locale, paths: Record<Locale, string>): Metadata['alternates'] {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = paths[l];
  languages['x-default'] = paths.en;
  return { canonical: paths[lang], languages };
}
