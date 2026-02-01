const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); 

class FileHandler {
    
    static createTempFile(identifier, extension, content) {
        const tempDir = path.join(__dirname, '../../temp');
        
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir, { recursive: true });
        }

        // Gera um ID único universal (ex: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed')
        const uniqueID = uuidv4();
        const fileName = `submission_${identifier}_${uniqueID}.${extension}`;
        const filePath = path.join(tempDir, fileName);

        fs.writeFileSync(filePath, content);
        
        return filePath;
    }

    static deleteFile(filePath) {
        if (filePath && fs.existsSync(filePath)) {
            try {
                fs.unlinkSync(filePath);
            } catch (err) {
                console.error(`[FileHandler] Erro ao apagar ficheiro: ${err.message}`);
            }
        }
    }
}

module.exports = FileHandler;