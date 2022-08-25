const jwt = require('jsonwebtoken');
const userService = require('../Services/userService');
require('dotenv');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const { JWT_SECRET } = process.env;

const userController = {
  create: async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const getEmail = await userService.getEmail(email);
    if (getEmail) return res.status(409).json({ message: 'User already registered' });
    await userService.create({ displayName, email, password, image });
    const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);
    return res.status(201).json({ token });
  },

  getAll: async (req, res) => {
    const all = await userService.getAll();
    return res.status(200).json(all);
  },
};
module.exports = userController;