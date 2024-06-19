//MINHA VERSÃO

class JogoDoGalo {
  constructor() {
    this.tabuleiro = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ];
    this.jogadorAtual = "X";
  }

  adicionarJogada(linha, coluna) {
    if (this.tabuleiro[linha][coluna] === "_") {
      this.tabuleiro[linha][coluna] = this.jogadorAtual;
      this.jogadorAtual = this.jogadorAtual === "X" ? "O" : "X";
    }
    return this;
  }

  obterJogadasPossiveis() {
    let arr = [];
    for (let i = 0; i < this.tabuleiro.length; i++) {
      for (let j = 0; j < this.tabuleiro[i].length; j++) {
        if (this.tabuleiro[i][j] === "_") {
          arr.push({ linha: i, coluna: j });
        }
      }
    }
    return arr;
  }

  verificarVencedor() {
    const tabuleiro = this.tabuleiro;
    const linhas = tabuleiro.map((linhas) => linhas.join(""));
    const colunas = [];
    const diagonais = ["", ""];
    for (let i = 0; i < tabuleiro.length; i++) {
      diagonais[0] += tabuleiro[i][i];
      diagonais[1] += tabuleiro[i][tabuleiro.length - 1 - i];
      colunas.push(tabuleiro.map((coluna) => coluna[i]).join(""));
    }
    const todasLinhas = linhas.concat(colunas).concat(diagonais);
    return todasLinhas.includes("XXX")
      ? "X"
      : todasLinhas.includes("OOO")
      ? "O"
      : undefined;
  }

  verificarFimDoJogo() {
    return this.tabuleiro
      .flat()
      .every((e) => e !== "_" || this.verificarVencedor(e) !== undefined);
  }
}

// 	1. class JogoDoGalo { ... }: Declaração da classe JogoDoGalo.
// 	2. constructor() { ... }: Método construtor da classe, que é executado quando uma nova instância da classe é criada.
// 	3. this.tabuleiro = [...]: Inicializa a propriedade tabuleiro como uma matriz 3x3 representando o tabuleiro do jogo. Cada célula é inicializada com "_", indicando que está vazia.
// 	4. this.jogadorAtual = "X";: Inicializa a propriedade jogadorAtual como "X", indicando que o jogador atual é o jogador X.

// 	1. adicionarJogada(linha, coluna) { ... }: Método para adicionar uma jogada ao tabuleiro.
// 	2. if (this.tabuleiro[linha][coluna] === "_") { ... }: Verifica se a célula especificada está vazia.
// 	3. this.tabuleiro[linha][coluna] = this.jogadorAtual;: Atualiza a célula com o símbolo do jogador atual.
// 	4. this.jogadorAtual = this.jogadorAtual === "X" ? "O" : "X";: Alterna o jogador atual entre "X" e "O" após cada jogada.
// 	5. return this;: Retorna a instância atual da classe para permitir chamadas encadeadas.

// 	1. obterJogadasPossiveis() { ... }: Método para obter todas as jogadas possíveis no tabuleiro.
// 	2. O método itera sobre cada célula do tabuleiro e adiciona as coordenadas das células vazias ao array arr.
// 	3. Retorna o array arr contendo as coordenadas das células vazias.

// 	1. verificarVencedor() { ... }: Método para verificar se há um vencedor no jogo.
// 	2. O método cria uma matriz linhas que contém todas as linhas do tabuleiro como strings.
// 	3. Cria um array colunas que contém todas as colunas do tabuleiro como strings.
// 	4. Cria um array diagonais que contém as duas diagonais do tabuleiro como strings.
// 	5. Concatena todas as linhas, colunas e diagonais em um único array todasLinhas.
// 	6. Verifica se alguma das strings no array todasLinhas contém "XXX" ou "OOO", indicando que há um vencedor.
// 	7. Retorna "X" se o jogador X vencer, "O" se o jogador O vencer ou undefined se não houver vencedor.

// 	1. verificarFimDoJogo() { ... }: Método para verificar se o jogo acabou.
// 	2. Utiliza o método flat() para transformar a matriz tabuleiro em uma única array.
// 	3. Utiliza o método every() para verificar se todas as células estão preenchidas ou se há um vencedor.
// Retorna true se o jogo acabou ou false se não acabou.
