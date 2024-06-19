//funcao com nome get - sabe que estou em services

const { findAllCollections } = require("../data/firstcollecion");

async function getAllCollections() {
  const collection = await findAllCollections(); //essa collection é um array de objetos lá de data - nome da coleção é oq ela tem guardado
  const newArr = collection.map((e) => {
    return {
      nome: e.nome,
      age: e.estado,
    };
  });
  //map faz um novo array - quero um obj igual mas só com os campos que pedi
  return newArr;
  //aqui dentro poderíamos: TIRAR CAMPOS NÃO NECESSÁRIOS DOS OBJETOS DA BD e outras coisas de lógica > filtrar obj...
}

module.exports = { getAllCollections };
