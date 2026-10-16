# Pharmacy Cabo

Sitio bilingüe (EN/ES) de concierge de farmacia y bienestar en Los Cabos. Next.js 15 + Tailwind, exportación estática.

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build    # genera ./out (sitio estático)
```

- `app/[lang]/` — páginas (`/en`, `/es`, `/{lang}/products`)
- `lib/i18n.ts` — textos EN/ES, número de WhatsApp
- `data/products.json` — catálogo (65 productos); `public/products/` — imágenes disponibles
- `site/` — copia estática del sitio WordPress anterior (referencia)

Los pedidos se hacen por WhatsApp; no hay carrito ni pagos en el sitio.
