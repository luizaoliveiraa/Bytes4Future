
// ## Exercício 1

import { useState } from "react"

// Cria uma página HTML (Utilizando React) com:
// - Um parágrafo com o conteúdo 0
// - Um botão com o conteúdo "Incrementar"

// Faz com que ao clicar no botão, o valor presente no parágrafo seja incrementado em uma unidade.

export const Contador = () => {
    const [valor, setValor] = useState(0)

    // setInterval(() => {
    // setValor(valor + 1)
    // }, 1000);

    const handleIncrement = () => {
        setValor(valor + 1)
    }
    const handleDecrement = () => {
        setValor(valor - 1)
    }

    const handleChange = (diff) => {
        setValor(valor + diff)
    }

    return (
        <div>
            <p>{valor}</p>
            <button onClick={() => handleChange(-1)}>Decrementar</button>
            <button onClick={() => handleChange(1)}>Incrementar</button>
            {/* <button onClick={() => handleIncrement()}>Incrementar</button>
            <button onClick={() => handleDecrement()}>Decrementar</button> */}
        </div>
    )
}