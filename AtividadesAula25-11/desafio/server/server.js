const express = require('express');
const app = express();
const imagemRoutes = require('../routes/imagemRoutes');
const usuarioRoutes = require('../routes/UserRoute');

app.use(express.json());
app.use('/api', imagemRoutes);
app.use('/api', usuarioRoutes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));