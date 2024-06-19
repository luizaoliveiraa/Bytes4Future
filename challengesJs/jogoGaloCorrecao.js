class JogoDoGalo {
  constructor() {
    (this.tabuleiro = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ]),
      (this.jogadorAtual = "X");
  }

  // Verificamos se a posição escolhida esta disponivel ou não se estiver adicionamos o jogadorAtual de seguida alteramos para o proximo jogador
  adicionarJogada(linha, coluna) {
    if (this.tabuleiro[linha][coluna] === "_") {
      this.tabuleiro[linha][coluna] = this.jogadorAtual;
      this.jogadorAtual === "X"
        ? (this.jogadorAtual = "O")
        : (this.jogadorAtual = "X");
      return this;
    }
    return this;
  }

  // Percorremos o array e vemos em quais posições tem "_" e adicionamos num novo array
  obterJogadasPossiveis() {
    let jogadasPossiveis = [];
    for (let i = 0; i < this.tabuleiro.length; i++) {
      for (let j = 0; j < this.tabuleiro[i].length; j++) {
        if (this.tabuleiro[i][j] === "_") {
          jogadasPossiveis.push({ linha: i, coluna: j });
        }
      }
    }
    return jogadasPossiveis;
  }

  // Verificamos cada final possivel observando se na primeira posição é igual a segunda e a primeira é igual a terceira e se for "_" retornamos o valor que esta na primeira posição
  verificarVencedor() {
    let resultado;
    // Linhas
    if (
      this.tabuleiro[0][0] === this.tabuleiro[0][1] &&
      this.tabuleiro[0][0] === this.tabuleiro[0][2] &&
      this.tabuleiro[0][0] !== "_"
    )
      resultado = this.tabuleiro[0][0];
    if (
      this.tabuleiro[1][0] === this.tabuleiro[1][1] &&
      this.tabuleiro[1][0] === this.tabuleiro[1][2] &&
      this.tabuleiro[1][0] !== "_"
    )
      resultado = this.tabuleiro[1][0];
    if (
      this.tabuleiro[2][0] === this.tabuleiro[2][1] &&
      this.tabuleiro[2][0] === this.tabuleiro[2][2] &&
      this.tabuleiro[2][0] !== "_"
    )
      resultado = this.tabuleiro[2][0];
    // Colunas
    if (
      this.tabuleiro[0][0] === this.tabuleiro[1][0] &&
      this.tabuleiro[0][0] === this.tabuleiro[2][0] &&
      this.tabuleiro[0][0] !== "_"
    )
      resultado = this.tabuleiro[0][0];
    if (
      this.tabuleiro[0][1] === this.tabuleiro[1][1] &&
      this.tabuleiro[0][1] === this.tabuleiro[2][1] &&
      this.tabuleiro[0][1] !== "_"
    )
      resultado = this.tabuleiro[0][1];
    if (
      this.tabuleiro[0][2] === this.tabuleiro[1][2] &&
      this.tabuleiro[0][2] === this.tabuleiro[2][2] &&
      this.tabuleiro[0][2] !== "_"
    )
      resultado = this.tabuleiro[0][2];
    // Diagonais
    if (
      this.tabuleiro[0][0] === this.tabuleiro[1][1] &&
      this.tabuleiro[0][0] === this.tabuleiro[2][2] &&
      this.tabuleiro[0][0] !== "_"
    )
      resultado = this.tabuleiro[0][0];
    if (
      this.tabuleiro[0][2] === this.tabuleiro[1][1] &&
      this.tabuleiro[0][2] === this.tabuleiro[2][0] &&
      this.tabuleiro[0][2] !== "_"
    )
      resultado = this.tabuleiro[0][2];

    return resultado;
  }

  // Verificamos se existem jogadas possiveis ou se existe um vencedor se for verdade returnamos TRUE senão FALSE
  verificarFimDoJogo() {
    return (
      this.obterJogadasPossiveis().length === 0 ||
      this.verificarVencedor() != undefined
    );
  }
}

let jogo = new JogoDoGalo();

console.log(jogo.obterJogadasPossiveis());
console.log(jogo.adicionarJogada(0, 0));
console.log(jogo.adicionarJogada(0, 0));
console.log(jogo.adicionarJogada(1, 1));
console.log(jogo.obterJogadasPossiveis());
console.log(jogo.verificarVencedor());
console.log(jogo.verificarFimDoJogo());
console.log(jogo.adicionarJogada(0, 1));
console.log(jogo.adicionarJogada(2, 2));
console.log(jogo.adicionarJogada(0, 2));
console.log(jogo.verificarVencedor());
console.log(jogo.verificarFimDoJogo());
