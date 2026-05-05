# Checklist de Integración Final

Esta es la lista de pendientes (datos reales y assets) que deben confirmarse y agregarse antes del lanzamiento:

- [ ] **WhatsApp real**: Configurar el número oficial en `src/data/business.ts` (`whatsapp: "52951XXXXXXX"`) para activar la generación automática de enlaces `wa.me` en todo el sitio.
- [ ] **Productos reales**: Actualizar `src/data/products.ts` con los rolls que se ofrecerán.
- [ ] **Precios reales**: Actualizar precios exactos en `products.ts`.
- [ ] **Fotografías reales**:
  - Reemplazar placeholders en `src/components/ProductCard.astro`.
  - Reemplazar placeholder en `src/components/BrandStory.astro`.
- [ ] **Logo real**: Agregar archivo oficial y usarlo en el `Header.astro`.
- [ ] **Favicon real**: Reemplazar `public/favicon.svg` por la versión oficial del imagotipo.
- [ ] **OG-Image real**: Subir `public/og-image.jpg` con foto representativa (ej. caja de rolls) para compartir en redes y luego pasarla como prop o re-activarla en `Layout.astro`.
- [ ] **Horarios**: Confirmar en `business.ts` (ej. "Mar-Dom 9:00am - 2:00pm").
- [ ] **Zona de entrega**: Confirmar en `business.ts` la cobertura en Oaxaca.
- [ ] **Método de pago**: Definir si se agrega info en `pedidos.astro` o `FAQ.astro`.
- [ ] **Dominio final**: Actualizar la configuración de `site` en `astro.config.mjs` (ej. `https://cinnandrolls.mx`).
- [ ] **Sitemap**: Instalar `@astrojs/sitemap` y generar sitemap real en `astro.config.mjs` cuando el dominio exista. Actualizar `robots.txt`.
- [ ] **Google Business Profile**: Integrar URL al perfil de Google en el Footer o header (si aplica).
