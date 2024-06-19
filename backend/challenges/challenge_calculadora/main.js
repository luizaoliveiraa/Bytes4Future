const { Calculadora } = require("./services/coisas");
const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
const calc = new Calculadora();

app.post("/op/potencia", (req, res) => {
  const { a, b } = req.body;
  if (Number(a) && Number(b)) {
    calc.potencia(a, b);
    res.status(200).json(calc);
  } else {
    res.status(400).json({ erro: "Argumentos Inválidos" });
  }
});

app.post("/op/somar", (req, res) => {
  const { a, b } = req.body;
  if (Number(a) && Number(b)) {
    calc.somar(a, b);
    res.status(200).json(calc);
  } else {
    res.status(400).json({ erro: "Argumentos Inválidos" });
  }
});

app.post("/op/subtrair", (req, res) => {
  const { a, b } = req.body;
  if (Number(a) && Number(b)) {
    calc.subtrair(a, b);
    res.status(200).json(calc);
  } else {
    res.status(400).json({ erro: "Argumentos Inválidos" });
  }
});

app.post("/op/multiplicar", (req, res) => {
  const { a, b } = req.body;
  if (Number(a) && Number(b)) {
    calc.multiplicar(a, b);
    res.status(200).json(calc);
  } else {
    res.status(400).json({ erro: "Argumentos Inválidos" });
  }
});

app.post("/op/dividir", (req, res) => {
  const { a, b } = req.body;
  if (Number(a) && Number(b)) {
    calc.dividir(a, b);
    res.status(200).json(calc);
  } else {
    res.status(400).json({ erro: "Argumentos Inválidos" });
  }
});

app.post("/repetir", (req, res) => {
  const { num } = req.body;
  const historico = calc.historico;
  if (Number(num)) {
    if (historico.length > 0) {
      const ultimaoperacao = historico[historico.length - 1].split(" ")[1];
      calc.aplicaOperacao(num, undefined, ultimaoperacao);
      res.status(200).json(calc);
    } else {
      res.status(400).json({ erro: "O histórico está vazio." });
    }
  } else {
    res.status(400).json({ erro: "Argumentos Inválidos" });
  }
});

app.delete("/delete", (req, res) => {
  calc.limparHistorico();
  res.status(200).json(calc.limparHistorico);
});

app.get("/ultimo-resultado", (req, res) => {
  res.status(200).json({ ÚltimoResultado: `${calc.ultimoResultado}` });
});

app.get("/", (req, res) => {
  res.status(200).json(calc);
});

app.listen(PORT, () => {
  console.log(`À escuta na porta: ${PORT}`);
});
