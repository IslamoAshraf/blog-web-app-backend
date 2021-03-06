const { StatusCodes } = require("http-status-codes");
const Joi = require("joi");

module.exports = (schema) => {
  return (req, res, next) => {
    for (const key in schema) {
        const { error, value } = schema[key].validate(req[key]);
        if (error) {
          return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ error: error.message });
        }
    }
    // if (req.params) {
    //   const { error, value } = schema.params.validate(req.params);
    //   if (error) {
    //     return res
    //       .status(StatusCodes.BAD_REQUEST)
    //       .json({ error: error.message });
    //   }
    // }
    // if (req.body) {
    //   const { error, value } = schema.body.validate(req.body);
    //   if (error) {
    //     return res
    //       .status(StatusCodes.BAD_REQUEST)
    //       .json({ error: error.message });
    //   }
    // }
    next();
  };
};
