const imagemService = require('../services/imagemService');

const getImagens = async (req, res) => {
    try {
        const imagens = await imagemService.getImagens();
        res.json(imagens);
    } catch (error) {
        console.error("Erro ao buscar imagens:", error);
        res.status(500).json({ error: "Erro ao buscar imagens", details: error.message });
    }
};

const createImagem = async (req, res) => {
    try {
        const { referencia, titulo } = req.body;  // Certifique-se de pegar 'referencia'
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

module.exports = { getImagens, createImagem };