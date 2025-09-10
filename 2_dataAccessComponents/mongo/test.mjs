import { CourseModel } from './mongoCourses.mjs'


const testFindAll = () => {
    CourseModel.findAll()
        .then(course => console.log("The courses:", course))
        .catch(error => { console.log(error) })
}

const testFindOne = (name) => {
    CourseModel.findOne(name)
        .then(course => console.log("The course:", course))
        .catch(error => { console.log(error) })
}

const testInsertOne = (name, content) => {
    CourseModel.insertOne(name, content)
        .then(newCourse => console.log("The new course:", newCourse))
        .catch(error => { console.log(error) })
}

const testUpdateOne = (name, newName, newContent) => {
    CourseModel.updateOne(name, newName, newContent)
        .then(updatedCourse => console.log("The updated course:", updatedCourse))
        .catch(error => { console.log(error) })
}

const testDeleteOne = (name) => {
    CourseModel.deleteOne(name)
        .then(deletedCourse => console.log("The deleted course:", deletedCourse))
        .catch(error => { console.log(error) })
}

// testFindAll()
// testFindOne('Salut')
// testInsertOne("SalutDeux", "C'est un cours, lol Deux")
// testUpdateOne('SalutDeux', "SalutDeux", "blablablaaaaaaaaaaaaa")
// testDeleteOne('SalutDeux')