import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:3000';
const dbName = 'general_tasks';

let client;
let db;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db(dbName);
  }
  return db;
}

export { connectToDatabase };