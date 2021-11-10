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

  ProfilePost: Joi.object({
    userid: Joi.number().integer().required(),
  }),
};
