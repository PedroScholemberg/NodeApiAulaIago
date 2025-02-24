const express = require('express');
const router = express.Router();
const imagemController = require('../controllers/imagemController');

router.get('/imagens', imagemController.getImagens);
router.post('/imagens', imagemController.createImagem);

module.exports = router;