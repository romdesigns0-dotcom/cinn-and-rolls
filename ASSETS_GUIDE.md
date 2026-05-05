# Guía de Assets para Cinn & Rolls

Esta guía detalla los archivos multimedia requeridos para que el sitio web pase de una estructura "wireframe premium" a la versión final para lanzar.

## Brand (Identidad Visual)
Guarda estos archivos en `public/assets/brand/logos/` e `icons/`:
- **Logo completo:** `logo-full.svg`
- **Logo horizontal:** `logo-horizontal.svg`
- **Isotipo (perrito):** `dog-isotype.svg`
- **Monograma:** `monogram-cr.svg`
- **Favicon real:** Puede ser `.ico` o `.svg` (Reemplazará el actual).
- **Pattern de marca (Opcional):** `pattern-brand.svg` (Guardar en `patterns/`).

## Fotos de la Landing Page
Guarda estos archivos en sus carpetas correspondientes dentro de `public/assets/`:
- **Hero Principal:** `hero/hero-rolls.webp` (Mínimo 1600px de ancho).
- **Historia / Marca:** `story/story-brand.webp` (Vertical o editorial, mínimo 1200px de altura).

## Fotos de Productos
Guarda estos archivos en `public/assets/products/` (Recomendado: formato cuadrado 1200x1200px o vertical 4:5):
- `product-roll-clasico.webp`
- `product-caja-compartir.webp`
- `product-mini-rolls.webp`
- `product-edicion-especial.webp`
- (Opcionales: procesos, empaque).

## Redes Sociales y SEO
Guarda estos archivos en `public/assets/og/` o `social/`:
- **OG Image:** `og/og-image.jpg` (Exactamente 1200x630px para asegurar compatibilidad al compartir en WhatsApp e Instagram).

---

### Recomendaciones y Restricciones:
- **Formato de logos:** Preferentemente `SVG` para máxima nitidez. `PNG` solo si no existe vector.
- **Formato de fotos:** Usar siempre `WebP` o `JPG` comprimido y optimizado.
- **Peso:** **No subir imágenes pesadas sin comprimir.** Cada imagen fotográfica no debería superar los 300KB - 500KB.
- **No usar imágenes de internet:** Para mantener la estética boutique, la fotografía debe ser auténtica.
- **Placeholders:** No reemplaces el logo ni las imágenes provisionales hasta tener los archivos finales reales del manual de identidad. Las carpetas incluyen un `.gitkeep` para que la estructura viva en el repositorio.
