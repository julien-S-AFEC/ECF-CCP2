import { CourseModel } from './coursesModel.js'
import { courseSchema } from '../config/joi.js'


const courseController = {
    findAll: (req, res, next) => {
        CourseModel.findAll()
            .then(users => res.status(200).json({ users }))
            .catch(error => next(error))
    },

    findOne: (req, res, next) => {
        const { error, value } = courseSchema.extract('name').validate(req.body.name);
        if (error) {
            return next(error.details[0])
        }

        CourseModel.findOne(value)
            .then(user => res.status(200).json({ user }))
            .catch(error => next(error))
    },

    insertOne: (req, res, next) => {
        const partialSchema = courseSchema.fork(['id'], field => field.forbidden())
        const { error, value } = partialSchema.validate(req.body);

        if (error) {
            return next(error.details[0])
        }
        CourseModel.insertOne(value.name, value.content)
            .then(result => {
                CourseModel.findOne(result.name)
                    .then(newCourse => res.status(201).json(newCourse))
            })
            .catch(error => next(error))
    },

    updateOne: async (req, res, next) => {
        const partialSchema = courseSchema.fork(['id'], field => field.forbidden())
        const { error, value } = partialSchema.validate(req.body);

        if (error) {
            return next(error.details[0])
        }
        CourseModel.updateOne(value.name, value.newName, value.newContent)
            .then(data => res.status(200).json("Course successfully updated"))
            .catch(error => next(error))
    },


    deleteOne: (req, res, next) => {
        const { error, value } = courseSchema.extract('name').validate(req.body.name);
        if (error) {
            return next(error.details[0])
        }
        CourseModel.deleteOne(value)
            .then(data => res.status(200).json(`Successfully deleted the course ${value}`))
            .catch(error => next(error))
    }
}

export default courseController
