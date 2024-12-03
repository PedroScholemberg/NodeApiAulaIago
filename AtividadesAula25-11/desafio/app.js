const express = require('express');
const connection = require('./conn');
const PORT = 3002;
const app = express();

app.use(express.json());

app.get('/usuarios/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const result = await new Promise((resolve,rejected) =>{
            connection.query('SELECT * FROM USUARIO WHERE id = ?', [id], (erro,resultado) =>{
                if (erro){
                    return rejected(erro)
                }
                resolve(resultado);
            });
        });

        if (result.length > 0){
            const usuario = {
                'nome': result[0].nome,
                'id': result[0].id,
                'data_criacao': result[0].data_criacao
            }
            res.status(200).json(usuario)   
            return;         
        }
        res.status(404).json({
            message : "Nenhum usuario encontrado"
        })

    } catch (error) {
        res.status(500).json({error: 'erro'});
    }
});

app.post('/usuarios', (req,res)=>{
    try {
        const {nome,id,data_criacao} = req.body 
        connection.query('INSERT INTO USUARIO (id,nome,data_criacao) VALUES (?,?,?)', [id,nome,data_criacao], (erro,resposta)=>{
            if (erro){
                return res.status(500).json({error: erro});
            }
            res.status(200).json({message: 'boa'})
        });
        
    } catch (error) {
        res.status(500).json({error: error})
    }
});

app.delete('/usuarios/:id', (req,res)=>{
    try {
        console.log("a");
        const {id} = req.body;
        console.log("b");
        connection.query('DELETE USUARIO WHERE id = ?', [id], (erro, resposta) =>{
            console.log("c");
            if(erro){
                return res.status(500).json({error:erro});
            }
            res.status(200).json({message: 'boa boa'});
            console.log("d");
        });
    } catch (error) {
        res.status(200).json({error: error})
    }
});

app.listen(PORT, () => {
    console.log('conectado na porta ' + PORT);
});