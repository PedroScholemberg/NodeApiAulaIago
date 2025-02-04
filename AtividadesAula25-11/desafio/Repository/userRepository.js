function getId() {
    return new Promise((resolve,rejected) =>{
        connection.query('SELECT * FROM USUARIO WHERE id = ?', [id], (erro,resultado) =>{
            if (erro){
                return rejected(erro)
            }
            resolve(resultado);
        });
    });
}