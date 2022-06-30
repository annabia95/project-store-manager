const Joi = require('joi');

const charactersDTO = Joi.object({
    name: Joi.string().required(),
}).messages({
    'any.required': '{{#label}} is required',
});

const validateNameProduct = (req, res, next) => {
    const { error } = charactersDTO.validate(req.body);
    if (error) {
        const messages = error.details.map((e) => e.message);
        return res.status(400).json({ errors: messages });
    }
    next();
};

module.exports = validateNameProduct;