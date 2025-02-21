const mysql = require("mysql2/promise");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.then(() => console.log("Successfully connected to the database!")).catch(
  (err) => console.error("There was a problem connecting to the db: ", err)
);

module.exports = db;
