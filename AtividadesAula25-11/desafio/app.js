const express = require('express');
const app = express();
const routes = require('./Routes/router');
const { uploadFile, downloadFile } = require('./services/s3Service');

app.use(express.json());

app.use(routes);

app.listen(8090, () => console.log('Servidor rodando na porta 8090'));
