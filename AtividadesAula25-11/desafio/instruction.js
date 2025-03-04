const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: 'SEU_ACCESS_KEY',
  secretAccessKey: 'SEU_SECRET_KEY'
});

const s3 = new AWS.S3();


const fs = require('fs');

const uploadFile = (filePath, bucketName, keyName) => {
  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: bucketName,
    Key: keyName,
    Body: fileContent
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Erro ao fazer o upload:', err);
    } else {
      console.log('Arquivo carregado com sucesso:', data.Location);
    }
  });
};

uploadFile('./caminho/do/seu/arquivo.txt', 'nome-do-seu-bucket', 'arquivo-no-s3.txt');

const downloadFile = (bucketName, keyName, downloadPath) => {
    const params = {
      Bucket: bucketName,
      Key: keyName
    };
  
    const file = fs.createWriteStream(downloadPath);
  
    s3.getObject(params).createReadStream().pipe(file);
  
    file.on('close', () => {
      console.log('Arquivo baixado com sucesso:', downloadPath);
    });
  };
  
  downloadFile('nome-do-seu-bucket', 'arquivo-no-s3.txt', './caminho/do/arquivo-baixado.txt');