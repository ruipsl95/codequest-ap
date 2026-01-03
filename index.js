const express = require('express');
const path = require('path');
const DeployController = require('./src/controllers/DeployController'); 
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


// Rotas da API 

app.get('/config_url', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/config_page.html'));
});


app.get('/json_params_url', (req, res) => {
    res.sendFile(path.join(__dirname, 'data/params.json'));
});


app.get('/analytics_list_url', (req, res) => {
    res.sendFile(path.join(__dirname, 'data/analytics_list.json'));
});


app.get('/deploy', DeployController.handleDeploy);

app.post('/analytics_url', (req, res) => {
    res.sendFile(path.join(__dirname, 'data/analytics_test.json'));
});

//Rota que implementa o padrão de criaç\ão
app.get('/user_url', DeployController.handleDeploy);    

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/routes.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor CodeQuest online http://localhost:${PORT}`);
});




