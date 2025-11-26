const DeployService = require('../services/DeployService');

class DeployController {
    
    async handleDeploy(req, res) {
        const instance_id = req.query.invenira_activity_id || 'default';
        const lang = req.query.lang || 'python';

        try {
            const deployResult = await DeployService.orchestrateDeploy(lang);

            res.json({
                launchURL: `https://codequest-ap.onrender.com/run?id=${instance_id}`,
                debug_info: deployResult //Verificação do padrão em funcionamento
            });

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new DeployController();