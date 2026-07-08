# Barbería Bacaanda

Sitio de marketing bilingüe (ES/EN) de una sola página para Barbería Bacaanda, barbería studio en Polanco, CDMX. 100% estático, sin backend. El contacto y las citas se resuelven con links externos: WhatsApp y el sistema de booking de AgendaPro.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Commands

- `npm run dev` — Servidor de desarrollo
- `npm run build` — Build de producción
- `npm run preview` — Preview del build de producción
- `npx astro check` — Type-check de archivos `.astro`

## Tech Stack

Astro 5 + TypeScript + Tailwind CSS v4 + i18n routing nativo (`/es/`, `/en/`)

## Architecture

- `src/pages/es/` y `src/pages/en/` — Cada uno es un one-pager espejo del otro (`index.astro` + `404.astro`)
- `src/content/{es,en}.ts` — Todo el copy del sitio, tipado con `src/content/types.ts` (`SiteCopy`). Nunca hardcodear texto de UI directo en un componente de sección.
- `src/components/layout/` — Header, Footer, BaseLayout (meta/OG/hreflang/JSON-LD)
- `src/components/sections/` — Un componente por sección del one-pager (Hero, About, Services, Gallery, Reviews, Location, CTASection), todos reciben `copy` como prop
- `src/components/ui/` — Button, LanguageSwitcher, WhatsAppFloatingButton
- `src/lib/contact.ts` — Construye los links de WhatsApp/tel/booking/Instagram desde variables de entorno — nunca hardcodear el número de teléfono en un componente
- `src/lib/i18n.ts` — Helpers de idioma (`getLangFromUrl`, `alternateLangUrl`)
- `src/assets/gallery/` y `src/assets/brand/` — Imágenes reales de la barbería (mural, cortes, logo), importadas y optimizadas vía `astro:assets`

### Data Flow

Todo el contenido vive en `src/content/{es,en}.ts` y se renderiza a HTML estático en build time. No hay fetch en runtime, no hay CMS, no hay base de datos.

### Key Patterns

- Cada página en `es/` tiene su espejo exacto en `en/` — nunca crear una sin la otra.
- Todo texto de UI vive en `src/content/{es,en}.ts`, nunca hardcodeado en un componente.
- Componentes `.astro` puros — cero JS de framework (React/Vue). Scripts inline solo para el menú móvil.
- Toda imagen usa el componente `<Image>` de `astro:assets`, con `alt` descriptivo obligatorio.

## Code Organization Rules

1. Un componente por archivo. Máximo 300 líneas.
2. Path alias: usar `@/` para `src/`.
3. Server-rendered / estático por defecto. Cualquier interactividad va en un `<script>` vanilla, no en un framework.
4. Toda ruta nueva se crea en ambos idiomas a la vez (`es/` y `en/`).

## Design System

Colores extraídos del mural real del estudio (azul rey, rojo del barber pole, dorado del girasol) y del anillo neón del logo.

### Colors
- Ink (fondo) `#0a0a0d` / Surface `#16161c` / Border `#2c2c36`
- Primary (azul rey) `#2547b8` / Primary Hover `#1c3690`
- Red (barber pole) `#c8272a` / Gold (girasol) `#e8a63d`
- Text `#f5f1e8` / Muted `#a3a3ad`

### Typography
- Headings: Oswald (500-700), uppercase
- Body: Inter, 400-500

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PUBLIC_SITE_URL` | URL base para canonical/OG/sitemap |
| `PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp en formato internacional, sin `+` ni espacios (ej. `525550564567`) |
| `PUBLIC_PHONE_NUMBER` | Número de teléfono para `tel:`, mismo formato |
| `PUBLIC_BOOKING_URL` | URL del sistema de citas (AgendaPro) |
| `PUBLIC_INSTAGRAM_HANDLE` | Handle de Instagram sin `@` |

**Pendiente de confirmar con el cliente:** `PUBLIC_WHATSAPP_NUMBER` se derivó del teléfono mostrado en Google Maps (55 5056 4567 → 525550564567). Si el negocio usa un número de WhatsApp Business distinto al teléfono fijo/de Maps, actualizar esta variable antes de publicar.

## Reglas No Negociables

1. Sitio 100% estático — nunca agregar backend, API routes ni base de datos.
2. Ninguna página se publica si le falta su versión en el otro idioma.
3. Cero formularios de contacto — todo CTA usa `wa.me`, `tel:` o el link de AgendaPro.
4. Mobile-first: diseñar y probar en 375px de ancho antes que en desktop.
5. Toda imagen usa `<Image>` de `astro:assets` con `alt` obligatorio.
6. Nunca commitear `.env` — usar `.env.example` con placeholders.
7. No inventar datos que el negocio no ha confirmado (precios, horario exacto) — cuando falte un dato real, dirigir al usuario a WhatsApp o al booking en vez de inventarlo.

## Documentation

Full documentation: https://docs.astro.build
