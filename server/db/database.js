const mysql = require("mysql2/promise");

const dbConnect = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

dbConnect
  .then(() => console.log("Successfully connected to the database!"))
  .catch((err) =>
    console.error("There was a problem connecting to the db: ", err)
  );

module.exports = dbConnect;
