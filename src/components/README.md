# 🧩 Components

Componentes reutilizables organizados por categoría.

## Estructura

### `/layout`
Componentes de estructura principal:
- `Navbar.tsx` - Barra de navegación
- `Footer.tsx` - Pie de página

### `/sections`
Secciones del Home Page:
- `Hero.tsx` - Hero principal
- `Concept.tsx` - Explicación del modelo
- `Services.tsx` - Servicios ofrecidos
- `Contact.tsx` - Información de contacto

### `/ui`
Componentes UI reutilizables:
- `Button.tsx` - Botón genérico
- `ActionButton.tsx` - Botón de acción (touch-friendly)
- `SectionHeader.tsx` - Encabezado de sección
- `RevealWrapper.tsx` - Wrapper para animaciones

## Convención

- Cada subcarpeta debe tener su `index.ts`
- Componentes dumb (presentacionales)
- Props bien tipadas con TypeScript
