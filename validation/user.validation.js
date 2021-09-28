const Joi = require("joi");

module.exports = {
  addUserSchema: {
    body: Joi.object().required().keys({
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      phone: Joi.number().required(),
      location: Joi.string().required(),
    }),
  },
  singInSchema: {
    body: Joi.object().required().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  },

  updateUserSchema: {
    params: Joi.object().required().keys({
      id: Joi.string(),
    }),
    body: Joi.object().required().keys({
      name: Joi.string().required(),
    }),
  },
};
