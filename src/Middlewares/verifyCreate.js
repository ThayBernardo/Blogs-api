const Joi = require('joi');

const verifyCreate = {
  create: async (req, _res, next) => {
    const schema = Joi.object({
      displayName: Joi.string().min(8).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      image: Joi.string(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      const messageError = { message: error.details[0].message, code: 400 };
      next(messageError);
    }
    next();
  },
};

module.exports = verifyCreate;