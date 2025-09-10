import jwt from 'jsonwebtoken'
import { SessionModel } from '../session/sessionModel.js'

const JWT_SECRET = "greogrep"

export const sessionValidation = async (req, res, next) => {
    try {
        const session = await SessionModel.getSession()

        if (!session) {
            const token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60) }, JWT_SECRET)
            await SessionModel.createSession(token)
            return next()
        }
        jwt.verify(session.token, JWT_SECRET, function (err, decoded) {
            if (err) {
                throw new Error("Json web token invalid.")
            }

            if (decoded.exp < (Math.floor(Date.now() / 1000))) {
                throw new Error("Json web token expired.")
            }
        })
        next()
    }
    catch (error) {
        throw new Error(error.message)
    }
}