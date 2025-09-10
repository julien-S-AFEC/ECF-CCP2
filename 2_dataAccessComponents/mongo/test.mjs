import { CourseModel } from './mongoCourses.mjs';

const testFindAll = async () => {
  try {
    const courses = await CourseModel.findAll();
    console.log("The courses:", courses);
  } catch (error) {
    console.error("Error in testFindAll:", error);
  }
};

const testFindOne = async (name) => {
  try {
    const course = await CourseModel.findOne(name);
    console.log("The course:", course);
  } catch (error) {
    console.error(`Error in testFindOne(${name}):`, error);
  }
};

const testInsertOne = async (name, content) => {
  try {
    const newCourse = await CourseModel.insertOne(name, content);
    console.log("The new course:", newCourse);
  } catch (error) {
    console.error("Error in testInsertOne:", error);
  }
};

const testUpdateOne = async (name, newName, newContent) => {
  try {
    const updatedCourse = await CourseModel.updateOne(name, newName, newContent);
    console.log("The updated course:", updatedCourse);
  } catch (error) {
    console.error(`Error in testUpdateOne(${name}):`, error);
  }
};

const testDeleteOne = async (name) => {
  try {
    const deletedCourse = await CourseModel.deleteOne(name);
    console.log("The deleted course:", deletedCourse);
  } catch (error) {
    console.error(`Error in testDeleteOne(${name}):`, error);
  }
};

// ------------------ Run tests in sequence ------------------
const runTests = async () => {
  try {
    await testInsertOne("SalutDeux", "C'est un cours, lol Deux");
    await testFindAll();
    await testFindOne("SalutDeux");
    await testUpdateOne("SalutDeux", "SalutDeux", "blablablaaaaaaaaaaaaa");
    await testDeleteOne("SalutDeux");
  } catch (error) {
    console.error("Error while running tests:", error);
  }
};

runTests();
