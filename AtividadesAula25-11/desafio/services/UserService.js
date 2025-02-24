const usuarioRepository = require('../repositories/usuarioRepository');

const getUsuarios = async () => {
    return await usuarioRepository.getAllUsuarios();
};

const addUsuario = async (nome) => {
    return await usuarioRepository.createUsuario(nome);
};

module.exports = { getUsuarios, addUsuario };

