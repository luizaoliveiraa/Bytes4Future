class Pessoa {
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }

  getNome() {
    return this.nome;
  }

  getIdade() {
    return this.idade;
  }

  getSexo() {
    return this.sexo;
  }

  comparaIdade(pessoa1) {
    if (this.idade > pessoa1.getIdade()) {
      if (pessoa1.getSexo() === "m")
        return "O " + pessoa1.getNome() + " é mais novo do que eu.";
      if (pessoa1.getSexo() === "f")
        return "A " + pessoa1.getNome() + " é mais nova do que eu.";
    } else if (this.idade < pessoa1.getIdade()) {
      if (pessoa1.getSexo() === "m")
        return "O " + pessoa1.getNome() + " é mais velho do que eu.";
      if (pessoa1.getSexo() === "f")
        return "A " + pessoa1.getNome() + " é mais velha do que eu.";
    } else {
      if (pessoa1.getSexo() === "m")
        return "O " + pessoa1.getNome() + " é da mesma idade que eu.";
      if (pessoa1.getSexo() === "f")
        return "A " + pessoa1.getNome() + " é da mesma idade que eu.";
    }
  }
}

// Exemplo de uso
const pessoa2 = new Pessoa("Janz", 15, "f");
const pessoa3 = new Pessoa("carlos", 15, "f");

console.log(pessoa2.comparaIdade(pessoa3));

//OUUU
class Pessoa {
  constructor(nome, idade, sexo) {
    (this.nome = nome), (this.idade = idade), (this.sexo = sexo);
  }

  comparaIdade(pessoa) {
    const frase = this.obtemFrase(pessoa.idade, pessoa.sexo);
    return `${pessoa.sexo === "m" ? "O" : "A"} ${pessoa.nome} ${frase} que eu.`;
  }

  obtemFrase(idade, sexo) {
    return this.idade === idade
      ? "é da mesma idade"
      : this.idade > idade
      ? `é mais nov${sexo === "m" ? "o" : "a"} do`
      : `é mais velh${sexo === "m" ? "o" : "a"} do`;
  }
}

//OUUU

class Pessoa {
  // Escreve aqui o teu código
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }

  comparaIdade(pessoa1) {
    const pronome = pessoa1.sexo === "m" ? "O" : "A";
    const adjetivoNovo = pessoa1.sexo === "m" ? "novo" : "nova";
    const adjetivoVelho = pessoa1.sexo === "m" ? "velho" : "velha";

    if (this.idade > pessoa1.idade) {
      return `${pronome} ${pessoa1.nome} é mais ${adjetivoNovo} do que eu.`;
    } else if (this.idade < pessoa1.idade) {
      return `${pronome} ${pessoa1.nome} é mais ${adjetivoVelho} do que eu.`;
    } else {
      return `${pronome} ${pessoa1.nome} é da mesma idade que eu.`;
    }
  }
}
