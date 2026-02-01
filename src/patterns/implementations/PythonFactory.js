const { LanguageFactory, Compiler, TestRunner } = require('../abstract/LanguageFactory');
const FileHandler = require('../../utils/FileHandler');

class PythonCompiler extends Compiler {
    compile(code) { return `[Python] Sintaxe verificada: ${code.substring(0, 20)}...`; }
}

class PythonTestRunner extends TestRunner {
    // Recebe 'code' em vez de 'executable' para fazer sentido criar ficheiro
    runTests(code) { 
        const filePath = FileHandler.createTempFile('python', 'py', code);

        const result = `[Python] Testes executados com sucesso no ficheiro: ${filePath}`;

        FileHandler.deleteFile(filePath);

        return result; 
    }
}

class PythonFactory extends LanguageFactory {
    createCompiler() { return new PythonCompiler(); }
    createTestRunner() { return new PythonTestRunner(); }
}

module.exports = PythonFactory;