# Implementación de i18n con Rutas

## Arquitectura

El sitio SCA implementa internacionalización (i18n) mediante rutas localizadas para SEO y mejor UX.

### Estructura de Rutas

```
/ → Redirige a /:locale (detecta idioma del navegador)
/:locale → Página principal
/:locale/connect → Página de contacto para eventos
/:locale/qr → Alias de connect
```

### Locales Soportados

- `en` - English (por defecto)
- `es` - Español
- `de` - Deutsch (Alemán)

## Componentes Clave

### 1. `useLocale` Hook
**Ubicación:** `src/hooks/useLocale.ts`

Custom hook que gestiona:
- Obtención de locale desde URL params
- Navegación entre idiomas preservando ruta actual
- Generación de rutas localizadas
- Validación de locales

```typescript
const { locale, changeLocale, getLocalizedPath } = useLocale();

// Cambiar idioma
changeLocale('de'); // Navega de /en/connect → /de/connect

// Obtener ruta localizada
const path = getLocalizedPath('/connect'); // /en/connect
```

### 2. `LanguageContext`
**Ubicación:** `src/contexts/LanguageContext.tsx`

Context sincronizado con URL params:
- Lee locale desde `useParams`
- Proporciona función de traducción `t()`
- Estado reactivo ante cambios de URL

```typescript
const { language, t } = useLanguage();
const title = t('nav_concept'); // Traduce según locale actual
```

### 3. `LocaleRedirect`
**Ubicación:** `src/components/LocaleRedirect.tsx`

Componente que redirige `/` al locale apropiado:
- Detecta idioma del navegador
- Fallback a inglés si no está soportado
- Redirección transparente

## Flujo de Navegación

### 1. Usuario accede a `/`
→ `LocaleRedirect` detecta navegador
→ Redirige a `/en` (o `/es`, `/de`)

### 2. Usuario cambia idioma
→ Click en botón de idioma en Navbar
→ `changeLocale('de')` navega a nueva ruta
→ `LanguageContext` detecta cambio en URL params
→ UI se actualiza con nuevas traducciones

### 3. Links internos
Todos los anchor links (#concept, #services) funcionan normalmente dentro de cada locale.

## Beneficios

### SEO
- ✅ Google indexa cada idioma por separado
- ✅ URLs amigables: `web-sca.vercel.app/de/connect`
- ✅ `hreflang` tags fáciles de implementar

### UX
- ✅ URLs compartibles en idioma específico
- ✅ Estado de idioma persistente en URL
- ✅ Navegación browser (back/forward) funciona correctamente

### Analytics
- ✅ Trackeo de visitas por idioma
- ✅ Análisis de comportamiento por región

### Escalabilidad
- ✅ Agregar nuevo idioma: actualizar types + translations
- ✅ Compatible con frameworks como Next.js
- ✅ Estándar de la industria

## Configuración de Vercel

El archivo `vercel.json` maneja rewrites para SPA:

```json
{
  "rewrites": [
    {
      "source": "/:locale(en|es|de)/:path*",
      "destination": "/index.html"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Esto asegura que todas las rutas sirvan el index.html para que React Router maneje la navegación.

## Uso en Eventos

### QR Code para Spoga Horse Alemania
Genera QR apuntando a: `https://web-sca.vercel.app/de/connect`
- Visitantes alemanes ven contenido en su idioma
- URL explícita y profesional
- Sin cookies ni detección necesaria

### QR Code para eventos internacionales
Genera QR apuntando a: `https://web-sca.vercel.app/en/connect`
- Inglés como lingua franca
- Compatible con visitantes de cualquier país

## Agregar Nuevo Idioma

1. Actualizar types:
```typescript
// src/types/index.ts
export type Language = 'en' | 'es' | 'de' | 'fr'; // Agregar 'fr'
```

2. Agregar traducciones:
```typescript
// src/data/translations.ts
export const translations: Translations = {
  // ... existing
  fr: {
    nav_concept: 'Concept',
    // ... resto de traducciones
  }
};
```

3. Actualizar validaciones:
```typescript
// src/hooks/useLocale.ts
const VALID_LOCALES: Language[] = ['en', 'es', 'de', 'fr'];
```

4. Actualizar vercel.json:
```json
"source": "/:locale(en|es|de|fr)/:path*"
```

## Testing

### Verificar rutas
- [ ] `/` redirige a `/en`
- [ ] `/en` muestra home en inglés
- [ ] `/es` muestra home en español
- [ ] `/de` muestra home en alemán
- [ ] `/en/connect` funciona
- [ ] `/es/connect` funciona
- [ ] `/de/connect` funciona

### Verificar navegación
- [ ] Cambiar idioma actualiza URL
- [ ] Back/forward del browser funcionan
- [ ] Compartir URL mantiene idioma
- [ ] Hash links (#concept) funcionan

## Mejoras Futuras

1. **Meta tags SEO por idioma**
   - Implementar `<Helmet>` para title/description localizados

2. **hreflang tags**
   - Agregar tags para indicar versiones alternativas a Google

3. **Persistencia de preferencia**
   - Cookie/localStorage para recordar elección de usuario

4. **Detección más inteligente**
   - Usar IP geolocation para mejor default locale
