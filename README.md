# SCA - Saddle Company Argentina

> Global OEM Saddle Manufacturing | Professional React + TypeScript Website

## ï¿½ DocumentaciÃ³n

- ðŸ“– **[Ver DocumentaciÃ³n Completa](./docs/)** - Arquitectura, guÃ­as y convenciones
- ðŸ—ï¸ [Arquitectura del Proyecto](./docs/ARCHITECTURE.md)
- ðŸ“± [GuÃ­a PÃ¡gina QR Connect](./docs/CONNECT_PAGE_GUIDE.md)

---

## ï¿½ðŸš€ Stack TecnolÃ³gico

- **React 18** - Library de UI moderna
- **TypeScript** - Tipado estÃ¡tico para mayor seguridad
- **Tailwind CSS** - Framework CSS utility-first
- **Vite** - Build tool ultrarrÃ¡pido
- **React Router** - NavegaciÃ³n entre pÃ¡ginas
- **Context API** - Manejo de estado global
- **Intersection Observer API** - Animaciones de scroll eficientes

## ðŸ“ Estructura del Proyecto

```
sca-web/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ pages/               # ðŸ“„ PÃ¡ginas completas (rutas)
â”‚   â”‚   â”œâ”€â”€ HomePage.tsx
â”‚   â”‚   â””â”€â”€ ConnectPage.tsx
â”‚   â”œâ”€â”€ components/          # ðŸ§© Componentes reutilizables
â”‚   â”‚   â”œâ”€â”€ layout/         #    â””â”€ Navbar, Footer
â”‚   â”‚   â”œâ”€â”€ sections/       #    â””â”€ Hero, Concept, Services, Contact
â”‚   â”‚   â””â”€â”€ ui/            #    â””â”€ Button, ActionButton, etc
â”‚   â”œâ”€â”€ lib/                # ðŸ› ï¸ Utilidades y lÃ³gica de negocio
â”‚   â”œâ”€â”€ contexts/           # ðŸŒ Context API (i18n)
â”‚   â”œâ”€â”€ hooks/              # ðŸª Custom hooks
â”‚   â”œâ”€â”€ types/              # ðŸ“˜ TypeScript interfaces
â”‚   â”œâ”€â”€ data/               # ðŸ“Š Constantes y traducciones
â”‚   â””â”€â”€ assets/             # ðŸŽ¨ ImÃ¡genes y recursos
â”‚       â””â”€â”€ images/
â”œâ”€â”€ public/                 # ðŸŒ Archivos estÃ¡ticos
â”‚   â”œâ”€â”€ images/            #    â””â”€ Logos, fotos
â”‚   â””â”€â”€ documents/         #    â””â”€ PDFs, catÃ¡logosâ”œâ”€â”€ ðŸ“š docs/                      # DocumentaciÃ³n completaâ”œâ”€â”€ index.html
â”œâ”€â”€ package.json
â”œâ”€â”€ tsconfig.json
â”œâ”€â”€ tailwind.config.js
â””â”€â”€ vite.config.ts
```

## ðŸ› ï¸ InstalaciÃ³n y Desarrollo

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

El sitio estarÃ¡ disponible en `http://localhost:3000`

### 3. Compilar para producciÃ³n

```bash
npm run build
```

### 4. Preview de producciÃ³n

```bash
npm run preview
```

## ðŸŽ¨ CaracterÃ­sticas Principales

### âœ… Arquitectura Limpia y Escalable
- **SeparaciÃ³n clara**: Pages â†’ Components â†’ Lib
- **Componentes modulares**: Reutilizables y mantenibles
- **OrganizaciÃ³n por funcionalidad**: FÃ¡cil de entender y extender

### âœ… Componentes Modulares
- Todos los componentes estÃ¡n separados por responsabilidad
- Reutilizables y fÃ¡ciles de mantener
- Tipados completamente con TypeScript

### âœ… InternacionalizaciÃ³n (i18n)
- Soporte para 3 idiomas: InglÃ©s, AlemÃ¡n y EspaÃ±ol
- Context API para manejo de idiomas
- Traducciones centralizadas en `src/data/translations.ts`

### âœ… Responsive Design
- Mobile-first approach
- Hook personalizado `useIsMobile` para detecciÃ³n de viewport
- NavegaciÃ³n mÃ³vil con hamburger menu

### âœ… Animaciones Optimizadas
- Intersection Observer API para scroll reveals
- Sin dependencias pesadas como AOS
- Rendimiento Ã³ptimo

### âœ… Path Aliases Simplificados
- Imports limpios con `@/` prefix
- Ejemplo: `import { Button } from '@/components/ui'`
- TypeScript reconoce automÃ¡ticamente los paths

## ðŸ“¦ Componentes Principales

### Layout
- **Navbar**: NavegaciÃ³n responsive con switch de idiomas
- **Footer**: Footer simple y profesional

### Sections
- **Hero**: SecciÃ³n hero fullscreen con CTA
- **Concept**: ExplicaciÃ³n del modelo hÃ­brido
- **Services**: Showcase de capacidades
- **Contact**: InformaciÃ³n de contacto global

### UI Components
- **Button**: BotÃ³n reutilizable con variantes
- **SectionHeader**: Header de secciÃ³n consistente
- **RevealWrapper**: Wrapper para animaciones de scroll

## ðŸŽ¯ Buenas PrÃ¡cticas Implementadas

1. **SeparaciÃ³n de Responsabilidades**
   - Cada componente tiene una Ãºnica responsabilidad
   - LÃ³gica separada en hooks personalizados
   - Datos separados en archivos de constantes

2. **Performance**
   - Lazy loading con Intersection Observer
   - MemoizaciÃ³n en Context API
   - Build optimizado con Vite

3. **Mantenibilidad**
   - CÃ³digo limpio y comentado
   - Nomenclatura consistente
   - Estructura escalable

4. **Type Safety**
   - Todas las interfaces definidas
   - Props tipadas
   - Sin uso de `any`

5. **Accesibilidad**
   - Semantic HTML
   - ARIA labels donde necesario
   - NavegaciÃ³n por teclado

## ðŸ”§ Path Aliases

El proyecto usa `@/` como path alias para imports mÃ¡s limpios:

```typescript
import { Button } from '@/components/ui';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/types';
```

## ðŸ“¸ GestiÃ³n de ImÃ¡genes

- **`public/images/`** - Para imÃ¡genes estÃ¡ticas (logos, favicons)
- **`src/assets/images/`** - Para imÃ¡genes importadas en componentes

## ðŸ“ Scripts Disponibles

```json
{
  "dev": "vite",                    // Modo desarrollo
  "build": "tsc && vite build",     // Compilar producciÃ³n
  "preview": "vite preview",        // Preview producciÃ³n
  "lint": "eslint . --ext ts,tsx"   // Linter
}
```

## ðŸŒ Agregar Nuevas Traducciones

1. Editar `src/data/translations.ts`
2. Agregar nuevas keys en todas las lenguas
3. Actualizar interface `TranslationKeys` en `src/types/index.ts`
4. Usar con `t('nueva_key')` en componentes

## ðŸŽ¨ Personalizar Estilos

Los colores y configuraciÃ³n estÃ¡n centralizados en `tailwind.config.js`:

```javascript
colors: {
  primary: '#0f0f0f',
  accent: '#009BDD',
  gold: '#c5a059',
}
```

## ðŸ“„ Licencia
