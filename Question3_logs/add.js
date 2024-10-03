const fs = require('fs').promises;// api for interacting with file system
const path = require('path');//module to work with file and directory paths

const log_dir = path.join(process.cwd(), 'Logs');

// Function to create log files
async function createLogs() {
   try {
        await fs.mkdir(log_dir,{recursive: true});
        console.log('Created logs directory!');

        const log_promises = [];
        for (let i = 1; i <= 10; i++) {
            const fileName = path.join(log_dir,`Log${i}.txt`);
            const fileContent = `This is the log file and it is number ${i} log file.`;

            log_promises.push(fs.writeFile(fileName,fileContent));
        }
        await Promise.all(log_promises);
        log_promises.forEach((_,index) => {
            console.log(`Log file ${index+1}.txt created!`);
        });
    }catch(error){
    console.error('Error creating log files: ', error);
    }
}

createLogs();
