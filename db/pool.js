const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: process.env.DB_USER,
  database: "mini_message_board",
  password: process.env.DB_PASSWORD,
  port: 5432
});