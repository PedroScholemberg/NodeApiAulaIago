const db = require('../config/db');
const Imagem = require('../models/Imagem');

const getAllImagens = async () => {
    const [rows] = await db.query('SELECT * FROM imagens');
    return rows.map(row => new Imagem(row.id, row.nome, row.data_criacao, row.titulo));
};

const createImagem = async (nome, titulo) => {
    const [result] = await db.query('INSERT INTO imagens (nome, titulo) VALUES (?, ?)', [nome, titulo]);
    const [row] = await db.query('SELECT * FROM imagens WHERE id = ?', [result.insertId]);
    return new Imagem(row[0].id, row[0].nome, row[0].data_criacao, row[0].titulo);
};

module.exports = { getAllImagens, createImagem };
