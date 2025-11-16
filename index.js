const express = require('express');
const path = require('path');

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


app.get('/user_url', (req, res) => {
    const instance_id = req.query.invenira_activity_id || 'default_instance';

    const response = {
        "launchURL": `https://seu-dominio.com/codequest_aluno?id=${instance_id}`
    };
    res.json(response);
});


app.post('/analytics_url', (req, res) => {
    res.sendFile(path.join(__dirname, 'data/analytics_test.json'));
});


app.get('/', (req, res) => {
    res.send('<h1>O Servidor CodeQuest está a correr! </h1><p>Aceder aqui: <a href="/config_url">/config_url</a></p>');
});

app.listen(PORT, () => {
    console.log(`Servidor CodeQuest online http://localhost:${PORT}`);
});