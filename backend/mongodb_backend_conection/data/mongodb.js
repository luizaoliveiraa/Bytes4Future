const { MongoClient } = require("mongodb");
const URL = "mongodb://localhost:27017";

let client; //cliente é uma conexão
async function connectToMongo() {
  //funcao liga o vs code à aplicacao do mongodb
  try {
    if (!client) {
      client = await MongoClient.connect(URL);
    }
    return client;
  } catch (err) {
    console.log(err);
  }
}

async function getMongoCollection(dbName, collectionName) {
  //funcao liga o vs code à uma base de dados e colecao especifica do mongodb

  const client = await connectToMongo(); //cria a ligacao ao mongo - mas não à uma base de dados ou coleção
  return client.db(dbName).collection(collectionName); //define que esse cliente se dirige a uma base de dados e colegação esecífica
}

module.exports = { getMongoCollection };
