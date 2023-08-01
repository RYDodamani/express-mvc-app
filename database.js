const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // Replace with your PostgreSQL username
  host: 'localhost',     // Replace with your PostgreSQL server host
  database: 'postgres', // Replace with your database name
  password: 'rajabm', // Replace with your PostgreSQL password
  port: 5432, // Replace with your PostgreSQL server port
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
