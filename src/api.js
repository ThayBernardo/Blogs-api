const express = require('express');
const userRoute = require('./Routes/userRoute');
const { loginController } = require('./Controllers');
const {
  verifyLogin,
  auth,
  Error,
} = require('./Middlewares');

const app = express();

app.use(express.json());
app.post('/login', verifyLogin.login, loginController.login);
app.post('/category', auth);
app.use('/user', userRoute);
app.use(Error.err);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
