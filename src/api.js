const express = require('express');
const loginController = require('./Controllers/loginController');
const userController = require('./Controllers/userController');
const verifyLogin = require('./Middlewares/verifyLogin');
const verifyCreate = require('./Middlewares/verifyCreate');
const validateAuth = require('./Middlewares/auth');
const Error = require('./Middlewares/Error');

// ...

const app = express();

app.use(express.json());
app.post('/login', verifyLogin.login, loginController.login);
app.post('/user', verifyCreate.create, userController.create);
app.get('/user', validateAuth, userController.getAll);
app.get('/user/:id', validateAuth, userController.getById);
app.use(Error.err);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
