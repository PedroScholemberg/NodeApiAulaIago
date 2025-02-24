const imagemService = require('../services/imagemService.js');

const getImagens = async (req, res) => {
    const imagens = await imagemService.getImagens();
    res.json(imagens);
};

const createImagem = async (req, res) => {
    const { nome, titulo } = req.body;
    const imagem = await imagemService.addImagem(nome, titulo);
    res.status(201).json(imagem);
};

module.exports = { getImagens, createImagem };