const { Category } = require('../database/models');

const categoryService = {
  create: async ({ name }) => {
    const createCategory = await Category.create({ name });
    return createCategory;
  },
};

module.exports = categoryService;