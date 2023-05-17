import Joi from "joi";

export const validation = Joi.object({
    username: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()

})