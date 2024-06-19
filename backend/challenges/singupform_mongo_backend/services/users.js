//servico - lógica por trás

const { insertUsers, findUserByEmail, findUserById } = require("../data/users");

//criar todos os usuários
async function createUsers(data) {
  //data é o email e a senha
  const userId = await insertUsers(data);
  return userId;
}

async function getUserByEmail(email) {
  const res = await findUserByEmail(email);
  if (res.length === 0) return false; //quer dizer que não há email
  return true; //que dizer que há email
}

async function verifyPass(email, password) {
  const user = await findUserByEmail(email); //esse user é um array, logo deve ser feito da forma passada
  if (user[0].password === password) return true;
  return false;
}

//FUNÇÃO QUE VAI BUSCAR O USER PELO SEU ID
async function getUserById(id){
    //VAMOS BUSCAR O USER PELO ID
    const user = await findUserById(id)
    return user
}

module.exports = { createUsers, getUserByEmail, verifyPass, getUserById };
