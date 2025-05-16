#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL = `
DROP TABLE IF EXISTS messages;

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages  (username, message)
VALUES
  ('Bryan', 'Message from Bryan'),
  ('Odin', 'Allfather Says hello'),
  ('Damon', 'Just chilling in this message board'),
  ('Kevin', 'Hope that this works just fine');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/mini_message_board`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();