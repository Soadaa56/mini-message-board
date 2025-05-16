const pool = require("./pool");

async function getAllUserMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function postUserMessage(messageUsername, messageMessage) {
  await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [messageUsername, messageMessage]);
}

async function getUserMessage(messageIndex) {
  const result = await pool.query("Select * FROM messages WHERE id = $1", [messageIndex]);
  return result.rows[0];
}

module.exports = {
  getAllUserMessages,
  postUserMessage,
  getUserMessage
}