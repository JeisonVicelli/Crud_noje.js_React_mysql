const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "LojaGaia2011",
  database: "crud2",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Conexão com o banco de dados estabelecida com sucesso.");
});

module.exports = db;
