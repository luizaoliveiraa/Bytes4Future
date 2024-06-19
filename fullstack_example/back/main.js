// import express from "express";  ou dessa forma, é a mesma coisa que acima
const express = require("express");
const app = express();
const PORT = 3333;
app.use(express.json());

//já que nao temos base de dados - vamos fazer o "armazenamento" aqui mesmo:
const num = {
  number: 0,
};

app.get("/api/counter", (req, res) => {
  res.json({ number: num.number });
});
app.post("/api/counter/increment", (req, res) => {
  num.number++;

  res.status(201).json({ number: num.number });
});
app.post("/api/counter/decrement", (req, res) => {
  num.number--;
  res.status(201).json({ number: num.number });
});
app.post("/api/counter/reset", (req, res) => {
  num.number =0;
  res.status(201).json({ number: num.number });
});

app.listen(PORT, () => {
  console.log(`Ligado na porta ${PORT}`);
});
