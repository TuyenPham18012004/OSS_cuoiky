const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "testdb"
});

app.get("/", (req, res) => {
  db.query("SELECT 1", (err) => {
    if (err) return res.send("MySQL connection failed");
    res.send("NodeJS + MySQL Docker OK");
  });
});

app.listen(3000, () => console.log("Server running"));
