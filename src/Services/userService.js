const { User } = require('../database/models');

const userService = {
  create: async ({ displayName, email, password, image }) => {
    const createUser = await User.create({ displayName, email, password, image });
    return createUser;
  },

  getEmail: async (email) => {
    const getEmail = await User.findOne({ where: { email } });
    return getEmail;
  },

  getAll: async () => {
    const all = await User.findAll({ attributes: { exclude: ['password'] } });
    return all;
  },

  getById: async (id) => {
    const getById = await User.findOne({ 
      where: { id },
      attributes: { exclude: ['password'] },
    });
    return getById;
  },
};

module.exports = userService;