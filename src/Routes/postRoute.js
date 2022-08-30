const { Router } = require('express');

const route = Router();
const { postController } = require('../Controllers');
const { auth, verifyUpdate } = require('../Middlewares');

// route.post('/', auth, postController.create);
route.get('/', auth, postController.getAll);
route.get('/:id', auth, postController.getById);
route.put('/:id', auth, verifyUpdate.body, postController.update);

module.exports = route;