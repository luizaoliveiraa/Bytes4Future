const express = require("express");
const app = express();
const port = 3040;

const dados = [];

// Vamos juntar tudo o que aprendemos até aqui para criar uma API que nos permite recolher respostas de um formulário.

// As respostas deverão ser enviadas para um servidor (local) e guardadas num array para que seja possível voltar a lê-las mais tarde.

// Vamos recolher o nome (params), um contacto
// e a mensagem. (query)

// POST /api/forum
app.post("/api/forum/:name/:contact", (req, res) => {
  //API
  // BUSCAR A INFORMAÇÃO NO PEDIDO
  const { message } = req.query;
  const { name, contact } = req.params;

  //GUARDAR A INFORMAÇÃO NUM ARRAY
  dados.push({
    message: message,
    name: name,
    contact: contact,
  });

  //ENVIAR UMA RESPOSTA
  res.json({
    novoComprimento: dados.length,
  });
});

//GET /api/forum
//Este endpoint deve responder com todas as publicacoes
app.get("/api/forum", (req, res) => {
  //ENVIAR UMA RESPOSTA
  res.json({ mensagens: dados });
});

//Versao comprida
// app.post("/api/forum/:name/:contact", (req, res) => {
//     // const name = req.params.name
//     // const contact = req.params.contact

//     //API
//     const {message} = req.query
//     const {name, contact} = req.params
//     const objectoAAdicionar = {
//         message: message,
//         name: name,
//         contact: contact,
//     }

//     // const mesmoObjetoComHora = adicionaHora(objectoAAdicionar)

//     //DADOS
//     dados.push(objectoAAdicionar)
//     // dados.push({
//     //     message,
//     //     name,
//     //     contact,
//     //     date: new Date()
//     // })

//     console.log(message, name, contact)
//     // res.json({
//     //     resposta: "NICE"
//     // })

//     //API
//     res.json({
//         novoComprimento: dados.length
//     })
// })
app.listen(port, () => {
  console.log(`À escuta em http://localhost:${port}`);
});
