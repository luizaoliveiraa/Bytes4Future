//modulos > backend > criar uma api

const express = require("express"); //indo buscar o express que acabamos de instalar
const app = express(); //criar variável para poder utilizá-la
const port = 3000;

app.get("/", (req, res) => {
  // é um endpoint > raiz "/" está no mesmo ficheiro >
  res.send("<h1>hello</h1><h2>hello again</h2>");
});
app.get("/api/:nome", (req, res) => {
  const name = req.params.nome;
  // params: estou a dizer que quero o parâmetro que for colocado depois de : e depois no send é enviado, faço /nome e mais coisas
  res.send(
    `<div style = "color:purple"> <h1>Hello,</h1> <h2>${name}</h2> </div>`
  );
});
//para escrevermos http://localhost:3000/?name= sahushusu e aparecer hello sahushusu
app.get("/algo", (req, res) => {
  if (req.query.name) {
    //query serve para mesma coisa que params mas é com ?
    res.send(`Hello, ${req.query.name}`);
  } else {
    res.send(`Hello, World!`);
  }
});
//dois parametros com query: http://localhost:3000/abc?name=luiza&age=18
app.get("/abc", (req, res) => {
  if (req.query.name || req.query.age) {
    const { name, age } = req.query;
    res.send(`Hello, ${name}(${age})`);
  } else if (req.query.name) {
    res.send(`Hello, ${req.query.name}`);
  } else {
    res.send(`Hello, World`);
  }
});

//cria o método que quer - get ou post, por ex
const dados = []; //cria um array vazio fora do metodo
app.get("/api/forum/:nome/:contato", (req, res) => {
  const { name, contato } = req.params;
  const { message } = req.query.message;
  dados.push({
    //add coisa nesse array
    message: message,
    name: name,
    contato: contato,
  });
  //   console.log(message,name,contato)
  res.json({ mensagens: "ola" });
});

app.listen(port, () => {
  console.log(`À escuta em http://localhost:${port}`);
});
