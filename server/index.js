require("dotenv").config();
const path = require("path");
const morgan = require("morgan");
const express = require("express");
const db = require("./db/database");

const app = express();
app.use(
  morgan("dev :method :url :status :res[content-length] - :response-time ms")
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
