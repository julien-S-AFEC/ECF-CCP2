import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "ecf_ccp2",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export const Users = {
    getAll: async () => {
        try {
            const [rows] = await pool.execute(`SELECT 
                            *
                            FROM 
                            users
                            WHERE 1`, [])
            if (!rows.length) {
                throw new Error("The users are not found")
            }
            return rows
        }
        catch (error) {
            throw new Error(error.message)
        }
    },

    getById: async (id) => {
        try {
            const [rows] = await pool.execute(`SELECT 
                            *
                            FROM 
                            users
                            WHERE
                            id=?`, [id])
            if (!rows.length) {
                throw new Error("The user is not found")
            }
            return rows[0]
        }
        catch (error) {
            throw new Error(error.message)
        }
    },

    insert: async (name, email, password) => {
        try {
            const [rows] = await pool.execute(`INSERT INTO
                            users
                            (name, email, password)
                            values
                            (?, ?, ?)`, [name, email, password])
            if (!rows.affectedRows) {
                throw new Error("The user cannot be added.")
            }
            return rows
        }
        catch (error) {
            throw new Error(error.message)
        }
    },

    update: async (id, name, email, password) => {
        try {
            const [rows] = await pool.execute(`UPDATE
                            users
                            SET
                            name=?,
                            email=?,
                            password=?
                            WHERE
                            id=?`, [name, email, password, id])
            if (!rows.affectedRows) {
                throw new Error("The user cannot be modified.")
            }
            return rows
        }
        catch (error) {
            throw new Error(error.message)
        }
    },

    delete: async (id) => {
        try {
            const [rows] = await pool.execute(`DELETE FROM
                            users
                            WHERE
                            id=?`, [id])
            if (!rows.affectedRows) {
                throw new Error("The user cannot be deleted.")
            }
            return rows
        }
        catch (error) {
            throw new Error(error.message)
        }
    }
}
