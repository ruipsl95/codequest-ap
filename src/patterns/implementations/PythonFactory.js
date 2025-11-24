const { LanguageFactory, Compiler, TestRunner } = require('../abstract/LanguageFactory');

class PythonCompiler extends Compiler {
    compile(code) { return `[Python] Sintaxe verificada: ${code}`; }
}

class PythonTestRunner extends TestRunner {
    runTests(executable) { return `[Python] Testes executados em ${executable}`; }
}

class PythonFactory extends LanguageFactory {
    createCompiler() { return new PythonCompiler(); }
    createTestRunner() { return new PythonTestRunner(); }
}

module.exports = PythonFactory;