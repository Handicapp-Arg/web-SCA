// Script para subir todas las imágenes locales a Cloudinary
// Requiere: cloudinary (npm install cloudinary), dotenv (npm install dotenv)

const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configuración de Cloudinary desde variables de entorno
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const IMAGES_DIR = path.join(__dirname, '../public/images');
const FOLDER_NAME = 'web-sca';

async function ensureFolderExists(folder) {
  // Cloudinary crea carpetas automáticamente al subir si no existen
  return true;
}

function getAllImageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImageFiles(filePath));
    } else if (/(jpe?g|png|webp|gif|svg)$/i.test(file)) {
      results.push(filePath);
    }
  });
  return results;
}

async function uploadImages() {
  await ensureFolderExists(FOLDER_NAME);
  const files = getAllImageFiles(IMAGES_DIR);
  if (files.length === 0) {
    console.log('No se encontraron imágenes en', IMAGES_DIR);
    return;
  }
  for (const file of files) {
    const publicId = FOLDER_NAME + '/' + path.relative(IMAGES_DIR, file).replace(/\\/g, '/').replace(/\.[^.]+$/, '');
    try {
      const result = await cloudinary.uploader.upload(file, {
        folder: FOLDER_NAME,
        public_id: publicId,
        overwrite: false,
      });
      console.log('Subido:', file, '->', result.secure_url);
    } catch (err) {
      console.error('Error subiendo', file, err.message);
    }
  }
}

uploadImages();
