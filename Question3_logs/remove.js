const fs = require('fs').promises; // Use promises for async file operations
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

async function removeLogs() {
    try {
        const dirExists = await fs.access(logsDir).then(() => true).catch(() => false);
        
        if (dirExists) {
            const files = await fs.readdir(logsDir);

            if (files.length > 0) {
                console.log('Files to delete:');
                await Promise.all(files.map(async (file) => {
                    console.log(`Deleting file: ${file}`);
                    await fs.unlink(path.join(logsDir, file));
                }));
            }
            await fs.rmdir(logsDir);
            console.log('Logs directory removed.');
        } else {
            console.log('Logs directory does not exist.');
        }
    } catch (error) {
        console.error('Error removing log files: ', error);
    }
}

removeLogs();
