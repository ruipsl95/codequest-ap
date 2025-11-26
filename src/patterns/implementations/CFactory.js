const { LanguageFactory, Compiler, TestRunner } = require('../abstract/LanguageFactory');

class CCompiler extends Compiler {
    compile(code) { return `[C] Sintaxe verificada: ${code}`; }
}

class CTestRunner extends TestRunner {
    runTests(executable) { return `[C] Testes executados em ${executable}`; }
}

class CFactory extends LanguageFactory {
    createCompiler() { return new CCompiler(); }
    createTestRunner() { return new CTestRunner(); }
}

module.exports = CFactory;


