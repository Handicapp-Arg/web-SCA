# Scripts de Utilidad

## Convert to WebP

Script para convertir todas las imágenes de una carpeta a formato WebP optimizado para web.

### 🚀 Uso Rápido

```bash
# Convertir todas las imágenes de public/images
npm run convert:images

# Convertir imágenes de una carpeta específica
npm run convert:webp -- ruta/a/carpeta

# O ejecutar directamente
node scripts/convert-to-webp.js public/images
```

### ⚙️ Características

- ✅ **Formatos soportados**: JPG, JPEG, PNG, GIF, BMP, TIFF
- ✅ **Conversión automática**: Procesa todos los archivos de la carpeta
- ✅ **Mantiene nombres**: El archivo convertido tiene el mismo nombre
- ✅ **Elimina originales**: Limpia automáticamente después de convertir
- ✅ **Calidad optimizada**: 80% (balance perfecto calidad/tamaño)
- ✅ **Estadísticas**: Muestra reducción de tamaño y resumen

### 📊 Ejemplo de Salida

```
🚀 Iniciando conversión de imágenes a WebP...

📁 Carpeta: public/images
⚙️  Calidad: 80%

📸 Encontradas 5 imágenes para convertir

✅ montura_salto.jpg → montura_salto.webp (245.32KB → 89.15KB, -63.7%)
   🗑️  Original eliminado
✅ montura_adistramiento.png → montura_adistramiento.webp (312.48KB → 102.34KB, -67.3%)
   🗑️  Original eliminado
✅ canaves.png → canaves.webp (45.67KB → 18.23KB, -60.1%)
   🗑️  Original eliminado

============================================================
📊 RESUMEN DE CONVERSIÓN
============================================================
✅ Convertidas exitosamente: 5
❌ Fallidas: 0
📦 Tamaño original total: 1234.56 KB
📦 Tamaño WebP total: 456.78 KB
💾 Reducción total: 777.78 KB (-63.0%)
============================================================

✨ Conversión completada!
```

### 🔧 Configuración

Puedes modificar la calidad editando el script:

```javascript
// En convert-to-webp.js línea 16
const WEBP_QUALITY = 80; // Cambia este valor (1-100)
```

**Recomendaciones de calidad:**
- **60-70**: Máxima compresión, para thumbnails
- **80**: Óptimo para web (recomendado) ⭐
- **90-95**: Alta calidad, para imágenes importantes
- **100**: Sin pérdida (no recomendado, archivos grandes)

### ⚠️ Advertencias

- **Los archivos originales se eliminan** después de la conversión exitosa
- **Haz backup** antes de ejecutar si necesitas conservar los originales
- El script solo procesa archivos en la carpeta especificada (no subdirectorios)

### 🎯 Casos de Uso

```bash
# Convertir imágenes del proyecto
npm run convert:images

# Convertir logos
node scripts/convert-to-webp.js public/images/logos

# Convertir imágenes de productos
node scripts/convert-to-webp.js public/images/products

# Convertir desde cualquier ruta
node scripts/convert-to-webp.js /ruta/absoluta/a/imagenes
```

### 📈 Beneficios WebP

- **Reducción de tamaño**: 25-35% menor que JPEG, 80% menor que PNG
- **Mejor SEO**: Google prioriza sitios con carga rápida
- **Soporte universal**: Compatible con todos los navegadores modernos
- **Transparencia**: Soporta canal alpha (como PNG)
- **Calidad**: Compresión superior a JPEG con menos artefactos

### 🛠️ Troubleshooting

**Error: "La carpeta no existe"**
```bash
# Verifica la ruta
ls public/images
```

**Error: "No se encontraron imágenes"**
```bash
# Verifica las extensiones de archivo
ls -la public/images
```

**Error de permisos**
```bash
# Da permisos de ejecución
chmod +x scripts/convert-to-webp.js
```

### 📦 Dependencias

- `sharp`: Librería de procesamiento de imágenes de alto rendimiento
- Node.js 14+ (usa ES modules)

---

**Creado para:** SCA Web Project  
**Última actualización:** Enero 2026
