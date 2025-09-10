import Joi from 'joi'

export const userSchema = Joi.object({
    id: Joi.number().integer().min(1).required().strict(),
    name: Joi.string().pattern(/^[^<>]*$/),
    email: Joi.string().email().required().pattern(/^[^<>]*$/),
    password: Joi.string().pattern(/^[^<>]*$/)
})

export const courseSchema = Joi.object({
    id: Joi.number().integer().min(1).required().strict(),
    name: Joi.string().pattern(/^[^<>]*$/),
    newName: Joi.string().pattern(/^[^<>]*$/),
    content: Joi.string().pattern(/^[^<>]*$/),
    newContent: Joi.string().pattern(/^[^<>]*$/)
})