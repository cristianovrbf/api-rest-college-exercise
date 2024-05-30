require('dotenv').config();
const pgp = require('pg-promise')();
const db = pgp({
    schema: process.env.PG_SCHEMA,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
});

module.exports = db;