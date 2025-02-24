const usuarioService = require('../services/userService');

const getUsuarios = async (req, res) => {
    const usuarios = await usuarioService.getUsuarios();
    res.json(usuarios);
};

const createUsuario = async (req, res) => {
    const { nome } = req.body;
    const usuario = await usuarioService.addUsuario(nome);
    res.status(201).json(usuario);
};

module.exports = { getUsuarios, createUsuario };



