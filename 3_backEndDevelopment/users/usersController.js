import UserModel from './usersModel.js'
import bcrypt from 'bcrypt'
import { userSchema } from '../config/joi.js'

const SALT = 5

const userController = {
    getAll: (req, res, next) => {
        UserModel.getAll()
            .then(users => res.status(200).json({ users }))
            .catch(error => next(error))
    },

    getById: (req, res, next) => {
        const { error, value } = userSchema.extract('id').validate(req.body.id);
        if (error) {
            return next(error.details[0])
        }

        UserModel.getById(value)
            .then(user => res.status(200).json({ user }))
            .catch(error => next(error))
    },

    insert: async (req, res, next) => {
        const partialSchema = userSchema.fork(['id'], field => field.forbidden())
        const { error, value } = partialSchema.validate(req.body);

        if (error) {
            return next(error.details[0])
        }

        const hashedPass = await bcrypt.hash(value.password, SALT)
        UserModel.insert(value.name, value.email, hashedPass)
            .then(result => {
                UserModel.getById(result.insertId)
                    .then(newUser => res.status(201).json(newUser))
            })
            .catch(error => next(error))
    },

    update: async (req, res, next) => {
        const { error, value } = userSchema.validate(req.body);

        if (error) {
            return next(error.details[0])
        }
        const hashedPass = await bcrypt.hash(value.password, SALT)
        UserModel.update(value.id, value.name, value.email, hashedPass)
            .then(data => res.status(200).json("User successfully updated"))
            .catch(error => next(error))
    },


    delete: (req, res, next) => {
        const { error, value } = userSchema.extract('id').validate(req.body.id);
        if (error) {
            return next(error.details[0])
        }
        UserModel.delete(value)
            .then(data => res.status(200).json(`The user ${value} is successfully deleted`))
            .catch(error => next(error))
    }
}

export default userController