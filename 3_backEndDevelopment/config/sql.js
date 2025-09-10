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

export default pool