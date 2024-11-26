const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;


app.get('/check-parity/:number', async (req, res) => {
    const {number} = req.params;
    let N = parseFloat(number)
    try {
        if (isNaN(N) || N % 2 == !0) {
            res.status(400).json({ error: "O numero é impar OU String" });
        }
        else {
        res.status(200).json({ message: "O numero é par"});
        }
    } catch (error) {
        res.status(500).json({ error: "erro" });
    }
});

app.listen(PORT, () =>{
    console.log(`porta: ${PORT}`);
});
