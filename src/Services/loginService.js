const { User } = require('../database/models');

const loginService = {
  login: async (email, password) => {
    const loginUser = await User.findOne({
      where: { email, password },
    });
    return loginUser;
  },
};

module.exports = loginService;