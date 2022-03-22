const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(3),
      email: Joi.string().email().lowercase(),
      password: Joi.string().min(6),
      year_entry: Joi.date().format('DD/MM/YYYY'),
      type: Joi.string().valid('user', 'admin').min(4).max(5),
      image: Joi.string(),
      cover: Joi.string()
    });
    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
