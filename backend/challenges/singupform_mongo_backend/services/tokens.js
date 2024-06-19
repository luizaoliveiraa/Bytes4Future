const { insertToken, findToken } = require("../data/tokens");
const { findUserByEmail } = require("../data/users");

// FUNÇÃO QUE VAI CRIAR UM TOKEN
async function createToken(email) {
  //VAMOS BUSCAR O USER - relembra que é um array
  const user = await findUserByEmail(email);
  //VAMOS BUSCAR O _ID
  const id = user[0]._id;
  //ENVIAMOS PARA A DATA
  const token = await insertToken(id);
  return token;
}
// FUNÇÃO QUE VAI BUSCAR O TOKEN USANDO O SEU ID
async function getToken(id) {
  //VAMOS BUSCAR O TOKEN COM O ID
  const res = await findToken(id);
  //SE NÃO EXISTIR RESULTADO RETORNAMOS UNDEFINED
  if (res.length === 0) return undefined;
  return res[0].user;
}

module.exports = { createToken, getToken };
