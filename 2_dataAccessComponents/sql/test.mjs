import { Users } from "./sqlUsers.mjs"

const testGetAll = () => {
    Users.getAll()
        .then(users => console.log("The users:", users))
        .catch(error => { console.log(error) })
}

const testGetById = (id) => {
    Users.getById(id)
        .then(user => console.log(`The user at id: ${id}`, user))
        .catch(error => { console.log(error) })
}

const testInsert = (name, email, password) => {
    Users.insert(name, email, password)
        .then(result => {
            Users.getById(result.insertId)
                .then(newUser => console.log("Usez successfully created: ", newUser))
        })
        .catch(error => console.log(error))
}

const testUpdate = (id, name, email, password) => {
    Users.update(id, name, email, password)
        .then(data => console.log("The user successfully updated: ", data))
        .catch(error => console.log(error))
}


const testDelete = (id) => {
    const users = Users.delete(id)
        .then(data => console.log("The user successfully deleted: ", data))
        .catch(error => console.log(error))
}


// ------------------ Testing functions ------------------
testGetAll()
// testGetById(11)
// testInsert("Moi", "moi@gmail.com", "moi123")
// testUpdate(17, "Moia", "moi@gmail.com", "moi123")
// testDelete(2)