const { Router } = require('express');
const {
  verifyCreate,
  auth,
} = require('../Middlewares');
const { userController } = require('../Controllers');

const route = Router();

route.post('/', verifyCreate.create, userController.create);
route.get('/', auth, userController.getAll);
route.get('/:id', auth, userController.getById);

module.exports = route;