//primeiro passo é criar um express - framework

const express = require("express"); //chama o pacote instalado lá no package json
const app = express(); //express começa sempre sendo uma funcao
//variável PORT não está no ficheiro.
const PORT = 3031;
app.use(express.json()); //middleware que serve para dizer que nossa API pode receber json

//endpoint é todo o app.get inteiro, pode ser outros tb
app.get("/api/users/:user", (req, res) => {
  let user = req.params.user; //parametro, assumir que aquilo ":user" é uma variável, logo o nome da variável deve respeitar oq foi colocado
  res.json({ user });
});
app.get("/api/batatas/", (req, res) => {
  if (req.query.name) {
    const name = req.query.name;
    res.json({ message: `Hello, ${name}` });
  }
  res.json({ message: "Hello" });
});

//post pq é criar/guardar coisas
app.post("/soma", (req, res) => {
  const { a, b } = req.body; //é como se eu fizesse const a = req.body.a e depois const b = req.body.b > cria-se variáveis que estarão no body
  res.status(200).json({ resultado: a + b }); //200 > está tudo OK, retorna o resultado que é a soma
});

//precisamos de um listen que permita chamar a porta - obrigatório existir, colocado ao fim do ficheiro, indica ao express que ficará a escuta na porta específica por pedidos e chamadas.
app.listen(PORT, () => {
  console.log("Estou ligado na porta:3031");
});
