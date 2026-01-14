const PythonFactory = require('../patterns/implementations/PythonFactory');
const CFactory = require('../patterns/implementations/CFactory');
const StrictGradingStrategy = require('../patterns/behavioral/strategies/StrictGradingStrategy');
const PartialGradingStrategy = require('../patterns/behavioral/strategies/PartialGradingStrategy');

class DeployService {
    
    // Recebe o 'metodo_avaliacao' vindo do Adapter
    async orchestrateDeploy(language, metodoAvaliacao = 'strict') {
        
        // 1. SELEÇÃO DA ESTRATÉGIA
        let strategy;

        if (metodoAvaliacao === 'partial' || metodoAvaliacao === 'parcial') {
            strategy = new PartialGradingStrategy();
        } else {
            strategy = new StrictGradingStrategy();
        }

        // 2. CRIAÇÃO
        let factory;
        if (language === 'python') factory = new PythonFactory();
        else if (language === 'c') factory = new CFactory();
        else throw new Error("Language not supported");

        const compiler = factory.createCompiler();
        
        // --- SIMULAÇÃO ---
        const results = { passed: 2, failed: 1, total: 3 };

        // 3. EXECUÇÃO DA ESTRATÉGIA (Cálculo do score final)
       
        const finalScore = strategy.calculateScore(results);

        return {
            status: "Concluído",
            analytics: {
                tentativas_totais: 1,     
                erros_compilacao: 0,      
                pontuacao_final: finalScore 
            },
            debug_info: {
                strategy_used: strategy.constructor.name,
                raw_results: results
            }
        };
    }
}
//Exportação da instância
module.exports = new DeployService();