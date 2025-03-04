const imagemService = require('../services/imagemService');
const path = require('path');
const fs = require('fs');



// requisição get
const getImagens = async (req, res) => {
    try {
        const imagens = await imagemService.getImagens();
        res.json(imagens);
    } catch (error) {
        console.error("Erro ao buscar imagens:", error);
        res.status(500).json({ error: "Erro ao buscar imagens", details: error.message });
    }
};

// requisição post
const createImagem = async (req, res) => {
    try {
        const { referencia, titulo } = req.body;
        if (!referencia || !titulo) {
            return res.status(400).json({ error: "Campos referencia e titulo são obrigatórios" });
        }
        const imagem = await imagemService.addImagem(referencia, titulo);
        res.status(201).json(imagem);
    } catch (error) {
        console.error("Erro ao criar imagem:", error);
        res.status(500).json({ error: "Erro ao criar imagem", details: error.message });
    }
};

// requisição de download
// ta dando erro
const downloadImagem = async (req, res) => {
    try {
        const { id } = req.params;
        const localPath = await imagemService.downloadImagem(id); // Retorna o caminho local

        if (!localPath || typeof localPath !== 'string') {
            return res.status(404).json({ error: "Imagem não encontrada" });
        }

        res.download(localPath, (err) => {
            if (err) {
                console.error("Erro ao enviar o arquivo:", err);
                res.status(500).json({ error: "Erro ao enviar o arquivo" });
            }
        });
    } catch (error) {
        console.error("Erro ao baixar imagem:", error);
        res.status(500).json({ error: "Erro ao baixar imagem", details: error.message });
    }
};

module.exports = { getImagens, createImagem, downloadImagem };