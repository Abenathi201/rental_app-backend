require('dotenv').config();

const mysql = require('mysql');

// Connecting to the database
const db = mysql.createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    port: process.env.dbPort,
    database: process.env.dbName,
});

db.query('SELECT 1', (error) => {
    if (error) {
        console.error('Error connecting to the database:', error);
    } else {
        console.log('Connected to the database!');
    }
});

module.exports = db;