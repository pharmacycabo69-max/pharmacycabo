# Migración de pharmacycabo.com a https://www.rmcpharmacy.com

Estado: **preparado, no desplegado.** Next.js (exportación estática) en Vercel.

- `vercel.json`: 33 reglas 301 (cada página con y sin barra final, patrones y un comodín al final).
  `robots.txt` y `sitemap*.xml` no se redirigen a propósito (Search Console los necesita).
- `redirects/redirects-map.csv`: 15 URLs viejas con su destino y el motivo.

Destinos más usados:
- `/`: 2
- `/services/doctor-consultation`: 2
- `/pharmacy`: 2
- `/es`: 2
- `/es/servicios/consulta-medica`: 2
- `/delivery`: 1
- `/services/iv-therapy`: 1
- `/es/entrega`: 1
- `/es/servicios/terapia-iv`: 1
- `/es/farmacia`: 1

Antes de publicar
1. Revisa el CSV y cambia cualquier destino que no te convenza (después regenera o edita `vercel.json`).
2. Despliega la rama y comprueba con `curl -I https://www.pharmacycabo.com/<ruta>`: debe dar 301 a un solo salto.
3. En Vercel → Domains, el dominio sin www no debe redirigir a otro lado antes (un solo salto).
4. Agrega la propiedad en Search Console y mantén el dominio y las redirecciones al menos 12 meses.
