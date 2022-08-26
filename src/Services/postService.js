const { BlogPost, User, PostCategory } = require('../database/models');

const postService = {
  userId: async ({ email }) => {
    const getByEmail = await User.findOne({ where: { email } });
    return getByEmail;
  },

  create: async ({ title, content, categoryIds, id }) => {
    await BlogPost.create({ title, content, categoryIds });

    const categories = categoryIds.map((category) => ({
      userId: id, categoryId: category,
    }));

    const result = await PostCategory.bulkCreate(categories);

    return result;
  },
};

module.exports = postService;