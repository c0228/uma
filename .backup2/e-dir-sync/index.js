const fs = require('fs-extra');
const path = require('path');
const chokidar = require('chokidar');
const crypto = require('crypto');

const sourceFolder = process.argv[2];
const destinationFolder = process.argv[3];

if (!sourceFolder || !destinationFolder) {
  console.log('Usage: node index.js <sourceFolder> <destinationFolder>');
  process.exit(1);
}

async function getFileHash(filePath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('md5');
    const stream = fs.createReadStream(filePath);
    
    stream.on('data', data => hash.update(data));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', error => reject(error));
  });
}

async function copyMissingFiles(sourceDir, destDir) {
  try {
    const sourceFiles = await fs.readdir(sourceDir);
    const destFiles = await fs.readdir(destDir);

    for (const file of sourceFiles) {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file);

      const sourceStats = await fs.stat(sourcePath);

      if (sourceStats.isDirectory()) {
        await fs.ensureDir(destPath);
        await copyMissingFiles(sourcePath, destPath);
      } else {
        const destStats = await fs.stat(destPath).catch(() => null);

        if (!destStats || (destStats.size !== sourceStats.size || (await getFileHash(sourcePath)) !== (await getFileHash(destPath)))) {
          await fs.copy(sourcePath, destPath);
          console.log(`Copied: ${path.relative(sourceFolder, sourcePath)}`);
        }
      }
    }

    for (const file of destFiles) {
      if (!sourceFiles.includes(file)) {
        const destPath = path.join(destDir, file);
        await fs.remove(destPath);
        console.log(`Removed: ${path.relative(destinationFolder, destPath)}`);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function start() {
  await copyMissingFiles(sourceFolder, destinationFolder);

  const allSourceFiles = await getAllFiles(sourceFolder);
  const allDestFiles = await getAllFiles(destinationFolder);

  const filesToCopy = allSourceFiles.filter(file => !allDestFiles.includes(file));
  for (const file of filesToCopy) {
    const sourcePath = path.join(sourceFolder, file);
    const destPath = path.join(destinationFolder, file);
    await fs.copy(sourcePath, destPath);
    console.log(`Copied (on start): ${path.relative(sourceFolder, sourcePath)}`);
  }

  const filesToRemove = allDestFiles.filter(file => !allSourceFiles.includes(file));
  for (const file of filesToRemove) {
    const destPath = path.join(destinationFolder, file);
    await fs.remove(destPath);
    console.log(`Removed (on start): ${path.relative(destinationFolder, destPath)}`);
  }

  await watchAndSync();
}

async function getAllFiles(dir) {
  const files = await fs.readdir(dir);
  const result = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await fs.stat(filePath);

    if (stats.isDirectory()) {
      const subFiles = await getAllFiles(filePath);
      result.push(...subFiles.map(subFile => path.join(file, subFile)));
    } else {
      result.push(file);
    }
  }

  return result;
}

async function watchAndSync() {
  console.log(`Watching for changes in ${sourceFolder}...`);

  const watcher = chokidar.watch(sourceFolder, { ignoreInitial: true, persistent: true, depth: Infinity });

  watcher.on('all', async (event, filePath) => {
    console.log(`Detected ${event} at ${filePath}`);
    await start();
  });
}

start().catch(error => {
  console.error('An error occurred:', error);
});
