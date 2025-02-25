const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',  
  accessKeyId: 'B328mo5Ry6IdLvxxgXeeHAElPfR8U/wx/b3lblJs',
  secretAccessKey: 'AKIA5RRHCKYZSZDVDH77'
});



const s3 = new AWS.S3();
const path = require('path');

const uploadFile = async (filePath, bucketName, keyName) => {
    try {
        if (!filePath) {
            throw new Error("Caminho do arquivo não pode ser undefined.");
        }

        console.log("Iniciando upload do arquivo:", filePath);

        const fileContent = fs.readFileSync(filePath);
        const params = { Bucket: bucketName, Key: keyName, Body: fileContent };

        const data = await s3.upload(params).promise();

        console.log("Resposta do upload S3:", data);

        if (!data || !data.Location) {
            throw new Error("Falha no upload para o S3, a propriedade 'Location' está ausente.");
        }

        const fileExtension = path.extname(filePath).toLowerCase();
        if (!fileExtension) {
            throw new Error("Tipo de arquivo não detectado.");
        }

        console.log("Upload bem-sucedido. Tipo de imagem:", fileExtension);
        return { location: data.Location, fileExtension };
    } catch (error) {
        console.error("Erro no upload:", error.message);
        throw error;
    }
};



const downloadFile = async (bucketName, keyName, downloadPath) => {
    try {
        const params = {
            Bucket: bucketName,
            Key: keyName,
        };

        const data = await s3.getObject(params).promise();

        fs.writeFileSync(downloadPath, data.Body);
        return downloadPath;
    } catch (error) {
        throw new Error("Erro no download: " + error.message);
    }
};

module.exports = { uploadFile, downloadFile };