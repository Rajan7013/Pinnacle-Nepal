const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = path.join(process.cwd(), 'public', 'images', 'services');
const OUTPUT_DIR = INPUT_DIR;

// Map original messy names to clean IDs
const NAME_MAPPING = {
    'Destinations .png': 'destinations',
    'Support.jpg': 'support',
    'admissions.jpg': 'admissions',
    'counseling.jpg': 'counseling',
    'scholarships.jpg': 'scholarships',
    'test-prep.jpg': 'test-prep',
    'travel.jpg': 'travel',
    'visa.jpg': 'visa'
};

async function optimizeImages() {
    console.log('🚀 Starting Service Image Optimization...');

    if (!fs.existsSync(INPUT_DIR)) {
        console.error(`❌ Directory not found: ${INPUT_DIR}`);
        return;
    }

    const files = fs.readdirSync(INPUT_DIR);

    for (const file of files) {
        // Skip hidden files or already processed pngs (if we are re-running, be careful)
        if (file.startsWith('.')) continue;

        // Find mapping or use basename if not mapped but looks like a target
        let targetName = NAME_MAPPING[file];

        // If exact file not in map, try case-insensitive matching
        if (!targetName) {
            const lower = file.toLowerCase();
            // Try to find if mapped key matches lower
            const key = Object.keys(NAME_MAPPING).find(k => k.toLowerCase() === lower);
            if (key) targetName = NAME_MAPPING[key];
        }

        if (!targetName) {
            console.log(`⚠️  Skipping unknown file: ${file}`);
            continue;
        }

        const inputPath = path.join(INPUT_DIR, file);
        const outputPath = path.join(OUTPUT_DIR, `${targetName}.png`);

        try {
            console.log(`⚙️  Processing: ${file} -> ${targetName}.png`);

            // Create a temporary buffer to avoid locking the file if overwriting same name
            const buffer = await sharp(inputPath)
                .resize(512, 512, {
                    fit: 'cover',   // Center crop
                    position: 'center'
                })
                .png({
                    quality: 80,
                    compressionLevel: 9, // Max compression
                    adaptiveFiltering: true,
                    palette: true // Try to use palette for smaller size if possible (like PNG8) - good for icons
                })
                .toBuffer();

            // Write the buffer to file
            fs.writeFileSync(outputPath, buffer);

            // Delete original if it had a different name or extension
            if (inputPath !== outputPath) {
                fs.unlinkSync(inputPath);
                console.log(`   🗑️  Deleted original: ${file}`);
            }

            console.log(`   ✅ Done!`);

        } catch (error) {
            console.error(`❌ Error processing ${file}:`, error);
        }
    }

    console.log('✨ All service images optimized!');
}

optimizeImages();
