const express = require("express");
const app = express();
const PORT = 3031;

app.use(express.json());

// animal = {
//     birthDay:String,
//     name: String,
//     Dono: ID,
//     reservas: []
// }

// dono = {
//     name:String,
//     id:Number,
//     email: String,
//     }
//crio oq tenho em cada endpoint

let donos = [];
let animais = [];

app.use(express.json());

app.post("/api/dono", (req, res) => {
  console.log("KLDJALKSJDLK");
  const { email, nome } = req.body;
  const id = donos.length + 1;

  donos.push({ id: String(id), email: email, nome: nome });

  res.status(201).json({ id });
});

app.post("/api/animal/:dono", (req, res) => {
  const { dono } = req.params;
  const { birthDay, name, reservas } = req.body;
  const id = animais.length + 1;

  animais.push({
    id: String(id),
    name: name,
    birthDay: birthDay,
    dono: dono,
    reservas: reservas,
  });

  res.status(201).json({ id });
});

app.get("/api/animais/:dono", (req, res) => {
  const { dono } = req.params;

  const resultado = animais.filter((animal) => animal.dono === dono);

  res.status(200).json({ resultado });
});

app.get("/api/animal/:id", (req, res) => {
  const { id } = req.params;

  const coisas = animais.filter((animal) => animal.id === id);
  res.status(200).json({ coisas });
});

app.patch("/api/animal/:id", (req, res) => {
  const { id } = req.params;
  const { reservas, dono } = req.body;

  animais = animais.map((animal) => {
    if (animal.id === id) {
      return {
        id: animal.id,
        birthDay: animal.birthDay,
        name: animal.name,
        reservas: reservas ? reservas : animal.reservas,
        dono: dono ? dono : animal.dono,
      };
    }
    return animal;
  });
  res.status(200).json({ mensagem: "alterado" });
});

app.listen(PORT, () => {
  console.log("ESTA LIGADO!!!!!");
});
