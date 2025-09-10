import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
    name: String,
    content: String
});

const db = await mongoose.connect('mongodb://127.0.0.1:27017/ecf_ccp2')
const Course = db.model('Course', courseSchema)

export const CourseModel = {
    findAll: async () => {
        try {
            const allCourses = await Course.find()
            return allCourses
        }
        catch (error) {
            throw error
        }
    },

    findOne: async (name) => {
        try {
            const course = await Course.findOne({ name: name });
            if (!course) {
                return "The course is not found."
            }
            return course
        }
        catch (error) {
            throw error
        }
    },


    insertOne: async (name, content) => {
        try {
            const newCourse = new Course({ name: name, content: content });
            await newCourse.save();
            return {id: newCourse.id, name: newCourse.name, content: newCourse.content}
        }
        catch (error) {
            throw error
        }
    },

    updateOne: async (name, newName, newContent) => {
        try {
            const courseToUpdate = await Course.findOne({ name: name }).exec()
            if (!courseToUpdate) {
                throw new Error("The course is not found.")
            }
            await courseToUpdate.updateOne({ name: newName, content: newContent })
            return courseToUpdate
        }
        catch (error) {
            throw error
        }
    },

    deleteOne: async (name, newName, newContent) => {
        try {
            const courseToDelete = await Course.findOne({ name: name }).exec()
            if (!courseToDelete) {
                throw new Error("The course is not found.")
            }
            await courseToDelete.deleteOne({ name: name })
            return courseToDelete
        }
        catch (error) {
            throw error
        }
    }
}
