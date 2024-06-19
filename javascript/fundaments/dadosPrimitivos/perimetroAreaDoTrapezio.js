// Em um trapézio isósceles, dois de seus lados têm o mesmo comprimento, então podemos calcular seu perímetro com a seguinte fórmula: p=a+b+2c
// PRIMEIRO TEMOS QUE DESCOBRIR QUANTO VALE CADA LADO DO TRIANGULO ISÓSCELES, CONSEGUIMOS FAZENDO O TEOREMA DE PITÁGORAS, HIPOTENUSA² = CATETO²+CATETO², NESSE CASO A HIPOTENUSA SERIA O LADO E OS CATETOS SERIAM OS COMPRIMENTOS DAS BASES.

function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
  let lado = Math.sqrt(
    altura ** 2 + ((comprimentoMaior - comprimentoMenor) / 2) ** 2
  );
  return comprimentoMaior + comprimentoMenor + 2 * lado;
}

// OUU

function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
  let lado = Math.sqrt(
    ((comprimentoMaior - comprimentoMenor) / 2) ** 2 + altura ** 2
  );
  return comprimentoMaior + comprimentoMenor + lado * 2;
}

// A área do trapézio é calculada somando-se as bases menor e maior, multiplicando o resultado dessa soma pela altura, e dividindo por 2.  > A=(a+b)h/2

function areaDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
  return ((comprimentoMaior + comprimentoMenor) * altura) / 2;
}
