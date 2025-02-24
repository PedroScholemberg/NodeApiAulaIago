const usuarioController = require('../controllers/UserController');

router.get('/usuarios', usuarioController.getUsuarios);
router.post('/usuarios', usuarioController.createUsuario);

module.exports = router