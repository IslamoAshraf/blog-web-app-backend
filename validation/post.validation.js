const Joi = require("joi");

module.exports = {
  addPost: {
    body: Joi.object().required().keys({
      title: Joi.string().required(),
      desc: Joi.string().required(),
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
      username: Joi.string(),
      email: Joi.string().email(),
      phone: Joi.number(),
      location: Joi.string(),
    }),
  },

  updatePasswordSchema: {
    params: Joi.object().required().keys({
      id: Joi.string().required,
    }),
    body: Joi.object()
      .required()
      .keys({
        oldpassword: Joi.string().required(),
        newpassword: Joi.string().required(),
        passwordC: Joi.string().required().valid(Joi.ref("newpassword")),
      }),
  },
};
