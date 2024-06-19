const express = require("express");
const app = express();
const PORT = 3033;
app.use(express.static("public")); //usa-se em situacoes mais especificas qdo queremos mexer em ficheiros, para ir buscar ficheiros que estejam estáticos / ver a imagem na pasta public colocando o nome do localhost/nomeimage.ext > definir a pasta

app.listen(PORT, () => {
  console.log("http://localhost:3033");
});
