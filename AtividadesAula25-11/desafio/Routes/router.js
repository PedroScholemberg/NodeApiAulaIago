const express = require('express');
const router = express.Router();
const imagemController = require('../Controllers/imagemController');
const usuarioController = require('../controllers/UserController');

// rotas para get e post
router.get('/imagens', imagemController.getImagens);
router.post('/imagens', imagemController.createImagem);

// ta dando erro
router.get('/imagens/:id/download', imagemController.downloadImagem);


router.get('/usuarios', usuarioController.getUsuarios);
router.post('/usuarios', usuarioController.createUsuario);


module.exports = router;