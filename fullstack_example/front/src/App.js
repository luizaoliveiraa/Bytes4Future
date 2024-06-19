import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState();

  const increment = async () => {
    const res = await fetch("/api/counter/increment", { method: "POST" });
    if (res.status === 201) {
      const body = await res.json();
      setCounter(body.number);
    }
  };
  const decrement = async () => {
    const res = await fetch("/api/counter/decrement", { method: "POST" });
    if (res.status === 201) {
      const body = await res.json();
      setCounter(body.number);
    }
  };
  const reset = async () => {
    const res = await fetch("/api/counter/reset", { method: "POST" });
    if (res.status === 201) {
      const body = await res.json();
      setCounter(body.number);
    }
  };

  async function fetchData() {
    //PEDIDO - para quando a página carregar - essa função dá fetch
    const res = await fetch("/api/counter", { method: "GET" });
    console.log(res.status);
    const body = await res.json();
    console.log(body);
    setCounter(body.number);
  }

  //qdo o componente é montado
  useEffect(() => {
    //carregar valores
    fetchData();
    reset();

    //guardar em state
  }, []); // se for o array vazio significa que só roda aquele código qdo a página carrega
  return (
    <div className="App">
      {counter === undefined ? (
        <p>Loading screen...</p>
      ) : (
        <div className="container">
          <h1>Counter</h1>
          <p className="counter">{counter}</p>
          <button className="inc-dec" onClick={increment}>
            +
          </button>
          <button className="inc-dec" onClick={decrement}>
            -
          </button>
          <br />
          <button className="reset" onClick={reset}>
            RESET
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
