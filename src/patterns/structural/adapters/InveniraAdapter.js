const deployService = require('../../../services/DeployService');

class InveniraAdapter {
    /**
     * Converte o pedido específico da Inven!RA para o formato do DeployService
     */
    async processRequest(httpRequest) {
        console.log("[Adapter] A processar pedido via Inven!RA...");

       
        const rawId = httpRequest.query.invenira_activity_id || 'default';
        const safeUserId = "anon_invenira_" + rawId; 

        // Extração de parâmetros específicos da Inven!RA
        const lang = httpRequest.query.lang || 'python';

    
        // O DeployService recebe dados limpos e padronizados
        return await deployService.orchestrateDeploy(lang);
    }
}

module.exports = new InveniraAdapter();