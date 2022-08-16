const express = require('express');
const loginController = require('../controllers/loginController');
const loginRouter = express.Router();

loginRouter.get('/login', loginController.login);
loginRouter.post('/login', loginController.loginUser);

module.exports = loginRouter;