// typescript - especificar oq cada coisa é  > após argumento coloca :number - retorno da função em number

// number | string >>> dzer que aceita numero OU string, só |
function soma(a: number, b: number | string): number | string {
  return a + +b;
}

// console.log(soma(2, "2"));

//fucnao que recebe array e elemento, insere um elemento no array, qlqr que seja o tipo
function insertSmtArray(array: any[], elemento: any) {
  array.push(elemento);
  return array;
}
// console.log(insertSmtArray([1,2,3], "aaa"));

//cria uma classe generica com um array interno que tem um metodo que permite inserir nesse array um elemento, garantindo que todos elementos tem o mesmo tipo  - escolhemos string

class Generica {
  arrayInterno: string[] = [];

  inserirNoArray(elemento: string) {
    this.arrayInterno.push(elemento);
  }
}

const teste = new Generica();

// Inserindo elementos no array
teste.inserirNoArray("elemento");
teste.inserirNoArray("elemento2222");
teste.inserirNoArray("elemento3333");

// Verificando o conteúdo do array interno
console.log(teste.arrayInterno); //
