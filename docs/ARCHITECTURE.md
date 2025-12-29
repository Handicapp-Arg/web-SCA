# 🏗️ Arquitectura del Proyecto SCA

## 📊 Estructura Visual

```
sca-web/
│
├── 📄 src/pages/                 → Páginas completas (rutas)
│   ├── HomePage.tsx             → Ruta: /
│   ├── ConnectPage.tsx          → Rutas: /connect, /qr
│   ├── index.ts                 → Barrel export
│   └── README.md                → Documentación
│
├── 🧩 src/components/            → Componentes UI
│   ├── layout/                  → Estructura del sitio
│   │   ├── Navbar.tsx           → Navegación principal
│   │   ├── Footer.tsx           → Pie de página
│   │   └── index.ts
│   │
│   ├── sections/                → Secciones del HomePage
│   │   ├── Hero.tsx             → Banner principal
│   │   ├── Concept.tsx          → Modelo de negocio
│   │   ├── Services.tsx         → Servicios
│   │   ├── Contact.tsx          → Contacto global
│   │   └── index.ts
│   │
│   ├── ui/                      → Componentes reutilizables
│   │   ├── Button.tsx           → Botón genérico
│   │   ├── ActionButton.tsx     → Botón táctil (eventos)
│   │   ├── SectionHeader.tsx    → Encabezado sección
│   │   ├── RevealWrapper.tsx    → Animación scroll
│   │   └── index.ts
│   │
│   └── README.md
│
├── 🛠️ src/lib/                   → Utilidades y lógica
│   ├── contactUtils.ts          → vCard, WhatsApp, Email
│   ├── connectData.ts           → Config página Connect
│   ├── index.ts
│   └── README.md
│
├── 🌐 src/contexts/              → Estado global
│   └── LanguageContext.tsx      → i18n (EN/DE/ES)
│
├── 🪝 src/hooks/                 → Custom React hooks
│   ├── useScrollReveal.ts       → Animación scroll
│   └── useIsMobile.ts           → Detección móvil
│
├── 📘 src/types/                 → TypeScript types
│   └── index.ts                 → Interfaces globales
│
├── 📊 src/data/                  → Datos estáticos
│   ├── translations.ts          → Traducciones i18n
│   └── constants.ts             → Constantes app
│
├── 🎨 src/assets/                → Recursos
│   └── images/                  → Imágenes importadas
│
├── 🌍 public/                    → Archivos estáticos
│   ├── images/                  → Logos, fotos
│   │   ├── logoSCA.png
│   │   └── image1.jpeg
│   └── documents/               → PDFs
│       └── SCA_Catalog.pdf
│
└── ⚙️ Config files
    ├── App.tsx                  → Router principal
    ├── main.tsx                 → Entry point
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.js
    └── vite.config.ts
```

## 🎯 Principios de Organización

### 1. **Separación por Responsabilidad**
- `pages/` → Rutas y composición
- `components/` → UI pura y presentacional
- `lib/` → Lógica de negocio y utilidades
- `hooks/` → Lógica React reutilizable
- `contexts/` → Estado compartido

### 2. **Colocation**
- Archivos relacionados juntos
- Cada carpeta con su `index.ts` para exports
- README.md para documentación

### 3. **Escalabilidad**
- Fácil agregar nuevas páginas en `/pages`
- Componentes reutilizables en `/components/ui`
- Nueva lógica en `/lib`

### 4. **Imports Limpios**
```typescript
// ✅ Correcto - usando barrel exports
import { HomePage, ConnectPage } from '@/pages';
import { Button, ActionButton } from '@/components/ui';
import { downloadVCard } from '@/lib';

// ❌ Evitar - imports profundos
import { HomePage } from '@/pages/HomePage';
import { Button } from '@/components/ui/Button';
```

## 🔄 Flujo de Datos

```
User Action
    ↓
Page Component (pages/)
    ↓
UI Components (components/)
    ↓
Hooks (hooks/) ← → Context (contexts/)
    ↓
Lib Functions (lib/)
    ↓
Data (data/)
```

## 📝 Convenciones

### Nomenclatura
- **Componentes**: PascalCase (`HomePage.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useIsMobile.ts`)
- **Utilidades**: camelCase (`contactUtils.ts`)
- **Tipos**: PascalCase (`ContactData`)

### Exports
- Cada carpeta debe tener `index.ts` para barrel exports
- Exportar todo lo público
- Mantener imports internos privados

### Documentación
- JSDoc en funciones importantes
- README.md en carpetas principales
- Comentarios para lógica compleja

## 🚀 Agregando Nueva Funcionalidad

### Nueva Página
1. Crear `src/pages/NuevaPage.tsx`
2. Exportar en `src/pages/index.ts`
3. Agregar ruta en `App.tsx`

### Nuevo Componente
1. Crear en carpeta apropiada:
   - Layout → `components/layout/`
   - Sección → `components/sections/`
   - Reutilizable → `components/ui/`
2. Exportar en `index.ts` de la carpeta

### Nueva Utilidad
1. Crear en `src/lib/nombre.ts`
2. Exportar en `src/lib/index.ts`

## ✅ Ventajas de Esta Estructura

1. **Clara**: Fácil encontrar archivos
2. **Simple**: Sin sobre-ingeniería
3. **Escalable**: Crece sin complejidad
4. **Mantenible**: Cambios localizados
5. **Estándar**: Sigue convenciones React modernas

---

**Última actualización**: Diciembre 2025
