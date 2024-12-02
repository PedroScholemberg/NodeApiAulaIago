const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'APICRUD'
});
connection.connect(err =>{
    if (err){
        console.error('erro: ', err);
        return;
    }
    console.log('Connected')
    
})

module.exports = connection;