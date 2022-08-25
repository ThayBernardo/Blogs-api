const { Category } = require('../database/models');

const categoryService = {
  create: async ({ name }) => {
    const createCategory = await Category.create({ name });
    return createCategory;
  },

  getAll: async () => {
    const all = await Category.findAll();
    return all;
  },
};

module.exports = categoryService;