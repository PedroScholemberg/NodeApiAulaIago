// importa as dependencias
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/pessoa', async (req, res) => {
    try {
        res.status(200).json({ message: "mensagem" });
    } catch (error) {
        res.status(500).json({ error: "erro" });
    }
});


app.get('/pessoa/id/:id', async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json({ message: `Pessoa com ID: ${id}` });
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar a pessoa" });
    }
});

app.get('/pessoa/nomeouid', async (req, res) => {
    const { id, nome } = req.query;
  
    try {
      if (id) {
        // Process the request using the 'id' parameter
        res.status(200).json({ message: `Searched by ID: ${id}` });
      } else if (nome) {
        // Process the request using the 'nome' parameter
        res.status(200).json({ message: `Searched by Nome: ${nome}` });
      } else {
        res.status(400).json({ error: 'Please provide either id or nome' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

app.listen(PORT, () =>{
    console.log(`porta: ${PORT}`);
});