const express = require('express');
const app = express();
const routes = require('./Routes/router');
const { uploadFile, downloadFile } = require('./services/s3Service');

app.use(express.json()); // <- ESSA LINHA É OBRIGATÓRIA PARA FUNCIONAR O POST!

app.use('/api', routes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
