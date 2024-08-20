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

const samplePizzas = [
  {
    id: 1,
    imageUrl: "/pizzas/1.svg",
    name: "Сырная",
    types: [0],
    sizes: [26, 40],
    price: 245,
    category: 1,
    rating: 6,
  },
  {
    id: 2,
    imageUrl: "/pizzas/2.svg",
    name: "Цыпленок барбекю",
    types: [0],
    sizes: [26, 40],
    price: 295,
    category: 1,
    rating: 4,
  },
  {
    id: 3,
    imageUrl: "/pizzas/3.svg",
    name: "Кисло-сладкий цыпленок",
    types: [1],
    sizes: [26, 30, 40],
    price: 275,
    category: 2,
    rating: 2,
  },
  {
    id: 4,
    imageUrl: "/pizzas/4.svg",
    name: "Чизбургер-пицца",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 415,
    category: 3,
    rating: 8,
  },
  {
    id: 5,
    imageUrl: "/pizzas/5.svg",
    name: "Крэйзи пепперони",
    types: [0],
    sizes: [30, 40],
    price: 580,
    category: 2,
    rating: 2,
  },
  {
    id: 6,
    imageUrl: "/pizzas/6.svg",
    name: "Пепперони",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 675,
    category: 1,
    rating: 9,
  },
  {
    id: 7,
    imageUrl: "/pizzas/7.svg",
    name: "Маргарита",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 450,
    category: 4,
    rating: 10,
  },
  {
    id: 8,
    imageUrl: "/pizzas/8.svg",
    name: "Четыре сезона",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 395,
    category: 5,
    rating: 10,
  },
];

samplePizzas.forEach((pizza) => {
  const query =
    "INSERT INTO pizzas (imageUrl, name, types, sizes, price, category, rating) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    [
      pizza.imageUrl,
      pizza.name,
      JSON.stringify(pizza.types),
      JSON.stringify(pizza.sizes),
      pizza.price,
      pizza.category,
      pizza.rating,
    ],
    (err, result) => {
      if (err) {
        console.error(`Ошибка при вставке данных ${pizza.name}:`, err);
      } else {
        console.log(`Данные ${pizza.name} успешно вставлены в базу SQL`);
      }
    }
  );
});

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
