const Usuario = require('../models/Usuario');
const db = require('../Config/db');

const getAllUsuarios = async () => {
    const [rows] = await db.query('SELECT * FROM usuarios');
    return rows.map(row => new Usuario(row.id, row.nome, row.data_criacao));
};

const createUsuario = async (nome) => {
    try {
        const [result] = await db.query('INSERT INTO usuarios (nome) VALUES (?)', [nome]);
        const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?', [result.insertId]);

        return rows.length ? rows[0] : null;
    } catch (error) {
        console.error("Erro no banco:", error);
        throw new Error("Erro ao inserir usuário no banco");
    }
};

module.exports = { getAllUsuarios, createUsuario };