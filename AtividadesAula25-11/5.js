const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;


app.get('/multiply/:a/:b', async (req, res) => {
    const { a, b } = req.params;

    try {
        const A = parseFloat(a);
        const B = parseFloat(b);

        if (isNaN(A) || isNaN(B)) {
            res.status(400).json({ error: "erro" });
        }
        else {
        const result = A * B;
        res.status(200).json({ message: result});
        }
    } catch (error) {
        res.status(500).json({ error: "erro" });
    }
});

app.listen(PORT, () =>{
    console.log(`porta: ${PORT}`);
});