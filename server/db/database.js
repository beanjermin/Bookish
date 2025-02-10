const mysql = require("mysql2/promise");

const dbConnect = mysql.createConnection({
  user: "root",
  password: "12345",
  database: "bookish",
});

dbConnect
  .then(() => console.log("Successfully connected to the database!"))
  .catch((err) =>
    console.error("There was a problem connecting to the db: ", err)
  );

module.exports = dbConnect;
