// Cria a função verificaIdade que recebe um argumento pessoa que é do tipo objeto e retorna o mesmo objeto com uma propriedade maiorDeIdade que é um booleano, dependente da

function verificaIdade(pessoa) {
  if (pessoa.idade >= 18) {
    pessoa.maiorDeIdade = true;
  } else {
    pessoa.maiorDeIdade = false;
  }
  return pessoa;
}

const pessoa = { nome: "Daniel", idade: 19 };
//console.log(verificaIdade(pessoa));
