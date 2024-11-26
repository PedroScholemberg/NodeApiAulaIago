const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;


app.get('/calculate-age/:birth_year', async (req, res) => {
    const { birth_year } = req.params;

    try {
        const B = parseFloat(birth_year);

        if (isNaN(B)) {
            res.status(400).json({ error: "Escreva um numero" });
        }
        else {
        const result = 2024 - B;
        res.status(200).json({ message: `Idade: ${result}`});
        }
    } catch (error) {
        res.status(500).json({ error: "erro" });
    }
});

app.listen(PORT, () =>{
    console.log(`porta: ${PORT}`);
});
