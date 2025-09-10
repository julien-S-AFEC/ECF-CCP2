import express from 'express'
import courseController from './coursesController.js'

const courseRouter = express.Router()

courseRouter.get('/findAll', courseController.findAll)
courseRouter.post('/findOne', courseController.findOne)
courseRouter.post('/insertOne', courseController.insertOne)
courseRouter.put('/updateOne', courseController.updateOne)
courseRouter.delete('/deleteOne', courseController.deleteOne)

export default courseRouter