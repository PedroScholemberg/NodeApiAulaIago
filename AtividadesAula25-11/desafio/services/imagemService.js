const imagemRepository = require('../repositories/imagemRepository');

const getImagens = async () => {
    return await imagemRepository.getAllImagens();
};

const addImagem = async (nome, titulo) => {
    return await imagemRepository.createImagem(nome, titulo);
};

module.exports = { getImagens, addImagem };