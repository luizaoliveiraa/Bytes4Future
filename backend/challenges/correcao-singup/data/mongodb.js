const {MongoClient} = require("mongodb")

//Vê o ficheiro "/.env"
const URL = "mongodb://127.0.0.1:27017"

let client
async function connectToMongo() {
  try {
    if (!client) {
      client = await MongoClient.connect(URL)
    }
    return client;
  } catch (err) {
    console.log(err)
  }
}

async function getCollection(dbName, collectionName) {
    const client = await connectToMongo();
    return client.db(dbName).collection(collectionName)
}
module.exports = {getCollection}