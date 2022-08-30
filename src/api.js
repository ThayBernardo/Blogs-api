require('express-async-errors');
const express = require('express');
const userRoute = require('./Routes/userRoute');
const postRoute = require('./Routes/postRoute');
const categoryRoute = require('./Routes/categoryRoute');
const loginRoute = require('./Routes/loginRoute');
const { Error } = require('./Middlewares');

const app = express();

app.use(express.json());
app.use('/login', loginRoute);
app.use('/categories', categoryRoute);
app.use('/user', userRoute);
app.use('/post', postRoute);
app.use(Error.err);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
