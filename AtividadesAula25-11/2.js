const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;


app.get("/greet/:name", async (req, res) =>{
    const {name} = req.params;
    try{
        res.status(200).json({message:  `Olá, ${name}!`});
    }
    catch{
        res.status(500).json({error: "erro"});
    }
});

app.listen(PORT, () =>{
    console.log(`porta: ${PORT}`);
});