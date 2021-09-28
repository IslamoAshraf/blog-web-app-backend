const Joi = require("joi");

module.exports = {
  addUserSchema: {
    body: Joi.object()
      .required()
      .keys({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        passwordC: Joi.string().required().valid(Joi.ref("password")),
        phone: Joi.number().required(),
        location: Joi.string().required(),
      }),
  },
  singInSchema: {
    body: Joi.object().required().keys({
      email: Joi.string().email().required(),
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
