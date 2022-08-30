const { Router } = require('express');

const route = Router();
const { categoryController } = require('../Controllers');
const { auth, verifyCreateCategory } = require('../Middlewares');

route.post('/', auth, verifyCreateCategory.create, categoryController.create);
route.get('/', auth, categoryController.getAll);

module.exports = route;