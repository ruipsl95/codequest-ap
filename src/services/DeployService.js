const PythonFactory = require('../patterns/implementations/PythonFactory');
const CFactory = require('../patterns/implementations/CFactory');

class DeployService {

    async orchestrateDeploy(language) {
        let factory;
        console.log(`Orquestrando deploy para a linguagem: ${language}`);
        if (language === 'python') {
            console.log("[Service] Instanciando PythonFactory...");
            factory = new PythonFactory();
        } else if (language === 'c') {
            console.log("[Service] Instanciando CFactory...");
            factory = new CFactory();
        } else {
            throw new Error("Linguagem não suportada");
        }

        const compiler = factory.createCompiler();
        const runner = factory.createTestRunner();
        console.log(`[Service] Ferramentas criadas: ${compiler.constructor.name} e ${runner.constructor.name}`);
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