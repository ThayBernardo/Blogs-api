const Error = require('./Error');
const auth = require('./auth');
const verifyCreate = require('./verifyCreate');
const verifyLogin = require('./verifyLogin');
const verifyCreateCategory = require('./verifyCreateCategory');
const verifyUpdate = require('./verifyUpdate');

module.exports = {
  Error,
  auth,
  verifyCreate,
  verifyLogin,
  verifyCreateCategory,
  verifyUpdate,
};