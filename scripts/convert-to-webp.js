/**
 * Script para convertir todas las imágenes a formato WebP
 * Uso: node scripts/convert-to-webp.js [ruta-carpeta]
 * Ejemplo: node scripts/convert-to-webp.js public/images
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuración ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Extensiones de imagen soportadas
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.tif'];

// Calidad de compresión WebP (80 es óptimo para web)
const WEBP_QUALITY = 80;

/**
 * Convierte una imagen a formato WebP
 * @param {string} inputPath - Ruta del archivo de entrada
 * @param {string} outputPath - Ruta del archivo de salida
 * @returns {Promise<object>} - Información del proceso
 */
async function convertToWebP(inputPath, outputPath) {
  try {
    const info = await sharp(inputPath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);
    
    return {
      success: true,
      info,
      inputPath,
      outputPath
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      inputPath,
      outputPath
    };
  }
}

/**
 * Obtiene el tamaño de un archivo en KB
 * @param {string} filePath - Ruta del archivo
 * @returns {Promise<number>} - Tamaño en KB
 */
async function getFileSize(filePath) {
  try {
    const stats = await fs.stat(filePath);
    return (stats.size / 1024).toFixed(2);
  } catch {
    return 0;
  }
}

/**
 * Procesa todas las imágenes de una carpeta
 * @param {string} folderPath - Ruta de la carpeta a procesar
 */
async function processFolder(folderPath) {
  console.log('\n🚀 Iniciando conversión de imágenes a WebP...\n');
  console.log(`📁 Carpeta: ${folderPath}`);
  console.log(`⚙️  Calidad: ${WEBP_QUALITY}%\n`);

  try {
    // Verificar que la carpeta existe
    await fs.access(folderPath);
  } catch {
    console.error(`❌ Error: La carpeta "${folderPath}" no existe.`);
    process.exit(1);
  }

  // Leer archivos de la carpeta
  const files = await fs.readdir(folderPath);
  
  // Filtrar solo archivos de imagen
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return IMAGE_EXTENSIONS.includes(ext);
  });

  if (imageFiles.length === 0) {
    console.log('⚠️  No se encontraron imágenes para convertir.');
    return;
  }

  console.log(`📸 Encontradas ${imageFiles.length} imágenes para convertir\n`);

  let converted = 0;
  let failed = 0;
  let totalOriginalSize = 0;
  let totalWebpSize = 0;

  // Procesar cada imagen
  for (const file of imageFiles) {
    const inputPath = path.join(folderPath, file);
    const nameWithoutExt = path.parse(file).name;
    const outputPath = path.join(folderPath, `${nameWithoutExt}.webp`);

    // Obtener tamaño original
    const originalSize = await getFileSize(inputPath);
    totalOriginalSize += parseFloat(originalSize);

    process.stdout.write(`⏳ Convirtiendo: ${file}...`);

    // Convertir a WebP
    const result = await convertToWebP(inputPath, outputPath);

    if (result.success) {
      // Obtener tamaño WebP
      const webpSize = await getFileSize(outputPath);
      totalWebpSize += parseFloat(webpSize);
      
      const reduction = ((1 - webpSize / originalSize) * 100).toFixed(1);
      
      console.log(`\r✅ ${file} → ${nameWithoutExt}.webp (${originalSize}KB → ${webpSize}KB, -${reduction}%)`);

      // Eliminar archivo original
      try {
        await fs.unlink(inputPath);
        console.log(`   🗑️  Original eliminado`);
      } catch (error) {
        console.log(`   ⚠️  No se pudo eliminar el original: ${error.message}`);
      }

      converted++;
    } else {
      console.log(`\r❌ Error en ${file}: ${result.error}`);
      failed++;
    }
  }

  // Resumen final
  console.log('\n' + '='.repeat(60));
  console.log('📊 RESUMEN DE CONVERSIÓN');
  console.log('='.repeat(60));
  console.log(`✅ Convertidas exitosamente: ${converted}`);
  console.log(`❌ Fallidas: ${failed}`);
  console.log(`📦 Tamaño original total: ${totalOriginalSize.toFixed(2)} KB`);
  console.log(`📦 Tamaño WebP total: ${totalWebpSize.toFixed(2)} KB`);
  
  if (totalOriginalSize > 0) {
    const totalReduction = ((1 - totalWebpSize / totalOriginalSize) * 100).toFixed(1);
    const savedKB = (totalOriginalSize - totalWebpSize).toFixed(2);
    console.log(`💾 Reducción total: ${savedKB} KB (-${totalReduction}%)`);
  }
  
  console.log('='.repeat(60));
  console.log('\n✨ Conversión completada!\n');
}

// Obtener ruta de la carpeta desde argumentos o usar default
const targetFolder = process.argv[2] || path.join(__dirname, '..', 'public', 'images');

// Ejecutar el script
processFolder(targetFolder).catch(error => {
  console.error('\n❌ Error fatal:', error.message);
  process.exit(1);
});
