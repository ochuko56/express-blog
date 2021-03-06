const Joi = require("joi");

module.exports.validateCategory = function(body) {
  const schema = {
    _csrf: Joi.string(),
    category: Joi.string()
      .min(3)
      .trim()
      .max(50)
      .required()
  };

  return Joi.validate(body, schema, { abortEarly: false });
};

module.exports.validatePost = function(body) {
  const schema = {
    _csrf: Joi.string(),
    title: Joi.string()
      .min(5)
      .max(120)
      .trim()
      .required(),
    category: Joi.string()
      .min(3)
      .max(50)
      .required(),
    body: Joi.string()
      .min(5)
      .required(),
    postImage: Joi.string()
      .min(5)
      .required(),
    author: Joi.string()
      .min(5)
      .required()
  };

  return Joi.validate(body, schema, { abortEarly: false });
};

module.exports.validateUser = function(body) {
  const schema = {
    _csrf: Joi.string(),
    firstname: Joi.string()
      .max(120)
      .trim()
      .required(),
    lastname: Joi.string()
      .max(120)
      .trim()
      .required(),
    email: Joi.string()
      .email()
      .min(5)
      .max(100)
      .trim()
      .required(),
    password: Joi.string()
      .min(6)
      .max(20)
      .trim()
      .required()
  };

  return Joi.validate(body, schema, { abortEarly: false });
};

module.exports.validateLogin = function(body) {
  const schema = {
    _csrf: Joi.string(),
    email: Joi.string()
      .email()
      .min(5)
      .max(100)
      .trim()
      .required(),
    password: Joi.string()
      .min(6)
      .max(20)
      .trim()
      .required()
  };

  return Joi.validate(body, schema, { abortEarly: false });
};
