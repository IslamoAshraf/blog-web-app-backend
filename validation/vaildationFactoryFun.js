const Joi = require("joi");

module.exports = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.body.validate(req.body);
    if (error) {
      return res.json({ error: error.message });
    }
    next();
  };
};
