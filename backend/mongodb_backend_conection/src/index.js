//aqui faz as APIs

const express = require("express");
const { getAllCollections } = require("../services/firstcollection");
const app = express();
const PORT = 3030;
app.use(express.json());

app.get("/api/firstcollection", async (req, res) => {
  const collection = await getAllCollections();
  if (collection.length === 0) {
    res.status(400);
  }
  res.status(200).json({ collection: collection });
});

app.listen(PORT, () => {
  console.log("LIGADAO");
});


//COMO LER DOCUMENTOS? FIND, DELETE...
