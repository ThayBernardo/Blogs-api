require('dotenv');
const jwt = require('jsonwebtoken');
const loginService = require('../Services/loginService');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const { JWT_SECRET } = process.env;

const loginController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const login = await loginService.login(email, password);
    if (!login) return res.status(400).json({ message: 'Invalid fields' });
    const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);
    return res.status(200).json({ token });
  },
};

module.exports = loginController;
