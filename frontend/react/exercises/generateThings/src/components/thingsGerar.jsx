import React, { useState } from "react";
import styles from "../stylecss.css/thingsGenerate.module.css";
import firstName from "../json/firstName.json";

export function NameGenerator() {
  //precisamos criar um state que começa com "clique em gerar"
  const [nome, setNome] = useState("Clique em Gerar");
  const [sobrenome, setSobrenome] = useState("");

  let lastName = [
    "Oliveira",
    "Santos",
    "Fidelis",
    "Riffert",
    "Kempner",
    "Saito",
    "Souza",
    "Pereira",
    "Ferreira",
    "Costa",
    "Rodrigues",
    "Almeida",
    "Nunes",
  ];

  //percorrer os ficheiros json (são arrays) e escolher um valor aleatoriamente Math.floor
  //add a fase final no state
  const handleClick = () => {
    const nomeAleat = firstName[Math.floor(Math.random() * firstName.length)]; // exemplo usando json em doc externo
    const sobrenAleat = lastName[Math.floor(Math.random() * lastName.length)]; //exemplo usando array interno em outro doc json
    setNome(`${nomeAleat}`);
    setSobrenome(`${sobrenAleat}`);
  };

  //ter um titulo principal = "Gerador de nomes"
  return (
    <div className={styles["gerar-nome"]}>
      <h2>Gerador de Nomes</h2>
      <p>
        {nome} {sobrenome}
      </p>{" "}
      <button className={styles["btn-nome"]} onClick={() => handleClick()}>
        gerar
      </button>
    </div>
  );
}

// Um parágrafo com o conteúdo 0 // Um botão com o conteúdo "Incrementar" // Faz com que ao clicar no botão, o valor presente no parágrafo seja incrementado em uma unidade.

export function ButtonNumber() {
  const [valor, setValor] = useState(0);
  const handleIncrement = () => {
    setValor(valor + 1);
  };
  const handleDecrement = () => {
    setValor(valor - 1);
  };

  return (
    <div className={styles["incdec"]}>
      <h2>Incrementa e Decrementa</h2>
      <p>{valor}</p>
      <button onClick={() => handleDecrement()} className={styles["decrease"]}>
        Decrementar
      </button>
      <button onClick={() => handleIncrement()} className={styles["increase"]}>
        Incrementar
      </button>
    </div>
  );
}

//um título: "Gerador de Números" // Um botão com o conteúdo "Gerar" // Um parágrafo com o valor gerado. No início deve dizer "Clique em Gerar"  // Faz com que ao clicar no botão, o valor presente no parágrafo seja alterado para um novo valor aleatório.

export function NumAleatorio () {
  const [number, setNumber] = useState("Clique em Gerar");

  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 1000))
  }
  return (
    <div className={styles["num-aleatorio"]}>
      <h2>Gerador de Número Aleatório</h2>
      <p>{number}</p>
      <button onClick={()=>randomNumber()} className={styles["btn-num-aleatorio"]}>Gerar</button>
    </div>
  );
}
