# 📱 QR Connect Page - Guía de Uso

## 🎯 Objetivo

Página de conexión rápida para eventos y ferias comerciales. Permite a los visitantes guardar tu contacto y comunicarse al instante escaneando un código QR.

## 🔗 URLs de Acceso

- **Producción**: `https://tudominio.com/connect`
- **Alternativa**: `https://tudominio.com/qr`
- **Local**: `http://localhost:3000/connect`

## ✨ Funcionalidades Implementadas

### 1. Save Contact (vCard)
- ✅ Descarga automática de archivo .vcf
- ✅ Compatible con iOS y Android
- ✅ Se importa directamente a la agenda del teléfono
- ✅ Incluye: nombre, empresa, email, teléfono, website

### 2. WhatsApp
- ✅ Abre WhatsApp con mensaje predefinido
- ✅ Mensaje personalizable para el evento
- ✅ Funciona en web y móvil

### 3. Email
- ✅ Abre cliente de correo nativo
- ✅ Asunto y cuerpo predefinidos
- ✅ Personalizado con info del evento

### 4. View Catalog
- ✅ Abre PDF en nueva pestaña
- ✅ Compatible con todos los dispositivos
- ✅ Catálogo institucional de productos

### 5. Visit Website
- ✅ Redirige al sitio web principal
- ✅ Para navegación completa

## 🎨 Diseño

- **Mobile-First**: Optimizado para smartphones
- **Botones Grandes**: Fáciles de tocar (mínimo 48x48px)
- **Sin Navegación**: Sin navbar/footer, foco en acciones
- **Colores de Marca**: Usa los colores corporativos de SCA
- **Responsive**: Se adapta a cualquier tamaño de pantalla

## ⚙️ Configuración

### Datos de Contacto

Edita `src/lib/connectData.ts`:

```typescript
export const companyContact: ContactData = {
  name: 'Santiago A. Salerno',
  company: 'SCA - Saddle Company Argentina',
  position: 'Managing Partner',
  email: 'santiago@horsebrandcompany.com.ar',
  phone: '+5401156650533',
  website: 'https://www.sca-saddles.com',
  address: 'Cochabamba 476, Villa Martelli, Buenos Aires, Argentina',
};
```

### Información del Evento

```typescript
export const eventInfo = {
  name: 'Spoga Horse',
  location: 'Cologne, Germany',
  year: new Date().getFullYear(),
};
```

### Mensajes Predefinidos

```typescript
export const contactMessages = {
  whatsapp: `Hi, we met at ${eventInfo.name} ${eventInfo.location}. I'd like more information about SCA products.`,
  email: {
    subject: `${eventInfo.name} ${eventInfo.year} - Information Request`,
    body: `Hi,\n\nWe met at ${eventInfo.name} in ${eventInfo.location}.\n\nI'd like to learn more about your OEM saddle manufacturing services.\n\nBest regards,`,
  },
};
```

## 📄 Catálogo PDF

1. **Ubicación**: Coloca tu PDF en `public/documents/SCA_Catalog.pdf`
2. **Formato**: PDF optimizado para web (máximo 10MB recomendado)
3. **Nombre**: Debe llamarse exactamente `SCA_Catalog.pdf`

Si quieres cambiar el nombre:
- Edita `src/lib/connectData.ts`
- Actualiza `export const catalogPDF = '/documents/TU_ARCHIVO.pdf';`

## 📲 Generar Código QR

### Opción 1: QR Code Generator Online
1. Ve a https://www.qr-code-generator.com/
2. Pega la URL: `https://tudominio.com/connect`
3. Personaliza diseño (opcional)
4. Descarga en alta resolución

### Opción 2: Herramientas Profesionales
- **Canva**: Tiene generador integrado
- **Adobe Express**: QR codes personalizables
- **QR Tiger**: Opciones avanzadas con analytics

### Recomendaciones para el QR
- ✅ Tamaño mínimo: 3x3 cm
- ✅ Alto contraste (negro sobre blanco)
- ✅ Incluir call-to-action: "Scan to Connect"
- ✅ Probar antes de imprimir

## 🖨️ Material Impreso Sugerido

### Stand de Feria
- **Roll-up Banner**: QR grande + texto "Scan to Save Contact"
- **Tarjetas de Mesa**: QR + breve descripción
- **Folletos**: QR en contraportada

### Materiales Individuales
- **Business Cards**: QR en reverso
- **Badges**: QR visible para redes rápidas

## 🧪 Testing

Antes del evento, prueba:

1. ✅ Escanear QR desde iOS y Android
2. ✅ Descargar vCard y verificar que se importe
3. ✅ Abrir WhatsApp (verificar número correcto)
4. ✅ Enviar email (verificar asunto y mensaje)
5. ✅ Abrir PDF (verificar que cargue)
6. ✅ Probar en diferentes navegadores

## 📊 Analytics (Opcional)

Para trackear uso, puedes agregar:
- Google Analytics en la página
- UTM parameters en el QR
- Shortened URL con analytics (bit.ly, ow.ly)

## 🔒 Seguridad

- ✅ No se recopilan datos del usuario
- ✅ No hay cookies ni tracking invasivo
- ✅ 100% frontend, sin base de datos
- ✅ Conforme con GDPR

## 🚀 Deployment

### Para producción:

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para subir a:
- Netlify
- Vercel
- GitHub Pages
- Cualquier hosting estático

## 💡 Tips para el Evento

1. **WiFi del stand**: Asegúrate de tener buena señal
2. **Carga de batería**: Ofrece power bank si alguien necesita
3. **Backup**: Ten tarjetas de visita tradicionales también
4. **Follow-up**: Anota con quién hablaste para seguimiento post-evento
5. **Test in situ**: Prueba el QR al llegar al venue

## �️ Estructura de Archivos

```
src/
├── pages/
│   └── ConnectPage.tsx       # Página principal
├── components/ui/
│   └── ActionButton.tsx      # Botón de acción táctil
└── lib/
    ├── contactUtils.ts       # Lógica vCard, WhatsApp, Email
    └── connectData.ts        # Configuración y datos
```

## 📞 Soporte

Si necesitas cambiar algo durante el evento, edita:
- `src/lib/connectData.ts` para datos/mensajes
- `src/pages/ConnectPage.tsx` para UI

Y ejecuta:
```bash
npm run build
```

---

**¡Listo para conectar en Spoga Horse! 🐴**
