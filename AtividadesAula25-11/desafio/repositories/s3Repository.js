const AWS = require("aws-sdk");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

AWS.config.update({
    region: '',
    accessKeyId: '',
    secretAccessKey: ''
});

const s3 = new AWS.S3();

const gerarKeyName = (originalName) => {
    const extensao = originalName.split('.').pop(); 
    return `${uuidv4()}.${extensao}`; 
};

const uploadFile = async (filePath, bucketName) => {
    const originalName = filePath.split('/').pop(); 
    const keyName = gerarKeyName(originalName);

    const fileStream = fs.createReadStream(filePath);
    const params = {
        Bucket: bucketName,
        Key: keyName,
        Body: fileStream,
        ContentType: "image/jpeg"
    };
    
    const data = await s3.upload(params).promise();
    return { keyName, location: data.Location };
};

module.exports = { uploadFile };