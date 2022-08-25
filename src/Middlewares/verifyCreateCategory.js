const Joi = require('joi');

const verifyCreateCategory = {
  create: async (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      const messageError = { message: error.details[0].message, code: 400 };
      next(messageError);
    }
    next();
  },
};

module.exports = verifyCreateCategory;