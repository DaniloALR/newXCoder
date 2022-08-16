const express = require('express');
const registerController = require('../controllers/registerController');
const registerRouter = express.Router();

registerRouter.get('/register', registerController.renderRegister);
registerRouter.post('/register', registerController.registerUser);

module.exports = registerRouter;