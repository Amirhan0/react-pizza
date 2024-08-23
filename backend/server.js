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
app.use(express.json());
app.get("/pizzas", (req, res) => {
  const sortBy = req.query.sortBy || "rating";
  const category = req.query.category;
  let query = ` SELECT * FROM pizzas`;

  if (category) {
    query += ` WHERE category = ${category}`;
  }
  query += ` ORDER BY ${sortBy}`;
  db.query(query, (err, result) => {
    if (err) {
      console.error("Ошибка при запросе данных из базы");
      res.status(500).send("Ошибка");
      return;
    }
    res.json(result);
  });
});

app.post("/drawer", (req, res) => {
  const { id, name, imageUrl, types, sizes, price } = req.body;
  const query = `INSERT INTO drawer (	pizza_id, name, imageUrl, dough_types, pizza_sizes, price) VALUE (?, ?, ?, ?, ?, ?) `;
  db.query(query, [id, name, imageUrl, types, sizes, price], (err) => {
    if (err) {
      console.error("Ошибка при добавление в корзину");
      res.status(500).send("Ошибка");
      return;
    }
    res.status(200).send("Пицца добавлена в корзину");
  });
});

app.get("/drawer", (req, res) => {
  db.query("SELECT * FROM drawer", (err, result) => {
    if (err) {
      console.log("Ошибка с вывовдом с базы данных");
      res.status(500).send("Ошибка с выводом");
      return;
    }
    console.log("Успешно вывелось");
    res.json(result);
  });
});

app.delete("/drawer/:id", (req, res) => {
  const drawer_id = req.params.id;
  const query = ` DELETE FROM drawer WHERE id = ?`;

  db.query(query, [drawer_id], (err, result) => {
    if (err) {
      console.log("Ошибка в удалении");
      res.status(500).send("Ошибка в удалении");
      return;
    }
    if (result.affectedRows > 0) {
      res.status(200).send(`Пицца с id=${drawer_id} успешно удалена`);
    } else {
      res.status(404).send(`Пицца с id=${drawer_id} не найдена`);
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}/pizzas`);
});
