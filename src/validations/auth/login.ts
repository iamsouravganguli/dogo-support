import Joi from "joi";

const loginS = Joi.object({
    email: Joi.string().email().required(),
    password:Joi.string()
})