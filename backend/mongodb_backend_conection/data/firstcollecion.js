//aqui estamos a interagir com a base de dados

const { getMongoCollection } = require("./mongodb");
const DB = "dbexample";
const COLLECTION = "firstcollection";

//funcao com nome find - sabe que estou em data
async function findAllCollections() {
  const collection = await getMongoCollection(DB, COLLECTION);
  const result = await collection.find().toArray(); //find() irá buscar todos os documentos que estão na base de dados - pego os objetos e guardo tudo no array - 1 só array de objetos
  return result;
}

module.exports = { findAllCollections };
