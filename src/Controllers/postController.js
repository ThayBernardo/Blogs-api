// const jwtDecode = require('jwt-decode');
const { postService } = require('../Services');

const postController = {
  // create: async (req, res) => {
  //   const { authorization: token } = req.headers;
  //   const { title, content, categoryIds } = req.body;
  //   const { email } = jwtDecode(token);
  //   const { id } = await postService.userId({ email });
  //   const createPost = await postService.create({ title, content, categoryIds, id });
  //   return res.status(createPost);
  // },

  getAll: async (req, res) => {
    const all = await postService.getAll();
    res.status(200).json(all);
  },
};

module.exports = postController;