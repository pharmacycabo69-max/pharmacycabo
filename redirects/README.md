# pharmacycabo.com → www.rmcpharmacy.com

El dominio es solo una redirección (decisión del propietario, V4 del 2026-11-25). No se reconstruye ni se reactiva contenido.

- `vercel.json`: reglas de redirección. 301 en todo; la única excepción es la portada para navegadores en español, que va a `/es` con 302 (temporal, porque depende del idioma).
- `redirects/redirects-map.csv`: cada URL antigua, su destino, el código y el motivo.
- `redirects/verify.mjs`: comprueba un despliegue contra el mapa (`node redirects/verify.mjs https://www.pharmacycabo.com`).
- `robots.txt` y `sitemap*.xml` no se redirigen a propósito: Search Console los usa para descubrir las redirecciones. Retirar el sitemap antiguo unos 180 días después de la mudanza.

## Criterio de destino
1. El mismo producto, si RMC tiene su ficha indexable.
2. La categoría equivalente de RMC.
3. La página equivalente (contacto, nosotros, entrega, tienda, blog).
4. La portada del idioma, solo para portadas antiguas y URLs técnicas o de plantilla.

## Pendiente fuera del código
- Vercel → Project → Domains: hoy `pharmacycabo.com` redirige (308) a `www` y después se aplica la regla (dos saltos). Si el dominio sin `www` se asigna directamente al proyecto, queda en un salto.
- Mantener el dominio y estas reglas al menos 12 meses (recomendado: de forma permanente).

## Reversión
En Vercel → Deployments, usar "Instant Rollback" al despliegue anterior (inmediato). Después, en GitHub, botón "Revert" del PR fusionado, para que `main` coincida. No usar `git` local en Windows: el historial tiene nombres de archivo con `?` que impiden la copia de trabajo. Las reglas anteriores están en el commit `e43e2e7`.
