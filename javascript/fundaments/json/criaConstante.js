// Cria uma constante FILME que é um objeto que deve incluir: * Uma propriedade titulo com o valor de "Rei Leão"
// 	1. Uma propriedade dataDeLancamento com o valor de "02/12/1994" * Uma propriedade personagens que é um array com os elementos: "Simba" "Scar" "Mufasa" "Nala" "Timon"

const FILME = {
  titulo: "Rei Leão",
  dataDeLancamento: "02/12/1994",
  personagens: ["Simba", "Scar", "Mufasa", "Nala", "Timon"],
};

// 3. Cria uma constante RESTAURANTE que é um objeto que deve incluir: Uma propriedade nome com o valor de "Rui dos Pregos"
// 	• Uma propriedade clientesDiarios com o valor de 103 * Uma propriedade funcionarios com o valor de

const RESTAURANTE = {
  nome: "Rui dos Pregos",
  clientesDiarios: 103,
  funcionarios: 3,
};

// Cria uma constante OBRA que é um objeto que deve incluir:
// 	1. Uma propriedade anoDePublicacao com o valor de 1572
// 	2. Uma propriedade nome com o valor de "Os Lusíadas"
// 	3. Uma propriedade autor com o valor de "Luís Vaz de Camões"
// 	4. Uma propriedade capitulos com o valor de 10

const OBRA = {
  anoDePublicacao: 1572,
  nome: "Os Lusíadas",
  autor: "Luís Vaz de Camões",
  capitulos: 10,
};

// Cria uma constante ESTANTE que é um objeto que deve incluir:
// 	1. Uma propriedade cor com o valor de "preto"
// 	2. Uma propriedade nrPrateleiras com o valor de 3
// 	3. Uma propriedade prateleiras que é um array de objetos:
// 1:
// 		1. Uma propriedade numero com o valor de 1
// 		2. Uma propriedade conteudo que é um array com os valores:
// 			1. "livro"
// 			2. "microfone"
// 			3. "estojo"
// 2:
// 		3. Uma propriedade numero com o valor de 2
// 		4. Uma propriedade conteudo que é um array com os valores:
// 			1. "garrafa"
// 			2. "tosta"
// 			3. "garfo"
// 3:
// 		5. Uma propriedade numero com o valor de 3
// 		6. Uma propriedade conteudo que é um array vazio:

const ESTANTE = {
  cor: "preto",
  nrPrateleiras: 3,
  prateleiras: [
    {
      numero: 1,
      conteudo: ["livro", "microfone", "estojo"],
    },
    {
      numero: 2,
      conteudo: ["garrafa", "tosta", "garfo"],
    },
    { numero: 3, conteudo: [] },
  ],
};
