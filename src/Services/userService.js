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
};

module.exports = userService;