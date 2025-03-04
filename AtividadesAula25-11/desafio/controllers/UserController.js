const usuarioService = require('../services/UserService');

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioService.getUsuarios();
        res.json(usuarios);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
};

const createUsuario = async (req, res) => {
    console.log("Recebendo requisição POST em /usuarios");
    console.log("Corpo da requisição:", req.body);

    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ error: "Nome é obrigatório" });
    }

    try {
        const usuario = await usuarioService.addUsuario(nome);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar usuário", details: error.message });
    }
};

module.exports = { getUsuarios, createUsuario };

