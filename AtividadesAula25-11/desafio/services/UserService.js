const db = require('../Config/db');

const getUsuarios = async () => {
    const [rows] = await db.query('SELECT * FROM usuarios');
    return rows;
};

const addUsuario = async (nome) => {
    const [result] = await db.query('INSERT INTO usuarios (nome) VALUES (?)', [nome]);
    return { id: result.insertId, nome };
};

module.exports = { getUsuarios, addUsuario }; // Está exportando "addUsuario"