const { User, BlogPost, Category } = require('../database/models');

const postService = {
  userId: async ({ email }) => {
    const getByEmail = await User.findOne({ where: { email } });
    return getByEmail;
  },

  // create: async ({ title, content, categoryIds, id }) => {
  //   await BlogPost.create({ title, content, categoryIds });

  //   const categories = categoryIds.map((category) => ({
  //     userId: id, categoryId: category,
  //   }));

  //   const result = await PostCategory.bulkCreate(categories);

  //   return result;
  // },

  getAll: async () => {
    const all = await BlogPost.findAll({
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      }, {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      }],
    });
    return all;
  },

  getById: async (id) => {
    const byId = await BlogPost.findOne({
      where: { id },
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      }, {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      }],
    });
    return byId;
  },

  update: async ({ title, content, id }) => {
    await BlogPost.update({ title, content }, { where: id });
    const result = await this.getById(id);
    return result;
  },
};

module.exports = postService;