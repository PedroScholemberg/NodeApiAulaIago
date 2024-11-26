const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;


app.get('/convert-temperature/:celcius', async (req, res) => {
    const {celcius} = req.params;
    const C = parseFloat(celcius);
    try {
        if (isNaN(C)) {
            res.status(400).json({ error: "Escreva um numero" });
        }
        else {
        const result = (C * 9/5) + 32;
        res.status(200).json({ message: `Temperatura em farenheit: ${result}`});
        }
    } catch (error) {
        res.status(500).json({ error: "erro" });
    }
});

app.listen(PORT, () =>{
    console.log(`porta: ${PORT}`);
});
