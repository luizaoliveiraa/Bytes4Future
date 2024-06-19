const {getCollection} = require("./mongodb")
const { ObjectId } = require("mongodb")
const DB = "challenge-form"
const COLLECTION = "users"

async function findUserByEmail(email){
    const collection = await getCollection(DB, COLLECTION)
    const result = await collection.find({email: email}).toArray()
    return result
}

async function insertUser(data){
    const collection = await getCollection(DB, COLLECTION)
    const result = await collection.insertOne(data)
    return result.insertedId
}

//FUNÇÃO QUE VAI BUSCAR O USER PELO ID
async function findUserById(id){
    //CONVERTEMOS A STRING ID NUM OBJECTID
    const newId = new ObjectId(id)
    //FAZEMOS A LIGAÇÃO A BD
    const collection = await getCollection(DB, COLLECTION)
    //PROCURAMOS O OBJETO {_ID: ID}
    const result = await collection.findOne({_id: newId})
    return result
}



module.exports = {findUserByEmail, insertUser,findUserById}