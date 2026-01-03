
const inveniraAdapter = require('../patterns/structural/adapters/InveniraAdapter');
//const moodleAdapter = require('../patterns/structural/adapters/MoodleAdapter');

class DeployController {
    
    async handleDeploy(req, res) {
        try {
            let responseData;

             // Se for um pedido Inven!RA -> Usa o InveniraAdapter
            if (req.query.invenira_activity_id) {
                console.log("[Controller] Detetado cliente Inven!RA");
                responseData = await inveniraAdapter.processRequest(req);
            }//Poderiamos verificar se seria um pedido de um outro cliente
            else {
                console.log("[Controller] Cliente desconhecido, assumido Inven!ra por defeito");
                responseData = await inveniraAdapter.processRequest(req);
            }

            res.json(responseData);

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new DeployController();