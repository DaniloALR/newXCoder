const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')
const loginController = require('../controllers/loginController')
const { body } = require('express-validator')

const validacoes = [
    body('email')
        .notEmpty()
        .withMessage('Email não pode ser vazio')
        .bail()
        .trim(),

    body('senha')
        .notEmpty()
        .withMessage('Senha não pode ser vazia'),
]

router.get('/', mainController.home)

router.get('/login', loginController.login)
router.post('/login',validacoes , loginController.loginUser)

router.get('/logout', mainController.logout)

router.get('/register', mainController.register)
router.get('/paineldousuario', mainController.painelDoUsuario)
router.get('/listaDeDesejos', mainController.listaDeDesejos)
router.get('/carrinho', mainController.carrinho)
router.get('/produtoInterno', mainController.produtoInterno)
router.get('/finalizeCompra', mainController.finalizeCompra)
router.get('/listagemDeProduto', mainController.listagemDeProduto)


module.exports = router;