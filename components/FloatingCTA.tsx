import { getDict, PHONE_TEL, waLink, type Locale } from '@/lib/i18n';

export default function FloatingCTA({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink/10 bg-white/95 p-3 backdrop-blur sm:inset-x-auto sm:bottom-5 sm:right-5 sm:rounded-full sm:border sm:p-2 sm:shadow-lg">
      <a href={waLink(d.hero.waText)} className="btn btn-primary flex-1 !bg-[#1fa855] hover:!bg-[#178a45] sm:flex-none">{d.cta.whatsapp}</a>
      <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost flex-1 sm:flex-none">{d.cta.call}</a>
    </div>
  );
}
