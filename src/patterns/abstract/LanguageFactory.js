
class LanguageFactory {
    createCompiler() { throw new Error("Método createCompiler não implementado!"); }
    createTestRunner() { throw new Error("Método createTestRunner não implementado!"); }
}

class Compiler {
    compile(code) { throw new Error("Método compile não implementado!"); }
}

class TestRunner {
    runTests(executable) { throw new Error("Método runTests não implementado!"); }
}

module.exports = { LanguageFactory, Compiler, TestRunner };