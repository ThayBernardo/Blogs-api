const express = require('express');
const loginController = require('./Controllers/loginController');
const verifyLogin = require('./Middlewares/verifyLogin');

// ...

const app = express();

app.use(express.json());
app.post('/login', verifyLogin.login, loginController.login);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
