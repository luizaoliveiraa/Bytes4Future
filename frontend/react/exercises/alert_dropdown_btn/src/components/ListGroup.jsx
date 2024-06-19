export function ListGroup() {
  //   return <h1>List Group</h1>; ou vamos criar uma lista abaixo

  return (
    //posso colocar uma <div> envolvendo tudo ou somente um fragments sendo: <> e fecho </>
    <div>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </div>
  );
}

export function ListGroupJsInfo() {
  //   return <h1>List Group</h1>; ou vamos criar uma lista abaixo
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //usar map para arrays para mapear/converter cada item para um item de diferente tipo
  //usa-se o item - cada item do array utilizado para transformá-lo num item de lista na lista abaixo, usa-se a chaveta para aceder ao javascript acima criado e colocá-lo na estrutura do html

  //posso colocar ifs - mas nesse caso eu teria que repetir mt informação, assim posso fazer dentro do return com ternário como o seguinte exemplo
  // if (items.length === 0)
  //   return (
  //     <>
  //       <p>No item found</p>
  //     </>
  //   );
  items = []; //aqui eu alterei o array para nada - para que, ao chamar o ternário ele mostre a mensagem caso esteja vazio - e é o caso
  // const message = items.length === 0 ? <p>No item found</p> : null; //note que isso eu poderia colocar dentro do return em jsx, mas é preferível que lógica esteja separada. Ou coloco essa variável como um nome de função >
  const message = items.length === 0 && <p>No item found</p>; //o resultado disso será o parágrafo pois true + info > retorna a segunda info caso seja true

  // const getMessage = () => {
  //   return
  //   items.length === 0 ? <p>No item found</p> : null;
  // }
  // aí no return eu chamaria {getMessage()}

  return (
    <>
      <h1>Another List</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

//handling events

export function ListGroup2() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <>
      <h1>List 2</h1>
      {getMessage()}
      <ul>
        {items.map((item, index) => (
          <li
            className="list-group-item active"
            key={item} //cada item da lista deve ter sua key
            onClick={() => console.log(item, index)} //ao ver no console inspecionando a pagina vemos a palavra cliked - caso coloque a palavra ou o item caso coloque ele
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export function ListGroupHandle() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;
  //event handler - seu trabalho é handling o evento, nesse caso o click event
  const handleClick = (event) => console.log(event);

  return (
    <>
      <h1>List 3</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item active"
            }
            key={item} //cada item da lista deve ter sua key
            onClick={handleClick} //ao ver no console inspecionando a pagina vemos a palavra cliked - caso coloque a palavra ou o item caso coloque ele
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
