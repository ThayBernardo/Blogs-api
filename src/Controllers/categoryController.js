const { categoryService } = require('../Services');

const categoryController = {
  create: async (req, res) => {
    const { name } = req.body;
    const createCategory = await categoryService.create({ name });
    return res.status(201).json(createCategory);
  },
};

module.exports = categoryController;