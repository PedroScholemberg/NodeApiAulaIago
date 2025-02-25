const db = require('../Config/db');

const insertImagem = async (referencia, titulo) => {
    const query = 'INSERT INTO imagens (referencia, titulo) VALUES (?, ?)';
    await db.execute(query, [referencia, titulo]);
};

module.exports = { insertImagem };