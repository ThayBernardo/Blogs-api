const { Router } = require('express');

const route = Router();
const { loginController } = require('../Controllers');
const { verifyLogin } = require('../Middlewares');

route.post('/', verifyLogin.login, loginController.login);

module.exports = route;