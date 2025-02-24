const Usuario = require('../models/Usuario');

const getAllUsuarios = async () => {
    const [rows] = await db.query('SELECT * FROM usuarios');
    return rows.map(row => new Usuario(row.id, row.nome, row.data_criacao));
};

const createUsuario = async (nome) => {
    const [result] = await db.query('INSERT INTO usuarios (nome) VALUES (?)', [nome]);
    const [row] = await db.query('SELECT * FROM usuarios WHERE id = ?', [result.insertId]);
    return new Usuario(row[0].id, row[0].nome, row[0].data_criacao);
};

module.exports = { getAllUsuarios, createUsuario };