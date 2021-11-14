const Joi = require("joi");

module.exports = {
  addPost: {
    body: Joi.object().required().keys({
      title: Joi.string().required(),
      desc: Joi.string().required(),
    }),
  },

  editPost: {
    body: Joi.object().required().keys({
      id: Joi.string().required(),
      title: Joi.string().required(),
      desc: Joi.string().required(),
    }),
  },

  ProfilePost: {
    params: Joi.object()
      .required()
      .keys({
        userid: Joi.string().required().error(new Error("no user id")),
      }),
  },
};
