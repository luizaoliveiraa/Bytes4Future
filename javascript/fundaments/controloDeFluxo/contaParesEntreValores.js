// Cria uma função que recebe como argumentos dois valores e conta o número de pares que existem entre esses dois valores, incluindo os próprios se forem pares.
// Caso sejam introduzidos dois valores iguais deve retornar a mensagem de erro: "Por favor introduza dois valores diferentes."

function contaParesEntreDoisValores(valor1, valor2) {
  if (valor1 === valor2) {
    return "Por favor introduza dois valores diferentes.";
  }
  if (valor1 > valor2) {
    let temp = valor1; // para eu guardar o valor de 1 e não mudar
    valor1 = valor2; // aqui eu atribuo o valor de 2 ao valor1
    valor2 = temp; //aqui eu atribuo o primeiro valor de 1 ao 2 e assim invertemos eles, ficando o valor em segundo lugar
  }
  let somaPares = 0;
  for (let i = valor1; i <= valor2; i++) {
    if (i % 2 === 0) {
      somaPares++;
    }
  }
  return somaPares;
}

// OUUU

function contaParesEntreDoisValores(valor1, valor2) {
  if (valor1 === valor2) {
    return "Por favor introduza dois valores diferentes.";
  }
  if (valor1 > valor2) {
    [valor1, valor2] = [valor2, valor1];
  }
  let contaPares = 0;
  for (let i = valor1; i <= valor2; i++) {
    if (i % 2 === 0) {
      contaPares++;
    }
  }
  return contaPares;
}

//ou

function contaParesEntreDoisValores(valor1, valor2) {
  // escreve aqui a função
  if (valor1 === valor2) {
    return "Por favor introduza dois valores diferentes.";
  }

  const menor = Math.min(valor1, valor2);
  const maior = Math.max(valor1, valor2);
  let contador = 0;
  for (let i = menor; i <= maior; i++) {
    if (i % 2 === 0) {
      contador++;
    }
  }
  return contador;
}
