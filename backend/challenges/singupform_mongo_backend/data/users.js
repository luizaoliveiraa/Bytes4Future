//data - banco de dados
const { ObjectId } = require("mongodb");

const { getMongoCollection } = require("./mongodb");
const DB = "singup_form";
const COLLECTION = "users";

//logica para criar os usuarios (Data) e armazenar no banco de dados
//funcao async pq to em contato com a base de dados - coisas serão assíncronas
async function insertUsers(data) {
  const collection = await getMongoCollection(DB, COLLECTION);
  const result = await collection.insertOne(data);
  return result.insertedId;
}

async function findUserByEmail(email) {
  const collection = await getMongoCollection(DB, COLLECTION); //collection que quero da bd
  const result = await collection.find({ email: email }).toArray(); //metodo para mexer com base de dados e transformar tudo num array de objetos
  return result; //> retorna um array
}

//FUNÇÃO QUE VAI BUSCAR O USER PELO ID
async function findUserById(id) {
  //CONVERTEMOS A STRING ID NUM OBJECTID
  const newId = new ObjectId(id);
  //FAZEMOS A LIGAÇÃO A BD
  const collection = await getCollection(DB, COLLECTION);
  //PROCURAMOS O OBJETO {_ID: ID}
  const result = await collection.findOne({ _id: newId });
  return result;
}

module.exports = { insertUsers, findUserByEmail, findUserById };
