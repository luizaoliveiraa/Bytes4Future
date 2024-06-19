const {findUserByEmail, insertUser, findUserById} = require("../data/users")

async function getUserByEmail(email){
    const res = await findUserByEmail(email)
    if(res.length === 0) return false
    return true
}

async function createUser(data){
    const id = await insertUser(data)
    return id
}

async function checkPassword(email, password){
    const user = await findUserByEmail(email)

    if(user[0].password === password) return true
    return false
}

//FUNÇÃO QUE VAI BUSCAR O USER PELO SEU ID
async function getUserById(id){
    //VAMOS BUSCAR O USER PELO ID
    const user = await findUserById(id)
    return user
}

module.exports = {getUserByEmail, createUser, checkPassword, getUserById}