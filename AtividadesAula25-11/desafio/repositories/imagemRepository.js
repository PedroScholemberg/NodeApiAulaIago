const db = require('../Config/db');


// inserção no banco de dados
const insertImagem = async (referencia, titulo) => {
    const query = 'INSERT INTO imagens (referencia, titulo) VALUES (?, ?)';
    await db.execute(query, [referencia, titulo]);
};


// buscar todas imagens
const getAllImagens = async () => {
    const [rows] = await db.execute('SELECT * FROM imagens');
    return rows;
};


// buscar imagem por id
const getImagemById = async (id) => {
    const query = 'SELECT * FROM imagens WHERE id = ?';
    const [rows] = await db.execute(query, [id]);
    
    console.log("Resultado da busca por ID:", rows);
    
    return rows.length ? rows[0] : null;
};



module.exports = { insertImagem, getAllImagens, getImagemById };