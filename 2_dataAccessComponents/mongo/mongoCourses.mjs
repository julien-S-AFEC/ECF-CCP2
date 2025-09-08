import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  name: String,
  content: String
});

const Course = mongoose.model('Course', courseSchema)

const findAll = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecf_ccp2');
    const allCourses = await Course.find()
    console.log(allCourses)
  }
  catch (error) {
    console.log(error)
  }
}

const findOne = async (name) => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecf_ccp2');
    const course = await Course.find({ name: name });
    console.log(course)
  }
  catch (error) {
    console.log(error)
  }
}


const insertOne = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecf_ccp2');
    const newCourse = new Course({ name: 'courseOne', content: "This is the course one" });
    await newCourse.save();
    console.log("Added a new course. Name:", newCourse.name, "Content:", newCourse.content);
  }
  catch (error) {
    console.log(error)
  }
}

const updateOne = async (name, newName, newContent) => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecf_ccp2');
    const courseToUpdate = await Course.findOne({ name: name }).exec()
    if (!courseToUpdate) {
      throw new Error("The course is not found.")
    }
    await courseToUpdate.updateOne({ name: newName, content: newContent })
    console.log("Successfully updated the course");
  }
  catch (error) {
    console.log(error)
  }
}

const deleteOne = async (name, newName, newContent) => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecf_ccp2');
    const courseToDelete = await Course.findOne({ name: name }).exec()
    if (!courseToDelete) {
      throw new Error("The course is not found.")
    }
    await courseToDelete.deleteOne({ name: name })
    console.log("Successfully deleted the course");
  }
  catch (error) {
    console.log(error)
  }
}

// findAll()
// insertOne()
// findOne('courseTwo')
// updateOne('courseTwo', 'newCourseTwo', 'This is a new course two')
// deleteOne('courseThree')