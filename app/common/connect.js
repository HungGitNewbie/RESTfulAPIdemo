const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hunglecanh1*",
  database: "my_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database!");
});

module.exports = db;
