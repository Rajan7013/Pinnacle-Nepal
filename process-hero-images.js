/**
 * Hero Image Processor for Pinnacle Nepal
 * Renames, resizes, and compresses images using sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, 'public', 'images', 'hero');
const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 1080;
const QUALITY = 85;

async function getImageFiles(directory) {
    const files = fs.readdirSync(directory);
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

    return files
        .filter(file => {
            const ext = path.extname(file).toLowerCase();
            return validExtensions.includes(ext);
        })
        .sort();
}

async function processImage(inputPath, outputPath, index) {
    try {
        const stats = fs.statSync(inputPath);
        const originalSizeKB = (stats.size / 1024).toFixed(1);

        console.log(`\n[${index}/15] Processing: ${path.basename(inputPath)}`);
        console.log(`         → hero-${index}.jpg`);
        console.log(`         Original size: ${originalSizeKB} KB`);

        // Process with sharp
        await sharp(inputPath)
            .resize(TARGET_WIDTH, TARGET_HEIGHT, {
                fit: 'cover',
                position: 'center'
            })
            .jpeg({
                quality: QUALITY,
                mozjpeg: true
            })
            .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const newSizeKB = (newStats.size / 1024).toFixed(1);
        const reduction = (((stats.size - newStats.size) / stats.size) * 100).toFixed(1);

        console.log(`         ✅ Processed: ${newSizeKB} KB`);
        console.log(`         Compression: ${reduction}% reduction`);

        return true;
    } catch (error) {
        console.log(`         ❌ Error: ${error.message}`);
        return false;
    }
}

async function main() {
    console.log('='.repeat(60));
    console.log('PINNACLE NEPAL - HERO IMAGE PROCESSOR');
    console.log('='.repeat(60));
    console.log(`\nInput Directory: ${INPUT_DIR}`);
    console.log(`Target Size: ${TARGET_WIDTH}x${TARGET_HEIGHT}`);
    console.log(`Quality: ${QUALITY}%\n`);

    // Get all image files
    const imageFiles = await getImageFiles(INPUT_DIR);

    if (imageFiles.length === 0) {
        console.log('❌ No images found in directory!');
        return;
    }

    console.log(`Found ${imageFiles.length} images`);
    console.log('-'.repeat(60));

    let processed = 0;

    // Process images
    for (let i = 0; i < Math.min(imageFiles.length, 15); i++) {
        const inputFile = imageFiles[i];
        const inputPath = path.join(INPUT_DIR, inputFile);
        const outputPath = path.join(INPUT_DIR, `hero-${i + 1}.jpg`);

        const success = await processImage(inputPath, outputPath, i + 1);
        if (success) processed++;
    }

    console.log('\n' + '='.repeat(60));
    console.log('✅ PROCESSING COMPLETE!');
    console.log('='.repeat(60));
    console.log(`\nProcessed: ${processed}/${Math.min(imageFiles.length, 15)} images`);
    console.log(`\nAll images saved to: ${INPUT_DIR}`);
    console.log('Images are named: hero-1.jpg through hero-15.jpg');
    console.log('\nNext steps:');
    console.log('1. Check the images in the folder');
    console.log('2. Run: npm run dev');
    console.log('3. Open: http://localhost:3000');
    console.log('\n' + '='.repeat(60));
}

main().catch(console.error);
