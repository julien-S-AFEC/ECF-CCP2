import express from 'express'
import mongoSanitize from 'express-mongo-sanitize'
import userRouter from './users/usersRoutes.js'
import errorHandling from './middlewares/errorHandling.js'
import { sessionValidation } from './middlewares/jwt.js'
import courseRouter from './courses/coursesRoutes.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send("Api running."))
app.use('/users', sessionValidation, userRouter)
app.use('/courses', sessionValidation, courseRouter)
app.use(errorHandling)

app.listen(3000, () => {
    console.log("App listening on port 3000")
})