const express = require('express');
const router = express.Router();
const imagemController = require('../controllers/imagemController');
const usuarioController = require('../controllers/UserController');


router.get('/imagens', imagemController.getImagens);
router.post('/imagens', imagemController.createImagem);
router.get('/usuarios', usuarioController.getUsuarios);
router.post('/usuarios', usuarioController.createUsuario);

module.exports = router;