import clientPromise from "./dbconnect";


export async function getMongoCollection(dbName, collectionName) {
  const client = await clientPromise;
  const db = client.db(dbName);
  return db.collection(collectionName);
}