const PythonFactory = require('../patterns/concrete/PythonFactory');
const CFactory = require('../patterns/implementations/CFactory');

class DeployService {
    
    async orchestrateDeploy(language) {
        let factory;

        if (language === 'python') {
            factory = new PythonFactory();
        } else if (language === 'c') {
            factory = new CFactory();
        } else {
            throw new Error("Linguagem não suportada");
        }

        const compiler = factory.createCompiler();
        const runner = factory.createTestRunner();

        return {
            status: "Ambiente Criado",
            tools: {
                compiler: compiler.constructor.name,
                runner: runner.constructor.name
            },
            test_message: compiler.compile("Hello World") 
        };
    }
}

//Exportação da instância
module.exports = new DeployService(); 