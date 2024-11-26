const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;


app.get('/full-name/:first_name/:last_name', async (req, res) => {
    const {first_name, last_name} = req.params;
    try {
        res.status(200).json({ message: `${first_name} ${last_name}` });
    } catch (error) {
        res.status(500).json({ error: "erro" });
    }
});

app.listen(PORT, () =>{
    console.log(`porta: ${PORT}`);
});
