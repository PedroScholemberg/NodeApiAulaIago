// importa as dependencias
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/hello', async (req, res) => {
    try {
        res.status(200).json({ message: "Olá Mundo!" });
    } catch (error) {
        res.status(500).json({ error: "erro" });
    }
});

app.listen(PORT, () =>{
    console.log(`porta: ${PORT}`);
});

