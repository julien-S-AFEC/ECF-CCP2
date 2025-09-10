import { Users } from "./sqlUsers.mjs";
import bcrypt from 'bcrypt'

const SALT = 5

const testGetAll = async () => {
    try {
        const users = await Users.getAll();
        console.log("The users:", users);
    } catch (error) {
        console.error("Error in testGetAll:", error);
        throw error;
    }
};

const testGetById = async (id) => {
    try {
        const user = await Users.getById(id);
        console.log(`The user at id ${id}:`, user);
    } catch (error) {
        console.error(`Error in testGetById(${id}):`, error);
        throw error;
    }
};

const testInsert = async (name, email, password) => {
    try {
        const hashedPass = await bcrypt.hash(password, SALT)
        const result = await Users.insert(name, email, hashedPass);
        const newUser = await Users.getById(result.insertId);
        console.log("User successfully created:", newUser);
    } catch (error) {
        console.error("Error in testInsert:", error);
        throw error;
    }
};

const testUpdate = async (id, name, email, password) => {
    try {
        const data = await Users.update(id, name, email, password);
        console.log("The user successfully updated:", data);
    } catch (error) {
        console.error(`Error in testUpdate(${id}):`, error);
        throw error;
    }
};

const testDelete = async (id) => {
    try {
        const data = await Users.delete(id);
        console.log(`The user ${data} successfully deleted.`);
    } catch (error) {
        console.error(`Error in testDelete(${id}):`, error);
        throw error;
    }
};

// ------------------ Tests ------------------
testInsert("Moi", "moi@gmail.com", "moi123")
    .then(() => testGetAll())
    .then(() => testGetById(1))
    .then(() => testUpdate(1, "Moia", "moi@gmail.com", "moi123"))
    .then(() => testDelete(1))
    .catch(console.error);
