const fs = require('fs');
const directoryPath = 'src/app/swagger/model/';

console.log('Start renaming model files in PascalCase.')
fs.readdir(directoryPath, (err, files) => {
    
    files.forEach(file => {

        if(file !== 'models.ts') {
            const fileNameCapitalize = file.charAt(0).toUpperCase() + file.slice(1);
            fs.renameSync(`${directoryPath}${file}`, `${directoryPath}${fileNameCapitalize}`);
        }
    });

    console.log('End renaming model files in PascalCase.')
});