const imagemRepository = require('../repositories/imagemRepository');
const s3Service = require('./s3Service');
const path = require('path');

const addImagem = async (filePath, titulo) => {
    const fileName = path.basename(filePath);
    const s3Path = `uploads/${fileName}`;

    await imagemRepository.insertImagem(filePath, titulo);
    await s3Service.uploadFile(filePath, process.env.AWS_BUCKET_NAME, s3Path);

    return { success: true, filePath, s3Path };
};

module.exports = { addImagem };