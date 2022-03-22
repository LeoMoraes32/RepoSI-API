const Joi = require('joi');
const { id } = require('../app/utils/regex');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id: Joi.string().min(24).max(24).regex(id).required()
    });
    const { error } = await schema.validate(req.params, { abortEarly: false });

    if (error) throw error;
    return next(error);
  } catch (error) {
    return res.status(400).json(error);
  }
};
