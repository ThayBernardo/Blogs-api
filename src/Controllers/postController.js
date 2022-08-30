const jwtDecode = require('jwt-decode');
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

  getById: async (req, res) => {
    const { id } = req.params;
    const byId = await postService.getById(id);
    if (!byId) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(byId);
  },

  update: async (req, res) => {
    const { authorization: token } = req.headers;
    const { id } = req.params;
    const { title, content } = req.body;
    const { email } = jwtDecode(token);
    const { id: realId } = await postService.userId({ email });
    if (id !== realId) return res.status(401).json({ message: 'Unauthorized user' });
    const update = await postService.update({ title, content, id });
    return res.status(200).json(update);
  },
};

module.exports = postController;