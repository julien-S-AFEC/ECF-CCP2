import pool from "../config/sql.js"

export const SessionModel = {
    getSession: async () => {
        try {
            const [rows] = await pool.execute(`SELECT *
                FROM session
                WHERE 1
                ORDER BY id
                LIMIT 1;`, [])

            return rows[0]
        }
        catch (error) {
            throw new Error(error)
        }
    },

    createSession: async (token) => {
        try {
            const [rows] = await pool.execute(`INSERT INTO
                session
                (token)
                VALUES
                (?);`, [token])
            if (!rows.insertId) {
                throw new Error("The session cannot be created.")
            }
            return rows
        }
        catch (error) {
            throw new Error(error)
        }
    }
}