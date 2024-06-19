const {contaVotos, numero} = require("./contaVotos");
//exemplo de teste unitário - utilizando a biblioteca jest
test("funcao contaVotos", () => {
  const input = [
    //input - oq vou usar para fazer o teste
    {
      name: "Jorge",
      age: 84,
      votou: true,
    },
    {
      name: "Jorge",
      age: 84,
      votou: true,
    },
    {
      name: "Jorge",
      age: 84,
      votou: true,
    },
    {
      name: "Jorge",
      age: 84,
      votou: false,
    },
    {
      name: "Jorge",
      age: 84,
      votou: false,
    },
  ];
  //, espera-se que a função retorne um objeto com as chaves votos e potencial, representando o número de votos contados e o potencial total de votos, respectivamente.
  //O método toEqual compara o resultado retornado pela função contaVotos com o objeto esperado. Se forem iguais, o teste passa; caso contrário, falha.
  expect(contaVotos(input)).toEqual({ votos: 3, potencial: 5 });
});
