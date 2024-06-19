const { ObjectId } = require("mongodb");
const { getCollection } = require("./mongodb");
const DB = "singup_form";
const COLLECTION = "tokens";

//FUNÇÃO PARA ADICIONAR O TOKEN NA BD
async function insertToken(id) {
  //CRIAMOS UMA LIGAÇÃO A BASE DE DADOS
  const collection = await getCollection(DB, COLLECTION);
  //INSERIMOS O OBJETO {user: ID}
  const result = await collection.insertOne({ user: id });
  //RETURNAMOS O ID CRIADO
  return result.insertedId;
}

//FUNÇÃO PARA BUSCAR O TOKEN USANDO O ID NA BD
async function findToken(id) {
  //CONVERTEMOS A STRING PARA OBJECTID
  const newId = new ObjectId(id);
  //CRIAMOS UMA LIGAÇÃO A BASE DE DADOS
  const collection = await getCollection(DB, COLLECTION);
  //PROCURAMOS O OBJETO {_ID: ID}
  const result = await collection.find({ _id: newId }).toArray();
  //RETORNAMOS TUDO NUM ARRAY
  return result;
}

module.exports = { insertToken, findToken };
