require('express-async-errors');
const express = require('express');
const userRoute = require('./Routes/userRoute');
const { loginController, categoryController, postController } = require('./Controllers');
const {
  verifyLogin,
  auth,
  Error,
  verifyCreateCategory,
} = require('./Middlewares');

const app = express();

app.use(express.json());
app.post('/login', verifyLogin.login, loginController.login);
app.post('/categories', auth, verifyCreateCategory.create, categoryController.create);
app.get('/categories', auth, categoryController.getAll);
app.post('/post', auth, postController.create);
app.use('/user', userRoute);
app.use(Error.err);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
