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




app.post('/analytics_url', (req, res) => {
    res.sendFile(path.join(__dirname, 'data/analytics_test.json'));
});

//Rota que implementa o padrão
app.get('/user_url', DeployController.handleDeploy);

app.get('/', (req, res) => {
    res.send('<h1>O Servidor CodeQuest está a correr! </h1><p>Rotas:</p><p> <a href="/config_url">/config_url</a></p><p> <a href="/json_params_url">/json_params_url</a></p><p> <a href="/analytics_list_url">/analytics_list_url</a></p><p> <a href="/user_url?lang=python">/user_url?lang=python (Rota com padrão implementado)</a></p><p> <a href="/analytics_url">/analytics_url</a> (POST)</p>');
});

app.listen(PORT, () => {
    console.log(`Servidor CodeQuest online http://localhost:${PORT}`);
});




