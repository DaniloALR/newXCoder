const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const verifyIfUserIsLogged = require('../middlewares/loginMiddleware')


router.get('/login', loginController.login);
router.post('/login', loginController.loginUser);

router.get('/register', registerController.renderRegister);
router.post('/register', registerController.registerUser);

router.get('/logout', mainController.logout)
router.get('/produtoInterno', mainController.produtoInterno)
router.get('/listagemDeProduto', mainController.listagemDeProduto)

router.use(verifyIfUserIsLogged)
router.get('/', mainController.home)
router.get('/paineldousuario', mainController.painelDoUsuario)
router.get('/carrinho', mainController.carrinho)
router.get('/finalizeCompra', mainController.finalizeCompra)


module.exports = router;