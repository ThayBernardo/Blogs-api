const { categoryService } = require('../Services');

const categoryController = {
  create: async (req, res) => {
    const { name } = req.body;
    const createCategory = await categoryService.create({ name });
    return res.status(201).json(createCategory);
  },

  getAll: async (req, res) => {
    const all = await categoryService.getAll();
    return res.status(200).json(all);
  },
};

module.exports = categoryController;