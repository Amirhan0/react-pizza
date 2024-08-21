const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 3001;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pizzas_shop",
});

db.connect((err) => {
  if (err) {
    console.log("Ошибка в подключении к базе данных SQL", err);
    return;
  }
  console.log("Подключение к базе данных SQL - Успешно");
});

app.use(cors());
app.get("/pizzas", (req, res) => {
  db.query("SELECT * FROM pizzas", (err, result) => {
    if (err) {
      console.error("Ошибка при запросе данных из базы");
      res.status(500).send("Ошибка");
      return;
    }
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}/pizzas`);
});
