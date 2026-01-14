const deployService = require('../../../services/DeployService');

class InveniraAdapter {
    /**
     * Converte o pedido específico da Inven!RA para o formato do DeployService
     */
    async processRequest(req) {
        const lang = req.query.lang || 'python';
        const rawId = req.query.invenira_activity_id || 'def';
        
        // Faz a leitura do parâmetro da proposta e se a Inven!RA não enviar, assumimos 'strict'
        const metodo = req.query.metodo_avaliacao || 'strict';

        console.log(`[Adapter] Configuração recebida: Lang=${lang}, Método=${metodo}`);

        // Passagem para o serviço
        const result = await deployService.orchestrateDeploy(lang, metodo);

        return {
            launchURL: `https://codequest-ap.onrender.com/run?id=${rawId}`,
            analytics_data: result.analytics 
        };
    }
}
module.exports = new InveniraAdapter();