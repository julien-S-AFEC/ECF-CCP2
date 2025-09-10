import express from 'express'
import userController from './usersController.js'

const userRouter = express.Router()

userRouter.get('/getAll', userController.getAll)
userRouter.post('/getById', userController.getById)
userRouter.post('/insert', userController.insert)
userRouter.put('/update', userController.update)
userRouter.delete('/delete', userController.delete)

export default userRouter