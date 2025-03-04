const imagemRepository = require('../repositories/imagemRepository');
const s3Service = require('./s3Service');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


// adiciona a imagem
const addImagem = async (filePath, titulo) => {
    const fileExtension = path.extname(filePath); // pega o tipo da imagem ex .jpg
    const fileName = `${uuidv4()}${fileExtension}`;// coloca o codigo uuid e o tipo da imagem
    const s3Path = `${fileName}`;  

    await imagemRepository.insertImagem(fileName, titulo);
    await s3Service.uploadFile(filePath, "bucketmi75", s3Path);

    return { success: true, filePath, s3Path };
};

// buscar todas as imagens
const getImagens = async () => {
    return await imagemRepository.getAllImagens();
};


// buscar imagem por id
const getImagemById = async (id, downloadDir) => {
    const imagem = await imagemRepository.getImagemById(id);
    if (!imagem) throw new Error("Imagem não encontrada");

    const fileName = path.basename(imagem.referencia);
    const localPath = path.join(downloadDir, fileName);
    await s3Service.downloadFile(imagem.referencia, localPath);

    return localPath;
};



module.exports = { addImagem, getImagens, getImagemById};
